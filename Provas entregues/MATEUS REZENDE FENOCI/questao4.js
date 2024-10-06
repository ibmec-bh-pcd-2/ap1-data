const { linhasOnibusMetropolitanos } = require('./data.js')


const exibirTarifa = (data, id) => {
    const linha = data.find(data => data.id === id);
    const nomeLinha = linha.nomeLinha;
    const tarifaLinha = linha.tarifa;

    console.log(`A tarefa da linha ${nomeLinha} é de ${tarifaLinha}`)
}

module.exports = { exibirTarifa };
