/* eslint-disable */
/**
 * DO NOT EDIT BY HAND!
 *
 * This file was automatically generated from this: https://metamask.github.io/api-specs/latest/openrpc.json
 * Retrieved on Fri Jun 07 2024
 *
 * Re-run or change the codegen.ts script instead of editing this file.
 */

/**
 * Type of caveat.
 */
export type Type = string;
/**
 * Name of the caveat.
 */
export type Name = string;
/**
 * A capability document modifies the caveat property to specify usage restrictions. Capabilities inherit restrictions from the caveat properties of their parent documents and can add new caveats in addition to those inherited from their parents.
 */
export type Caveats = Caveat[];
export type PermissionsList = Permission[];
export type HexEncodedAddress = string;
export type HexEncodedBytes = string;
export type Regex = any[];
export type ScanQRCodeResult = string;
export type HexEncodedAddress1 = string;
export type HexEncodedAddress2 = string;
export type GasLimit = string;
export type Value = string;
export type HexEncodedBytes1 = string;
/**
 * The gas price the sender is willing to pay to miners in wei. Used in pre-1559 transactions.
 */
export type GasPrice = string;
/**
 * Maximum fee per gas the sender is willing to pay to miners in wei. Used in 1559 transactions.
 */
export type MaxPriorityFeePerGas = string;
/**
 * The maximum total fee per gas the sender is willing to pay (includes the network / base fee and miner / priority fee) in wei. Used in 1559 transactions.
 */
export type MaxFeePerGas = string;
export type CurrentClientVersion = string;
/**
 * The type of subscription to create. Must be one of the following:
 * 1. `newHeads` - New block headers.
 * 2. `logs` - Logs matching a filter object.
 * 3. `newPendingTransactions` - New pending transactions.
 * 4. `syncing` - Changes in syncing status.
 */
export type SubscriptionType = "newHeads" | "logs" | "newPendingTransactions" | "syncing";
export type BlobGasBaseFee = string;
export type HexEncodedUnsignedInteger = string;
export type Type1 = string;
export type HexEncodedUnsignedInteger1 = string;
export type ToAddress = ContractCreationNull | HexEncodedAddress3;
export type ContractCreationNull = null;
export type HexEncodedAddress3 = string;
export type HexEncodedAddress4 = string;
export type HexEncodedUnsignedInteger2 = string;
export type HexEncodedUnsignedInteger3 = string;
export type HexEncodedBytes2 = string;
/**
 * The gas price willing to be paid by the sender in wei
 */
export type HexEncodedUnsignedInteger4 = string;
/**
 * Maximum fee per gas the sender is willing to pay to miners in wei
 */
export type HexEncodedUnsignedInteger5 = string;
/**
 * The maximum total fee per gas the sender is willing to pay (includes the network / base fee and miner / priority fee) in wei
 */
export type HexEncodedUnsignedInteger6 = string;
/**
 * The maximum total fee per gas the sender is willing to pay for blob gas in wei
 */
export type HexEncodedUnsignedInteger7 = string;
export type ByteHexValue = string;
/**
 * EIP-2930 access list
 */
export type AccessList = AccessListEntry[];
/**
 * List of versioned blob hashes associated with the transaction's EIP-4844 data blobs.
 */
export type BlobVersionedHashes = ByteHexValue[];
/**
 * Raw blob data.
 */
export type Blobs = HexEncodedBytes[];
/**
 * Chain ID that this transaction is valid on.
 */
export type HexEncodedUnsignedInteger8 = string;
export type BlockNumberTagOrBlockHash = HexEncodedUnsignedInteger9 | BlockTag | ByteHexValue1;
export type HexEncodedUnsignedInteger9 = string;
/**
 * `earliest`: The lowest numbered block the client has available; `finalized`: The most recent crypto-economically secure block, cannot be re-orged outside of manual intervention driven by community coordination; `safe`: The most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions; `latest`: The most recent block in the canonical chain observed by the client, this block may be re-orged out of the canonical chain even under healthy/normal conditions; `pending`: A sample next block built by the client on top of `latest` and containing the set of transactions usually taken from local mempool. Before the merge transition is finalized, any call querying for `finalized` or `safe` block MUST be responded to with `-39001: Unknown block` error
 */
export type BlockTag = "earliest" | "finalized" | "safe" | "latest" | "pending";
export type ByteHexValue1 = string;
export type BlockNumberOrTag = HexEncodedUnsignedInteger10 | BlockTag1;
export type HexEncodedUnsignedInteger10 = string;
/**
 * `earliest`: The lowest numbered block the client has available; `finalized`: The most recent crypto-economically secure block, cannot be re-orged outside of manual intervention driven by community coordination; `safe`: The most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions; `latest`: The most recent block in the canonical chain observed by the client, this block may be re-orged out of the canonical chain even under healthy/normal conditions; `pending`: A sample next block built by the client on top of `latest` and containing the set of transactions usually taken from local mempool. Before the merge transition is finalized, any call querying for `finalized` or `safe` block MUST be responded to with `-39001: Unknown block` error
 */
export type BlockTag1 = "earliest" | "finalized" | "safe" | "latest" | "pending";
/**
 * Floating point value between 0 and 100.
 */
export type RewardPercentile = number;
export type RewardPercentiles = RewardPercentile[];
/**
 * Lowest number block of returned range.
 */
export type HexEncodedUnsignedInteger11 = string;
/**
 * An array of block base fees per gas. This includes the next block after the newest of the returned range, because this value can be derived from the newest block. Zeroes are returned for pre-EIP-1559 blocks.
 */
