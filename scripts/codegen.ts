import {promises as fsp} from "fs";
import {compile} from 'json-schema-to-typescript'
function deepRefDefsCorrection(obj: any) {
	for (const k in obj) {
		const val = obj[k];
		// works for arrays too
		if (typeof val == "object" && val != null) {
			deepRefDefsCorrection(val);
		}else if (k == "$ref" && typeof val == "string" && val.startsWith("#/components/")) {
			obj[k] = "#/$defs/" + val.substring("#/components/".length);
		}
	}
}
console.log("Download from https://metamask.github.io/api-specs/latest/openrpc.json ...");
const rpcSpec = await (await fetch("https://metamask.github.io/api-specs/latest/openrpc.json")).json();
console.log("Coerce openrpc json into a JSONSchema...");
if (!Array.isArray(rpcSpec.methods)) {
	throw new Error("no methods!")
}
deepRefDefsCorrection(rpcSpec.methods);
deepRefDefsCorrection(rpcSpec.components);
const output: any = {
	title: "EthereumRpcMethodMap",
	//"$id": "http://api.example.com/profile.json",
	type: "object",
	required: [],
	properties: {},
	additionalProperties: false,
	"$defs": rpcSpec.components
}

for (const method of rpcSpec.methods) {
	if (!Array.isArray(method.params)) {
		console.warn("Method ", method, "has a \"params\" which is not an array, ignoring method!")
		continue;
	}
	const errors = (Array.isArray(method.errors) && method.errors.length) ? {
		oneOf: method.errors.map((v: any) => {
			if (v["$ref"]) {
				return v;
			}
			return {
				type: "object",
				properties: {
					code: {
						const: v.code
					},
					message: {
						const: v.message
					}
				},
				required: ["code", "message"]
			};
		})
	}: {
		type: "object",
		properties: {
			code: {
				type: "number"
			},
			message: {
				type: "string"
			}
		},
		required: ["code", "message"]
	};
	//console.log({errors});
	const methodObject = {
		type: "object",
		properties: {
			params: {
				"type": "array",
				"items": method.params.map((v: any) => v.schema),
				"minItems": method.params.length,
				"maxItems": method.params.length,
				"unevaluatedItems": false,
				"additionalItems": false
			},
			result: method.result.schema,
			errors
		},
		required: ["params", "result", "errors"]
	};
	output.required.push(method.name);
	output.properties[method.name] = methodObject;
}
console.log("Generate typescript...");

const AUTOGEN_DISCLAIMER = `/* eslint-disable */
/**
 * DO NOT EDIT BY HAND!
 * 
 * This file was automatically generated from this: https://metamask.github.io/api-specs/latest/openrpc.json
 * Retrieved on ${(new Date()).toDateString()}
 * 
 * Re-run or change the codegen.ts script instead of editing this file.
 */
`;

let outString = await compile(
	output,
	"EthereumRpcMethodMap",
	{additionalProperties: false, unknownAny: false, bannerComment: AUTOGEN_DISCLAIMER, style: {useTabs: true}}
);
outString += `
interface EthereumProviderRpcError extends Error {
  message: string;
  code: number;
  data?: any;
}
export interface EthereumProviderEventMap {
	accountsChanged: string[],
	chainChanged: string,
	connect: { chainId: string; },
	disconnect: EthereumProviderRpcError,
	message: { type: string, data: any }
}

interface EthereumProvider {
	request<M extends keyof EthereumRpcMethodMap>(request: {
		method: M,
		params: EthereumRpcMethodMap[M]["params"]
	}): Promise<EthereumRpcMethodMap[M]["result"]>

	on<T extends keyof EthereumProviderEventMap>(eventName: T, listener: (eventData: EthereumProviderEventMap[T]) => void): EthereumProvider;
	off<T extends keyof EthereumProviderEventMap>(eventName: T, listener: (eventData: EthereumProviderEventMap[T]) => void): EthereumProvider;
	addListener<T extends keyof EthereumProviderEventMap>(eventName: T, listener: (eventData: EthereumProviderEventMap[T]) => void): EthereumProvider;
	removeListener<T extends keyof EthereumProviderEventMap>(eventName: T, listener: (eventData: EthereumProviderEventMap[T]) => void): EthereumProvider;
}
export type EthereumRpcErrorsOf<M extends keyof EthereumRpcMethodMap> = EthereumRpcMethodMap[M]["errors"]

declare global {
	interface Window {
		ethereum?: EthereumProvider
	}
}
`;
console.log("Save to src/index.ts");
await fsp.writeFile("src/index.ts", outString);
console.log("Enjoy!! There's still some duplicate type defenitions you'll have to remove")
