const dados = require("./dados");

function tarifas(){
    return linhas.map((dados)=>{
        return 'A tarifa da linha ${dados.nome} é de R$ ${dados.tarifa}';});
    }
