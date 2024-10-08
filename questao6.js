const {linhasOnibusMetropolitanos} = require('./data');

const linhaMelhorAvaliada = (linhasOnibusMetropolitanos) => {
    const linha = linhasOnibusMetropolitanos.find(linha => linha.avaliacao >= 4.5);
        return `A linha ${linha.nomeLinha} possui a avaliação de ${linha.avaliacao}`;
};

// console.log(linhaMelhorAvaliada(linhasOnibusMetropolitanos));

module.exports = { linhaMelhorAvaliada };