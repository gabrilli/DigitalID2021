
        var frm = document.cliente;
        function pesquisar () {
            event.preventDefault();
            $("#resultadoPesquisa").html("");
            contract.gerarid (frm2.Nome.value, frm2.CPF.value, frm2.Cel.value, frm1.identificador.value, function (erro, resultado) {
                if (erro) {
                    console.log("pesquisarcliente");
                    console.error(erro);
                    alert("Houve um erro ao pesquisar o nome do cliente");
                    //frmPesquisa.matricula.value = "";
                    return
                }
                $("#resultadoPesquisa").html("O proprietário do imóvel informado é: " + resultado);
            })
        }



