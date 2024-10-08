const linhasMetro = require("./data.js")

//PRECISO TESTAR CADA UMA DAS FUNÇÕES ABAIXO

//Questao 1
const adicionarParada = (data) => {
    const linha = data.find(produto => produto.id === 202);
    
    if (linha) { 
        linha.paradas.push({
            nome: "Terminal Central",
            tipo: "terminal",
            coordenadas: { latitude: -19.912998, longitude: -43.940933 }
        });
    } else {
        console.error('Linha com o ID 202 não encontrada.');
    }
}
const removerParada = (data) => {
    data.find(produto => produto.id === 202)
    .paradas.shift()
}

adicionarParada(linhasMetro);

for (let i = 0; i < linhasMetro.length; i++) {
    console.log(linhasMetro[i].paradas);
};

removerParada(linhasMetro);
for (let i = 0; i < linhasMetro.length; i++) {
    console.log(linhasMetro[i].paradas);
}



//Quest2

const PrintarChaves = (data) => {
    const linha505 = data.find((produto) => produto.id === 505);
    
    const empresaResponsavel = linha505.empresaResponsavel;
    
    return console.log(Object.keys(empresaResponsavel));

}

const PrintarValores = (data) => {
    const linha505 = data.find((produto) => produto.id === 505);
    const empresaResponsavel = linha505.empresaResponsavel;
    return console.log(Object.values(empresaResponsavel));
}

PrintarChaves(linhasMetro);
PrintarValores(linhasMetro);


//Quest3
const InserirRemoverAdicionarHorario = (data) => {
    const horarioNovoInicio = {
        partida: "05:46",
        chegada: "06:35",
        dias: ["Segunda"]
    };

    const horarioNovoFim = {
        partida: "22:17",
        chegada: "23:06",
        dias: ["Domingo"]
    };

    data.forEach((produto) => {
        console.log(`\nAntes das alterações na linha: ${produto.nomeLinha}`);
        console.log(`Horários atuais:`, produto.horarios);

        produto.horarios.unshift(horarioNovoInicio);
        console.log(`Inserido novo horário no início:`, horarioNovoInicio);

        const horarioRemovido = produto.horarios.shift();
        console.log(`Removido primeiro horário:`, horarioRemovido);

        produto.horarios.push(horarioNovoFim);
        console.log(`Adicionado novo horário ao final:`, horarioNovoFim);

        console.log(`Após as alterações na linha: ${produto.nomeLinha}`);
        console.log(`Horários atualizados:`, produto.horarios);
    });
};
InserirRemoverAdicionarHorario(linhasMetro);

//Quest4
const tarifas = (data) => {
    const retorno = data.map(produto => {
        return `A tarifa da linha ${produto.nomeLinha} é de R$ ${produto.tarifa}`;
    });
    return retorno;
};
console.log(tarifas(linhasMetro));

//Quest5
const tarifasMaisCaras = (data) => { 
    return data.
    filter((produto) => produto.tarifa > 5)}

tarifasMaisCaras(linhasMetro);

//Quest6
const linhaMelhorAvaliada = (data) => {
    const linhaBemAvaliada = data.find(produto => produto.avaliacao >= 4.5);
    if (linhaBemAvaliada) {
        return `A linha ${linhaBemAvaliada.nomeLinha} possui a avaliação de ${linhaBemAvaliada.avaliacao}.`;
    } else {
        return "Não há linhas com avaliação igual ou superior a 4.5.";
    }
};
linhaMelhorAvaliada(linhasMetro);

module.exports = { tarifas, linhaMelhorAvaliada, tarifasMaisCaras}
