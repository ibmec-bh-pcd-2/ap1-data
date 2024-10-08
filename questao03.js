const linhasOnibusMetropolitanos = require('./data.js');

const horarioInicio = { partida: "05:46", chegada: "06:35", dias: ["Segunda"] };

const horarioFinal = { partida: "22:17", chegada: "23:06", dias: ["Domingo"] };

linhasOnibusMetropolitanos.forEach(linha => {
    linha.horarios.unshift(horarioInicio);

    linha.horarios.shift();

    linha.horarios.push(horarioFinal);
});

console.log(linhasOnibusMetropolitanos.map(linha => linha.horarios));
