// Importar as funções de cada arquivo específico
const { tarifas } = require('./questao4');
const { linhaMelhorAvaliada } = require('./questao6');
const { tarifasMaisCaras } = require('./questao5');

// Dados para teste
const linhasOnibusMetropolitanos = require('./data');

// a) Verificar se tarifas é do tipo function
describe('a) Verificar se tarifas é do tipo function', () => {
    test('tarifas deve ser uma função', () => {
        expect(typeof tarifas).toBe('function');
    });
});

// b) Verificar se a função tarifas retorna o array correto, contendo o nome da linha e o valor da tarifa no formato correto
describe('b) Verificar se tarifas retorna o formato correto', () => {
    test('deve retornar o texto correto com nome da linha e a tarifa', () => {
        const resultado = tarifas(linhasOnibusMetropolitanos);
        expect(resultado[1]).toBe("A tarifa da linha Rodoviária - Vila Esperança é de R$ 5.00.");
    });
});

// c) Verificar se a função linhaMelhorAvaliada retorna a primeira linha com avaliação maior ou igual a 4.5, no formato correto
describe('c) Verificar se linhaMelhorAvaliada retorna o valor correto', () => {
    test('deve retornar o texto correto para a linha com a melhor avaliação', () => {
        const resultado = linhaMelhorAvaliada(linhasOnibusMetropolitanos);
        expect(resultado).toBe("A linha Bairro Industrial - Praça da Estação possui a avaliação de 4.5.");
    });
});

// d) Verificar se tarifasMaisCaras retorna um array vazio quando não houver linhas com tarifa superior a R$ 5,00
describe('d) Verificar se tarifasMaisCaras retorna array vazio quando não houver tarifas maiores que 5', () => {
    test('deve retornar um array vazio quando não houver linhas com tarifa superior a 5', () => {
        const linhasTeste = [
            { nomeLinha: "Linha Teste 1", tarifa: 4.0 },
            { nomeLinha: "Linha Teste 2", tarifa: 3.5 },
            { nomeLinha: "Linha Teste 3", tarifa: 4.8 }
        ];
        const resultado = tarifasMaisCaras(linhasTeste);
        expect(resultado).toEqual([]);
    });
});
