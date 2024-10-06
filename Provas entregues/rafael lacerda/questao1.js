const linhasOnibusMetropolitanos = require('./data');

const ex1a = linhasOnibusMetropolitanos => {
    linhasOnibusMetropolitanos.filter(linhasOnibusMetropolitanos.id == 202)
    .push(
        {
            nome: "Rodoviária2",
            tipo: "terminal",
            coordenadas: { latitude: -19.924500, longitude: -43.991500 }
        }
    )
};

const ex1b = linhasOnibusMetropolitanos => {
    linhasOnibusMetropolitanos.filter(linhasOnibusMetropolitanos.id == 202)
    .unshift();
}

