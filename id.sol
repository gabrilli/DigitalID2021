pragma solidity 0.5.9;

contract Digitalid {
    
    address payable Onwer;
    address Parceiro;
    
   
       struct DigitalID {
       string Nome;
       uint256 CPF;
       uint256 Celular;
       bytes32 Identificador;
       uint256 Timestamp;
       uint256 Bloco;
    }
    
    DigitalID[] ListaClientesA;
    mapping (uint256 => DigitalID) public ListaClientesM1;
    mapping (bytes32 => DigitalID) public ListaClientesM2;
    mapping (uint256 => DigitalID) public ListaClientesM3;
    mapping (string => DigitalID) public ListaClientesM4;
    
    
    modifier SomenteOwner () {
        require (msg.sender == Onwer, "Operação exclusiva da Empresa");
        _;
    }
    
    event NovaID (string Nome, uint256 CPF, uint256 Celular, bytes32 Identificador,  uint256 Timestamp, uint256 Bloco);
    event VerificarID (string Nome, uint256 CPF, uint256 Celular, bytes32 Identificador);
    event Publicar (string Nome, uint256 CPF, uint256 Celular, bytes32 Identificador, uint256 Timestamp, uint256 Bloco);
   
    
    constructor (address payable _Onwer, address _Parceiro) 
        public {
            Onwer = _Onwer;
            Parceiro = _Parceiro;
        }
    
   
    function gerarid (string memory Nome, uint256 CPF, uint256 Celular, string memory Senha) public payable returns (bytes32) {
       
    
       
       bytes32 Identificador = keccak256(abi.encode(Nome, Celular, CPF, Senha));
       
        
        DigitalID memory Temp = DigitalID (Nome, CPF, Celular, Identificador, now, block.number);
       
        ListaClientesA.push(Temp);
        ListaClientesM1[CPF] = Temp;
        ListaClientesM2[Identificador]=Temp;
        ListaClientesM3[Celular]=Temp;
        ListaClientesM4[Nome]=Temp;
            
        
        emit NovaID (Nome, CPF, Celular, Identificador, now, block.number);
        
        
        
        emit Publicar (Nome, CPF, Celular, Identificador, now, block.number);
        
     
    }    
        
    
       
   }
