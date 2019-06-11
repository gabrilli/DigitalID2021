<script>

var frm1 = document.cliente;

function registrar {

event.preventDefault();

$("#statusTransacao").html("&nbsp;");
contract.ID(frm1.nome.value, frm1.CPF.value, frm1.Cel.value, frm1.Senha.value {from: web3.eth.accounts[0], gas: 3000000, value: 0}, function (erro, resultado) {
    if (erro) {
        console.log("registrar");
        console.error(erro);
        alert("Houve um erro ao registrar esse cliente");
        return
    }
    waitForTxToBeMined(resultado, "#statusTransacao");
})
}


</script>
