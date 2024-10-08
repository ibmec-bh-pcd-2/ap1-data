const tarifas = require('./questao04.js');
const tarifasMaisCaras = require('./questao05.js');
const linhaMelhorAvaliada = require('./questao06.js');
const linhasOnibusMetropolitanos = require('./data.js');

test('Verificar se tarifas é do tipo function', () => {
    expect(typeof tarifas).toBe('function');
  });
  
  test('Verificar se tarifas retorna o array correto', () => {
    const expected = [
      'A tarifa da linha Terminal Central - Bairro Novo Horizonte é de R$ 4.50',
      'A tarifa da linha Rodoviária - Vila Esperança é de R$ 5.00',
      'A tarifa da linha Bairro Industrial - Praça da Estação é de R$ 4.80',
      'A tarifa da linha Shopping Via Centro - Jardim Europa é de R$ 6.00',
      'A tarifa da linha Centro - Bairro da Serra é de R$ 3.90'
    ];
    expect(tarifas(linhasOnibusMetropolitanos)).toEqual(expected);
  });
  
  test('Verificar se linhaMelhorAvaliada retorna a linha correta com avaliação >= 4.5', () => {
    const expected = 'A linha Bairro Industrial - Praça da Estação possui a avaliação de 4.5.';
    expect(linhaMelhorAvaliada(linhasOnibusMetropolitanos)).toBe(expected);
  });
  
  test('Verificar se tarifasMaisCaras retorna um array vazio quando não houver tarifas > R$ 5.00', () => {
    const linhasComTarifasBaixas = [
      { id: 101, nomeLinha: "Linha A", tarifa: 4.50 },
      { id: 102, nomeLinha: "Linha B", tarifa: 4.80 }
    ];
    expect(tarifasMaisCaras(linhasComTarifasBaixas)).toEqual([]);
});