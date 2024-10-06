const dados = require("./dados");

const adicionar = (arr,nova_parada) =>{

    arr.push(nova_parada);
    return arr;

}

const remover = (arr,id)=> {
    for (let i =0;i<dados.lenght; i++){
        if(dados[i].id===id){
            dados.splice(i,1);
            break;
        }
    }
}