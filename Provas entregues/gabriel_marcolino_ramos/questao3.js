const linhasOnibusMetropolitanos = require("./data");

const novoHorarioInicio = {
    partida: "05:46",
    chegada: "06:35",
    dias: ["Segunda"]
};

const novoHorarioFinal = {
    partida: "22:17",
    chegada: "23:06",
    dias: ["Domingo"]
};

function adicionarHorarioInicioTodasLinhas(array, novoHorario) {
    array.forEach(linha => {
        linha.horarios.unshift(novoHorario);
    });
    return array;
}

function removerPrimeiroHorarioTodasLinhas(array) {
    array.forEach(linha => {
        linha.horarios.shift(); 
    });
    return array;
}

function adicionarHorarioFinalTodasLinhas(array, novoHorario) {
    array.forEach(linha => {
        linha.horarios.push(novoHorario); 
    });
    return array;
}

adicionarHorarioInicioTodasLinhas(linhasOnibusMetropolitanos, novoHorarioInicio);
removerPrimeiroHorarioTodasLinhas(linhasOnibusMetropolitanos);
adicionarHorarioFinalTodasLinhas(linhasOnibusMetropolitanos, novoHorarioFinal);

console.log(linhasOnibusMetropolitanos);
