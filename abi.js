[
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
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
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
		"name": "GerarID",
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
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_Onwer",
				"type": "address"
			},
			{
				"name": "_Valor",
				"type": "uint256"
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
			}
		],
		"name": "VerificarID",
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
	}
]
