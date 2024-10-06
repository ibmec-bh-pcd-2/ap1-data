const linhasOnibusMetropolitanos = require("./data");
const { 
    tarifas,
    linhaMelhorAvaliada,
    tarifasMaisCaras,
    
 } = require("./questoes.js");


// a)

describe('verificar tarifas e type function', () => {
    test('deve retornar function', () => {
        expect(tarifas.type().toBe("function"));
    });
});

 // b)

 describe('verificar tarifas funciona corretamente', () => {
    test('deve retornar um array contendo o nome da linha e o valor da tarifa', () => {
        expect(tarifas(linhasOnibusMetropolitanos, 202).toBe("A tarifa da linha Rodoviária - Vila Esperança e de R$5"));
    });
});


// c)

describe('verificar linhaMelhorAvaliada', () => {
    test('deve retornar o texto com a primeira linha com nota >= 4.5', () => {
        expect(linhaMelhorAvaliada(linhasOnibusMetropolitanos).toEquals("A linha Bairro Industrial - Praça da Estação possui avaliacao de 4.5"));
    });
});


// d)

describe('verificar tarifas e type function', () => {
    test('deve retornar function', () => {
        expect(tarifasMaisCaras(linhasOnibusMetropolitanos).toBe(linhasOnibusMetropolitanos.filter(elem => elem.tarifa > 5)));
    });
});
