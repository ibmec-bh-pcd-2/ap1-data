const linhasOnibusMetropolitanos = require('./data');

linhasOnibusMetropolitanos.horarios.unshift({
    partida: "05:46", chegada: "06:35", dias:["Segunda"]
});

linhasOnibusMetropolitanos.shift(linhasOnibusMetropolitanos.horarios[1]);

linhasOnibusMetropolitanos.horarios.push({
    partida: "22:17", chegada: "23:06", dias:["Domingo"]
});