


//Exercício 1:
//a)

const linhasOnibus1 = linhasOnibusMetropolitanos[1]["horarios"].push({ partida: "7:40", chegada: "9:20", dias: ["segunda, terça, quarta"]})
console.log(linhasOnibus1)

//b)

const linhasOnibus2 = linhasOnibusMetropolitanos[1]["horarios"].unshift

console.log(linhasOnibus2)

//Exercício 2

//a)
const chaves = Object.keys(linhasOnibusMetropolitanos[4]);

console.log(chaves)

//b)
 const valores = Object.values(planoDeTreino[4]);

 console.log(valores)

 //Exercício 3

 const novoHorarioInicio = { partida: "05:46", chegada: "06:35", dias: ["Segunda"] };
const novoHorarioFim = { partida: "22:17", chegada: "23:06", dias: ["Domingo"] };

// Itera sobre todas as linhas de ônibus
linhasOnibusMetropolitanos.forEach(linha => {
  // a) Inserir novo horário no início
  linha.horarios.unshift(novoHorarioInicio);
  
  // b) Remover o primeiro horário após a inserção
  linha.horarios.shift();
  
  // c) Adicionar novo horário ao final
  linha.horarios.push(novoHorarioFim);
});

console.log(linhasOnibusMetropolitanos);

//Exercício 4

const tarifas = () => {
    return linhasOnibusMetropolitanos.map(linha => 
      `A tarifa da linha ${linha.nomeLinha} é de R$ ${linha.tarifa.toFixed(2)}.`
    );
  };
  
  console.log(tarifas());

//Exercício 5

const TarifaMaisCara = () => {
    return linhasOnibusMetropolitanos.filter(linha => linha.tarifa > 5.00);
  };
  
  console.log(TarifaMaisCara());

//Exercício 6

const linhaMelhorAvaliada = () => {
    const linha = linhasOnibusMetropolitanos.find(linha => linha.avaliacao >= 4.5);

      return `A linha ${linha.nomeLinha} possui a avaliação de ${linha.avaliacao}.`
  };

//Exercício 7

//a)

const { tarifas } = require('./dados'); 

test('tarifas deve ser do tipo função', () => {
  expect(typeof tarifas).toBe('function');
});


//b) 

test('tarifas retorna o array correto', () => {
    const esperado = [
      'A tarifa da linha Terminal Central - Bairro Novo Horizonte é de R$ 4.50.',
      'A tarifa da linha Rodoviária - Vila Esperança é de R$ 5.00.',
      'A tarifa da linha Bairro Industrial - Praça da Estação é de R$ 4.80.',
      'A tarifa da linha Shopping Via Centro - Jardim Europa é de R$ 6.00.',
      'A tarifa da linha Centro - Bairro da Serra é de R$ 3.90.'
    ];
  
    expect(tarifas()).toEqual(esperado);
  });

//c)

  const { linhaMelhorAvaliada } = require('./dados');

test('linhaMelhorAvaliada retorna a linha com avaliação maior ou igual a 4.5', () => {
  const esperado = 'A linha Shopping Via Centro - Jardim Europa possui a avaliação de 4.7.';
  expect(linhaMelhorAvaliada()).toBe(esperado);
});

//d)

const { TarifaMaisCara } = require('./dados');

test('TarifaMaisCara retorna array vazio quando não houver linhas com tarifa superior a R$ 5,00', () => {
  const resultadoEsperado = []; // Porque a única tarifa maior que 5.00 já está no filtro
  expect(TarifaMaisCara()).toEqual(resultadoEsperado);
});






  
  
  
  



