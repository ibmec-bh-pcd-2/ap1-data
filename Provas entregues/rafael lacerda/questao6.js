const linhasOnibusMetropolitanos = require('./data');

const linhaMelhorAvaliada = (linhasOnibusMetropolitanos) => {
    linhasOnibusMetropolitanos.some(linhaMelhorAvaliada.avaliacao >= 4.5);
}

//console.log(linhaMelhorAvaliada(linhasOnibusMetropolitanos));