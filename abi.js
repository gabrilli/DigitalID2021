const contractABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "Nome",
				"type": "string"
			},
			{
				"name": "CPF",
				"type": "uint256"
			},
			{
				"name": "Celular",
				"type": "uint256"
			},
			{
				"name": "Senha",
				"type": "string"
			}
		],
		"name": "gerarid",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_Onwer",
				"type": "address"
			},
			{
				"name": "_Parceiro",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "Nome",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "CPF",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "Celular",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "Identificador",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "Timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "Bloco",
				"type": "uint256"
			}
		],
		"name": "NovaID",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "Nome",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "CPF",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "Celular",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "Identificador",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "Timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "Bloco",
				"type": "uint256"
			}
		],
		"name": "Publicar",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ListaClientesM1",
		"outputs": [
			{
				"name": "Nome",
				"type": "string"
			},
			{
				"name": "CPF",
				"type": "uint256"
			},
			{
				"name": "Celular",
				"type": "uint256"
			},
			{
				"name": "Identificador",
				"type": "bytes32"
			},
			{
				"name": "Timestamp",
				"type": "uint256"
			},
			{
				"name": "Bloco",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "ListaClientesM2",
		"outputs": [
			{
				"name": "Nome",
				"type": "string"
			},
			{
				"name": "CPF",
				"type": "uint256"
			},
			{
				"name": "Celular",
				"type": "uint256"
			},
			{
				"name": "Identificador",
				"type": "bytes32"
			},
			{
				"name": "Timestamp",
				"type": "uint256"
			},
			{
				"name": "Bloco",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ListaClientesM3",
		"outputs": [
			{
				"name": "Nome",
				"type": "string"
			},
			{
				"name": "CPF",
				"type": "uint256"
			},
			{
				"name": "Celular",
				"type": "uint256"
			},
			{
				"name": "Identificador",
				"type": "bytes32"
			},
			{
				"name": "Timestamp",
				"type": "uint256"
			},
			{
				"name": "Bloco",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"name": "ListaClientesM4",
		"outputs": [
			{
				"name": "Nome",
				"type": "string"
			},
			{
				"name": "CPF",
				"type": "uint256"
			},
			{
				"name": "Celular",
				"type": "uint256"
			},
			{
				"name": "Identificador",
				"type": "bytes32"
			},
			{
				"name": "Timestamp",
				"type": "uint256"
			},
			{
				"name": "Bloco",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "Celular",
				"type": "uint256"
			}
		],
		"name": "procurarporcelular",
		"outputs": [
			{
				"name": "Nome",
				"type": "string"
			},
			{
				"name": "CPF",
				"type": "uint256"
			},
			{
				"name": "Idetificador",
				"type": "bytes32"
			},
			{
				"name": "Timestamp",
				"type": "uint256"
			},
			{
				"name": "Bloco",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "CPF",
				"type": "uint256"
			}
		],
		"name": "procurarporcpf",
		"outputs": [
			{
				"name": "Nome",
				"type": "string"
			},
			{
				"name": "Celular",
				"type": "uint256"
			},
			{
				"name": "Idetificador",
				"type": "bytes32"
			},
			{
				"name": "Timestamp",
				"type": "uint256"
			},
			{
				"name": "Bloco",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "Identificador",
				"type": "bytes32"
			}
		],
		"name": "procurarporhash",
		"outputs": [
			{
				"name": "Nome",
				"type": "string"
			},
			{
				"name": "Celular",
				"type": "uint256"
			},
			{
				"name": "CPF",
				"type": "uint256"
			},
			{
				"name": "Timestamp",
				"type": "uint256"
			},
			{
				"name": "Bloco",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

if (network === "4") {
    contractAddress = "0x851d95caffddbb6db169fcd6e43b30d0d8980c15"; 
} else {
    contractAddress = "0x851d95caffddbb6db169fcd6e43b30d0d8980c15"; 
}

contract = web3.eth.contract(contractABI).at(contractAddress);
