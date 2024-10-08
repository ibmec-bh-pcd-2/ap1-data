const linhasOnibusMetropolitanos = require("./data");
// Questao 5

function tarifasMaisCaras(array){
    return array.filter(elem => elem.tarifa > 5);
}

const tarfifasCaras = tarifasMaisCaras(linhasOnibusMetropolitanos);
console.log(tarfifasCaras);

module.exports = { tarifasMaisCaras };