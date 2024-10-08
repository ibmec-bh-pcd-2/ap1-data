const { tarifas } = require('./questao4');
const { linhaMelhorAvaliada } = require('./questao6');
const { tarifasMaisCaras } = require('./questao5');
const {linhasOnibusMetropolitanos} = require('./data');


describe('Teste da função tarifas', () => {
    test('Verifica se tarifas é do tipo function', () => {
        expect(typeof tarifas).toBe('function');
    });
});

describe('Testes para a função tarifas', () => {

    test('Verifica se tarifas retorna o array correto, com nome da linha e tarifa formatada', () => {
        const resultadoEsperado = [
            'A tarifa da linha Terminal Central - Bairro Novo Horizonte é de R$ 4.5.',
            'A tarifa da linha Rodoviária - Vila Esperança é de R$ 5.',
            'A tarifa da linha Bairro Industrial - Praça da Estação é de R$ 4.8.',
            'A tarifa da linha Shopping Via Centro - Jardim Europa é de R$ 6.',
            'A tarifa da linha Centro - Bairro da Serra é de R$ 3.9.'
        ];

        expect(tarifas()).toEqual(resultadoEsperado);
    });
});


describe('Testes para a função linhaMelhorAvaliada', () => {

    test('Verificar se linhaMelhorAvaliada retorna a primeira linha com avaliação >= 4.5 no formato correto', () => {
        const resultadoEsperado = 'A linha Bairro Industrial - Praça da Estação possui a avaliação de 4.5';

        expect(linhaMelhorAvaliada(linhasOnibusMetropolitanos)).toBe(resultadoEsperado);
    });

});


describe('Testes para a função tarifasMaisCaras', () => {

    test('Verificar se tarifasMaisCaras retorna as linhas com tarifa superior a R$ 5.00', () => {
        const resultadoEsperado = [
            {
                id: 404,
                nomeLinha: "Shopping Via Centro - Jardim Europa",
                tarifa: 6,
                acessibilidade: true,
                avaliacao: 4.7,
                empresaResponsavel: {
                    nome: "Expresso Europa",
                    contato: "contato@expressoeuropa.com",
                    telefone: "(31) 92222-3333",
                    site: "www.expressoeuropa.com"
                },
                horarios: [
                    { partida: "09:00", chegada: "09:50", dias: ["Sábado", "Domingo"] },
                    { partida: "13:00", chegada: "13:50", dias: ["Segunda", "Quarta", "Sábado"] },
                    { partida: "18:00", chegada: "18:50", dias: ["Segunda", "Terça", "Sábado"] }
                ],
                paradas: [
                    { nome: "Shopping Via Centro", tipo: "terminal", coordenadas: { latitude: -19.9503, longitude: -43.9821 } },
                    { nome: "Rua José Bonifácio, 1000", tipo: "ponto", coordenadas: { latitude: -19.945, longitude: -43.978 } },
                    { nome: "Jardim Europa", tipo: "final", coordenadas: { latitude: -19.92, longitude: -43.965 } }
                ],
                frota: [
                    { modelo: "Mercedes-Benz O500", ano: 2019, capacidade: 40 },
                    { modelo: "Volvo B270F", ano: 2021, capacidade: 45 }
                ]
            }
        ];

        const resultado = tarifasMaisCaras(resultadoEsperado);

        expect(resultado).toEqual(resultadoEsperado);
    });
});