export type BaseFeePerGasArray = HexEncodedUnsignedInteger[];
/**
 * An array of block base fees per blob gas. This includes the next block after the newest of the returned range, because this value can be derived from the newest block. Zeroes are returned for pre-EIP-4844 blocks.
 */
export type BaseFeePerBlobGasArray = HexEncodedUnsignedInteger[];
export type NormalizedRatio = number;
/**
 * An array of block gas used ratios. These are calculated as the ratio of gasUsed and gasLimit.
 */
export type GasUsedRatio = NormalizedRatio[];
/**
 * An array of block blob gas used ratios. These are calculated as the ratio of blobGasUsed and the max blob gas per block.
 */
export type BlobGasUsedRatio = NormalizedRatio[];
/**
 * A given percentile sample of effective priority fees per gas from a single block in ascending order, weighted by gas used. Zeroes are returned if the block is empty.
 */
export type HexEncodedUnsignedInteger12 = string;
/**
 * An array of effective priority fee per gas data points from a single block. All zeroes are returned if the block is empty.
 */
export type RewardPercentile1 = HexEncodedUnsignedInteger12[];
/**
 * A two-dimensional array of effective priority fees per gas at the requested block percentiles.
 */
export type RewardArray = RewardPercentile1[];
export type HexEncodedUnsignedInteger13 = string;
export type Hydrated = boolean;
export type NotFoundNull = null;
export type ByteHexValue2 = string;
export type ByteHexValue3 = string;
export type ByteHexValue4 = string;
export type HexEncodedAddress5 = string;
export type ByteHexValue5 = string;
export type ByteHexValue6 = string;
export type ByteHexValue7 = string;
export type BloomFilter = string;
export type HexEncodedUnsignedInteger14 = string;
export type HexEncodedUnsignedInteger15 = string;
export type HexEncodedUnsignedInteger16 = string;
export type HexEncodedUnsignedInteger17 = string;
export type HexEncodedUnsignedInteger18 = string;
export type HexEncodedBytes3 = string;
export type ByteHexValue8 = string;
export type Nonce = string;
export type HexEncodedUnsignedInteger19 = string;
export type HexEncodedUnsignedInteger20 = string;
export type ByteHexValue9 = string;
export type HexEncodedUnsignedInteger21 = string;
export type HexEncodedUnsignedInteger22 = string;
export type ByteHexValue10 = string;
export type HexEncodedUnsignedInteger23 = string;
export type TransactionHashes = ByteHexValue[];
export type TransactionInformation = ContextualInformation &
	(Signed4844Transaction | Signed1559Transaction | Signed2930Transaction | SignedLegacyTransaction);
export type ByteHexValue11 = string;
export type HexEncodedUnsignedInteger24 = string;
export type HexEncodedAddress6 = string;
export type ByteHexValue12 = string;
export type HexEncodedUnsignedInteger25 = string;
export type Signed4844Transaction = EIP4844Transaction & EIP4844TransactionSignatureProperties;
export type Type2 = string;
export type HexEncodedUnsignedInteger26 = string;
export type HexEncodedAddress7 = string;
export type HexEncodedUnsignedInteger27 = string;
export type HexEncodedUnsignedInteger28 = string;
export type HexEncodedBytes4 = string;
/**
 * Maximum fee per gas the sender is willing to pay to miners in wei
 */
export type HexEncodedUnsignedInteger29 = string;
/**
 * The maximum total fee per gas the sender is willing to pay (includes the network / base fee and miner / priority fee) in wei
 */
export type HexEncodedUnsignedInteger30 = string;
/**
 * The maximum total fee per gas the sender is willing to pay for blob gas in wei
 */
export type HexEncodedUnsignedInteger31 = string;
/**
 * EIP-2930 access list
 */
export type AccessList1 = AccessListEntry[];
/**
 * List of versioned blob hashes associated with the transaction's EIP-4844 data blobs.
 */
export type BlobVersionedHashes1 = ByteHexValue[];
/**
 * Chain ID that this transaction is valid on.
 */
export type HexEncodedUnsignedInteger32 = string;
/**
 * The parity (0 for even, 1 for odd) of the y-value of the secp256k1 signature.
 */
export type HexEncodedUnsignedInteger33 = string;
export type HexEncodedUnsignedInteger34 = string;
export type HexEncodedUnsignedInteger35 = string;
export type Signed1559Transaction = EIP1559Transaction & EIP1559TransactionSignatureProperties;
export type Type3 = string;
export type HexEncodedUnsignedInteger36 = string;
export type ToAddress1 = ContractCreationNull1 | HexEncodedAddress8;
export type ContractCreationNull1 = null;
export type HexEncodedAddress8 = string;
export type HexEncodedUnsignedInteger37 = string;
export type HexEncodedUnsignedInteger38 = string;
export type HexEncodedBytes5 = string;
/**
 * Maximum fee per gas the sender is willing to pay to miners in wei
 */
export type HexEncodedUnsignedInteger39 = string;
/**
 * The maximum total fee per gas the sender is willing to pay (includes the network / base fee and miner / priority fee) in wei
 */
export type HexEncodedUnsignedInteger40 = string;
/**
 * The effective gas price paid by the sender in wei. For transactions not yet included in a block, this value should be set equal to the max fee per gas. This field is DEPRECATED, please transition to using effectiveGasPrice in the receipt object going forward.
 */
export type HexEncodedUnsignedInteger41 = string;
/**
 * EIP-2930 access list
 */
