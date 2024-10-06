const linhasOnibusMetropolitanos = require('./data');

const tarifasMaisCaras = linhasOnibusMetropolitanos
    .filter(linhasOnibusMetropolitanos.tarifa >= 5.00)
    .map(linhasOnibusMetropolitanos.nomeLinha);

//console.log(tarifasMaisCaras);

