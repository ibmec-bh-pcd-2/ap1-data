const dados = require("./dados");

function tarifasMaisCaras(dados){
    return dados.filter((dados)=> dados.tarifa > 5);
}

const tarifas5mais= tarifasMaisCaras(dados);
console.log(tarifas5mais);