export type AccessList2 = AccessListEntry[];
/**
 * Chain ID that this transaction is valid on.
 */
export type HexEncodedUnsignedInteger42 = string;
/**
 * The parity (0 for even, 1 for odd) of the y-value of the secp256k1 signature.
 */
export type HexEncodedUnsignedInteger43 = string;
/**
 * For backwards compatibility, `v` is optionally provided as an alternative to `yParity`. This field is DEPRECATED and all use of it should migrate to `yParity`.
 */
export type HexEncodedUnsignedInteger44 = string;
export type HexEncodedUnsignedInteger45 = string;
export type HexEncodedUnsignedInteger46 = string;
export type Signed2930Transaction = EIP2930Transaction & EIP2930TransactionSignatureProperties;
export type Type4 = string;
export type HexEncodedUnsignedInteger47 = string;
export type ToAddress2 = ContractCreationNull2 | HexEncodedAddress9;
export type ContractCreationNull2 = null;
export type HexEncodedAddress9 = string;
export type HexEncodedUnsignedInteger48 = string;
export type HexEncodedUnsignedInteger49 = string;
export type HexEncodedBytes6 = string;
/**
 * The gas price willing to be paid by the sender in wei
 */
export type HexEncodedUnsignedInteger50 = string;
/**
 * EIP-2930 access list
 */
export type AccessList3 = AccessListEntry[];
/**
 * Chain ID that this transaction is valid on.
 */
export type HexEncodedUnsignedInteger51 = string;
/**
 * The parity (0 for even, 1 for odd) of the y-value of the secp256k1 signature.
 */
export type HexEncodedUnsignedInteger52 = string;
/**
 * For backwards compatibility, `v` is optionally provided as an alternative to `yParity`. This field is DEPRECATED and all use of it should migrate to `yParity`.
 */
export type HexEncodedUnsignedInteger53 = string;
export type HexEncodedUnsignedInteger54 = string;
export type HexEncodedUnsignedInteger55 = string;
export type SignedLegacyTransaction = LegacyTransaction & LegacyTransactionSignatureProperties;
export type Type5 = string;
export type HexEncodedUnsignedInteger56 = string;
export type ToAddress3 = ContractCreationNull3 | HexEncodedAddress10;
export type ContractCreationNull3 = null;
export type HexEncodedAddress10 = string;
export type HexEncodedUnsignedInteger57 = string;
export type HexEncodedUnsignedInteger58 = string;
export type HexEncodedBytes7 = string;
/**
 * The gas price willing to be paid by the sender in wei
 */
export type HexEncodedUnsignedInteger59 = string;
/**
 * Chain ID that this transaction is valid on.
 */
export type HexEncodedUnsignedInteger60 = string;
export type HexEncodedUnsignedInteger61 = string;
export type HexEncodedUnsignedInteger62 = string;
export type HexEncodedUnsignedInteger63 = string;
export type FullTransactions = TransactionInformation[];
export type IndexOfWithdrawal = string;
export type IndexOfValidatorThatGeneratedWithdrawal = string;
export type HexEncodedAddress11 = string;
export type ValueContainedInWithdrawal = string;
export type Withdrawals = ValidatorWithdrawal[];
export type Uncles = ByteHexValue[];
export type Hydrated1 = boolean;
export type Type6 = string;
export type ByteHexValue13 = string;
export type HexEncodedUnsignedInteger64 = string;
export type ByteHexValue14 = string;
export type HexEncodedUnsignedInteger65 = string;
export type HexEncodedAddress12 = string;
/**
 * Address of the receiver or null in a contract creation transaction.
 */
export type To = ContractCreationNull4 | HexEncodedAddress13;
export type ContractCreationNull4 = null;
export type HexEncodedAddress13 = string;
/**
 * The sum of gas used by this transaction and all preceding transactions in the same block.
 */
export type HexEncodedUnsignedInteger66 = string;
/**
 * The amount of gas used for this specific transaction alone.
 */
export type HexEncodedUnsignedInteger67 = string;
/**
 * The amount of blob gas used for this specific transaction. Only specified for blob transactions as defined by EIP-4844.
 */
export type HexEncodedUnsignedInteger68 = string;
/**
 * The contract address created, if the transaction was a contract creation, otherwise null.
 */
export type ContractAddress = HexEncodedAddress | Null;
export type Null = null;
export type Removed = boolean;
export type HexEncodedUnsignedInteger69 = string;
export type HexEncodedUnsignedInteger70 = string;
export type ByteHexValue15 = string;
export type ByteHexValue16 = string;
export type HexEncodedUnsignedInteger71 = string;
export type HexEncodedAddress14 = string;
export type HexEncodedBytes8 = string;
export type Topics = HexEncodedBytes[];
export type Logs = Log[];
export type LogsBloom = string;
/**
 * The post-transaction state root. Only specified for transactions included before the Byzantium upgrade.
 */
export type ByteHexValue17 = string;
/**
 * Either 1 (success) or 0 (failure). Only specified for transactions included after the Byzantium upgrade.
 */
export type HexEncodedUnsignedInteger72 = string;
/**
 * The actual value per gas deducted from the sender's account. Before EIP-1559, this is equal to the transaction's gas price. After, it is equal to baseFeePerGas + min(maxFeePerGas - baseFeePerGas, maxPriorityFeePerGas).
 */
export type HexEncodedUnsignedInteger73 = string;
/**
 * The actual value per gas deducted from the sender's account for blob gas. Only specified for blob transactions as defined by EIP-4844.
 */
