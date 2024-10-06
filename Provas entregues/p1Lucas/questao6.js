const dados = require("./dados");

function linhaMelhorAvaliada(dados){
    const linhaMelhorAvaliada = dados.find((dados)=>dados.avaliacao>=4.5);
    if(linhaMelhorAvaliada){
        return "${dados.nome} - avaliacao: ${dados.avaliacao}";
    }
    else{
        "Nenhuma Linha nas condições";
    }
}

const linhaMelhorAvaliada = linhaMelhorAvaliada(dados);
console.log(linhaMelhorAvaliada);