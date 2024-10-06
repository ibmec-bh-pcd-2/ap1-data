const { linhasOnibusMetropolitanos } = require('./data.js')


const exibirAvaliacao = (data) => {
    const linha = data.find(data => data.avaliacao > 4.5);
    const nomeLinha = linha.nomeLinha;
    const avaliacaoLinha = linha.avaliacao;

    console.log(`A tarefa da linha ${nomeLinha} é de ${avaliacaoLinha}`)
}

exibirAvaliacao(linhasOnibusMetropolitanos)