export type HexEncodedUnsignedInteger74 = string;
export type ReceiptsInformation = ReceiptInformation[];
export type HexEncodedUnsignedInteger75 = string;
export type HexEncodedUnsignedInteger76 = string;
export type FilterResults = NewBlockOrTransactionHashes | NewLogs;
export type NewBlockOrTransactionHashes = ByteHexValue[];
export type NewLogs = Log[];
export type HexEncodedUnsignedInteger77 = string;
export type HexEncodedUnsignedInteger78 = string;
export type AddressEs = AnyAddress | HexEncodedAddress15 | Addresses;
export type AnyAddress = null;
export type HexEncodedAddress15 = string;
export type Addresses = HexEncodedAddress[];
export type Topics1 = AnyTopicMatch | SpecifiedFilterTopics;
export type AnyTopicMatch = null;
export type FilterTopicListEntry = HexEncodedBytes1 | MultipleTopicMatch;
export type MultipleTopicMatch = HexEncodedBytes[];
export type SpecifiedFilterTopics = FilterTopicListEntry[];
export type StorageKeys = HexEncodedBytes2[];
export type HexEncodedAddress16 = string;
export type AccountProof1 = HexEncodedBytes[];
export type Balance = string;
export type ByteHexValue18 = string;
export type Nonce1 = string;
export type ByteHexValue19 = string;
export type Value1 = string;
export type Proof = HexEncodedBytes[];
export type StorageProofs = StorageProof[];
export type HexEncoded256BitUnsignedInteger = string;
export type HexEncodedUnsignedInteger79 = string;
export type HexEncodedUnsignedInteger80 = string;
export type HexEncodedUnsignedInteger81 = string;
export type SyncingStatus = SyncingProgress | NotSyncing;
export type HexEncodedUnsignedInteger82 = string;
export type HexEncodedUnsignedInteger83 = string;
export type HexEncodedUnsignedInteger84 = string;
/**
 * Should always return false if not syncing.
 */
export type NotSyncing = boolean;

