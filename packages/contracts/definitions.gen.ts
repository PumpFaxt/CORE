export const abi = {AuxillaryList : [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "address_",
        "type": "address"
      }
    ],
    "name": "add",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "address_",
        "type": "address"
      }
    ],
    "name": "contains",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAll",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "address_",
        "type": "address"
      }
    ],
    "name": "indexOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "length",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "address_",
        "type": "address"
      }
    ],
    "name": "remove",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "address_",
        "type": "address"
      }
    ],
    "name": "safeAdd",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "address_",
        "type": "address"
      }
    ],
    "name": "safeRemove",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const,DummyFrax : [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "allowance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "needed",
        "type": "uint256"
      }
    ],
    "name": "ERC20InsufficientAllowance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "needed",
        "type": "uint256"
      }
    ],
    "name": "ERC20InsufficientBalance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "approver",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidApprover",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidReceiver",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidSender",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidSpender",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const,PFrax : [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "frax_",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "allowance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "needed",
        "type": "uint256"
      }
    ],
    "name": "ERC20InsufficientAllowance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "needed",
        "type": "uint256"
      }
    ],
    "name": "ERC20InsufficientBalance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "approver",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidApprover",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidReceiver",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidSender",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidSpender",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "for_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      }
    ],
    "name": "buy",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "frax",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "fraxReserve",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "master",
    "outputs": [
      {
        "internalType": "contract IPumpfaxtMaster",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value_",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "signature_",
        "type": "bytes"
      }
    ],
    "name": "metaApprove",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value_",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "signature_",
        "type": "bytes"
      }
    ],
    "name": "metaTransfer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "master_",
        "type": "address"
      }
    ],
    "name": "setPumpfaxtMaster",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const,PumpfaxtFeeController : [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "purpose",
        "type": "bytes32"
      }
    ],
    "name": "FeeCollected",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "pFraxMetaTransferGte100Fee_FLAT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pFraxMetaTransferLt100Fee_FLAT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pumpfaxtTokenBuySellFee_FRACTION",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pumpfaxtTokenLaunchFee_FLAT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pumpfaxtTokenTransferFee_FRACTION",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      }
    ],
    "name": "registerFeeForPFraxInteraction",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newFee_",
        "type": "uint256"
      }
    ],
    "name": "setPFraxMetaTransferGte100Fee_FLAT",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newFee_",
        "type": "uint256"
      }
    ],
    "name": "setPFraxMetaTransferLt100Fee_FLAT",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newFee_",
        "type": "uint256"
      }
    ],
    "name": "setPumpfaxtTokenBuySellFee_FRACTION",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newFee_",
        "type": "uint256"
      }
    ],
    "name": "setPumpfaxtTokenLaunchFee_FLAT",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newFee_",
        "type": "uint256"
      }
    ],
    "name": "setPumpfaxtTokenTransferFee_FRACTION",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "purpose_",
        "type": "bytes32"
      }
    ],
    "name": "submitFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const,PumpfaxtMaster : [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "pFrax_",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "creator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "Launch",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from_",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "functionName_",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "functionDataHash_",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "signature_",
        "type": "bytes"
      }
    ],
    "name": "executeMetaTx",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "feeController",
    "outputs": [
      {
        "internalType": "contract PumpfaxtFeeController",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "frax",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      }
    ],
    "name": "getPFraxForFees",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      }
    ],
    "name": "getPFraxForTokenPurchaseFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name_",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol_",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "uri_",
        "type": "string"
      }
    ],
    "name": "launchToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "creator_",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "name_",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol_",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "uri_",
        "type": "string"
      },
      {
        "internalType": "bytes",
        "name": "signature_",
        "type": "bytes"
      }
    ],
    "name": "metaLaunchToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "newTokenStartingSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "newTokenStartingVirtualReserve",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "one_pFrax",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pFrax",
    "outputs": [
      {
        "internalType": "contract IPFrax",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "relayManager",
    "outputs": [
      {
        "internalType": "contract RelayManager",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newTokenStartingVirtualReserve_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "newTokenStartingSupply_",
        "type": "uint256"
      }
    ],
    "name": "setNewTokenParams",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token_",
        "type": "address"
      }
    ],
    "name": "tokenLaunchedAtBlockNumber",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const,PumpfaxtToken : [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "creator_",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "name_",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol_",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "uri_",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "allowance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "needed",
        "type": "uint256"
      }
    ],
    "name": "ERC20InsufficientAllowance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "needed",
        "type": "uint256"
      }
    ],
    "name": "ERC20InsufficientBalance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "approver",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidApprover",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidReceiver",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidSender",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidSpender",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "fraxIn_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountOutMin_",
        "type": "uint256"
      }
    ],
    "name": "buy",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "fraxIn_",
        "type": "uint256"
      }
    ],
    "name": "calculateAmountOut",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountIn_",
        "type": "uint256"
      }
    ],
    "name": "calculateFraxOut",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "liquidity",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "fraxIn_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountOutMin_",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "signature_",
        "type": "bytes"
      }
    ],
    "name": "metaBuy",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountIn_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "fraxOutMin_",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "signature_",
        "type": "bytes"
      }
    ],
    "name": "metaSell",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "one_pFrax",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pFRAX",
    "outputs": [
      {
        "internalType": "contract IPFrax",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "reserve",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountIn_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "fraxOutMin_",
        "type": "uint256"
      }
    ],
    "name": "sell",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "supply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tokenPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "uri",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const,RelayManager : [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to_",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "functionName_",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "functionDataHash_",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "signature_",
        "type": "bytes"
      }
    ],
    "name": "execute",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getNonce",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "address_",
        "type": "address"
      }
    ],
    "name": "nonceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to_",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "functionName_",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "functionDataHash_",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "signature_",
        "type": "bytes"
      }
    ],
    "name": "validate",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "signer_",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "messageHash_",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "signature_",
        "type": "bytes"
      }
    ],
    "name": "verifySignature",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  }
] as const,SignatureVerifier : [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "signer_",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "messageHash_",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "signature_",
        "type": "bytes"
      }
    ],
    "name": "verifySignature",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  }
] as const,} as const;export const bytecode = {AuxillaryList : "0x608060405234801561000f575f5ffd5b50335f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610081575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100789190610196565b60405180910390fd5b6100908161009660201b60201c565b506101af565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61018082610157565b9050919050565b61019081610176565b82525050565b5f6020820190506101a95f830184610187565b92915050565b610df5806101bc5f395ff3fe608060405234801561000f575f5ffd5b50600436106100a7575f3560e01c80635dbe47e81161006f5780635dbe47e81461013b5780636bdc38841461016b578063715018a6146101875780638da5cb5b14610191578063f2fde38b146101af578063fd6aad25146101cb576100a7565b8063046f7b9d146100ab5780630a3b0a4f146100c75780631f7b6d32146100e357806329092d0e1461010157806353ed51431461011d575b5f5ffd5b6100c560048036038101906100c09190610a97565b6101fb565b005b6100e160048036038101906100dc9190610a97565b610299565b005b6100eb6103fa565b6040516100f89190610ada565b60405180910390f35b61011b60048036038101906101169190610a97565b610406565b005b61012561066c565b6040516101329190610baa565b60405180910390f35b61015560048036038101906101509190610a97565b6106f7565b6040516101629190610be4565b60405180910390f35b61018560048036038101906101809190610a97565b610749565b005b61018f6107e6565b005b6101996107f9565b6040516101a69190610c0c565b60405180910390f35b6101c960048036038101906101c49190610a97565b610820565b005b6101e560048036038101906101e09190610a97565b6108a4565b6040516101f29190610ada565b60405180910390f35b6102036108ea565b60035f8273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff161561028d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161028490610c7f565b60405180910390fd5b61029681610299565b50565b6102a16108ea565b60035f8273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff166103f757600181908060018154018082558091505060019003905f5260205f20015f9091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600180805490506103609190610cca565b60025f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055505b50565b5f600180549050905090565b61040e6108ea565b60035f8273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff1615610669575f60025f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205490505f600180805490506104b09190610cca565b9050808214610596575f600182815481106104ce576104cd610cfd565b5b905f5260205f20015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050806001848154811061050d5761050c610cfd565b5b905f5260205f20015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260025f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b60018054806105a8576105a7610d2a565b5b600190038181905f5260205f20015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055905560025f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f905560035f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81549060ff021916905550505b50565b606060018054806020026020016040519081016040528092919081815260200182805480156106ed57602002820191905f5260205f20905b815f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116106a4575b5050505050905090565b5f60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff169050919050565b6107516108ea565b60035f8273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff166107da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d190610da1565b60405180910390fd5b6107e381610406565b50565b6107ee6108ea565b6107f75f610971565b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6108286108ea565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610898575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161088f9190610c0c565b60405180910390fd5b6108a181610971565b50565b5f60025f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6108f2610a32565b73ffffffffffffffffffffffffffffffffffffffff166109106107f9565b73ffffffffffffffffffffffffffffffffffffffff161461096f57610933610a32565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016109669190610c0c565b60405180910390fd5b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610a6682610a3d565b9050919050565b610a7681610a5c565b8114610a80575f5ffd5b50565b5f81359050610a9181610a6d565b92915050565b5f60208284031215610aac57610aab610a39565b5b5f610ab984828501610a83565b91505092915050565b5f819050919050565b610ad481610ac2565b82525050565b5f602082019050610aed5f830184610acb565b92915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b610b2581610a5c565b82525050565b5f610b368383610b1c565b60208301905092915050565b5f602082019050919050565b5f610b5882610af3565b610b628185610afd565b9350610b6d83610b0d565b805f5b83811015610b9d578151610b848882610b2b565b9750610b8f83610b42565b925050600181019050610b70565b5085935050505092915050565b5f6020820190508181035f830152610bc28184610b4e565b905092915050565b5f8115159050919050565b610bde81610bca565b82525050565b5f602082019050610bf75f830184610bd5565b92915050565b610c0681610a5c565b82525050565b5f602082019050610c1f5f830184610bfd565b92915050565b5f82825260208201905092915050565b7f4164647265737320616c726561647920657869737473000000000000000000005f82015250565b5f610c69601683610c25565b9150610c7482610c35565b602082019050919050565b5f6020820190508181035f830152610c9681610c5d565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610cd482610ac2565b9150610cdf83610ac2565b9250828203905081811115610cf757610cf6610c9d565b5b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603160045260245ffd5b7f4164647265737320646f6573206e6f74206578697374000000000000000000005f82015250565b5f610d8b601683610c25565b9150610d9682610d57565b602082019050919050565b5f6020820190508181035f830152610db881610d7f565b905091905056fea26469706673582212201a02d6510557941081e545504f06cbb1f6e48b3d5f30f70331d83477813c3d7c64736f6c634300081c0033",
DummyFrax : "0x608060405234801561000f575f5ffd5b506040518060400160405280600481526020017f46524158000000000000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f4652415800000000000000000000000000000000000000000000000000000000815250816003908161008b91906105be565b50806004908161009b91906105be565b5050506100d6336100b06100db60201b60201c565b600a6100bc91906107f5565b6305f5e1006100cb919061083f565b6100e360201b60201c565b610968565b5f6012905090565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610153575f6040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161014a91906108bf565b60405180910390fd5b6101645f838361016860201b60201c565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036101b8578060025f8282546101ac91906108d8565b92505081905550610286565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015610241578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016102389392919061091a565b60405180910390fd5b8181035f5f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036102cd578060025f8282540392505081905550610317565b805f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610374919061094f565b60405180910390a3505050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806103fc57607f821691505b60208210810361040f5761040e6103b8565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026104717fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610436565b61047b8683610436565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f6104bf6104ba6104b584610493565b61049c565b610493565b9050919050565b5f819050919050565b6104d8836104a5565b6104ec6104e4826104c6565b848454610442565b825550505050565b5f5f905090565b6105036104f4565b61050e8184846104cf565b505050565b5b81811015610531576105265f826104fb565b600181019050610514565b5050565b601f8211156105765761054781610415565b61055084610427565b8101602085101561055f578190505b61057361056b85610427565b830182610513565b50505b505050565b5f82821c905092915050565b5f6105965f198460080261057b565b1980831691505092915050565b5f6105ae8383610587565b9150826002028217905092915050565b6105c782610381565b67ffffffffffffffff8111156105e0576105df61038b565b5b6105ea82546103e5565b6105f5828285610535565b5f60209050601f831160018114610626575f8415610614578287015190505b61061e85826105a3565b865550610685565b601f19841661063486610415565b5f5b8281101561065b57848901518255600182019150602085019450602081019050610636565b868310156106785784890151610674601f891682610587565b8355505b6001600288020188555050505b505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f8160011c9050919050565b5f5f8291508390505b600185111561070f578086048111156106eb576106ea61068d565b5b60018516156106fa5780820291505b8081029050610708856106ba565b94506106cf565b94509492505050565b5f8261072757600190506107e2565b81610734575f90506107e2565b816001811461074a576002811461075457610783565b60019150506107e2565b60ff8411156107665761076561068d565b5b8360020a91508482111561077d5761077c61068d565b5b506107e2565b5060208310610133831016604e8410600b84101617156107b85782820a9050838111156107b3576107b261068d565b5b6107e2565b6107c584848460016106c6565b925090508184048111156107dc576107db61068d565b5b81810290505b9392505050565b5f60ff82169050919050565b5f6107ff82610493565b915061080a836107e9565b92506108377fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484610718565b905092915050565b5f61084982610493565b915061085483610493565b925082820261086281610493565b915082820484148315176108795761087861068d565b5b5092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6108a982610880565b9050919050565b6108b98161089f565b82525050565b5f6020820190506108d25f8301846108b0565b92915050565b5f6108e282610493565b91506108ed83610493565b92508282019050808211156109055761090461068d565b5b92915050565b61091481610493565b82525050565b5f60608201905061092d5f8301866108b0565b61093a602083018561090b565b610947604083018461090b565b949350505050565b5f6020820190506109625f83018461090b565b92915050565b610de1806109755f395ff3fe608060405234801561000f575f5ffd5b5060043610610091575f3560e01c8063313ce56711610064578063313ce5671461013157806370a082311461014f57806395d89b411461017f578063a9059cbb1461019d578063dd62ed3e146101cd57610091565b806306fdde0314610095578063095ea7b3146100b357806318160ddd146100e357806323b872dd14610101575b5f5ffd5b61009d6101fd565b6040516100aa9190610a5a565b60405180910390f35b6100cd60048036038101906100c89190610b0b565b61028d565b6040516100da9190610b63565b60405180910390f35b6100eb6102af565b6040516100f89190610b8b565b60405180910390f35b61011b60048036038101906101169190610ba4565b6102b8565b6040516101289190610b63565b60405180910390f35b6101396102e6565b6040516101469190610c0f565b60405180910390f35b61016960048036038101906101649190610c28565b6102ee565b6040516101769190610b8b565b60405180910390f35b610187610333565b6040516101949190610a5a565b60405180910390f35b6101b760048036038101906101b29190610b0b565b6103c3565b6040516101c49190610b63565b60405180910390f35b6101e760048036038101906101e29190610c53565b6103e5565b6040516101f49190610b8b565b60405180910390f35b60606003805461020c90610cbe565b80601f016020809104026020016040519081016040528092919081815260200182805461023890610cbe565b80156102835780601f1061025a57610100808354040283529160200191610283565b820191905f5260205f20905b81548152906001019060200180831161026657829003601f168201915b5050505050905090565b5f5f610297610467565b90506102a481858561046e565b600191505092915050565b5f600254905090565b5f5f6102c2610467565b90506102cf858285610480565b6102da858585610512565b60019150509392505050565b5f6012905090565b5f5f5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b60606004805461034290610cbe565b80601f016020809104026020016040519081016040528092919081815260200182805461036e90610cbe565b80156103b95780601f10610390576101008083540402835291602001916103b9565b820191905f5260205f20905b81548152906001019060200180831161039c57829003601f168201915b5050505050905090565b5f5f6103cd610467565b90506103da818585610512565b600191505092915050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b5f33905090565b61047b8383836001610602565b505050565b5f61048b84846103e5565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461050c57818110156104fd578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016104f493929190610cfd565b60405180910390fd5b61050b84848484035f610602565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610582575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016105799190610d32565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036105f2575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016105e99190610d32565b60405180910390fd5b6105fd8383836107d1565b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610672575f6040517fe602df050000000000000000000000000000000000000000000000000000000081526004016106699190610d32565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036106e2575f6040517f94280d620000000000000000000000000000000000000000000000000000000081526004016106d99190610d32565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f208190555080156107cb578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516107c29190610b8b565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610821578060025f8282546108159190610d78565b925050819055506108ef565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050818110156108aa578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016108a193929190610cfd565b60405180910390fd5b8181035f5f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610936578060025f8282540392505081905550610980565b805f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516109dd9190610b8b565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f610a2c826109ea565b610a3681856109f4565b9350610a46818560208601610a04565b610a4f81610a12565b840191505092915050565b5f6020820190508181035f830152610a728184610a22565b905092915050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610aa782610a7e565b9050919050565b610ab781610a9d565b8114610ac1575f5ffd5b50565b5f81359050610ad281610aae565b92915050565b5f819050919050565b610aea81610ad8565b8114610af4575f5ffd5b50565b5f81359050610b0581610ae1565b92915050565b5f5f60408385031215610b2157610b20610a7a565b5b5f610b2e85828601610ac4565b9250506020610b3f85828601610af7565b9150509250929050565b5f8115159050919050565b610b5d81610b49565b82525050565b5f602082019050610b765f830184610b54565b92915050565b610b8581610ad8565b82525050565b5f602082019050610b9e5f830184610b7c565b92915050565b5f5f5f60608486031215610bbb57610bba610a7a565b5b5f610bc886828701610ac4565b9350506020610bd986828701610ac4565b9250506040610bea86828701610af7565b9150509250925092565b5f60ff82169050919050565b610c0981610bf4565b82525050565b5f602082019050610c225f830184610c00565b92915050565b5f60208284031215610c3d57610c3c610a7a565b5b5f610c4a84828501610ac4565b91505092915050565b5f5f60408385031215610c6957610c68610a7a565b5b5f610c7685828601610ac4565b9250506020610c8785828601610ac4565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680610cd557607f821691505b602082108103610ce857610ce7610c91565b5b50919050565b610cf781610a9d565b82525050565b5f606082019050610d105f830186610cee565b610d1d6020830185610b7c565b610d2a6040830184610b7c565b949350505050565b5f602082019050610d455f830184610cee565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610d8282610ad8565b9150610d8d83610ad8565b9250828201905080821115610da557610da4610d4b565b5b9291505056fea26469706673582212209d37706972da9ab624faf10f10819a41d9b07889841098bafc77cfe122daa4e164736f6c634300081c0033",
PFrax : "0x60c060405234801561000f575f5ffd5b506040516129a13803806129a183398181016040528101906100319190610315565b336040518060400160405280600581526020017f70467261780000000000000000000000000000000000000000000000000000008152506040518060400160405280600581526020017f704652415800000000000000000000000000000000000000000000000000000081525081600390816100ad919061057d565b5080600490816100bd919061057d565b5050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610130575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610127919061065b565b60405180910390fd5b61013f816101f460201b60201c565b508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101bd573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101e191906106aa565b60ff1660a08160ff1681525050506106d5565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6102e4826102bb565b9050919050565b6102f4816102da565b81146102fe575f5ffd5b50565b5f8151905061030f816102eb565b92915050565b5f6020828403121561032a576103296102b7565b5b5f61033784828501610301565b91505092915050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806103bb57607f821691505b6020821081036103ce576103cd610377565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026104307fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826103f5565b61043a86836103f5565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61047e61047961047484610452565b61045b565b610452565b9050919050565b5f819050919050565b61049783610464565b6104ab6104a382610485565b848454610401565b825550505050565b5f5f905090565b6104c26104b3565b6104cd81848461048e565b505050565b5b818110156104f0576104e55f826104ba565b6001810190506104d3565b5050565b601f82111561053557610506816103d4565b61050f846103e6565b8101602085101561051e578190505b61053261052a856103e6565b8301826104d2565b50505b505050565b5f82821c905092915050565b5f6105555f198460080261053a565b1980831691505092915050565b5f61056d8383610546565b9150826002028217905092915050565b61058682610340565b67ffffffffffffffff81111561059f5761059e61034a565b5b6105a982546103a4565b6105b48282856104f4565b5f60209050601f8311600181146105e5575f84156105d3578287015190505b6105dd8582610562565b865550610644565b601f1984166105f3866103d4565b5f5b8281101561061a578489015182556001820191506020850194506020810190506105f5565b868310156106375784890151610633601f891682610546565b8355505b6001600288020188555050505b505050505050565b610655816102da565b82525050565b5f60208201905061066e5f83018461064c565b92915050565b5f60ff82169050919050565b61068981610674565b8114610693575f5ffd5b50565b5f815190506106a481610680565b92915050565b5f602082840312156106bf576106be6102b7565b5b5f6106cc84828501610696565b91505092915050565b60805160a05161229d6107045f395f61048501525f8181610503015281816105e00152610eaa015261229d5ff3fe608060405234801561000f575f5ffd5b506004361061011f575f3560e01c806395d89b41116100ab578063b7009f551161006f578063b7009f55146102f7578063cce7ec1314610313578063dd62ed3e1461032f578063ee97f7f31461035f578063f2fde38b1461037d5761011f565b806395d89b41146102535780639e521f0e14610271578063a1d79e6a1461028f578063a6dedeb5146102ab578063a9059cbb146102c75761011f565b8063313ce567116100f2578063313ce567146101bf57806370a08231146101dd578063715018a61461020d57806389b4ec8e146102175780638da5cb5b146102355761011f565b806306fdde0314610123578063095ea7b31461014157806318160ddd1461017157806323b872dd1461018f575b5f5ffd5b61012b610399565b604051610138919061183b565b60405180910390f35b61015b600480360381019061015691906118f0565b610429565b6040516101689190611948565b60405180910390f35b61017961044b565b6040516101869190611970565b60405180910390f35b6101a960048036038101906101a49190611989565b610454565b6040516101b69190611948565b60405180910390f35b6101c7610482565b6040516101d491906119f4565b60405180910390f35b6101f760048036038101906101f29190611a0d565b6104a9565b6040516102049190611970565b60405180910390f35b6102156104ee565b005b61021f610501565b60405161022c9190611a93565b60405180910390f35b61023d610525565b60405161024a9190611abb565b60405180910390f35b61025b61054d565b604051610268919061183b565b60405180910390f35b6102796105dd565b6040516102869190611970565b60405180910390f35b6102a960048036038101906102a49190611a0d565b61067b565b005b6102c560048036038101906102c09190611b35565b6106c6565b005b6102e160048036038101906102dc91906118f0565b610bcf565b6040516102ee9190611948565b60405180910390f35b610311600480360381019061030c9190611b35565b610bf1565b005b61032d600480360381019061032891906118f0565b610ea8565b005b61034960048036038101906103449190611bb9565b610f54565b6040516103569190611970565b60405180910390f35b610367610fd6565b6040516103749190611c17565b60405180910390f35b61039760048036038101906103929190611a0d565b610ffb565b005b6060600380546103a890611c5d565b80601f01602080910402602001604051908101604052809291908181526020018280546103d490611c5d565b801561041f5780601f106103f65761010080835404028352916020019161041f565b820191905f5260205f20905b81548152906001019060200180831161040257829003601f168201915b5050505050905090565b5f5f61043361107f565b9050610440818585611086565b600191505092915050565b5f600254905090565b5f5f61045e61107f565b905061046b858285611098565b61047685858561112a565b60019150509392505050565b5f7f0000000000000000000000000000000000000000000000000000000000000000905090565b5f5f5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6104f661121a565b6104ff5f6112a1565b565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461055c90611c5d565b80601f016020809104026020016040519081016040528092919081815260200182805461058890611c5d565b80156105d35780601f106105aa576101008083540402835291602001916105d3565b820191905f5260205f20905b8154815290600101906020018083116105b657829003601f168201915b5050505050905090565b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016106379190611abb565b602060405180830381865afa158015610652573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106769190611ca1565b905090565b61068361121a565b8060065f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b5f84846040516020016106da929190611d31565b6040516020818303038152906040528051906020012090505f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663af4a5d80888487876040518563ffffffff1660e01b81526004016107539493929190611e08565b6020604051808303815f875af115801561076f573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107939190611e83565b9050806107d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107cc90611f1e565b60405180910390fd5b6107de876104a9565b851115610820576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081790611f86565b60405180910390fd5b5f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636999b3776040518163ffffffff1660e01b8152600401602060405180830381865afa15801561088b573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108af9190611fdf565b73ffffffffffffffffffffffffffffffffffffffff166314971b796040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108f7573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061091b9190611ca1565b905060065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630f11081f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610987573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109ab9190611ca1565b60646109b79190612037565b8610610aba5760065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636999b3776040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a27573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a4b9190611fdf565b73ffffffffffffffffffffffffffffffffffffffff16636528d74d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a93573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ab79190611ca1565b90505b60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636999b3776040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b24573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b489190611fdf565b73ffffffffffffffffffffffffffffffffffffffff16639dc841d289836040518363ffffffff1660e01b8152600401610b82929190612078565b5f604051808303815f87803b158015610b99575f5ffd5b505af1158015610bab573d5f5f3e3d5ffd5b50505050610bc588888389610bc0919061209f565b61112a565b5050505050505050565b5f5f610bd961107f565b9050610be681858561112a565b600191505092915050565b5f8484604051602001610c05929190611d31565b6040516020818303038152906040528051906020012090505f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663af4a5d80888487876040518563ffffffff1660e01b8152600401610c7e949392919061211c565b6020604051808303815f875af1158015610c9a573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cbe9190611e83565b905080610d00576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf790611f1e565b60405180910390fd5b5f6103e860065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630f11081f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d6e573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d929190611ca1565b610d9c919061219a565b905060065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636999b3776040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e08573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e2c9190611fdf565b73ffffffffffffffffffffffffffffffffffffffff16639dc841d289836040518363ffffffff1660e01b8152600401610e66929190612078565b5f604051808303815f87803b158015610e7d575f5ffd5b505af1158015610e8f573d5f5f3e3d5ffd5b50505050610e9e888888611086565b5050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b8152600401610f05939291906121ca565b6020604051808303815f875af1158015610f21573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f459190611e83565b50610f508282611364565b5050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61100361121a565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611073575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161106a9190611abb565b60405180910390fd5b61107c816112a1565b50565b5f33905090565b61109383838360016113e3565b505050565b5f6110a38484610f54565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146111245781811015611115578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161110c939291906121ff565b60405180910390fd5b61112384848484035f6113e3565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361119a575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016111919190611abb565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361120a575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016112019190611abb565b60405180910390fd5b6112158383836115b2565b505050565b61122261107f565b73ffffffffffffffffffffffffffffffffffffffff16611240610525565b73ffffffffffffffffffffffffffffffffffffffff161461129f5761126361107f565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016112969190611abb565b60405180910390fd5b565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036113d4575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016113cb9190611abb565b60405180910390fd5b6113df5f83836115b2565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603611453575f6040517fe602df0500000000000000000000000000000000000000000000000000000000815260040161144a9190611abb565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036114c3575f6040517f94280d620000000000000000000000000000000000000000000000000000000081526004016114ba9190611abb565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f208190555080156115ac578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516115a39190611970565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611602578060025f8282546115f69190612234565b925050819055506116d0565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205490508181101561168b578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401611682939291906121ff565b60405180910390fd5b8181035f5f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611717578060025f8282540392505081905550611761565b805f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516117be9190611970565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f61180d826117cb565b61181781856117d5565b93506118278185602086016117e5565b611830816117f3565b840191505092915050565b5f6020820190508181035f8301526118538184611803565b905092915050565b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61188c82611863565b9050919050565b61189c81611882565b81146118a6575f5ffd5b50565b5f813590506118b781611893565b92915050565b5f819050919050565b6118cf816118bd565b81146118d9575f5ffd5b50565b5f813590506118ea816118c6565b92915050565b5f5f604083850312156119065761190561185b565b5b5f611913858286016118a9565b9250506020611924858286016118dc565b9150509250929050565b5f8115159050919050565b6119428161192e565b82525050565b5f60208201905061195b5f830184611939565b92915050565b61196a816118bd565b82525050565b5f6020820190506119835f830184611961565b92915050565b5f5f5f606084860312156119a05761199f61185b565b5b5f6119ad868287016118a9565b93505060206119be868287016118a9565b92505060406119cf868287016118dc565b9150509250925092565b5f60ff82169050919050565b6119ee816119d9565b82525050565b5f602082019050611a075f8301846119e5565b92915050565b5f60208284031215611a2257611a2161185b565b5b5f611a2f848285016118a9565b91505092915050565b5f819050919050565b5f611a5b611a56611a5184611863565b611a38565b611863565b9050919050565b5f611a6c82611a41565b9050919050565b5f611a7d82611a62565b9050919050565b611a8d81611a73565b82525050565b5f602082019050611aa65f830184611a84565b92915050565b611ab581611882565b82525050565b5f602082019050611ace5f830184611aac565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f840112611af557611af4611ad4565b5b8235905067ffffffffffffffff811115611b1257611b11611ad8565b5b602083019150836001820283011115611b2e57611b2d611adc565b5b9250929050565b5f5f5f5f5f60808688031215611b4e57611b4d61185b565b5b5f611b5b888289016118a9565b9550506020611b6c888289016118a9565b9450506040611b7d888289016118dc565b935050606086013567ffffffffffffffff811115611b9e57611b9d61185f565b5b611baa88828901611ae0565b92509250509295509295909350565b5f5f60408385031215611bcf57611bce61185b565b5b5f611bdc858286016118a9565b9250506020611bed858286016118a9565b9150509250929050565b5f611c0182611a62565b9050919050565b611c1181611bf7565b82525050565b5f602082019050611c2a5f830184611c08565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680611c7457607f821691505b602082108103611c8757611c86611c30565b5b50919050565b5f81519050611c9b816118c6565b92915050565b5f60208284031215611cb657611cb561185b565b5b5f611cc384828501611c8d565b91505092915050565b5f8160601b9050919050565b5f611ce282611ccc565b9050919050565b5f611cf382611cd8565b9050919050565b611d0b611d0682611882565b611ce9565b82525050565b5f819050919050565b611d2b611d26826118bd565b611d11565b82525050565b5f611d3c8285611cfa565b601482019150611d4c8284611d1a565b6020820191508190509392505050565b7f7472616e736665720000000000000000000000000000000000000000000000005f82015250565b5f611d906008836117d5565b9150611d9b82611d5c565b602082019050919050565b5f819050919050565b611db881611da6565b82525050565b5f82825260208201905092915050565b828183375f83830152505050565b5f611de78385611dbe565b9350611df4838584611dce565b611dfd836117f3565b840190509392505050565b5f608082019050611e1b5f830187611aac565b8181036020830152611e2c81611d84565b9050611e3b6040830186611daf565b8181036060830152611e4e818486611ddc565b905095945050505050565b611e628161192e565b8114611e6c575f5ffd5b50565b5f81519050611e7d81611e59565b92915050565b5f60208284031215611e9857611e9761185b565b5b5f611ea584828501611e6f565b91505092915050565b7f457865637574696f6e204661696c65643b20496e76616c6964617465642062795f8201527f2052656c61794d616e6167657200000000000000000000000000000000000000602082015250565b5f611f08602d836117d5565b9150611f1382611eae565b604082019050919050565b5f6020820190508181035f830152611f3581611efc565b9050919050565b7f496e73756666696369656e742042616c616e63650000000000000000000000005f82015250565b5f611f706014836117d5565b9150611f7b82611f3c565b602082019050919050565b5f6020820190508181035f830152611f9d81611f64565b9050919050565b5f611fae82611882565b9050919050565b611fbe81611fa4565b8114611fc8575f5ffd5b50565b5f81519050611fd981611fb5565b92915050565b5f60208284031215611ff457611ff361185b565b5b5f61200184828501611fcb565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f612041826118bd565b915061204c836118bd565b925082820261205a816118bd565b915082820484148315176120715761207061200a565b5b5092915050565b5f60408201905061208b5f830185611aac565b6120986020830184611961565b9392505050565b5f6120a9826118bd565b91506120b4836118bd565b92508282039050818111156120cc576120cb61200a565b5b92915050565b7f617070726f7665000000000000000000000000000000000000000000000000005f82015250565b5f6121066007836117d5565b9150612111826120d2565b602082019050919050565b5f60808201905061212f5f830187611aac565b8181036020830152612140816120fa565b905061214f6040830186611daf565b8181036060830152612162818486611ddc565b905095945050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f6121a4826118bd565b91506121af836118bd565b9250826121bf576121be61216d565b5b828204905092915050565b5f6060820190506121dd5f830186611aac565b6121ea6020830185611aac565b6121f76040830184611961565b949350505050565b5f6060820190506122125f830186611aac565b61221f6020830185611961565b61222c6040830184611961565b949350505050565b5f61223e826118bd565b9150612249836118bd565b92508282019050808211156122615761226061200a565b5b9291505056fea2646970667358221220c15adb4b2c557673cb0cfcb18c21168c97ad8b02cf18372ef7904e717c75749464736f6c634300081c0033",
PumpfaxtFeeController : "0x60a0604052348015600e575f5ffd5b503373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250506080516107bc6100625f395f8181610221015261032301526107bc5ff3fe608060405234801561000f575f5ffd5b50600436106100b2575f3560e01c80637280cbca1161006f5780637280cbca1461016457806399c0584a146101805780639dc841d21461019e578063a297a6f1146101ba578063b1f8dfac146101d6578063e8f03079146101f2576100b2565b806314971b79146100b657806319d4771b146100d45780633b65bba1146100f05780635d53ac641461010c5780636528d74d14610128578063707afc6514610146575b5f5ffd5b6100be610210565b6040516100cb91906104bf565b60405180910390f35b6100ee60048036038101906100e99190610506565b610215565b005b61010a600480360381019061010591906105be565b61021f565b005b61012660048036038101906101219190610506565b6102fb565b005b610130610305565b60405161013d91906104bf565b60405180910390f35b61014e61030b565b60405161015b91906104bf565b60405180910390f35b61017e60048036038101906101799190610506565b610311565b005b61018861031b565b60405161019591906104bf565b60405180910390f35b6101b860048036038101906101b3919061060e565b610321565b005b6101d460048036038101906101cf9190610506565b61048e565b005b6101f060048036038101906101eb9190610506565b610498565b005b6101fa6104a1565b60405161020791906104bf565b60405180910390f35b5f5481565b8060038190555050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e979eca184846040518363ffffffff1660e01b815260040161027a92919061065b565b5f604051808303815f87803b158015610291575f5ffd5b505af11580156102a3573d5f5f3e3d5ffd5b50505050808373ffffffffffffffffffffffffffffffffffffffff167f09221a53d356784b83149a716120974f0c7e52b58f8d989e0287c7663e3f96a2846040516102ee91906104bf565b60405180910390a3505050565b8060018190555050565b60015481565b60025481565b8060028190555050565b60035481565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166376c16abe6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561038a573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103ae91906106bd565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461041b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041290610768565b60405180910390fd5b7fbc0f177d15c7014cc764db00766c7e390ca4bfdaf9c7e59b6ae854bb23f167938273ffffffffffffffffffffffffffffffffffffffff167f09221a53d356784b83149a716120974f0c7e52b58f8d989e0287c7663e3f96a28360405161048291906104bf565b60405180910390a35050565b8060048190555050565b805f8190555050565b60045481565b5f819050919050565b6104b9816104a7565b82525050565b5f6020820190506104d25f8301846104b0565b92915050565b5f5ffd5b6104e5816104a7565b81146104ef575f5ffd5b50565b5f81359050610500816104dc565b92915050565b5f6020828403121561051b5761051a6104d8565b5b5f610528848285016104f2565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61055a82610531565b9050919050565b61056a81610550565b8114610574575f5ffd5b50565b5f8135905061058581610561565b92915050565b5f819050919050565b61059d8161058b565b81146105a7575f5ffd5b50565b5f813590506105b881610594565b92915050565b5f5f5f606084860312156105d5576105d46104d8565b5b5f6105e286828701610577565b93505060206105f3868287016104f2565b9250506040610604868287016105aa565b9150509250925092565b5f5f60408385031215610624576106236104d8565b5b5f61063185828601610577565b9250506020610642858286016104f2565b9150509250929050565b61065581610550565b82525050565b5f60408201905061066e5f83018561064c565b61067b60208301846104b0565b9392505050565b5f61068c82610550565b9050919050565b61069c81610682565b81146106a6575f5ffd5b50565b5f815190506106b781610693565b92915050565b5f602082840312156106d2576106d16104d8565b5b5f6106df848285016106a9565b91505092915050565b5f82825260208201905092915050565b7f4f6e6c7920504672617820696e746572616374696f6e732063616e20626520725f8201527f65636f72646564207573696e6720746869732066756e6374696f6e0000000000602082015250565b5f610752603b836106e8565b915061075d826106f8565b604082019050919050565b5f6020820190508181035f83015261077f81610746565b905091905056fea26469706673582212208aa7be8b6ed2725b012322258fa5b93e95e88a781c2dc6dd32f1135af52ffc9564736f6c634300081c0033",
PumpfaxtMaster : "0x610120604052348015610010575f5ffd5b50604051616fd9380380616fd9833981810160405281019061003291906103fd565b335f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100a3575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161009a9190610437565b60405180910390fd5b6100b2816102c460201b60201c565b508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff168152505060a05173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610132573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101569190610486565b600a6101629190610616565b610100818152505060a05173ffffffffffffffffffffffffffffffffffffffff166389b4ec8e6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101b5573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101d9919061069b565b73ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505060405161021890610385565b604051809103905ff080158015610231573d5f5f3e3d5ffd5b5073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff168152505060405161027190610392565b604051809103905ff08015801561028a573d5f5f3e3d5ffd5b5073ffffffffffffffffffffffffffffffffffffffff1660e08173ffffffffffffffffffffffffffffffffffffffff1681525050506106c6565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610ca680615b1583390190565b61081e806167bb83390190565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6103cc826103a3565b9050919050565b6103dc816103c2565b81146103e6575f5ffd5b50565b5f815190506103f7816103d3565b92915050565b5f602082840312156104125761041161039f565b5b5f61041f848285016103e9565b91505092915050565b610431816103c2565b82525050565b5f60208201905061044a5f830184610428565b92915050565b5f60ff82169050919050565b61046581610450565b811461046f575f5ffd5b50565b5f815190506104808161045c565b92915050565b5f6020828403121561049b5761049a61039f565b5b5f6104a884828501610472565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f8160011c9050919050565b5f5f8291508390505b60018511156105335780860481111561050f5761050e6104b1565b5b600185161561051e5780820291505b808102905061052c856104de565b94506104f3565b94509492505050565b5f8261054b5760019050610606565b81610558575f9050610606565b816001811461056e5760028114610578576105a7565b6001915050610606565b60ff84111561058a576105896104b1565b5b8360020a9150848211156105a1576105a06104b1565b5b50610606565b5060208310610133831016604e8410600b84101617156105dc5782820a9050838111156105d7576105d66104b1565b5b610606565b6105e984848460016104ea565b92509050818404811115610600576105ff6104b1565b5b81810290505b9392505050565b5f819050919050565b5f6106208261060d565b915061062b83610450565b92506106587fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848461053c565b905092915050565b5f61066a826103c2565b9050919050565b61067a81610660565b8114610684575f5ffd5b50565b5f8151905061069581610671565b92915050565b5f602082840312156106b0576106af61039f565b5b5f6106bd84828501610687565b91505092915050565b60805160a05160c05160e051610100516153e861072d5f395f61031101525f8181610370015261084601525f818161034c015281816103fa015261067201525f81816103a7015281816105d9015281816107a401526108d401525f6104f301526153e85ff3fe608060405234801561000f575f5ffd5b5060043610610109575f3560e01c806389b4ec8e116100a0578063af4a5d801161006f578063af4a5d801461026f578063c357ea991461029f578063e979eca1146102bb578063ec330679146102d7578063f2fde38b146102f357610109565b806389b4ec8e146101e55780638da5cb5b14610203578063a42e6fba14610221578063ad3dc0131461025157610109565b80636999b377116100dc5780636999b37714610183578063715018a6146101a157806376c16abe146101ab5780637e512972146101c957610109565b80630f11081f1461010d57806319f2d2551461012b5780633b0c81b31461014757806355b5d88b14610165575b5f5ffd5b61011561030f565b6040516101229190610c57565b60405180910390f35b61014560048036038101906101409190610dbd565b610333565b005b61014f610344565b60405161015c9190610c57565b60405180910390f35b61016d61034a565b60405161017a9190610edb565b60405180910390f35b61018b61036e565b6040516101989190610f14565b60405180910390f35b6101a9610392565b005b6101b36103a5565b6040516101c09190610f4d565b60405180910390f35b6101e360048036038101906101de9190610ffe565b6103c9565b005b6101ed6104f1565b6040516101fa9190611108565b60405180910390f35b61020b610515565b6040516102189190611130565b60405180910390f35b61023b60048036038101906102369190611149565b61053c565b6040516102489190610c57565b60405180910390f35b610259610582565b6040516102669190610c57565b60405180910390f35b610289600480360381019061028491906111a7565b610588565b6040516102969190611261565b60405180910390f35b6102b960048036038101906102b491906112a4565b610723565b005b6102d560048036038101906102d091906112a4565b610844565b005b6102f160048036038101906102ec91906112e2565b610974565b005b61030d60048036038101906103089190611149565b61098e565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b61033f33848484610a12565b505050565b60025481565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b61039a610ae3565b6103a35f610b6a565b565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f8585856040516020016103df93929190611372565b6040516020818303038152906040528051906020012090505f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166330cf1e6889308588886040518663ffffffff1660e01b8152600401610459959493929190611447565b6020604051808303815f875af1158015610475573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061049991906114d0565b9050806104db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d29061156b565b60405180910390fd5b6104e733888888610a12565b5050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b5f60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b60015481565b5f5f5f90505f60035f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205411156105d757600190505b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff160361062f57600190505b8061066f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610666906115d3565b60405180910390fd5b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166330cf1e6889338a8a8a8a6040518763ffffffff1660e01b81526004016106d396959493929190611629565b6020604051808303815f875af11580156106ef573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061071391906114d0565b9050809250505095945050505050565b5f60035f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054116107a2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610799906116fa565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd8333846040518463ffffffff1660e01b81526004016107ff93929190611718565b6020604051808303815f875af115801561081b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061083f91906114d0565b505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c9906117bd565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd8333846040518463ffffffff1660e01b815260040161092f93929190611718565b6020604051808303815f875af115801561094b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061096f91906114d0565b505050565b61097c610ae3565b81600181905550806002819055505050565b610996610ae3565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a06575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016109fd9190611130565b60405180910390fd5b610a0f81610b6a565b50565b5f84848484604051610a2390610c32565b610a3094939291906117db565b604051809103905ff080158015610a49573d5f5f3e3d5ffd5b5090504360035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508473ffffffffffffffffffffffffffffffffffffffff167fe4b8baaa1c927a55ac28b7693040a55b0b48044cf0572d1fc3beb0f418054a2082604051610ad49190611130565b60405180910390a25050505050565b610aeb610c2b565b73ffffffffffffffffffffffffffffffffffffffff16610b09610515565b73ffffffffffffffffffffffffffffffffffffffff1614610b6857610b2c610c2b565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610b5f9190611130565b60405180910390fd5b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b613b7f8061183483390190565b5f819050919050565b610c5181610c3f565b82525050565b5f602082019050610c6a5f830184610c48565b92915050565b5f604051905090565b5f5ffd5b5f5ffd5b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b610ccf82610c89565b810181811067ffffffffffffffff82111715610cee57610ced610c99565b5b80604052505050565b5f610d00610c70565b9050610d0c8282610cc6565b919050565b5f67ffffffffffffffff821115610d2b57610d2a610c99565b5b610d3482610c89565b9050602081019050919050565b828183375f83830152505050565b5f610d61610d5c84610d11565b610cf7565b905082815260208101848484011115610d7d57610d7c610c85565b5b610d88848285610d41565b509392505050565b5f82601f830112610da457610da3610c81565b5b8135610db4848260208601610d4f565b91505092915050565b5f5f5f60608486031215610dd457610dd3610c79565b5b5f84013567ffffffffffffffff811115610df157610df0610c7d565b5b610dfd86828701610d90565b935050602084013567ffffffffffffffff811115610e1e57610e1d610c7d565b5b610e2a86828701610d90565b925050604084013567ffffffffffffffff811115610e4b57610e4a610c7d565b5b610e5786828701610d90565b9150509250925092565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f819050919050565b5f610ea3610e9e610e9984610e61565b610e80565b610e61565b9050919050565b5f610eb482610e89565b9050919050565b5f610ec582610eaa565b9050919050565b610ed581610ebb565b82525050565b5f602082019050610eee5f830184610ecc565b92915050565b5f610efe82610eaa565b9050919050565b610f0e81610ef4565b82525050565b5f602082019050610f275f830184610f05565b92915050565b5f610f3782610eaa565b9050919050565b610f4781610f2d565b82525050565b5f602082019050610f605f830184610f3e565b92915050565b5f610f7082610e61565b9050919050565b610f8081610f66565b8114610f8a575f5ffd5b50565b5f81359050610f9b81610f77565b92915050565b5f5ffd5b5f5ffd5b5f5f83601f840112610fbe57610fbd610c81565b5b8235905067ffffffffffffffff811115610fdb57610fda610fa1565b5b602083019150836001820283011115610ff757610ff6610fa5565b5b9250929050565b5f5f5f5f5f5f60a0878903121561101857611017610c79565b5b5f61102589828a01610f8d565b965050602087013567ffffffffffffffff81111561104657611045610c7d565b5b61105289828a01610d90565b955050604087013567ffffffffffffffff81111561107357611072610c7d565b5b61107f89828a01610d90565b945050606087013567ffffffffffffffff8111156110a05761109f610c7d565b5b6110ac89828a01610d90565b935050608087013567ffffffffffffffff8111156110cd576110cc610c7d565b5b6110d989828a01610fa9565b92509250509295509295509295565b5f6110f282610eaa565b9050919050565b611102816110e8565b82525050565b5f60208201905061111b5f8301846110f9565b92915050565b61112a81610f66565b82525050565b5f6020820190506111435f830184611121565b92915050565b5f6020828403121561115e5761115d610c79565b5b5f61116b84828501610f8d565b91505092915050565b5f819050919050565b61118681611174565b8114611190575f5ffd5b50565b5f813590506111a18161117d565b92915050565b5f5f5f5f5f608086880312156111c0576111bf610c79565b5b5f6111cd88828901610f8d565b955050602086013567ffffffffffffffff8111156111ee576111ed610c7d565b5b6111fa88828901610d90565b945050604061120b88828901611193565b935050606086013567ffffffffffffffff81111561122c5761122b610c7d565b5b61123888828901610fa9565b92509250509295509295909350565b5f8115159050919050565b61125b81611247565b82525050565b5f6020820190506112745f830184611252565b92915050565b61128381610c3f565b811461128d575f5ffd5b50565b5f8135905061129e8161127a565b92915050565b5f5f604083850312156112ba576112b9610c79565b5b5f6112c785828601610f8d565b92505060206112d885828601611290565b9150509250929050565b5f5f604083850312156112f8576112f7610c79565b5b5f61130585828601611290565b925050602061131685828601611290565b9150509250929050565b5f81519050919050565b5f81905092915050565b8281835e5f83830152505050565b5f61134c82611320565b611356818561132a565b9350611366818560208601611334565b80840191505092915050565b5f61137d8286611342565b91506113898285611342565b91506113958284611342565b9150819050949350505050565b5f82825260208201905092915050565b7f6c61756e6368546f6b656e0000000000000000000000000000000000000000005f82015250565b5f6113e6600b836113a2565b91506113f1826113b2565b602082019050919050565b61140581611174565b82525050565b5f82825260208201905092915050565b5f611426838561140b565b9350611433838584610d41565b61143c83610c89565b840190509392505050565b5f60a08201905061145a5f830188611121565b6114676020830187611121565b8181036040830152611478816113da565b905061148760608301866113fc565b818103608083015261149a81848661141b565b90509695505050505050565b6114af81611247565b81146114b9575f5ffd5b50565b5f815190506114ca816114a6565b92915050565b5f602082840312156114e5576114e4610c79565b5b5f6114f2848285016114bc565b91505092915050565b7f457865637574696f6e204661696c65643b20496e76616c6964617465642062795f8201527f2052656c61794d616e6167657200000000000000000000000000000000000000602082015250565b5f611555602d836113a2565b9150611560826114fb565b604082019050919050565b5f6020820190508181035f83015261158281611549565b9050919050565b7f4e6f7420616c6c6f77656420746f2065786563757465206d65746120747800005f82015250565b5f6115bd601e836113a2565b91506115c882611589565b602082019050919050565b5f6020820190508181035f8301526115ea816115b1565b9050919050565b5f6115fb82611320565b61160581856113a2565b9350611615818560208601611334565b61161e81610c89565b840191505092915050565b5f60a08201905061163c5f830189611121565b6116496020830188611121565b818103604083015261165b81876115f1565b905061166a60608301866113fc565b818103608083015261167d81848661141b565b9050979650505050505050565b7f4f6e6c7920546f6b656e20436f6e7472616374732063616e2063616c6c2074685f8201527f6973206d6574686f640000000000000000000000000000000000000000000000602082015250565b5f6116e46029836113a2565b91506116ef8261168a565b604082019050919050565b5f6020820190508181035f830152611711816116d8565b9050919050565b5f60608201905061172b5f830186611121565b6117386020830185611121565b6117456040830184610c48565b949350505050565b7f4f6e6c792046656520436f6e74726f6c6c65722063616e2063616c6c207468695f8201527f73206d6574686f64000000000000000000000000000000000000000000000000602082015250565b5f6117a76028836113a2565b91506117b28261174d565b604082019050919050565b5f6020820190508181035f8301526117d48161179b565b9050919050565b5f6080820190506117ee5f830187611121565b818103602083015261180081866115f1565b9050818103604083015261181481856115f1565b9050818103606083015261182881846115f1565b90509594505050505056fe60e060405234801561000f575f5ffd5b50604051613b7f380380613b7f83398181016040528101906100319190610b7f565b828281600390816100429190610e47565b5080600490816100529190610e47565b5050503360095f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166376c16abe6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100ff573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101239190610f51565b73ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505060805173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101a1573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101c59190610fb2565b60ff1660c08160ff168152505060095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630f11081f6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561023c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102609190611007565b60a0818152505060095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636999b3776040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102d1573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102f5919061106d565b600a5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508360075f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600890816103839190610e47565b5061043a3060c051600a61039791906111f4565b60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b0c81b36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610401573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104259190611007565b61042f919061123e565b6105ba60201b60201c565b60a05160095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ad3dc0136040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104a7573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104cb9190611007565b6104d5919061123e565b6005819055506104e961063f60201b60201c565b60a0516104fa61065460201b60201c565b610504919061123e565b61050e91906112ac565b6006819055505f6005541180156105405750600554600361052f919061123e565b61053d61065460201b60201c565b10155b156105b1575f61055461063f60201b60201c565b6064600554610563919061123e565b61056d91906112ac565b90505f6005819055505f60648261058861063f60201b60201c565b610592919061123e565b61059c91906112ac565b90506105ae308261067560201b60201c565b50505b50505050611394565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361062a575f6040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161062191906112eb565b60405180910390fd5b61063b5f83836106fa60201b60201c565b5050565b5f61064f3061091360201b60201c565b905090565b5f61066361095860201b60201c565b6005546106709190611304565b905090565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106e5575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016106dc91906112eb565b60405180910390fd5b6106f6825f836106fa60201b60201c565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361074a578060025f82825461073e9190611304565b92505081905550610818565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050818110156107d3578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016107ca93929190611346565b60405180910390fd5b8181035f5f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361085f578060025f82825403925050819055506108a9565b805f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610906919061137b565b60405180910390a3505050565b5f5f5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b5f60805173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161099491906112eb565b602060405180830381865afa1580156109af573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109d39190611007565b905090565b5f604051905090565b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610a12826109e9565b9050919050565b610a2281610a08565b8114610a2c575f5ffd5b50565b5f81519050610a3d81610a19565b92915050565b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b610a9182610a4b565b810181811067ffffffffffffffff82111715610ab057610aaf610a5b565b5b80604052505050565b5f610ac26109d8565b9050610ace8282610a88565b919050565b5f67ffffffffffffffff821115610aed57610aec610a5b565b5b610af682610a4b565b9050602081019050919050565b8281835e5f83830152505050565b5f610b23610b1e84610ad3565b610ab9565b905082815260208101848484011115610b3f57610b3e610a47565b5b610b4a848285610b03565b509392505050565b5f82601f830112610b6657610b65610a43565b5b8151610b76848260208601610b11565b91505092915050565b5f5f5f5f60808587031215610b9757610b966109e1565b5b5f610ba487828801610a2f565b945050602085015167ffffffffffffffff811115610bc557610bc46109e5565b5b610bd187828801610b52565b935050604085015167ffffffffffffffff811115610bf257610bf16109e5565b5b610bfe87828801610b52565b925050606085015167ffffffffffffffff811115610c1f57610c1e6109e5565b5b610c2b87828801610b52565b91505092959194509250565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680610c8557607f821691505b602082108103610c9857610c97610c41565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302610cfa7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610cbf565b610d048683610cbf565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f610d48610d43610d3e84610d1c565b610d25565b610d1c565b9050919050565b5f819050919050565b610d6183610d2e565b610d75610d6d82610d4f565b848454610ccb565b825550505050565b5f5f905090565b610d8c610d7d565b610d97818484610d58565b505050565b5b81811015610dba57610daf5f82610d84565b600181019050610d9d565b5050565b601f821115610dff57610dd081610c9e565b610dd984610cb0565b81016020851015610de8578190505b610dfc610df485610cb0565b830182610d9c565b50505b505050565b5f82821c905092915050565b5f610e1f5f1984600802610e04565b1980831691505092915050565b5f610e378383610e10565b9150826002028217905092915050565b610e5082610c37565b67ffffffffffffffff811115610e6957610e68610a5b565b5b610e738254610c6e565b610e7e828285610dbe565b5f60209050601f831160018114610eaf575f8415610e9d578287015190505b610ea78582610e2c565b865550610f0e565b601f198416610ebd86610c9e565b5f5b82811015610ee457848901518255600182019150602085019450602081019050610ebf565b86831015610f015784890151610efd601f891682610e10565b8355505b6001600288020188555050505b505050505050565b5f610f2082610a08565b9050919050565b610f3081610f16565b8114610f3a575f5ffd5b50565b5f81519050610f4b81610f27565b92915050565b5f60208284031215610f6657610f656109e1565b5b5f610f7384828501610f3d565b91505092915050565b5f60ff82169050919050565b610f9181610f7c565b8114610f9b575f5ffd5b50565b5f81519050610fac81610f88565b92915050565b5f60208284031215610fc757610fc66109e1565b5b5f610fd484828501610f9e565b91505092915050565b610fe681610d1c565b8114610ff0575f5ffd5b50565b5f8151905061100181610fdd565b92915050565b5f6020828403121561101c5761101b6109e1565b5b5f61102984828501610ff3565b91505092915050565b5f61103c82610a08565b9050919050565b61104c81611032565b8114611056575f5ffd5b50565b5f8151905061106781611043565b92915050565b5f60208284031215611082576110816109e1565b5b5f61108f84828501611059565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f8160011c9050919050565b5f5f8291508390505b600185111561111a578086048111156110f6576110f5611098565b5b60018516156111055780820291505b8081029050611113856110c5565b94506110da565b94509492505050565b5f8261113257600190506111ed565b8161113f575f90506111ed565b8160018114611155576002811461115f5761118e565b60019150506111ed565b60ff84111561117157611170611098565b5b8360020a91508482111561118857611187611098565b5b506111ed565b5060208310610133831016604e8410600b84101617156111c35782820a9050838111156111be576111bd611098565b5b6111ed565b6111d084848460016110d1565b925090508184048111156111e7576111e6611098565b5b81810290505b9392505050565b5f6111fe82610d1c565b915061120983610f7c565b92506112367fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484611123565b905092915050565b5f61124882610d1c565b915061125383610d1c565b925082820261126181610d1c565b9150828204841483151761127857611277611098565b5b5092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f6112b682610d1c565b91506112c183610d1c565b9250826112d1576112d061127f565b5b828204905092915050565b6112e581610a08565b82525050565b5f6020820190506112fe5f8301846112dc565b92915050565b5f61130e82610d1c565b915061131983610d1c565b925082820190508082111561133157611330611098565b5b92915050565b61134081610d1c565b82525050565b5f6060820190506113595f8301866112dc565b6113666020830185611337565b6113736040830184611337565b949350505050565b5f60208201905061138e5f830184611337565b92915050565b60805160a05160c0516127976113e85f395f61062f01525f8181610511015281816110e3015281816111b0015261157801525f818161053f0152818161060a01528181611032015261125501526127975ff3fe608060405234801561000f575f5ffd5b5060043610610140575f3560e01c80637ff9b596116100b6578063cd3293de1161007a578063cd3293de1461038e578063ce20d840146103ac578063d6febde8146103c8578063d79875eb146103e4578063dd62ed3e14610400578063eac989f81461043057610140565b80637ff9b596146102c257806387d12a3f146102e057806395d89b41146103105780639721f2901461032e578063a9059cbb1461035e57610140565b80631a686502116101085780631a686502146101ec57806323b872dd1461020a5780632c41d85d1461023a578063313ce56714610258578063503cb67d1461027657806370a082311461029257610140565b8063047fc9aa1461014457806306fdde0314610162578063095ea7b3146101805780630f11081f146101b057806318160ddd146101ce575b5f5ffd5b61014c61044e565b6040516101599190611ac2565b60405180910390f35b61016a61045d565b6040516101779190611b4b565b60405180910390f35b61019a60048036038101906101959190611bf7565b6104ed565b6040516101a79190611c4f565b60405180910390f35b6101b861050f565b6040516101c59190611ac2565b60405180910390f35b6101d6610533565b6040516101e39190611ac2565b60405180910390f35b6101f461053c565b6040516102019190611ac2565b60405180910390f35b610224600480360381019061021f9190611c68565b6105da565b6040516102319190611c4f565b60405180910390f35b610242610608565b60405161024f9190611d13565b60405180910390f35b61026061062c565b60405161026d9190611d47565b60405180910390f35b610290600480360381019061028b9190611dc1565b610653565b005b6102ac60048036038101906102a79190611e45565b610776565b6040516102b99190611ac2565b60405180910390f35b6102ca6107bb565b6040516102d79190611ac2565b60405180910390f35b6102fa60048036038101906102f59190611e70565b6107c4565b6040516103079190611ac2565b60405180910390f35b61031861088a565b6040516103259190611b4b565b60405180910390f35b61034860048036038101906103439190611e70565b61091a565b6040516103559190611ac2565b60405180910390f35b61037860048036038101906103739190611bf7565b6109e0565b6040516103859190611c4f565b60405180910390f35b610396610a02565b6040516103a39190611ac2565b60405180910390f35b6103c660048036038101906103c19190611dc1565b610a1d565b005b6103e260048036038101906103dd9190611e9b565b610b40565b005b6103fe60048036038101906103f99190611e9b565b610b4f565b005b61041a60048036038101906104159190611ed9565b610b5e565b6040516104279190611ac2565b60405180910390f35b610438610be0565b6040516104459190611b4b565b60405180910390f35b5f61045830610776565b905090565b60606003805461046c90611f44565b80601f016020809104026020016040519081016040528092919081815260200182805461049890611f44565b80156104e35780601f106104ba576101008083540402835291602001916104e3565b820191905f5260205f20905b8154815290600101906020018083116104c657829003601f168201915b5050505050905090565b5f5f6104f7610c70565b9050610504818585610c77565b600191505092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f600254905090565b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016105969190611f83565b602060405180830381865afa1580156105b1573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105d59190611fb0565b905090565b5f5f6105e4610c70565b90506105f1858285610c89565b6105fc858585610d1b565b60019150509392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f7f0000000000000000000000000000000000000000000000000000000000000000905090565b5f8484604051602001610667929190611ffb565b6040516020818303038152906040528051906020012090505f60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663af4a5d80888487876040518563ffffffff1660e01b81526004016106e094939291906120d2565b6020604051808303815f875af11580156106fc573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610720919061214d565b905080610762576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610759906121e8565b60405180910390fd5b61076d878787610e0b565b50505050505050565b5f5f5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b5f600654905090565b5f5f826107cf610a02565b6107d99190612233565b90505f836107e561044e565b6107ef9190612274565b9050818110610833576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082a906122f1565b60405180910390fd5b5f8103610875576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086c90612359565b60405180910390fd5b808261088191906123a4565b92505050919050565b60606004805461089990611f44565b80601f01602080910402602001604051908101604052809291908181526020018280546108c590611f44565b80156109105780601f106108e757610100808354040283529160200191610910565b820191905f5260205f20905b8154815290600101906020018083116108f357829003601f168201915b5050505050905090565b5f5f8261092561044e565b61092f9190612233565b90505f8361093b610a02565b6109459190612274565b9050818110610989576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610980906122f1565b60405180910390fd5b5f81036109cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c290612359565b60405180910390fd5b80826109d791906123a4565b92505050919050565b5f5f6109ea610c70565b90506109f7818585610d1b565b600191505092915050565b5f610a0b61053c565b600554610a189190612274565b905090565b5f8484604051602001610a31929190611ffb565b6040516020818303038152906040528051906020012090505f60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663af4a5d80888487876040518563ffffffff1660e01b8152600401610aaa949392919061241e565b6020604051808303815f875af1158015610ac6573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610aea919061214d565b905080610b2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b23906121e8565b60405180910390fd5b610b378787876111ae565b50505050505050565b610b4b3383836111ae565b5050565b610b5a338383610e0b565b5050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b606060088054610bef90611f44565b80601f0160208091040260200160405190810160405280929190818152602001828054610c1b90611f44565b8015610c665780601f10610c3d57610100808354040283529160200191610c66565b820191905f5260205f20905b815481529060010190602001808311610c4957829003601f168201915b5050505050905090565b5f33905090565b610c848383836001611643565b505050565b5f610c948484610b5e565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610d155781811015610d06578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401610cfd9392919061246f565b60405180910390fd5b610d1484848484035f611643565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610d8b575f6040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610d829190611f83565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610dfb575f6040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610df29190611f83565b60405180910390fd5b610e06838383611812565b505050565b5f8211610e4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e44906124ee565b60405180910390fd5b5f8111610e8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e869061257c565b60405180910390fd5b5f610e99836107c4565b905081811015610ede576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed5906125e4565b60405180910390fd5b5f600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166399c0584a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f49573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f6d9190611fb0565b82610f7891906123a4565b9050600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b65bba186837f089bb7d842de36edecc21465b74cef48534348e20d3d00e20a7b95fd75ab1b876040518463ffffffff1660e01b8152600401610ff893929190612602565b5f604051808303815f87803b15801561100f575f5ffd5b505af1158015611021573d5f5f3e3d5ffd5b50505050611030853086610d1b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8683856110799190612637565b6040518363ffffffff1660e01b815260040161109692919061266a565b6020604051808303815f875af11580156110b2573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110d6919061214d565b5050506110e161044e565b7f000000000000000000000000000000000000000000000000000000000000000061110a610a02565b6111149190612233565b61111e91906123a4565b6006819055505f60055411801561114a5750600554600361113f9190612233565b611147610a02565b10155b156111a9575f61115861044e565b60646005546111679190612233565b61117191906123a4565b90505f6005819055505f60648261118661044e565b6111909190612233565b61119a91906123a4565b90506111a63082611a2b565b50505b505050565b7f00000000000000000000000000000000000000000000000000000000000000008211611210576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611207906126db565b60405180910390fd5b5f8111611252576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112499061257c565b60405180910390fd5b817f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b81526004016112ac9190611f83565b602060405180830381865afa1580156112c7573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112eb9190611fb0565b101561132c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132390612743565b60405180910390fd5b5f600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166399c0584a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611397573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113bb9190611fb0565b836113c691906123a4565b90505f6113dd82856113d89190612637565b61091a565b905082811015611422576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611419906125e4565b60405180910390fd5b600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b65bba186847f7c8d55ce8db0718485d7c91379503269a2a3a00c80c04cbfb5360e694eefe5656040518463ffffffff1660e01b81526004016114a093929190612602565b5f604051808303815f87803b1580156114b7575f5ffd5b505af11580156114c9573d5f5f3e3d5ffd5b5050505060095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c357ea998684876115179190612637565b6040518363ffffffff1660e01b815260040161153492919061266a565b5f604051808303815f87803b15801561154b575f5ffd5b505af115801561155d573d5f5f3e3d5ffd5b5050505061156c308683610d1b565b505061157661044e565b7f000000000000000000000000000000000000000000000000000000000000000061159f610a02565b6115a99190612233565b6115b391906123a4565b6006819055505f6005541180156115df575060055460036115d49190612233565b6115dc610a02565b10155b1561163e575f6115ed61044e565b60646005546115fc9190612233565b61160691906123a4565b90505f6005819055505f60648261161b61044e565b6116259190612233565b61162f91906123a4565b905061163b3082611a2b565b50505b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036116b3575f6040517fe602df050000000000000000000000000000000000000000000000000000000081526004016116aa9190611f83565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611723575f6040517f94280d6200000000000000000000000000000000000000000000000000000000815260040161171a9190611f83565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550801561180c578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516118039190611ac2565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611862578060025f8282546118569190612274565b92505081905550611930565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050818110156118eb578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016118e29392919061246f565b60405180910390fd5b8181035f5f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611977578060025f82825403925050819055506119c1565b805f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611a1e9190611ac2565b60405180910390a3505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611a9b575f6040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401611a929190611f83565b60405180910390fd5b611aa6825f83611812565b5050565b5f819050919050565b611abc81611aaa565b82525050565b5f602082019050611ad55f830184611ab3565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f611b1d82611adb565b611b278185611ae5565b9350611b37818560208601611af5565b611b4081611b03565b840191505092915050565b5f6020820190508181035f830152611b638184611b13565b905092915050565b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f611b9c82611b73565b9050919050565b611bac81611b92565b8114611bb6575f5ffd5b50565b5f81359050611bc781611ba3565b92915050565b611bd681611aaa565b8114611be0575f5ffd5b50565b5f81359050611bf181611bcd565b92915050565b5f5f60408385031215611c0d57611c0c611b6b565b5b5f611c1a85828601611bb9565b9250506020611c2b85828601611be3565b9150509250929050565b5f8115159050919050565b611c4981611c35565b82525050565b5f602082019050611c625f830184611c40565b92915050565b5f5f5f60608486031215611c7f57611c7e611b6b565b5b5f611c8c86828701611bb9565b9350506020611c9d86828701611bb9565b9250506040611cae86828701611be3565b9150509250925092565b5f819050919050565b5f611cdb611cd6611cd184611b73565b611cb8565b611b73565b9050919050565b5f611cec82611cc1565b9050919050565b5f611cfd82611ce2565b9050919050565b611d0d81611cf3565b82525050565b5f602082019050611d265f830184611d04565b92915050565b5f60ff82169050919050565b611d4181611d2c565b82525050565b5f602082019050611d5a5f830184611d38565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f840112611d8157611d80611d60565b5b8235905067ffffffffffffffff811115611d9e57611d9d611d64565b5b602083019150836001820283011115611dba57611db9611d68565b5b9250929050565b5f5f5f5f5f60808688031215611dda57611dd9611b6b565b5b5f611de788828901611bb9565b9550506020611df888828901611be3565b9450506040611e0988828901611be3565b935050606086013567ffffffffffffffff811115611e2a57611e29611b6f565b5b611e3688828901611d6c565b92509250509295509295909350565b5f60208284031215611e5a57611e59611b6b565b5b5f611e6784828501611bb9565b91505092915050565b5f60208284031215611e8557611e84611b6b565b5b5f611e9284828501611be3565b91505092915050565b5f5f60408385031215611eb157611eb0611b6b565b5b5f611ebe85828601611be3565b9250506020611ecf85828601611be3565b9150509250929050565b5f5f60408385031215611eef57611eee611b6b565b5b5f611efc85828601611bb9565b9250506020611f0d85828601611bb9565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680611f5b57607f821691505b602082108103611f6e57611f6d611f17565b5b50919050565b611f7d81611b92565b82525050565b5f602082019050611f965f830184611f74565b92915050565b5f81519050611faa81611bcd565b92915050565b5f60208284031215611fc557611fc4611b6b565b5b5f611fd284828501611f9c565b91505092915050565b5f819050919050565b611ff5611ff082611aaa565b611fdb565b82525050565b5f6120068285611fe4565b6020820191506120168284611fe4565b6020820191508190509392505050565b7f73656c6c000000000000000000000000000000000000000000000000000000005f82015250565b5f61205a600483611ae5565b915061206582612026565b602082019050919050565b5f819050919050565b61208281612070565b82525050565b5f82825260208201905092915050565b828183375f83830152505050565b5f6120b18385612088565b93506120be838584612098565b6120c783611b03565b840190509392505050565b5f6080820190506120e55f830187611f74565b81810360208301526120f68161204e565b90506121056040830186612079565b81810360608301526121188184866120a6565b905095945050505050565b61212c81611c35565b8114612136575f5ffd5b50565b5f8151905061214781612123565b92915050565b5f6020828403121561216257612161611b6b565b5b5f61216f84828501612139565b91505092915050565b7f457865637574696f6e204661696c65643b20496e76616c6964617465642062795f8201527f2052656c61794d616e6167657200000000000000000000000000000000000000602082015250565b5f6121d2602d83611ae5565b91506121dd82612178565b604082019050919050565b5f6020820190508181035f8301526121ff816121c6565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61223d82611aaa565b915061224883611aaa565b925082820261225681611aaa565b9150828204841483151761226d5761226c612206565b5b5092915050565b5f61227e82611aaa565b915061228983611aaa565b92508282019050808211156122a1576122a0612206565b5b92915050565b7f4d617468656d61746963616c206f766572666c6f7700000000000000000000005f82015250565b5f6122db601583611ae5565b91506122e6826122a7565b602082019050919050565b5f6020820190508181035f830152612308816122cf565b9050919050565b7f4469766973696f6e206279207a65726f000000000000000000000000000000005f82015250565b5f612343601083611ae5565b915061234e8261230f565b602082019050919050565b5f6020820190508181035f83015261237081612337565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f6123ae82611aaa565b91506123b983611aaa565b9250826123c9576123c8612377565b5b828204905092915050565b7f62757900000000000000000000000000000000000000000000000000000000005f82015250565b5f612408600383611ae5565b9150612413826123d4565b602082019050919050565b5f6080820190506124315f830187611f74565b8181036020830152612442816123fc565b90506124516040830186612079565b81810360608301526124648184866120a6565b905095945050505050565b5f6060820190506124825f830186611f74565b61248f6020830185611ab3565b61249c6040830184611ab3565b949350505050565b7f66726178496e206d7573742062652067726561746572207468616e20300000005f82015250565b5f6124d8601d83611ae5565b91506124e3826124a4565b602082019050919050565b5f6020820190508181035f830152612505816124cc565b9050919050565b7f616d6f756e744f75744d696e206d7573742062652067726561746572207468615f8201527f6e20300000000000000000000000000000000000000000000000000000000000602082015250565b5f612566602383611ae5565b91506125718261250c565b604082019050919050565b5f6020820190508181035f8301526125938161255a565b9050919050565b7f536c69707061676520746f6c6572616e636520657863656564656400000000005f82015250565b5f6125ce601b83611ae5565b91506125d98261259a565b602082019050919050565b5f6020820190508181035f8301526125fb816125c2565b9050919050565b5f6060820190506126155f830186611f74565b6126226020830185611ab3565b61262f6040830184612079565b949350505050565b5f61264182611aaa565b915061264c83611aaa565b925082820390508181111561266457612663612206565b5b92915050565b5f60408201905061267d5f830185611f74565b61268a6020830184611ab3565b9392505050565b7f66726178496e206d7573742062652067726561746572207468616e20310000005f82015250565b5f6126c5601d83611ae5565b91506126d082612691565b602082019050919050565b5f6020820190508181035f8301526126f2816126b9565b9050919050565b7f496e73756666696369656e742042616c616e63650000000000000000000000005f82015250565b5f61272d601483611ae5565b9150612738826126f9565b602082019050919050565b5f6020820190508181035f83015261275a81612721565b905091905056fea26469706673582212204ec1d32d1a523919b4a40f68241c9b213ab924d902a317b30836ef0116efcb5a64736f6c634300081c0033a26469706673582212205089b27e77c2bdc3b549b5f4fc4454ffec3fa31c87c251a20b15960006637b8164736f6c634300081c003360a0604052348015600e575f5ffd5b503373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050608051610c4b61005b5f395f61017e0152610c4b5ff3fe608060405234801561000f575f5ffd5b5060043610610055575f3560e01c8063017519981461005957806330cf1e68146100895780638cf4ab92146100b9578063d087d288146100e9578063ed2a2d6414610107575b5f5ffd5b610073600480360381019061006e9190610608565b610137565b6040516100809190610693565b60405180910390f35b6100a3600480360381019061009e9190610701565b61017b565b6040516100b09190610693565b60405180910390f35b6100d360048036038101906100ce9190610701565b6102bc565b6040516100e09190610693565b60405180910390f35b6100f161034c565b6040516100fe91906107d0565b60405180910390f35b610121600480360381019061011c91906107e9565b61038f565b60405161012e91906107d0565b60405180910390f35b5f8473ffffffffffffffffffffffffffffffffffffffff1661015a8585856103d4565b73ffffffffffffffffffffffffffffffffffffffff16149050949350505050565b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461020a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020190610894565b60405180910390fd5b5f61021a898989898989896102bc565b90508061025c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025390610922565b60405180910390fd5b5f5f8a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8154809291906102a89061096d565b919050555080915050979650505050505050565b5f5f5f5f8a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205490505f89898989898660405160200161031996959493929190610a75565b60405160208183030381529060405280519060200120905061033d8a828787610137565b92505050979650505050505050565b5f5f5f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905090565b5f5f5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b5f5f846040516020016103e79190610b1b565b6040516020818303038152906040528051906020012090505f5f5f61044e87878080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f820116905080830192505050505050506104ad565b9250925092506001848285856040515f81526020016040526040516104769493929190610b6a565b6020604051602081039080840390855afa158015610496573d5f5f3e3d5ffd5b505050602060405103519450505050509392505050565b5f5f5f60418451146104f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104eb90610bf7565b60405180910390fd5b602084015192506040840151915060608401515f1a90509193909250565b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6105438261051a565b9050919050565b61055381610539565b811461055d575f5ffd5b50565b5f8135905061056e8161054a565b92915050565b5f819050919050565b61058681610574565b8114610590575f5ffd5b50565b5f813590506105a18161057d565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f8401126105c8576105c76105a7565b5b8235905067ffffffffffffffff8111156105e5576105e46105ab565b5b602083019150836001820283011115610601576106006105af565b5b9250929050565b5f5f5f5f606085870312156106205761061f610512565b5b5f61062d87828801610560565b945050602061063e87828801610593565b935050604085013567ffffffffffffffff81111561065f5761065e610516565b5b61066b878288016105b3565b925092505092959194509250565b5f8115159050919050565b61068d81610679565b82525050565b5f6020820190506106a65f830184610684565b92915050565b5f5f83601f8401126106c1576106c06105a7565b5b8235905067ffffffffffffffff8111156106de576106dd6105ab565b5b6020830191508360018202830111156106fa576106f96105af565b5b9250929050565b5f5f5f5f5f5f5f60a0888a03121561071c5761071b610512565b5b5f6107298a828b01610560565b975050602061073a8a828b01610560565b965050604088013567ffffffffffffffff81111561075b5761075a610516565b5b6107678a828b016106ac565b9550955050606061077a8a828b01610593565b935050608088013567ffffffffffffffff81111561079b5761079a610516565b5b6107a78a828b016105b3565b925092505092959891949750929550565b5f819050919050565b6107ca816107b8565b82525050565b5f6020820190506107e35f8301846107c1565b92915050565b5f602082840312156107fe576107fd610512565b5b5f61080b84828501610560565b91505092915050565b5f82825260208201905092915050565b7f4f6e6c792050756d70666178744d61737465722063616e2063616c6c207468695f8201527f73206d6574686f64000000000000000000000000000000000000000000000000602082015250565b5f61087e602883610814565b915061088982610824565b604082019050919050565b5f6020820190508181035f8301526108ab81610872565b9050919050565b7f496e76616c6964205369676e6174757265206f7220496e76616c6964204578655f8201527f637574696f6e2052657175657374000000000000000000000000000000000000602082015250565b5f61090c602e83610814565b9150610917826108b2565b604082019050919050565b5f6020820190508181035f83015261093981610900565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610977826107b8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036109a9576109a8610940565b5b600182019050919050565b5f8160601b9050919050565b5f6109ca826109b4565b9050919050565b5f6109db826109c0565b9050919050565b6109f36109ee82610539565b6109d1565b82525050565b5f81905092915050565b828183375f83830152505050565b5f610a1c83856109f9565b9350610a29838584610a03565b82840190509392505050565b5f819050919050565b610a4f610a4a82610574565b610a35565b82525050565b5f819050919050565b610a6f610a6a826107b8565b610a55565b82525050565b5f610a8082896109e2565b601482019150610a9082886109e2565b601482019150610aa1828688610a11565b9150610aad8285610a3e565b602082019150610abd8284610a5e565b602082019150819050979650505050505050565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f82015250565b5f610b05601c836109f9565b9150610b1082610ad1565b601c82019050919050565b5f610b2582610af9565b9150610b318284610a3e565b60208201915081905092915050565b610b4981610574565b82525050565b5f60ff82169050919050565b610b6481610b4f565b82525050565b5f608082019050610b7d5f830187610b40565b610b8a6020830186610b5b565b610b976040830185610b40565b610ba46060830184610b40565b95945050505050565b7f696e76616c6964207369676e6174757265206c656e67746800000000000000005f82015250565b5f610be1601883610814565b9150610bec82610bad565b602082019050919050565b5f6020820190508181035f830152610c0e81610bd5565b905091905056fea2646970667358221220e991d0e9a5b5a3759fcde73b3326b836cdfb2c968483201fd85d5767fd2d8b3764736f6c634300081c003360a0604052348015600e575f5ffd5b503373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250506080516107bc6100625f395f8181610221015261032301526107bc5ff3fe608060405234801561000f575f5ffd5b50600436106100b2575f3560e01c80637280cbca1161006f5780637280cbca1461016457806399c0584a146101805780639dc841d21461019e578063a297a6f1146101ba578063b1f8dfac146101d6578063e8f03079146101f2576100b2565b806314971b79146100b657806319d4771b146100d45780633b65bba1146100f05780635d53ac641461010c5780636528d74d14610128578063707afc6514610146575b5f5ffd5b6100be610210565b6040516100cb91906104bf565b60405180910390f35b6100ee60048036038101906100e99190610506565b610215565b005b61010a600480360381019061010591906105be565b61021f565b005b61012660048036038101906101219190610506565b6102fb565b005b610130610305565b60405161013d91906104bf565b60405180910390f35b61014e61030b565b60405161015b91906104bf565b60405180910390f35b61017e60048036038101906101799190610506565b610311565b005b61018861031b565b60405161019591906104bf565b60405180910390f35b6101b860048036038101906101b3919061060e565b610321565b005b6101d460048036038101906101cf9190610506565b61048e565b005b6101f060048036038101906101eb9190610506565b610498565b005b6101fa6104a1565b60405161020791906104bf565b60405180910390f35b5f5481565b8060038190555050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e979eca184846040518363ffffffff1660e01b815260040161027a92919061065b565b5f604051808303815f87803b158015610291575f5ffd5b505af11580156102a3573d5f5f3e3d5ffd5b50505050808373ffffffffffffffffffffffffffffffffffffffff167f09221a53d356784b83149a716120974f0c7e52b58f8d989e0287c7663e3f96a2846040516102ee91906104bf565b60405180910390a3505050565b8060018190555050565b60015481565b60025481565b8060028190555050565b60035481565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166376c16abe6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561038a573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103ae91906106bd565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461041b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041290610768565b60405180910390fd5b7fbc0f177d15c7014cc764db00766c7e390ca4bfdaf9c7e59b6ae854bb23f167938273ffffffffffffffffffffffffffffffffffffffff167f09221a53d356784b83149a716120974f0c7e52b58f8d989e0287c7663e3f96a28360405161048291906104bf565b60405180910390a35050565b8060048190555050565b805f8190555050565b60045481565b5f819050919050565b6104b9816104a7565b82525050565b5f6020820190506104d25f8301846104b0565b92915050565b5f5ffd5b6104e5816104a7565b81146104ef575f5ffd5b50565b5f81359050610500816104dc565b92915050565b5f6020828403121561051b5761051a6104d8565b5b5f610528848285016104f2565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61055a82610531565b9050919050565b61056a81610550565b8114610574575f5ffd5b50565b5f8135905061058581610561565b92915050565b5f819050919050565b61059d8161058b565b81146105a7575f5ffd5b50565b5f813590506105b881610594565b92915050565b5f5f5f606084860312156105d5576105d46104d8565b5b5f6105e286828701610577565b93505060206105f3868287016104f2565b9250506040610604868287016105aa565b9150509250925092565b5f5f60408385031215610624576106236104d8565b5b5f61063185828601610577565b9250506020610642858286016104f2565b9150509250929050565b61065581610550565b82525050565b5f60408201905061066e5f83018561064c565b61067b60208301846104b0565b9392505050565b5f61068c82610550565b9050919050565b61069c81610682565b81146106a6575f5ffd5b50565b5f815190506106b781610693565b92915050565b5f602082840312156106d2576106d16104d8565b5b5f6106df848285016106a9565b91505092915050565b5f82825260208201905092915050565b7f4f6e6c7920504672617820696e746572616374696f6e732063616e20626520725f8201527f65636f72646564207573696e6720746869732066756e6374696f6e0000000000602082015250565b5f610752603b836106e8565b915061075d826106f8565b604082019050919050565b5f6020820190508181035f83015261077f81610746565b905091905056fea26469706673582212208aa7be8b6ed2725b012322258fa5b93e95e88a781c2dc6dd32f1135af52ffc9564736f6c634300081c0033",
PumpfaxtToken : "0x60e060405234801561000f575f5ffd5b50604051613b7f380380613b7f83398181016040528101906100319190610b7f565b828281600390816100429190610e47565b5080600490816100529190610e47565b5050503360095f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166376c16abe6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100ff573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101239190610f51565b73ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505060805173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101a1573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101c59190610fb2565b60ff1660c08160ff168152505060095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630f11081f6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561023c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102609190611007565b60a0818152505060095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636999b3776040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102d1573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102f5919061106d565b600a5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508360075f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600890816103839190610e47565b5061043a3060c051600a61039791906111f4565b60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b0c81b36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610401573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104259190611007565b61042f919061123e565b6105ba60201b60201c565b60a05160095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ad3dc0136040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104a7573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104cb9190611007565b6104d5919061123e565b6005819055506104e961063f60201b60201c565b60a0516104fa61065460201b60201c565b610504919061123e565b61050e91906112ac565b6006819055505f6005541180156105405750600554600361052f919061123e565b61053d61065460201b60201c565b10155b156105b1575f61055461063f60201b60201c565b6064600554610563919061123e565b61056d91906112ac565b90505f6005819055505f60648261058861063f60201b60201c565b610592919061123e565b61059c91906112ac565b90506105ae308261067560201b60201c565b50505b50505050611394565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361062a575f6040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161062191906112eb565b60405180910390fd5b61063b5f83836106fa60201b60201c565b5050565b5f61064f3061091360201b60201c565b905090565b5f61066361095860201b60201c565b6005546106709190611304565b905090565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106e5575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016106dc91906112eb565b60405180910390fd5b6106f6825f836106fa60201b60201c565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361074a578060025f82825461073e9190611304565b92505081905550610818565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050818110156107d3578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016107ca93929190611346565b60405180910390fd5b8181035f5f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361085f578060025f82825403925050819055506108a9565b805f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610906919061137b565b60405180910390a3505050565b5f5f5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b5f60805173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161099491906112eb565b602060405180830381865afa1580156109af573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109d39190611007565b905090565b5f604051905090565b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610a12826109e9565b9050919050565b610a2281610a08565b8114610a2c575f5ffd5b50565b5f81519050610a3d81610a19565b92915050565b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b610a9182610a4b565b810181811067ffffffffffffffff82111715610ab057610aaf610a5b565b5b80604052505050565b5f610ac26109d8565b9050610ace8282610a88565b919050565b5f67ffffffffffffffff821115610aed57610aec610a5b565b5b610af682610a4b565b9050602081019050919050565b8281835e5f83830152505050565b5f610b23610b1e84610ad3565b610ab9565b905082815260208101848484011115610b3f57610b3e610a47565b5b610b4a848285610b03565b509392505050565b5f82601f830112610b6657610b65610a43565b5b8151610b76848260208601610b11565b91505092915050565b5f5f5f5f60808587031215610b9757610b966109e1565b5b5f610ba487828801610a2f565b945050602085015167ffffffffffffffff811115610bc557610bc46109e5565b5b610bd187828801610b52565b935050604085015167ffffffffffffffff811115610bf257610bf16109e5565b5b610bfe87828801610b52565b925050606085015167ffffffffffffffff811115610c1f57610c1e6109e5565b5b610c2b87828801610b52565b91505092959194509250565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680610c8557607f821691505b602082108103610c9857610c97610c41565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302610cfa7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610cbf565b610d048683610cbf565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f610d48610d43610d3e84610d1c565b610d25565b610d1c565b9050919050565b5f819050919050565b610d6183610d2e565b610d75610d6d82610d4f565b848454610ccb565b825550505050565b5f5f905090565b610d8c610d7d565b610d97818484610d58565b505050565b5b81811015610dba57610daf5f82610d84565b600181019050610d9d565b5050565b601f821115610dff57610dd081610c9e565b610dd984610cb0565b81016020851015610de8578190505b610dfc610df485610cb0565b830182610d9c565b50505b505050565b5f82821c905092915050565b5f610e1f5f1984600802610e04565b1980831691505092915050565b5f610e378383610e10565b9150826002028217905092915050565b610e5082610c37565b67ffffffffffffffff811115610e6957610e68610a5b565b5b610e738254610c6e565b610e7e828285610dbe565b5f60209050601f831160018114610eaf575f8415610e9d578287015190505b610ea78582610e2c565b865550610f0e565b601f198416610ebd86610c9e565b5f5b82811015610ee457848901518255600182019150602085019450602081019050610ebf565b86831015610f015784890151610efd601f891682610e10565b8355505b6001600288020188555050505b505050505050565b5f610f2082610a08565b9050919050565b610f3081610f16565b8114610f3a575f5ffd5b50565b5f81519050610f4b81610f27565b92915050565b5f60208284031215610f6657610f656109e1565b5b5f610f7384828501610f3d565b91505092915050565b5f60ff82169050919050565b610f9181610f7c565b8114610f9b575f5ffd5b50565b5f81519050610fac81610f88565b92915050565b5f60208284031215610fc757610fc66109e1565b5b5f610fd484828501610f9e565b91505092915050565b610fe681610d1c565b8114610ff0575f5ffd5b50565b5f8151905061100181610fdd565b92915050565b5f6020828403121561101c5761101b6109e1565b5b5f61102984828501610ff3565b91505092915050565b5f61103c82610a08565b9050919050565b61104c81611032565b8114611056575f5ffd5b50565b5f8151905061106781611043565b92915050565b5f60208284031215611082576110816109e1565b5b5f61108f84828501611059565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f8160011c9050919050565b5f5f8291508390505b600185111561111a578086048111156110f6576110f5611098565b5b60018516156111055780820291505b8081029050611113856110c5565b94506110da565b94509492505050565b5f8261113257600190506111ed565b8161113f575f90506111ed565b8160018114611155576002811461115f5761118e565b60019150506111ed565b60ff84111561117157611170611098565b5b8360020a91508482111561118857611187611098565b5b506111ed565b5060208310610133831016604e8410600b84101617156111c35782820a9050838111156111be576111bd611098565b5b6111ed565b6111d084848460016110d1565b925090508184048111156111e7576111e6611098565b5b81810290505b9392505050565b5f6111fe82610d1c565b915061120983610f7c565b92506112367fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484611123565b905092915050565b5f61124882610d1c565b915061125383610d1c565b925082820261126181610d1c565b9150828204841483151761127857611277611098565b5b5092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f6112b682610d1c565b91506112c183610d1c565b9250826112d1576112d061127f565b5b828204905092915050565b6112e581610a08565b82525050565b5f6020820190506112fe5f8301846112dc565b92915050565b5f61130e82610d1c565b915061131983610d1c565b925082820190508082111561133157611330611098565b5b92915050565b61134081610d1c565b82525050565b5f6060820190506113595f8301866112dc565b6113666020830185611337565b6113736040830184611337565b949350505050565b5f60208201905061138e5f830184611337565b92915050565b60805160a05160c0516127976113e85f395f61062f01525f8181610511015281816110e3015281816111b0015261157801525f818161053f0152818161060a01528181611032015261125501526127975ff3fe608060405234801561000f575f5ffd5b5060043610610140575f3560e01c80637ff9b596116100b6578063cd3293de1161007a578063cd3293de1461038e578063ce20d840146103ac578063d6febde8146103c8578063d79875eb146103e4578063dd62ed3e14610400578063eac989f81461043057610140565b80637ff9b596146102c257806387d12a3f146102e057806395d89b41146103105780639721f2901461032e578063a9059cbb1461035e57610140565b80631a686502116101085780631a686502146101ec57806323b872dd1461020a5780632c41d85d1461023a578063313ce56714610258578063503cb67d1461027657806370a082311461029257610140565b8063047fc9aa1461014457806306fdde0314610162578063095ea7b3146101805780630f11081f146101b057806318160ddd146101ce575b5f5ffd5b61014c61044e565b6040516101599190611ac2565b60405180910390f35b61016a61045d565b6040516101779190611b4b565b60405180910390f35b61019a60048036038101906101959190611bf7565b6104ed565b6040516101a79190611c4f565b60405180910390f35b6101b861050f565b6040516101c59190611ac2565b60405180910390f35b6101d6610533565b6040516101e39190611ac2565b60405180910390f35b6101f461053c565b6040516102019190611ac2565b60405180910390f35b610224600480360381019061021f9190611c68565b6105da565b6040516102319190611c4f565b60405180910390f35b610242610608565b60405161024f9190611d13565b60405180910390f35b61026061062c565b60405161026d9190611d47565b60405180910390f35b610290600480360381019061028b9190611dc1565b610653565b005b6102ac60048036038101906102a79190611e45565b610776565b6040516102b99190611ac2565b60405180910390f35b6102ca6107bb565b6040516102d79190611ac2565b60405180910390f35b6102fa60048036038101906102f59190611e70565b6107c4565b6040516103079190611ac2565b60405180910390f35b61031861088a565b6040516103259190611b4b565b60405180910390f35b61034860048036038101906103439190611e70565b61091a565b6040516103559190611ac2565b60405180910390f35b61037860048036038101906103739190611bf7565b6109e0565b6040516103859190611c4f565b60405180910390f35b610396610a02565b6040516103a39190611ac2565b60405180910390f35b6103c660048036038101906103c19190611dc1565b610a1d565b005b6103e260048036038101906103dd9190611e9b565b610b40565b005b6103fe60048036038101906103f99190611e9b565b610b4f565b005b61041a60048036038101906104159190611ed9565b610b5e565b6040516104279190611ac2565b60405180910390f35b610438610be0565b6040516104459190611b4b565b60405180910390f35b5f61045830610776565b905090565b60606003805461046c90611f44565b80601f016020809104026020016040519081016040528092919081815260200182805461049890611f44565b80156104e35780601f106104ba576101008083540402835291602001916104e3565b820191905f5260205f20905b8154815290600101906020018083116104c657829003601f168201915b5050505050905090565b5f5f6104f7610c70565b9050610504818585610c77565b600191505092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f600254905090565b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016105969190611f83565b602060405180830381865afa1580156105b1573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105d59190611fb0565b905090565b5f5f6105e4610c70565b90506105f1858285610c89565b6105fc858585610d1b565b60019150509392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f7f0000000000000000000000000000000000000000000000000000000000000000905090565b5f8484604051602001610667929190611ffb565b6040516020818303038152906040528051906020012090505f60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663af4a5d80888487876040518563ffffffff1660e01b81526004016106e094939291906120d2565b6020604051808303815f875af11580156106fc573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610720919061214d565b905080610762576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610759906121e8565b60405180910390fd5b61076d878787610e0b565b50505050505050565b5f5f5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b5f600654905090565b5f5f826107cf610a02565b6107d99190612233565b90505f836107e561044e565b6107ef9190612274565b9050818110610833576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082a906122f1565b60405180910390fd5b5f8103610875576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086c90612359565b60405180910390fd5b808261088191906123a4565b92505050919050565b60606004805461089990611f44565b80601f01602080910402602001604051908101604052809291908181526020018280546108c590611f44565b80156109105780601f106108e757610100808354040283529160200191610910565b820191905f5260205f20905b8154815290600101906020018083116108f357829003601f168201915b5050505050905090565b5f5f8261092561044e565b61092f9190612233565b90505f8361093b610a02565b6109459190612274565b9050818110610989576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610980906122f1565b60405180910390fd5b5f81036109cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c290612359565b60405180910390fd5b80826109d791906123a4565b92505050919050565b5f5f6109ea610c70565b90506109f7818585610d1b565b600191505092915050565b5f610a0b61053c565b600554610a189190612274565b905090565b5f8484604051602001610a31929190611ffb565b6040516020818303038152906040528051906020012090505f60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663af4a5d80888487876040518563ffffffff1660e01b8152600401610aaa949392919061241e565b6020604051808303815f875af1158015610ac6573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610aea919061214d565b905080610b2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b23906121e8565b60405180910390fd5b610b378787876111ae565b50505050505050565b610b4b3383836111ae565b5050565b610b5a338383610e0b565b5050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b606060088054610bef90611f44565b80601f0160208091040260200160405190810160405280929190818152602001828054610c1b90611f44565b8015610c665780601f10610c3d57610100808354040283529160200191610c66565b820191905f5260205f20905b815481529060010190602001808311610c4957829003601f168201915b5050505050905090565b5f33905090565b610c848383836001611643565b505050565b5f610c948484610b5e565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610d155781811015610d06578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401610cfd9392919061246f565b60405180910390fd5b610d1484848484035f611643565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610d8b575f6040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610d829190611f83565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610dfb575f6040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610df29190611f83565b60405180910390fd5b610e06838383611812565b505050565b5f8211610e4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e44906124ee565b60405180910390fd5b5f8111610e8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e869061257c565b60405180910390fd5b5f610e99836107c4565b905081811015610ede576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed5906125e4565b60405180910390fd5b5f600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166399c0584a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f49573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f6d9190611fb0565b82610f7891906123a4565b9050600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b65bba186837f089bb7d842de36edecc21465b74cef48534348e20d3d00e20a7b95fd75ab1b876040518463ffffffff1660e01b8152600401610ff893929190612602565b5f604051808303815f87803b15801561100f575f5ffd5b505af1158015611021573d5f5f3e3d5ffd5b50505050611030853086610d1b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8683856110799190612637565b6040518363ffffffff1660e01b815260040161109692919061266a565b6020604051808303815f875af11580156110b2573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110d6919061214d565b5050506110e161044e565b7f000000000000000000000000000000000000000000000000000000000000000061110a610a02565b6111149190612233565b61111e91906123a4565b6006819055505f60055411801561114a5750600554600361113f9190612233565b611147610a02565b10155b156111a9575f61115861044e565b60646005546111679190612233565b61117191906123a4565b90505f6005819055505f60648261118661044e565b6111909190612233565b61119a91906123a4565b90506111a63082611a2b565b50505b505050565b7f00000000000000000000000000000000000000000000000000000000000000008211611210576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611207906126db565b60405180910390fd5b5f8111611252576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112499061257c565b60405180910390fd5b817f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b81526004016112ac9190611f83565b602060405180830381865afa1580156112c7573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112eb9190611fb0565b101561132c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132390612743565b60405180910390fd5b5f600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166399c0584a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611397573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113bb9190611fb0565b836113c691906123a4565b90505f6113dd82856113d89190612637565b61091a565b905082811015611422576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611419906125e4565b60405180910390fd5b600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b65bba186847f7c8d55ce8db0718485d7c91379503269a2a3a00c80c04cbfb5360e694eefe5656040518463ffffffff1660e01b81526004016114a093929190612602565b5f604051808303815f87803b1580156114b7575f5ffd5b505af11580156114c9573d5f5f3e3d5ffd5b5050505060095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c357ea998684876115179190612637565b6040518363ffffffff1660e01b815260040161153492919061266a565b5f604051808303815f87803b15801561154b575f5ffd5b505af115801561155d573d5f5f3e3d5ffd5b5050505061156c308683610d1b565b505061157661044e565b7f000000000000000000000000000000000000000000000000000000000000000061159f610a02565b6115a99190612233565b6115b391906123a4565b6006819055505f6005541180156115df575060055460036115d49190612233565b6115dc610a02565b10155b1561163e575f6115ed61044e565b60646005546115fc9190612233565b61160691906123a4565b90505f6005819055505f60648261161b61044e565b6116259190612233565b61162f91906123a4565b905061163b3082611a2b565b50505b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036116b3575f6040517fe602df050000000000000000000000000000000000000000000000000000000081526004016116aa9190611f83565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611723575f6040517f94280d6200000000000000000000000000000000000000000000000000000000815260040161171a9190611f83565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550801561180c578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516118039190611ac2565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611862578060025f8282546118569190612274565b92505081905550611930565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050818110156118eb578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016118e29392919061246f565b60405180910390fd5b8181035f5f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611977578060025f82825403925050819055506119c1565b805f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611a1e9190611ac2565b60405180910390a3505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611a9b575f6040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401611a929190611f83565b60405180910390fd5b611aa6825f83611812565b5050565b5f819050919050565b611abc81611aaa565b82525050565b5f602082019050611ad55f830184611ab3565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f611b1d82611adb565b611b278185611ae5565b9350611b37818560208601611af5565b611b4081611b03565b840191505092915050565b5f6020820190508181035f830152611b638184611b13565b905092915050565b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f611b9c82611b73565b9050919050565b611bac81611b92565b8114611bb6575f5ffd5b50565b5f81359050611bc781611ba3565b92915050565b611bd681611aaa565b8114611be0575f5ffd5b50565b5f81359050611bf181611bcd565b92915050565b5f5f60408385031215611c0d57611c0c611b6b565b5b5f611c1a85828601611bb9565b9250506020611c2b85828601611be3565b9150509250929050565b5f8115159050919050565b611c4981611c35565b82525050565b5f602082019050611c625f830184611c40565b92915050565b5f5f5f60608486031215611c7f57611c7e611b6b565b5b5f611c8c86828701611bb9565b9350506020611c9d86828701611bb9565b9250506040611cae86828701611be3565b9150509250925092565b5f819050919050565b5f611cdb611cd6611cd184611b73565b611cb8565b611b73565b9050919050565b5f611cec82611cc1565b9050919050565b5f611cfd82611ce2565b9050919050565b611d0d81611cf3565b82525050565b5f602082019050611d265f830184611d04565b92915050565b5f60ff82169050919050565b611d4181611d2c565b82525050565b5f602082019050611d5a5f830184611d38565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f840112611d8157611d80611d60565b5b8235905067ffffffffffffffff811115611d9e57611d9d611d64565b5b602083019150836001820283011115611dba57611db9611d68565b5b9250929050565b5f5f5f5f5f60808688031215611dda57611dd9611b6b565b5b5f611de788828901611bb9565b9550506020611df888828901611be3565b9450506040611e0988828901611be3565b935050606086013567ffffffffffffffff811115611e2a57611e29611b6f565b5b611e3688828901611d6c565b92509250509295509295909350565b5f60208284031215611e5a57611e59611b6b565b5b5f611e6784828501611bb9565b91505092915050565b5f60208284031215611e8557611e84611b6b565b5b5f611e9284828501611be3565b91505092915050565b5f5f60408385031215611eb157611eb0611b6b565b5b5f611ebe85828601611be3565b9250506020611ecf85828601611be3565b9150509250929050565b5f5f60408385031215611eef57611eee611b6b565b5b5f611efc85828601611bb9565b9250506020611f0d85828601611bb9565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680611f5b57607f821691505b602082108103611f6e57611f6d611f17565b5b50919050565b611f7d81611b92565b82525050565b5f602082019050611f965f830184611f74565b92915050565b5f81519050611faa81611bcd565b92915050565b5f60208284031215611fc557611fc4611b6b565b5b5f611fd284828501611f9c565b91505092915050565b5f819050919050565b611ff5611ff082611aaa565b611fdb565b82525050565b5f6120068285611fe4565b6020820191506120168284611fe4565b6020820191508190509392505050565b7f73656c6c000000000000000000000000000000000000000000000000000000005f82015250565b5f61205a600483611ae5565b915061206582612026565b602082019050919050565b5f819050919050565b61208281612070565b82525050565b5f82825260208201905092915050565b828183375f83830152505050565b5f6120b18385612088565b93506120be838584612098565b6120c783611b03565b840190509392505050565b5f6080820190506120e55f830187611f74565b81810360208301526120f68161204e565b90506121056040830186612079565b81810360608301526121188184866120a6565b905095945050505050565b61212c81611c35565b8114612136575f5ffd5b50565b5f8151905061214781612123565b92915050565b5f6020828403121561216257612161611b6b565b5b5f61216f84828501612139565b91505092915050565b7f457865637574696f6e204661696c65643b20496e76616c6964617465642062795f8201527f2052656c61794d616e6167657200000000000000000000000000000000000000602082015250565b5f6121d2602d83611ae5565b91506121dd82612178565b604082019050919050565b5f6020820190508181035f8301526121ff816121c6565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61223d82611aaa565b915061224883611aaa565b925082820261225681611aaa565b9150828204841483151761226d5761226c612206565b5b5092915050565b5f61227e82611aaa565b915061228983611aaa565b92508282019050808211156122a1576122a0612206565b5b92915050565b7f4d617468656d61746963616c206f766572666c6f7700000000000000000000005f82015250565b5f6122db601583611ae5565b91506122e6826122a7565b602082019050919050565b5f6020820190508181035f830152612308816122cf565b9050919050565b7f4469766973696f6e206279207a65726f000000000000000000000000000000005f82015250565b5f612343601083611ae5565b915061234e8261230f565b602082019050919050565b5f6020820190508181035f83015261237081612337565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f6123ae82611aaa565b91506123b983611aaa565b9250826123c9576123c8612377565b5b828204905092915050565b7f62757900000000000000000000000000000000000000000000000000000000005f82015250565b5f612408600383611ae5565b9150612413826123d4565b602082019050919050565b5f6080820190506124315f830187611f74565b8181036020830152612442816123fc565b90506124516040830186612079565b81810360608301526124648184866120a6565b905095945050505050565b5f6060820190506124825f830186611f74565b61248f6020830185611ab3565b61249c6040830184611ab3565b949350505050565b7f66726178496e206d7573742062652067726561746572207468616e20300000005f82015250565b5f6124d8601d83611ae5565b91506124e3826124a4565b602082019050919050565b5f6020820190508181035f830152612505816124cc565b9050919050565b7f616d6f756e744f75744d696e206d7573742062652067726561746572207468615f8201527f6e20300000000000000000000000000000000000000000000000000000000000602082015250565b5f612566602383611ae5565b91506125718261250c565b604082019050919050565b5f6020820190508181035f8301526125938161255a565b9050919050565b7f536c69707061676520746f6c6572616e636520657863656564656400000000005f82015250565b5f6125ce601b83611ae5565b91506125d98261259a565b602082019050919050565b5f6020820190508181035f8301526125fb816125c2565b9050919050565b5f6060820190506126155f830186611f74565b6126226020830185611ab3565b61262f6040830184612079565b949350505050565b5f61264182611aaa565b915061264c83611aaa565b925082820390508181111561266457612663612206565b5b92915050565b5f60408201905061267d5f830185611f74565b61268a6020830184611ab3565b9392505050565b7f66726178496e206d7573742062652067726561746572207468616e20310000005f82015250565b5f6126c5601d83611ae5565b91506126d082612691565b602082019050919050565b5f6020820190508181035f8301526126f2816126b9565b9050919050565b7f496e73756666696369656e742042616c616e63650000000000000000000000005f82015250565b5f61272d601483611ae5565b9150612738826126f9565b602082019050919050565b5f6020820190508181035f83015261275a81612721565b905091905056fea26469706673582212204ec1d32d1a523919b4a40f68241c9b213ab924d902a317b30836ef0116efcb5a64736f6c634300081c0033",
RelayManager : "0x60a0604052348015600e575f5ffd5b503373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050608051610c4b61005b5f395f61017e0152610c4b5ff3fe608060405234801561000f575f5ffd5b5060043610610055575f3560e01c8063017519981461005957806330cf1e68146100895780638cf4ab92146100b9578063d087d288146100e9578063ed2a2d6414610107575b5f5ffd5b610073600480360381019061006e9190610608565b610137565b6040516100809190610693565b60405180910390f35b6100a3600480360381019061009e9190610701565b61017b565b6040516100b09190610693565b60405180910390f35b6100d360048036038101906100ce9190610701565b6102bc565b6040516100e09190610693565b60405180910390f35b6100f161034c565b6040516100fe91906107d0565b60405180910390f35b610121600480360381019061011c91906107e9565b61038f565b60405161012e91906107d0565b60405180910390f35b5f8473ffffffffffffffffffffffffffffffffffffffff1661015a8585856103d4565b73ffffffffffffffffffffffffffffffffffffffff16149050949350505050565b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461020a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020190610894565b60405180910390fd5b5f61021a898989898989896102bc565b90508061025c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025390610922565b60405180910390fd5b5f5f8a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8154809291906102a89061096d565b919050555080915050979650505050505050565b5f5f5f5f8a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205490505f89898989898660405160200161031996959493929190610a75565b60405160208183030381529060405280519060200120905061033d8a828787610137565b92505050979650505050505050565b5f5f5f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905090565b5f5f5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b5f5f846040516020016103e79190610b1b565b6040516020818303038152906040528051906020012090505f5f5f61044e87878080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f820116905080830192505050505050506104ad565b9250925092506001848285856040515f81526020016040526040516104769493929190610b6a565b6020604051602081039080840390855afa158015610496573d5f5f3e3d5ffd5b505050602060405103519450505050509392505050565b5f5f5f60418451146104f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104eb90610bf7565b60405180910390fd5b602084015192506040840151915060608401515f1a90509193909250565b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6105438261051a565b9050919050565b61055381610539565b811461055d575f5ffd5b50565b5f8135905061056e8161054a565b92915050565b5f819050919050565b61058681610574565b8114610590575f5ffd5b50565b5f813590506105a18161057d565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f8401126105c8576105c76105a7565b5b8235905067ffffffffffffffff8111156105e5576105e46105ab565b5b602083019150836001820283011115610601576106006105af565b5b9250929050565b5f5f5f5f606085870312156106205761061f610512565b5b5f61062d87828801610560565b945050602061063e87828801610593565b935050604085013567ffffffffffffffff81111561065f5761065e610516565b5b61066b878288016105b3565b925092505092959194509250565b5f8115159050919050565b61068d81610679565b82525050565b5f6020820190506106a65f830184610684565b92915050565b5f5f83601f8401126106c1576106c06105a7565b5b8235905067ffffffffffffffff8111156106de576106dd6105ab565b5b6020830191508360018202830111156106fa576106f96105af565b5b9250929050565b5f5f5f5f5f5f5f60a0888a03121561071c5761071b610512565b5b5f6107298a828b01610560565b975050602061073a8a828b01610560565b965050604088013567ffffffffffffffff81111561075b5761075a610516565b5b6107678a828b016106ac565b9550955050606061077a8a828b01610593565b935050608088013567ffffffffffffffff81111561079b5761079a610516565b5b6107a78a828b016105b3565b925092505092959891949750929550565b5f819050919050565b6107ca816107b8565b82525050565b5f6020820190506107e35f8301846107c1565b92915050565b5f602082840312156107fe576107fd610512565b5b5f61080b84828501610560565b91505092915050565b5f82825260208201905092915050565b7f4f6e6c792050756d70666178744d61737465722063616e2063616c6c207468695f8201527f73206d6574686f64000000000000000000000000000000000000000000000000602082015250565b5f61087e602883610814565b915061088982610824565b604082019050919050565b5f6020820190508181035f8301526108ab81610872565b9050919050565b7f496e76616c6964205369676e6174757265206f7220496e76616c6964204578655f8201527f637574696f6e2052657175657374000000000000000000000000000000000000602082015250565b5f61090c602e83610814565b9150610917826108b2565b604082019050919050565b5f6020820190508181035f83015261093981610900565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610977826107b8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036109a9576109a8610940565b5b600182019050919050565b5f8160601b9050919050565b5f6109ca826109b4565b9050919050565b5f6109db826109c0565b9050919050565b6109f36109ee82610539565b6109d1565b82525050565b5f81905092915050565b828183375f83830152505050565b5f610a1c83856109f9565b9350610a29838584610a03565b82840190509392505050565b5f819050919050565b610a4f610a4a82610574565b610a35565b82525050565b5f819050919050565b610a6f610a6a826107b8565b610a55565b82525050565b5f610a8082896109e2565b601482019150610a9082886109e2565b601482019150610aa1828688610a11565b9150610aad8285610a3e565b602082019150610abd8284610a5e565b602082019150819050979650505050505050565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f82015250565b5f610b05601c836109f9565b9150610b1082610ad1565b601c82019050919050565b5f610b2582610af9565b9150610b318284610a3e565b60208201915081905092915050565b610b4981610574565b82525050565b5f60ff82169050919050565b610b6481610b4f565b82525050565b5f608082019050610b7d5f830187610b40565b610b8a6020830186610b5b565b610b976040830185610b40565b610ba46060830184610b40565b95945050505050565b7f696e76616c6964207369676e6174757265206c656e67746800000000000000005f82015250565b5f610be1601883610814565b9150610bec82610bad565b602082019050919050565b5f6020820190508181035f830152610c0e81610bd5565b905091905056fea2646970667358221220e991d0e9a5b5a3759fcde73b3326b836cdfb2c968483201fd85d5767fd2d8b3764736f6c634300081c0033",
SignatureVerifier : "0x6080604052348015600e575f5ffd5b5061052d8061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610029575f3560e01c8063017519981461002d575b5f5ffd5b610047600480360381019061004291906102d5565b61005d565b6040516100549190610360565b60405180910390f35b5f8473ffffffffffffffffffffffffffffffffffffffff166100808585856100a1565b73ffffffffffffffffffffffffffffffffffffffff16149050949350505050565b5f5f846040516020016100b491906103ed565b6040516020818303038152906040528051906020012090505f5f5f61011b87878080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505061017a565b9250925092506001848285856040515f8152602001604052604051610143949392919061043c565b6020604051602081039080840390855afa158015610163573d5f5f3e3d5ffd5b505050602060405103519450505050509392505050565b5f5f5f60418451146101c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101b8906104d9565b60405180910390fd5b602084015192506040840151915060608401515f1a90509193909250565b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610210826101e7565b9050919050565b61022081610206565b811461022a575f5ffd5b50565b5f8135905061023b81610217565b92915050565b5f819050919050565b61025381610241565b811461025d575f5ffd5b50565b5f8135905061026e8161024a565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f84011261029557610294610274565b5b8235905067ffffffffffffffff8111156102b2576102b1610278565b5b6020830191508360018202830111156102ce576102cd61027c565b5b9250929050565b5f5f5f5f606085870312156102ed576102ec6101df565b5b5f6102fa8782880161022d565b945050602061030b87828801610260565b935050604085013567ffffffffffffffff81111561032c5761032b6101e3565b5b61033887828801610280565b925092505092959194509250565b5f8115159050919050565b61035a81610346565b82525050565b5f6020820190506103735f830184610351565b92915050565b5f81905092915050565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f82015250565b5f6103b7601c83610379565b91506103c282610383565b601c82019050919050565b5f819050919050565b6103e76103e282610241565b6103cd565b82525050565b5f6103f7826103ab565b915061040382846103d6565b60208201915081905092915050565b61041b81610241565b82525050565b5f60ff82169050919050565b61043681610421565b82525050565b5f60808201905061044f5f830187610412565b61045c602083018661042d565b6104696040830185610412565b6104766060830184610412565b95945050505050565b5f82825260208201905092915050565b7f696e76616c6964207369676e6174757265206c656e67746800000000000000005f82015250565b5f6104c360188361047f565b91506104ce8261048f565b602082019050919050565b5f6020820190508181035f8301526104f0816104b7565b905091905056fea26469706673582212200e59b74d56b0b9e4eeca7c6249d6f749667ca1fc1e3815aa8c03a00b628ec6f764736f6c634300081c0033",
} as const;export type ContractName = keyof typeof abi;export default { abi, bytecode };