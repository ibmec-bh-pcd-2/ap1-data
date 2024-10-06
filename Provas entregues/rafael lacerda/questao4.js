const linhasOnibusMetropolitanos = require('./data');

const tarifas = linhasOnibusMetropolitanos
    .forEach(element => {
        console.log('A tarifa da linha ${nomeLinha} é de R$ ${tarifa}')
    });

