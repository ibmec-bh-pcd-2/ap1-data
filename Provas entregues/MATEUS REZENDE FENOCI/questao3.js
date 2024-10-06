const { linhasOnibusMetropolitanos } = require('./data.js')

const adicionarParadaUltimaLinha = (data) => {
    const size = data.length
    for (i = 0; i < size; i++) {
        data[i].horarios.push({
            partida: "22:17",
            chegada: "23:06",
            dias: ["Domingo"]
        })
    }
}

const adicionarParadaPrimeiraLinha = (data) => {
    const size = data.length
    for (i = 0; i < size; i++) {
        data[i].horarios[0] = {
            partida: "05:46",
            chegada: "06:35",
            dias: ["Segunda"]
        }
    }
}
const size = linhasOnibusMetropolitanos.length


adicionarParadaUltimaLinha(linhasOnibusMetropolitanos)
for (i = 0; i < size; i++) {
    console.log(linhasOnibusMetropolitanos[i].horarios)
}

adicionarParadaPrimeiraLinha(linhasOnibusMetropolitanos)
for (i = 0; i < size; i++) {
    console.log(linhasOnibusMetropolitanos[i].horarios)
}