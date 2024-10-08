// questao7.test.js

const { tarifas, linhaMelhorAvaliada, tarifasMaisCaras } = require("./Respostas.js");
const linhasMetro = require("./data.js");

const ARRAY_TESTE_TARIFAS = [
  `A tarifa da linha Terminal Central - Bairro Novo Horizonte é de R$ 4.5`,
  `A tarifa da linha Rodoviária - Vila Esperança é de R$ 5`,
  `A tarifa da linha Bairro Industrial - Praça da Estação é de R$ 4.8`,
  `A tarifa da linha Shopping Via Centro - Jardim Europa é de R$ 6`,
  `A tarifa da linha Centro - Bairro da Serra é de R$ 3.9`
];

const TESTE_LINHAMELHORAVALIADA = `A linha Bairro Industrial - Praça da Estação possui a avaliação de 4.5.`;
const ARRAY_TESTE_VAZIO = [];

// LETRA A
describe("Verificar se a função tarifas é do tipo function", () => {
    test("A função tarifas deve ser uma função", () => {
        expect(typeof tarifas).toBe("function");
    });
});

// LETRA B
describe("Verificar se a função tarifas retorna o array correto", () => {
    test("A função tarifas deve retornar o array correto", () => {
        expect(tarifas(linhasMetro)).toEqual(ARRAY_TESTE_TARIFAS);
    });
});

// LETRA C
describe("Verificar se linhaMelhorAvaliada retorna a primeira linha com avaliação maior ou igual a 4.5 no formato correto", () => {
    test("A função linhaMelhorAvaliada deve retornar a linha correta", () => {
        expect(linhaMelhorAvaliada(linhasMetro)).toStrictEqual(TESTE_LINHAMELHORAVALIADA);
    });
});

// LETRA D
describe("Verificar se tarifasMaisCaras retornaria um array vazio quando não houvesse linhas com tarifas superiores a R$5,00", () => {
    test("A função tarifasMaisCaras deve retornar um array vazio", () => {
        // Alterando os dados para simular a condição
        const linhasAlteradas = linhasMetro.map(produto => ({
            ...produto,
            tarifa: 4.50  // todas as tarifas abaixo de 5.00
        }));
        
        // Aqui vamos verificar se a função retorna um array vazio com as tarifas alteradas
        expect(tarifasMaisCaras(linhasAlteradas)).toStrictEqual(ARRAY_TESTE_VAZIO);
    });
});

//npm init -y
//npm install jest --save-dev jest
//change the test in package.json to "test": "jest"
//npm test
//gitignore node_modules