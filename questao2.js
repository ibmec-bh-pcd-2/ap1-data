const {linhasOnibusMetropolitanos} = require('./data');

const linha505 = linhasOnibusMetropolitanos.find(linha => linha.id === 505);

const ex2a = Object.keys(linha505.empresaResponsavel);
// console.log('Chaves do objeto empresaResponsavel:', ex2a);

const ex2b = Object.values(linha505.empresaResponsavel);
// console.log('Valores das propriedades de empresaResponsavel:', ex2b);