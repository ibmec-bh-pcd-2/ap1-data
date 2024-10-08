const {linhasOnibusMetropolitanos} = require('./data');

const ex1a = (linhasOnibusMetropolitanos) => {
    const linha = linhasOnibusMetropolitanos.find(linha => linha.id === 202);

    if (linha) {
        linha.paradas.push({
            nome: "Rodoviária2",
            tipo: "terminal",
            coordenadas: { latitude: -19.924500, longitude: -43.991500 }
        });
    }
};

const ex1b = (linhasOnibusMetropolitanos) => {
    const linha = linhasOnibusMetropolitanos.find(linha => linha.id === 202);
    
    if (linha) {
        linha.paradas.shift();
    }
};

ex1a(linhasOnibusMetropolitanos);
ex1b(linhasOnibusMetropolitanos);

// console.log(linhasOnibusMetropolitanos.find(linha => linha.id === 202).paradas);