const linhasOnibusMetropolitanos = require("./data");
// Questao 1

// a)

const novaParada = {
    nome: "Beco",
    tipo: "BecoTeste",
    coordenadas: { latitude: -17.924500, longitude: -43.991500 }
    };

function adicionarParada(array, linhaId,novaParada){
    const linha = array.find(lin => lin.id === linhaId);
    linha.paradas.push(novaParada);
    return array;
        
}
adicionarParada(linhasOnibusMetropolitanos,202,novaParada);
// console.log(linhasOnibusMetropolitanos);

// b)

function removerPrimeiraParada(array, linhaId) {
    const linha = array.find(lin => lin.id === linhaId);
    linha.paradas.shift(); 
    return array;
}
removerPrimeiraParada(linhasOnibusMetropolitanos, 202);
console.log(linhasOnibusMetropolitanos.find(lin => lin.id === 202).paradas);