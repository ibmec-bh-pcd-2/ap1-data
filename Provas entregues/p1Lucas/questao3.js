const dados = require("./dados")

const novohorario= "partida: 05:46, chegada: 06:35, dias [segunda]";
const novohorariofim="partida: 22:17, chegada: 23:06, dias [domingo]";

for(const linha in dados){
    dados[linha].unshift(novohorario);
    dados[linha].push(novohorariofim);
}

console.log(dados);