export interface EthereumRpcMethodMap {
	wallet_addEthereumChain: {
		/**
		 * @minItems 1
		 * @maxItems 1
		 */
		params: [AddEthereumChainParameter];
		result: null;
		errors:
			| {
					code: -32602;
					message: "Expected null or array with at least one valid string HTTPS URL 'blockExplorerUrl'. Received: ${blockExplorerUrls}";
			  }
			| {
					code: -32602;
					message: "Expected 0x-prefixed, unpadded, non-zero hexadecimal string 'chainId'. Received:\n${chainId}";
			  }
			| {
					code: -32602;
					message: 'Invalid chain ID "${_chainId}": numerical value greater than max safe value. Received:\n${chainId}';
			  }
			| {
					code: -32602;
					message: "May not specify default MetaMask chain.";
			  }
			| {
					code: -32602;
					message: "Expected 2-6 character string 'nativeCurrency.symbol'. Received:\n${ticker}";
			  }
			| {
					code: -32602;
					message: "nativeCurrency.symbol does not match currency symbol for a network the user already has added with the same chainId. Received:\n${ticker}";
			  };
	};
	wallet_switchEthereumChain: {
		/**
		 * @minItems 1
		 * @maxItems 1
		 */
		params: [SwitchEthereumChainParameter];
		result: null;
		errors: {
			code: 4902;
			message: "Unrecognized chain ID. Try adding the chain using wallet_addEthereumChain first.";
		};
	};
	wallet_getPermissions: {
		/**
		 * @minItems 0
		 * @maxItems 0
		 */
		params: [];
		result: PermissionsList;
		errors: {
			code: number;
			message: string;
		};
	};
	wallet_requestPermissions: {
		/**
		 * @minItems 1
		 * @maxItems 1
		 */
		params: [PermissionObject];
		result: PermissionsList;
		errors: {
			[k: string]: any;
		};
	};
	wallet_revokePermissions: {
		/**
		 * @minItems 1
		 * @maxItems 1
		 */
		params: [PermissionObject];
		result: null;
		errors: {
			code: number;
			message: string;
		};
	};
	personal_sign: {
		/**
		 * @minItems 2
		 * @maxItems 2
		 */
		params: [string, HexEncodedAddress];
		result: HexEncodedBytes;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_signTypedData_v4: {
		/**
		 * @minItems 2
		 * @maxItems 2
		 */
		params: [HexEncodedAddress, TypedData];
		result: HexEncodedBytes;
		errors: {
			code: number;
			message: string;
		};
	};
	wallet_registerOnboarding: {
		/**
		 * @minItems 0
		 * @maxItems 0
		 */
		params: [];
		result: boolean;
		errors: {
			code: number;
			message: string;
		};
	};
	wallet_watchAsset: {
		/**
		 * @minItems 2
		 * @maxItems 2
		 */
		params: ["ERC20" | "ERC721" | "ERC1155", WatchAssetOptions];
		result: boolean;
		errors:
			| {
					code: -32602;
					message: "Must specify address, symbol, and decimals.";
			  }
			| {
					code: -32602;
					message: "Invalid symbol: not a string.";
			  }
			| {
					code: -32602;
					message: "Invalid symbol '${symbol}': longer than 11 characters.";
			  }
			| {
					code: -32602;
					message: "Invalid decimals '${decimals}': must be 0 <= 36.";
			  }
			| {
					code: -32602;
					message: "Invalid address '${address}'.";
			  }
			| {
					code: -32602;
					message: "Asset type is required.";
			  }
			| {
					code: -32602;
					message: "Both address and tokenId are required.";
			  }
			| {
					code: -32602;
					message: "Invalid address.";
			  }
			| {
					code: -32000;
					message: "Suggested NFT is not owned by the selected account.";
			  }
			| {
					code: -32000;
					message: "Suggested NFT of type ${standard} does not match received type ${type}.";
			  }
			| {
					code: -32002;
					message: "Unable to verify ownership. Possibly because the standard is not supported or the user's currently selected network does not match the chain of the asset in question.";
			  };
	};
	wallet_scanQRCode: {
		/**
		 * @minItems 1
		 * @maxItems 1
		 */
		params: [Regex];
		result: ScanQRCodeResult;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_requestAccounts: {
		/**
		 * @minItems 0
		 * @maxItems 0
		 */
		params: [];
		result: HexEncodedAddress[];
		errors: {
			[k: string]: any;
		};
	};
	eth_accounts: {
		/**
		 * @minItems 0
		 * @maxItems 0
		 */
		params: [];
		result: HexEncodedAddress[];
		errors: {
			code: number;
			message: string;
		};
	};
	eth_sendTransaction: {
		/**
		 * @minItems 1
		 * @maxItems 1
		 */
		params: [Transaction];
		result: HexEncodedBytes;
		errors: {
			code: 4100;
			message: "The requested account and/or method has not been authorized by the user.";
		};
	};
	eth_decrypt: {
		/**
		 * @minItems 2
		 * @maxItems 2
		 */
		params: [string, HexEncodedAddress];
		result: PermissionsList;
		errors: {
			code: 4100;
			message: "The requested account and/or method has not been authorized by the user.";
		};
	};
	eth_getEncryptionPublicKey: {
		/**
		 * @minItems 1
		 * @maxItems 1
		 */
		params: [HexEncodedAddress];
		result: string;
		errors: {
			code: number;
			message: string;
		};
	};
	web3_clientVersion: {
		/**
		 * @minItems 0
		 * @maxItems 0
		 */
		params: [];
		result: CurrentClientVersion;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_subscribe: {
		/**
		 * @minItems 2
		 * @maxItems 2
		 */
		params: [SubscriptionType, FilterOptions];
		result: string;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_unsubscribe: {
		/**
		 * @minItems 1
		 * @maxItems 1
		 */
		params: [string];
		result: boolean;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_blobBaseFee: {
		/**
		 * @minItems 0
		 * @maxItems 0
		 */
		params: [];
		result: BlobGasBaseFee;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_blockNumber: {
		/**
		 * @minItems 0
		 * @maxItems 0
		 */
		params: [];
		result: HexEncodedUnsignedInteger;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_call: {
		/**
		 * @minItems 2
		 * @maxItems 2
		 */
		params: [TransactionObjectGenericToAllTypes, BlockNumberTagOrBlockHash];
		result: HexEncodedBytes;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_chainId: {
		/**
		 * @minItems 0
		 * @maxItems 0
		 */
		params: [];
		result: HexEncodedUnsignedInteger;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_coinbase: {
		/**
		 * @minItems 0
		 * @maxItems 0
		 */
		params: [];
		result: HexEncodedAddress;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_estimateGas: {
		/**
		 * @minItems 2
		 * @maxItems 2
		 */
		params: [TransactionObjectGenericToAllTypes, BlockNumberOrTag];
		result: HexEncodedUnsignedInteger;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_feeHistory: {
		/**
		 * @minItems 3
		 * @maxItems 3
		 */
		params: [HexEncodedUnsignedInteger, BlockNumberOrTag, RewardPercentiles];
		result: FeeHistoryResults;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_gasPrice: {
		/**
		 * @minItems 0
		 * @maxItems 0
		 */
		params: [];
		result: HexEncodedUnsignedInteger13;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_getBalance: {
		/**
		 * @minItems 2
		 * @maxItems 2
		 */
		params: [HexEncodedAddress, BlockNumberTagOrBlockHash];
		result: HexEncodedUnsignedInteger;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_getBlockByHash: {
		/**
		 * @minItems 2
		 * @maxItems 2
		 */
		params: [ByteHexValue, Hydrated];
		result: NotFoundNull | BlockObject;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_getBlockByNumber: {
		/**
		 * @minItems 2
		 * @maxItems 2
		 */
		params: [BlockNumberOrTag, Hydrated1];
		result: NotFoundNull | BlockObject;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_getBlockReceipts: {
		/**
		 * @minItems 1
		 * @maxItems 1
		 */
		params: [BlockNumberTagOrBlockHash];
		result: NotFoundNull | ReceiptsInformation;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_getBlockTransactionCountByHash: {
		/**
		 * @minItems 1
		 * @maxItems 1
		 */
		params: [ByteHexValue];
		result: NotFoundNull | HexEncodedUnsignedInteger75;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_getBlockTransactionCountByNumber: {
		/**
		 * @minItems 1
		 * @maxItems 1
		 */
		params: [BlockNumberOrTag];
		result: NotFoundNull | HexEncodedUnsignedInteger76;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_getCode: {
		/**
		 * @minItems 2
		 * @maxItems 2
		 */
		params: [HexEncodedAddress, BlockNumberTagOrBlockHash];
		result: HexEncodedBytes;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_getFilterChanges: {
		/**
		 * @minItems 1
		 * @maxItems 1
		 */
		params: [HexEncodedUnsignedInteger];
		result: FilterResults;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_getFilterLogs: {
		/**
		 * @minItems 1
		 * @maxItems 1
		 */
		params: [HexEncodedUnsignedInteger];
		result: FilterResults;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_getLogs: {
		/**
		 * @minItems 1
		 * @maxItems 1
		 */
		params: [Filter];
		result: FilterResults;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_getProof: {
		/**
		 * @minItems 3
		 * @maxItems 3
		 */
		params: [HexEncodedAddress, StorageKeys, BlockNumberTagOrBlockHash];
		result: AccountProof;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_getStorageAt: {
		/**
		 * @minItems 3
		 * @maxItems 3
		 */
		params: [HexEncodedAddress, HexEncoded256BitUnsignedInteger, BlockNumberTagOrBlockHash];
		result: HexEncodedBytes;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_getTransactionByBlockHashAndIndex: {
		/**
		 * @minItems 2
		 * @maxItems 2
		 */
		params: [ByteHexValue, HexEncodedUnsignedInteger];
		result: NotFoundNull | TransactionInformation;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_getTransactionByBlockNumberAndIndex: {
		/**
		 * @minItems 2
		 * @maxItems 2
		 */
		params: [BlockNumberOrTag, HexEncodedUnsignedInteger];
		result: NotFoundNull | TransactionInformation;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_getTransactionByHash: {
		/**
		 * @minItems 1
		 * @maxItems 1
		 */
		params: [ByteHexValue];
		result: NotFoundNull | TransactionInformation;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_getTransactionCount: {
		/**
		 * @minItems 2
		 * @maxItems 2
		 */
		params: [HexEncodedAddress, BlockNumberTagOrBlockHash];
		result: HexEncodedUnsignedInteger;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_getTransactionReceipt: {
		/**
		 * @minItems 1
		 * @maxItems 1
		 */
		params: [ByteHexValue];
		result: NotFoundNull | ReceiptInformation;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_getUncleCountByBlockHash: {
		/**
		 * @minItems 1
		 * @maxItems 1
		 */
		params: [ByteHexValue];
		result: NotFoundNull | HexEncodedUnsignedInteger79;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_getUncleCountByBlockNumber: {
		/**
		 * @minItems 1
		 * @maxItems 1
		 */
		params: [BlockNumberOrTag];
		result: NotFoundNull | HexEncodedUnsignedInteger80;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_maxPriorityFeePerGas: {
		/**
		 * @minItems 0
		 * @maxItems 0
		 */
		params: [];
		result: HexEncodedUnsignedInteger81;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_newBlockFilter: {
		/**
		 * @minItems 0
		 * @maxItems 0
		 */
		params: [];
		result: HexEncodedUnsignedInteger;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_newFilter: {
		/**
		 * @minItems 1
		 * @maxItems 1
		 */
		params: [Filter];
		result: HexEncodedUnsignedInteger;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_newPendingTransactionFilter: {
		/**
		 * @minItems 0
		 * @maxItems 0
		 */
		params: [];
		result: HexEncodedUnsignedInteger;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_sendRawTransaction: {
		/**
		 * @minItems 1
		 * @maxItems 1
		 */
		params: [HexEncodedBytes];
		result: ByteHexValue;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_syncing: {
		/**
		 * @minItems 0
		 * @maxItems 0
		 */
		params: [];
		result: SyncingStatus;
		errors: {
			code: number;
			message: string;
		};
	};
	eth_uninstallFilter: {
		/**
		 * @minItems 1
		 * @maxItems 1
		 */
		params: [HexEncodedUnsignedInteger];
		result: boolean;
		errors: {
			code: number;
			message: string;
		};
	};
}
export interface AddEthereumChainParameter {
	/**
	 * The chain ID as a `0x`-prefixed hexadecimal string, per the `eth_chainId` method. MetaMask compares this chain ID value with the `eth_chainId` return value. If these values aren't identical, MetaMask rejects the request.
	 */
	chainId: string;
	/**
	 * (Optional) One or more URLs pointing to block explorer sites for the chain.
	 */
	blockExplorerUrls?: string[];
	/**
	 * A human-readable name for the chain.
	 */
	chainName: string;
	/**
	 * (Optional) One or more URLs pointing to reasonably sized images that can be used to visually identify the chain. NOTE: MetaMask will not currently display these images. Values can still be included so that they are utilized if MetaMask incorporates them into the display of custom networks in the future.
	 */
	iconUrls?: string[];
	nativeCurrency: NativeCurrency;
	/**
	 * One or more URLs pointing to RPC endpoints that can be used to communicate with the chain. At least one item is required, and only the first item is used.
	 *
	 * @minItems 1
	 */
	rpcUrls: [string, ...string[]];
}
/**
 * Describes the native currency of the chain using the name, symbol, and decimals fields.
 */
export interface NativeCurrency {
	/**
	 * A non-negative integer.
	 */
	decimals: number;
	/**
	 * A human-readable name.
	 */
	name?: string;
	/**
	 * A human-readable symbol.
	 */
	symbol: string;
}
export interface SwitchEthereumChainParameter {
	/**
	 * The chain ID as a `0x`-prefixed hexadecimal string, per the `eth_chainId` method.
	 */
	chainId: string;
}
export interface Permission {
	/**
	 * The permission ID.
	 */
	id?: string;
	/**
	 * When two people communicate with one another, the conversation takes place in a shared environment, typically called 'the context of the conversation.' This shared context allows the individuals to use shortcut terms, such as the first name of a mutual friend, to communicate more quickly without losing accuracy. A context in JSON-LD works the same way: it allows two applications to use shortcut terms to communicate more efficiently without losing accuracy.
	 */
	"@context"?: string[];
	/**
	 * A URI of the dapp being granted this permission.
	 */
	invoker?: string;
	caveats?: Caveats;
}
export interface Caveat {
	type?: Type;
	value?: CaveatValue;
	name?: Name;
}
/**
 * Value of the caveat.
 */
export interface CaveatValue {
	[k: string]: any;
}
export interface PermissionObject {
	/**
	 * The requested permission.
	 */
	permission: {
		[k: string]: any;
	};
	[k: string]: {
		[k: string]: any;
	};
}
export interface TypedData {
	types: {
		/**
		 * An array specifying one or more of the following domain separator values: 1) `name` - The user-readable name of the signing domain, that is, the name of the dapp or the protocol. 2) `version` - The current major version of the signing domain. 3) `chainId` - The chain ID of the network. 4) `verifyingContract` - The address of the contract that will verify the signature. 5) `salt` - A disambiguating salt for the protocol.
		 */
		EIP712Domain: any[];
		[k: string]: {
			name?: string;
			type?: string;
		}[];
	};
	/**
	 * Contains the domain separator values specified in the `EIP712Domain` type.
	 */
	domain: {};
	primaryType: string;
	/**
	 * The message you're proposing the user to sign.
	 */
	message: {};
}
export interface WatchAssetOptions {
	/**
	 * The address of the token contract.
	 */
	address: string;
	/**
	 * A ticker symbol or shorthand, up to 11 characters (optional for ERC-20 tokens).
	 */
	symbol?: string;
	/**
	 * The number of token decimals (optional for ERC-20 tokens).
	 */
	decimals?: number;
	/**
	 * A string URL of the token logo (optional for ERC-20 tokens).
	 */
	image?: string;
	/**
	 * The unique identifier of the NFT (required for ERC-721 and ERC-1155 tokens).
	 */
	tokenId?: string;
}
/**
 * The parameters to customize a transaction. If a `to` address is not provided, it will be assumed that the transaction is a contract creation transaction, and the `data` field of the transaction will be used as the contract initialization code. `gasPrice` cannot be used together with `maxPriorityFeePerGas` and `maxFeePerGas`.
 */
export interface Transaction {
	to?: HexEncodedAddress1;
	from: HexEncodedAddress2;
	gas?: GasLimit;
	value?: Value;
	data?: HexEncodedBytes1;
	gasPrice?: GasPrice;
	maxPriorityFeePerGas?: MaxPriorityFeePerGas;
	maxFeePerGas?: MaxFeePerGas;
}
/**
 * (Optional) An object containing filter options specific to the subscription type. Only applicable for the `logs` subscription type.
 */
export interface FilterOptions {
	/**
	 * (Optional) A single address or an array of addresses to filter the logs by.
	 */
	address?: string;
	/**
	 * An array of topics to filter the logs by.
	 */
	topics: string[];
}
export interface TransactionObjectGenericToAllTypes {
	type?: Type1;
	nonce?: HexEncodedUnsignedInteger1;
	to?: ToAddress;
	from?: HexEncodedAddress4;
	gas?: HexEncodedUnsignedInteger2;
	value?: HexEncodedUnsignedInteger3;
	input?: HexEncodedBytes2;
	gasPrice?: HexEncodedUnsignedInteger4;
	maxPriorityFeePerGas?: HexEncodedUnsignedInteger5;
	maxFeePerGas?: HexEncodedUnsignedInteger6;
	maxFeePerBlobGas?: HexEncodedUnsignedInteger7;
	accessList?: AccessList;
	blobVersionedHashes?: BlobVersionedHashes;
	blobs?: Blobs;
	chainId?: HexEncodedUnsignedInteger8;
}
export interface AccessListEntry {
	address?: HexEncodedAddress;
	storageKeys?: ByteHexValue[];
}
/**
 * Fee history results.
 */
export interface FeeHistoryResults {
	oldestBlock: HexEncodedUnsignedInteger11;
	baseFeePerGas: BaseFeePerGasArray;
	baseFeePerBlobGas?: BaseFeePerBlobGasArray;
	gasUsedRatio: GasUsedRatio;
	blobGasUsedRatio?: BlobGasUsedRatio;
	reward?: RewardArray;
}
export interface BlockObject {
	hash: ByteHexValue2;
	parentHash: ByteHexValue3;
	sha3Uncles: ByteHexValue4;
	miner: HexEncodedAddress5;
	stateRoot: ByteHexValue5;
	transactionsRoot: ByteHexValue6;
	receiptsRoot: ByteHexValue7;
	logsBloom: BloomFilter;
	difficulty?: HexEncodedUnsignedInteger14;
	number: HexEncodedUnsignedInteger15;
	gasLimit: HexEncodedUnsignedInteger16;
	gasUsed: HexEncodedUnsignedInteger17;
	timestamp: HexEncodedUnsignedInteger18;
	extraData: HexEncodedBytes3;
	mixHash: ByteHexValue8;
	nonce: Nonce;
	totalDifficulty?: HexEncodedUnsignedInteger19;
	baseFeePerGas?: HexEncodedUnsignedInteger20;
	withdrawalsRoot?: ByteHexValue9;
	blobGasUsed?: HexEncodedUnsignedInteger21;
	excessBlobGas?: HexEncodedUnsignedInteger22;
	parentBeaconBlockRoot?: ByteHexValue10;
	size: HexEncodedUnsignedInteger23;
	transactions: TransactionHashes | FullTransactions;
	withdrawals?: Withdrawals;
	uncles: Uncles;
}
export interface ContextualInformation {
	blockHash: ByteHexValue11;
	blockNumber: HexEncodedUnsignedInteger24;
	from: HexEncodedAddress6;
	hash: ByteHexValue12;
	transactionIndex: HexEncodedUnsignedInteger25;
}
export interface EIP4844Transaction {
	type: Type2;
	nonce: HexEncodedUnsignedInteger26;
	to: HexEncodedAddress7;
	gas: HexEncodedUnsignedInteger27;
	value: HexEncodedUnsignedInteger28;
	input: HexEncodedBytes4;
	maxPriorityFeePerGas: HexEncodedUnsignedInteger29;
	maxFeePerGas: HexEncodedUnsignedInteger30;
	maxFeePerBlobGas: HexEncodedUnsignedInteger31;
	accessList: AccessList1;
	blobVersionedHashes: BlobVersionedHashes1;
	chainId: HexEncodedUnsignedInteger32;
}
export interface EIP4844TransactionSignatureProperties {
	yParity: HexEncodedUnsignedInteger33;
	r: HexEncodedUnsignedInteger34;
	s: HexEncodedUnsignedInteger35;
}
export interface EIP1559Transaction {
	type: Type3;
	nonce: HexEncodedUnsignedInteger36;
	to?: ToAddress1;
	gas: HexEncodedUnsignedInteger37;
	value: HexEncodedUnsignedInteger38;
	input: HexEncodedBytes5;
	maxPriorityFeePerGas: HexEncodedUnsignedInteger39;
	maxFeePerGas: HexEncodedUnsignedInteger40;
	gasPrice: HexEncodedUnsignedInteger41;
	accessList: AccessList2;
	chainId: HexEncodedUnsignedInteger42;
}
export interface EIP1559TransactionSignatureProperties {
	yParity: HexEncodedUnsignedInteger43;
	v?: HexEncodedUnsignedInteger44;
	r: HexEncodedUnsignedInteger45;
	s: HexEncodedUnsignedInteger46;
}
export interface EIP2930Transaction {
	type: Type4;
	nonce: HexEncodedUnsignedInteger47;
	to?: ToAddress2;
	gas: HexEncodedUnsignedInteger48;
	value: HexEncodedUnsignedInteger49;
	input: HexEncodedBytes6;
	gasPrice: HexEncodedUnsignedInteger50;
	accessList: AccessList3;
	chainId: HexEncodedUnsignedInteger51;
}
export interface EIP2930TransactionSignatureProperties {
	yParity: HexEncodedUnsignedInteger52;
	v?: HexEncodedUnsignedInteger53;
	r: HexEncodedUnsignedInteger54;
	s: HexEncodedUnsignedInteger55;
}
export interface LegacyTransaction {
	type: Type5;
	nonce: HexEncodedUnsignedInteger56;
	to?: ToAddress3;
	gas: HexEncodedUnsignedInteger57;
	value: HexEncodedUnsignedInteger58;
	input: HexEncodedBytes7;
	gasPrice: HexEncodedUnsignedInteger59;
	chainId?: HexEncodedUnsignedInteger60;
}
export interface LegacyTransactionSignatureProperties {
	v: HexEncodedUnsignedInteger61;
	r: HexEncodedUnsignedInteger62;
	s: HexEncodedUnsignedInteger63;
}
export interface ValidatorWithdrawal {
	index: IndexOfWithdrawal;
	validatorIndex: IndexOfValidatorThatGeneratedWithdrawal;
	address: HexEncodedAddress11;
	amount: ValueContainedInWithdrawal;
}
export interface ReceiptInformation {
	type?: Type6;
	transactionHash: ByteHexValue13;
	transactionIndex: HexEncodedUnsignedInteger64;
	blockHash: ByteHexValue14;
	blockNumber: HexEncodedUnsignedInteger65;
	from: HexEncodedAddress12;
	to?: To;
	cumulativeGasUsed: HexEncodedUnsignedInteger66;
	gasUsed: HexEncodedUnsignedInteger67;
	blobGasUsed?: HexEncodedUnsignedInteger68;
	contractAddress?: ContractAddress;
	logs: Logs;
	logsBloom: LogsBloom;
	root?: ByteHexValue17;
	status?: HexEncodedUnsignedInteger72;
	effectiveGasPrice: HexEncodedUnsignedInteger73;
	blobGasPrice?: HexEncodedUnsignedInteger74;
}
export interface Log {
	removed?: Removed;
	logIndex?: HexEncodedUnsignedInteger69;
	transactionIndex?: HexEncodedUnsignedInteger70;
	transactionHash: ByteHexValue15;
	blockHash?: ByteHexValue16;
	blockNumber?: HexEncodedUnsignedInteger71;
	address?: HexEncodedAddress14;
	data?: HexEncodedBytes8;
	topics?: Topics;
}
export interface Filter {
	fromBlock?: HexEncodedUnsignedInteger77;
	toBlock?: HexEncodedUnsignedInteger78;
	address?: AddressEs;
	topics?: Topics1;
}
export interface AccountProof {
	address: HexEncodedAddress16;
	accountProof: AccountProof1;
	balance: Balance;
	codeHash: ByteHexValue18;
	nonce: Nonce1;
	storageHash: ByteHexValue19;
	storageProof: StorageProofs;
}
export interface StorageProof {
	key: HexEncodedBytes3;
	value: Value1;
	proof: Proof;
}
export interface SyncingProgress {
	startingBlock?: HexEncodedUnsignedInteger82;
	currentBlock?: HexEncodedUnsignedInteger83;
	highestBlock?: HexEncodedUnsignedInteger84;
}

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

export interface EthereumProvider {
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
