const {linhasOnibusMetropolitanos} = require('./data');

const horarioInicial = { partida: "05:46", 
                            chegada: "06:35", 
                            dias: ["Segunda"] };

const horarioFinal = { partida: "22:17", 
                            chegada: "23:06", 
                            dias: ["Domingo"] };

linhasOnibusMetropolitanos.forEach(linha => {
    linha.horarios.unshift(horarioInicial);
});

// console.log(linhasOnibusMetropolitanos.find(linha => linha.id === 505).horarios);

linhasOnibusMetropolitanos.forEach(linha => {
    linha.horarios.shift();
});

// console.log(linhasOnibusMetropolitanos.find(linha => linha.id === 505).horarios);

linhasOnibusMetropolitanos.forEach(linha => {
    linha.horarios.push(horarioFinal);
});

// console.log(linhasOnibusMetropolitanos.find(linha => linha.id === 505).horarios);