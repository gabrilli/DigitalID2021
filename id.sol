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
    event Publicar (string Nome, uint256 CPF, uint256 Celular, bytes32 Identificador, uint256 Timestamp, uint256 Bloco);
   
    
    constructor (address payable _Onwer, address _Parceiro) 
        public {
            Onwer = _Onwer;
            Parceiro = _Parceiro;
        }
    
   
    function gerarid (string memory Nome, uint256 CPF, uint256 Celular, string memory Senha) public payable returns (bytes32) {
       
           bytes32 Identificador = keccak256(abi.encode(CPF, Senha));
       
        uint256 Timestamp = now;
        uint256 Bloco = block.number;
        DigitalID memory Temp = DigitalID (Nome, CPF, Celular, Identificador, Timestamp, Bloco);
       
        ListaClientesA.push(Temp);
        ListaClientesM1[CPF] = Temp;
        ListaClientesM2[Identificador]=Temp;
        ListaClientesM3[Celular]=Temp;
        ListaClientesM4[Nome]=Temp;
            
        
        emit NovaID (Nome, CPF, Celular, Identificador, Timestamp, Bloco);
        emit Publicar (Nome, CPF, Celular, Identificador, Timestamp, Bloco);
        
     
    }    
    
    function procurarporcpf (uint CPF) public view returns (string memory Nome, uint Celular, bytes32 Idetificador, uint Timestamp, uint Bloco) {    
    
    uint x;
    
    for (x=0; x<ListaClientesA.length; x++) {
        
        if (CPF == ListaClientesA[x].CPF) {
            return (ListaClientesA[x].Nome, ListaClientesA[x].Celular, ListaClientesA[x].Identificador, ListaClientesA[x].Timestamp, ListaClientesA[x].Bloco); 
        }
        
    }
    
    }
    
    function procurarporhash (bytes32 Identificador) public view returns (string memory Nome, uint Celular, uint CPF, uint Timestamp, uint Bloco) {    
    
    uint x;
    
    for (x=0; x<ListaClientesA.length; x++) {
        
        if (Identificador == ListaClientesA[x].Identificador) {
            return (ListaClientesA[x].Nome, ListaClientesA[x].Celular, ListaClientesA[x].CPF, ListaClientesA[x].Timestamp, ListaClientesA[x].Bloco); 
        }
        
    }
    }
     
    function procurarporcelular (uint Celular) public view returns (string memory Nome, uint CPF, bytes32 Idetificador, uint Timestamp, uint Bloco) {    
    
    uint x;
    
    for (x=0; x<ListaClientesA.length; x++) {
        
        if (Celular == ListaClientesA[x].Celular) {
            return (ListaClientesA[x].Nome, ListaClientesA[x].CPF, ListaClientesA[x].Identificador, ListaClientesA[x].Timestamp, ListaClientesA[x].Bloco); 
        }
        
    }
    } 
   
     
        
}
