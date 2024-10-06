const linhasOnibusMetropolitanos = require("./data");
// console.log(linhasOnibusMetropolitanos);

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

function removerParada(array, linhaId){
    const linha = array.find(lin => lin.id === linhaId);
    linha.paradas.pop();
    return array;
}
removerParada(linhasOnibusMetropolitanos,202);

// Questao 2

// a)

function exibirChaves(array,linhaId){
    const linha = array.find(lin => lin.id === linhaId);
    const empresa = linha.empresaResponsavel;
    console.log(Object.keys(empresa));
}
exibirChaves(linhasOnibusMetropolitanos,505);

// console.log(linhasOnibusMetropolitanos.find(lin => lin.id === 505));
// console.log(Object.keys(linha[empresaResponsavel]));



// b) 

function exibirValores(array,linhaId){
    const linha = array.find(lin => lin.id === linhaId);
    const empresa = linha.empresaResponsavel;
    console.log(Object.values(empresa));
}
exibirValores(linhasOnibusMetropolitanos,505);


// Questao 3

const novoHorario = {
        partida: "05:46",
        chegada: "06:35",
        dias: ["Segunda"]
    };


const novoHorario1 = {
    partida: "22:17",
    chegada: "23:06",
    dias: ["Domingo"]
};


function adicionarHorarioInicio(array, linhaId){
    const linha = array.find(lin => lin.id === linhaId);
    linha.horarios.unshift(novoHorario);
    return array;
            
};

function adicionarHorarioFinal(array, linhaId){
    const linha = array.find(lin => lin.id === linhaId);
    linha.horarios.pop(novoHorario1);
    return array;
            
};

// Questao 4

function tarifas(array, linhaId ){
    const linha = array.find(lin => lin.id === linhaId);
    const nome_linha = linha.nomeLinha;
    const valor = linha.tarifa;
    console.log("A tarifa da linha %s e de R$%f",nome_linha,valor);
}
tarifas(linhasOnibusMetropolitanos, 202);

// Questao 5

function tarifasMaisCaras(array){
    return array.filter(elem => elem.tarifa > 5);
}

const tarfifasCaras = tarifasMaisCaras(linhasOnibusMetropolitanos);
console.log(tarfifasCaras);

// Questao 6

function linhaMelhorAvaliada(array){
    const linhaBemAvalida = array.find(lin => lin.avaliacao >= 4.5);
    const nomeLinha = linhaBemAvalida.nomeLinha;
    const avaliacao = linhaBemAvalida.avaliacao;
    console.log("A linha %s possui avaliacao de %f",nomeLinha,avaliacao);
}
linhaMelhorAvaliada(linhasOnibusMetropolitanos);




