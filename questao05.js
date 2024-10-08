const linhasOnibusMetropolitanos = require('./data.js');

const tarifasMaisCaras = (data) => {
    return data.filter(linha => linha.tarifa > 5.00);
};

const linhasCaras = tarifasMaisCaras(linhasOnibusMetropolitanos);
console.log(linhasCaras);

module.exports = tarifasMaisCaras;