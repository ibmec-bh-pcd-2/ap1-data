const {linhasOnibusMetropolitanos} = require('./data');

const tarifas = () => {
    return linhasOnibusMetropolitanos.map(linha => {
        return `A tarifa da linha ${linha.nomeLinha} é de R$ ${linha.tarifa}.`;
    });
};

// console.log(tarifas());

module.exports = { tarifas };