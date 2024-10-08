const linhasOnibusMetropolitanos = require('./data.js');

const tarifas = (data) => {
    return data.map(linha => `A tarifa da linha ${linha.nomeLinha} é de R$ ${linha.tarifa.toFixed(2)}`);
};

const tarifasLinhas = tarifas(linhasOnibusMetropolitanos);
console.log(tarifasLinhas);

module.exports = tarifas;