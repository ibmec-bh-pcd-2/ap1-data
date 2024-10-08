const {linhasOnibusMetropolitanos} = require('./data');

const tarifasMaisCaras = () => {
    return linhasOnibusMetropolitanos.filter(linha => linha.tarifa > 5.00);
};

// console.log(tarifasMaisCaras());

module.exports = { tarifasMaisCaras };