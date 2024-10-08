const linhasOnibusMetropolitanos = require("./data");
// Questao 6

function linhaMelhorAvaliada(array) {
    const linhaBemAvaliada = array.find(lin => lin.avaliacao >= 4.5);
    const nomeLinha = linhaBemAvaliada.nomeLinha;
    const avaliacao = linhaBemAvaliada.avaliacao.toFixed(1); 
    return `A linha ${nomeLinha} possui a avaliação de ${avaliacao}.`;
}

const resultadoMelhorAvaliacao = linhaMelhorAvaliada(linhasOnibusMetropolitanos);

console.log(resultadoMelhorAvaliacao);

module.exports = { linhaMelhorAvaliada };