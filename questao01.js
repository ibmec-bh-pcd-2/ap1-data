const linhasOnibusMetropolitanos = require('./data.js');

const adicionarParada = (data, id, parada) => {
    data.find(data => data.id === id) 
        .paradas
        .push(parada)
};

adicionarParada(linhasOnibusMetropolitanos, 202, {
    nome: 'Rua Rio Grande do Norte',
    tipo: 'ponto',
    coordenadas: { latitude: -19.823, longitude: -43.982 }
}
);

console.log(linhasOnibusMetropolitanos.find(linha => linha.id === 202).paradas);

const removerPrimeiraParada = (data, id) => {
    const linha = data.find(data => data.id === id);
    if (linha && linha.paradas.length > 0) {
        linha.paradas.shift();  
    }        
};

removerPrimeiraParada(linhasOnibusMetropolitanos, 202);

console.log(linhasOnibusMetropolitanos.find(linha => linha.id === 202).paradas);
