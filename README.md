# ethereum-rpc-types

No idea why this doesn't seem to be a thing, so I made it a thing. Like I had to make every other thing have good dx. I'm so tired.

## What thing do??

It's basically an auto-generated .d.ts file for the ethereum provider requests.

Imagine actually wanting your IDE to auto-complete things when you type `window.ethereum`.

## How to get thing?

`npm install @crownfi/ethereum-rpc-types`

```ts
import "@crownfi/ethereum-rpc-types";

window.ethereum; // Wow, there's something actually here now with useful autocomplete!
// You can also check EthereumRpcErrorsOf<"eth_method_here">
```

## HOw do make thing??

you `npm install && npm run codegen`, and do stuff that makes `tsc` stop throwing a tantrum like removing duplicate types, it takes less effort to do that than to make the script completely flawless. This grabs the latest methods from metamask opengrpscspsdmkejhkgjhklsdbfgjhklsdfg
