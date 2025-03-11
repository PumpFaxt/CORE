export const contractDefinitions = {
  "PumpfaxtMaster": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "frxUsd_",
            "type": "address",
          },
        ],
        "stateMutability": "nonpayable",
        "type": "constructor",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address",
          },
        ],
        "name": "OwnableInvalidOwner",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address",
          },
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error",
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "token",
            "type": "address",
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "buyer",
            "type": "address",
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256",
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256",
          },
        ],
        "name": "Buy",
        "type": "event",
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newTarget",
            "type": "uint256",
          },
        ],
        "name": "ChangeFrxUsdTarget",
        "type": "event",
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "creator",
            "type": "address",
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "token",
            "type": "address",
          },
        ],
        "name": "Launch",
        "type": "event",
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address",
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address",
          },
        ],
        "name": "OwnershipTransferred",
        "type": "event",
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "creator",
            "type": "address",
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "token",
            "type": "address",
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256",
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256",
          },
        ],
        "name": "Sell",
        "type": "event",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "token_",
            "type": "address",
          },
          {
            "internalType": "uint256",
            "name": "frxUsdIn_",
            "type": "uint256",
          },
          {
            "internalType": "uint256",
            "name": "amountOutMin_",
            "type": "uint256",
          },
        ],
        "name": "buyToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "feeController",
        "outputs": [
          {
            "internalType": "contract PumpfaxtFeeController",
            "name": "",
            "type": "address",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "frxDECIMALS",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "frxDecimals",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "frxUsd",
        "outputs": [
          {
            "internalType": "contract ERC20",
            "name": "",
            "type": "address",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "frxUsdTarget",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "initialSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name_",
            "type": "string",
          },
          {
            "internalType": "string",
            "name": "symbol_",
            "type": "string",
          },
          {
            "internalType": "string",
            "name": "uri_",
            "type": "string",
          },
        ],
        "name": "launchToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address",
          },
        ],
        "name": "liquidity",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "buyer_",
            "type": "address",
          },
          {
            "internalType": "address",
            "name": "token_",
            "type": "address",
          },
          {
            "internalType": "uint256",
            "name": "frxUsdIn_",
            "type": "uint256",
          },
          {
            "internalType": "uint256",
            "name": "amountOutMin_",
            "type": "uint256",
          },
          {
            "internalType": "bytes",
            "name": "signature_",
            "type": "bytes",
          },
        ],
        "name": "metaBuyToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "creator_",
            "type": "address",
          },
          {
            "internalType": "string",
            "name": "name_",
            "type": "string",
          },
          {
            "internalType": "string",
            "name": "symbol_",
            "type": "string",
          },
          {
            "internalType": "string",
            "name": "uri_",
            "type": "string",
          },
          {
            "internalType": "bytes",
            "name": "signature_",
            "type": "bytes",
          },
        ],
        "name": "metaLaunchToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "seller_",
            "type": "address",
          },
          {
            "internalType": "address",
            "name": "token_",
            "type": "address",
          },
          {
            "internalType": "uint256",
            "name": "amountIn_",
            "type": "uint256",
          },
          {
            "internalType": "uint256",
            "name": "frxUsdOutMin_",
            "type": "uint256",
          },
          {
            "internalType": "bytes",
            "name": "signature_",
            "type": "bytes",
          },
        ],
        "name": "metaSellToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "relayManager",
        "outputs": [
          {
            "internalType": "contract RelayManager",
            "name": "",
            "type": "address",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "token_",
            "type": "address",
          },
          {
            "internalType": "uint256",
            "name": "amountIn_",
            "type": "uint256",
          },
          {
            "internalType": "uint256",
            "name": "frxUsdOutMin_",
            "type": "uint256",
          },
        ],
        "name": "sellToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "newTarget_",
            "type": "uint256",
          },
        ],
        "name": "setFrxUsdTarget",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address",
          },
        ],
        "name": "tokenLaunchedAtBlockNumber",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address",
          },
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
      },
    ],
    "address": "0x7a2088a1bfc9d81c55368ae168c2c02570cb814f",
  },
  "PumpfaxtFeeController": {
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor",
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address",
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256",
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "purpose",
            "type": "bytes32",
          },
        ],
        "name": "FeeCollected",
        "type": "event",
      },
      {
        "inputs": [],
        "name": "pumpfaxtTokenBuySellFee_FRACTION",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "pumpfaxtTokenLaunchFee_FLAT",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from_",
            "type": "address",
          },
          {
            "internalType": "uint256",
            "name": "amount_",
            "type": "uint256",
          },
          {
            "internalType": "bytes32",
            "name": "purpose_",
            "type": "bytes32",
          },
        ],
        "name": "registerFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "newFee_",
            "type": "uint256",
          },
        ],
        "name": "setPumpfaxtTokenBuySellFee_FRACTION",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "newFee_",
            "type": "uint256",
          },
        ],
        "name": "setPumpfaxtTokenLaunchFee_FLAT",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "token_",
            "type": "address",
          },
          {
            "internalType": "address",
            "name": "to_",
            "type": "address",
          },
          {
            "internalType": "uint256",
            "name": "amount_",
            "type": "uint256",
          },
        ],
        "name": "transfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
      },
    ],
    "address": "0x2C477DFdB744E3BAf87bbdE078e21D382bc40700",
  },
  "frxUsd": {
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor",
      },
      {
        "inputs": [],
        "name": "ECDSAInvalidSignature",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "length",
            "type": "uint256",
          },
        ],
        "name": "ECDSAInvalidSignatureLength",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32",
          },
        ],
        "name": "ECDSAInvalidSignatureS",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address",
          },
          {
            "internalType": "uint256",
            "name": "allowance",
            "type": "uint256",
          },
          {
            "internalType": "uint256",
            "name": "needed",
            "type": "uint256",
          },
        ],
        "name": "ERC20InsufficientAllowance",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address",
          },
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256",
          },
          {
            "internalType": "uint256",
            "name": "needed",
            "type": "uint256",
          },
        ],
        "name": "ERC20InsufficientBalance",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "approver",
            "type": "address",
          },
        ],
        "name": "ERC20InvalidApprover",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address",
          },
        ],
        "name": "ERC20InvalidReceiver",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address",
          },
        ],
        "name": "ERC20InvalidSender",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address",
          },
        ],
        "name": "ERC20InvalidSpender",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256",
          },
        ],
        "name": "ERC2612ExpiredSignature",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "signer",
            "type": "address",
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address",
          },
        ],
        "name": "ERC2612InvalidSigner",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address",
          },
          {
            "internalType": "uint256",
            "name": "currentNonce",
            "type": "uint256",
          },
        ],
        "name": "InvalidAccountNonce",
        "type": "error",
      },
      {
        "inputs": [],
        "name": "InvalidShortString",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "str",
            "type": "string",
          },
        ],
        "name": "StringTooLong",
        "type": "error",
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address",
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address",
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256",
          },
        ],
        "name": "Approval",
        "type": "event",
      },
      {
        "anonymous": false,
        "inputs": [],
        "name": "EIP712DomainChanged",
        "type": "event",
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address",
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address",
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256",
          },
        ],
        "name": "Transfer",
        "type": "event",
      },
      {
        "inputs": [],
        "name": "DOMAIN_SEPARATOR",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "PERMIT_TYPEHASH",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address",
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address",
          },
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address",
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256",
          },
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool",
          },
        ],
        "stateMutability": "nonpayable",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address",
          },
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "eip712Domain",
        "outputs": [
          {
            "internalType": "bytes1",
            "name": "fields",
            "type": "bytes1",
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string",
          },
          {
            "internalType": "string",
            "name": "version",
            "type": "string",
          },
          {
            "internalType": "uint256",
            "name": "chainId",
            "type": "uint256",
          },
          {
            "internalType": "address",
            "name": "verifyingContract",
            "type": "address",
          },
          {
            "internalType": "bytes32",
            "name": "salt",
            "type": "bytes32",
          },
          {
            "internalType": "uint256[]",
            "name": "extensions",
            "type": "uint256[]",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address",
          },
        ],
        "name": "nonces",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address",
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address",
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256",
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256",
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8",
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32",
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32",
          },
        ],
        "name": "permit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address",
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256",
          },
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool",
          },
        ],
        "stateMutability": "nonpayable",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address",
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address",
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256",
          },
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool",
          },
        ],
        "stateMutability": "nonpayable",
        "type": "function",
      },
    ],
    "address": "0x4a679253410272dd5232b3ff7cf5dbb88f295319",
  },
  "PumpfaxtToken": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "creator_",
            "type": "address",
          },
          {
            "internalType": "string",
            "name": "name_",
            "type": "string",
          },
          {
            "internalType": "string",
            "name": "symbol_",
            "type": "string",
          },
          {
            "internalType": "string",
            "name": "uri_",
            "type": "string",
          },
        ],
        "stateMutability": "nonpayable",
        "type": "constructor",
      },
      {
        "inputs": [],
        "name": "ECDSAInvalidSignature",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "length",
            "type": "uint256",
          },
        ],
        "name": "ECDSAInvalidSignatureLength",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32",
          },
        ],
        "name": "ECDSAInvalidSignatureS",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address",
          },
          {
            "internalType": "uint256",
            "name": "allowance",
            "type": "uint256",
          },
          {
            "internalType": "uint256",
            "name": "needed",
            "type": "uint256",
          },
        ],
        "name": "ERC20InsufficientAllowance",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address",
          },
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256",
          },
          {
            "internalType": "uint256",
            "name": "needed",
            "type": "uint256",
          },
        ],
        "name": "ERC20InsufficientBalance",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "approver",
            "type": "address",
          },
        ],
        "name": "ERC20InvalidApprover",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address",
          },
        ],
        "name": "ERC20InvalidReceiver",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address",
          },
        ],
        "name": "ERC20InvalidSender",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address",
          },
        ],
        "name": "ERC20InvalidSpender",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256",
          },
        ],
        "name": "ERC2612ExpiredSignature",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "signer",
            "type": "address",
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address",
          },
        ],
        "name": "ERC2612InvalidSigner",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address",
          },
          {
            "internalType": "uint256",
            "name": "currentNonce",
            "type": "uint256",
          },
        ],
        "name": "InvalidAccountNonce",
        "type": "error",
      },
      {
        "inputs": [],
        "name": "InvalidShortString",
        "type": "error",
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "str",
            "type": "string",
          },
        ],
        "name": "StringTooLong",
        "type": "error",
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address",
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address",
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256",
          },
        ],
        "name": "Approval",
        "type": "event",
      },
      {
        "anonymous": false,
        "inputs": [],
        "name": "EIP712DomainChanged",
        "type": "event",
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address",
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address",
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256",
          },
        ],
        "name": "Transfer",
        "type": "event",
      },
      {
        "inputs": [],
        "name": "DOMAIN_SEPARATOR",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address",
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address",
          },
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address",
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256",
          },
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool",
          },
        ],
        "stateMutability": "nonpayable",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address",
          },
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "fraxIn_",
            "type": "uint256",
          },
        ],
        "name": "calculateAmountOut",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amountIn_",
            "type": "uint256",
          },
        ],
        "name": "calculateFrxUsdOut",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "creator",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "disableTrading",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "eip712Domain",
        "outputs": [
          {
            "internalType": "bytes1",
            "name": "fields",
            "type": "bytes1",
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string",
          },
          {
            "internalType": "string",
            "name": "version",
            "type": "string",
          },
          {
            "internalType": "uint256",
            "name": "chainId",
            "type": "uint256",
          },
          {
            "internalType": "address",
            "name": "verifyingContract",
            "type": "address",
          },
          {
            "internalType": "bytes32",
            "name": "salt",
            "type": "bytes32",
          },
          {
            "internalType": "uint256[]",
            "name": "extensions",
            "type": "uint256[]",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "frxUsd",
        "outputs": [
          {
            "internalType": "contract IERC20",
            "name": "",
            "type": "address",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "isTrading",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from_",
            "type": "address",
          },
          {
            "internalType": "address",
            "name": "to_",
            "type": "address",
          },
          {
            "internalType": "uint256",
            "name": "amount_",
            "type": "uint256",
          },
        ],
        "name": "masterTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address",
          },
        ],
        "name": "nonces",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address",
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address",
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256",
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256",
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8",
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32",
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32",
          },
        ],
        "name": "permit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address",
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256",
          },
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool",
          },
        ],
        "stateMutability": "nonpayable",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address",
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address",
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256",
          },
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool",
          },
        ],
        "stateMutability": "nonpayable",
        "type": "function",
      },
      {
        "inputs": [],
        "name": "uri",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
    ],
  },
} as const;
