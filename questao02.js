const linhasOnibusMetropolitanos = require('./data.js');

const linha505 = linhasOnibusMetropolitanos.find(linha => linha.id === 505);

const chavesEmpresa = Object.keys(linha505.empresaResponsavel);
console.log("Chaves do objeto empresaResponsavel:", chavesEmpresa);

const valoresEmpresa = Object.values(linha505.empresaResponsavel);
console.log("Valores do objeto empresaResponsavel:", valoresEmpresa);
