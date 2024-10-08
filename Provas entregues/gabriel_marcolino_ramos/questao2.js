const linhasOnibusMetropolitanos = require("./data");
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