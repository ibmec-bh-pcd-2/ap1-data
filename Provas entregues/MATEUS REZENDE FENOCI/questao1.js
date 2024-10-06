// Some, find, map, every, reduce

const { linhasOnibusMetropolitanos } = require('./data.js')

const adicionarParada = (data, id, parada) => {
    data.find(data => data.id === id) 
        .paradas
        .push(parada)
}

adicionarParada(linhasOnibusMetropolitanos, 202, {
    nome: 'Rua Rio Grande do Norte',
    tipo: 'ponto',
    coordenadas: { latitude: -19.823, longitude: -43.982 }
}
)

const removerPrimeiraParada = (data, id) => {
    console.log(
        data.find(data => data.id === id)
            .paradas[0] = {}
    )
}

removerPrimeiraParada(linhasOnibusMetropolitanos, 202)