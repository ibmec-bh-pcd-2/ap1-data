const { linhasOnibusMetropolitanos } = require('./data.js')

const exibirPropriedade = (data, id) => {
    console.log(
    data.find(data => data.id === id) 
        .empresaResponsavel
    )
        
}

const exibirNomePropriedade = (data, id) => {
    console.log(
    data.find(data => data.id === id) 
        .empresaResponsavel
        .nome
    )
        
}

const exibirContatoPropriedade = (data, id) => {
    console.log(
    data.find(data => data.id === id) 
        .empresaResponsavel
        .contato
    )
        
}

const exibirTelefonePropriedade = (data, id) => {
    console.log(
    data.find(data => data.id === id) 
        .empresaResponsavel
        .telefone
    )
        
}

const exibirSitePropriedade = (data, id) => {
    console.log(
    data.find(data => data.id === id) 
        .empresaResponsavel
        .site
    )
        
}
