const linhasOnibusMetropolitanos = require('./data.js');

const linhaMelhorAvaliada = (data) => {
    const linha = data.find(linha => linha.avaliacao >= 4.5);
    if (linha) {
      return `A linha ${linha.nomeLinha} possui a avaliação de ${linha.avaliacao}.`;
    } else {
      return "Nenhuma linha encontrada com avaliação igual ou superior a 4.5.";
    }
};

const melhorLinha = linhaMelhorAvaliada(linhasOnibusMetropolitanos);
console.log(melhorLinha);

module.exports = linhaMelhorAvaliada;