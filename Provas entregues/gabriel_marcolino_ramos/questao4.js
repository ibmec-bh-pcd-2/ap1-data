const linhasOnibusMetropolitanos = require("./data");
// Questao 4

function tarifas(array) {
    return array.map(linha => {
        return `A tarifa da linha ${linha.nomeLinha} é de R$ ${linha.tarifa.toFixed(2)}.`;
    });
}

const resultadoTarifas = tarifas(linhasOnibusMetropolitanos);
console.log(resultadoTarifas);

module.exports = { tarifas };