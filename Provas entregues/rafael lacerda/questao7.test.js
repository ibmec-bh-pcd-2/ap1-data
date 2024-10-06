const linhasOnibusMetropolitanos = require('./data');
const tarifas = require('./questao4')
const tarifasMaisCaras = require('./questao5')
const linhaMelhorAvaliada = require('./questao6')

describe('Funcao tarifas:', () => {
    test('deve retornar o tipo function', () => {
        expect(tarifas.toType(Function))
    })

    test('deve retornar um array', () => {
        expect(tarifas.toBe(
            'A tarifa da linha Terminal Central - Bairro Novo Horizonte é de R$ 4.50'
        ))
    })
});

describe('Funcao linhaMelhorAvaliada:', () => {
    test('deve retornar a primeira linha', () => {
        expect(linhaMelhorAvaliada.toBe(
            'A linha Bairro Industrial - Praça da Estação possui a avaliação de 4.5'
        ))
    })
});

describe('Funcao tarifasMaisCaras:', () => {
    test('deve retornar um array vazio', () => {
        const linhasOnibusMetropolitanos = [
            {
              id: 101,
              nomeLinha: "Terminal Central - Bairro Novo Horizonte",
              tarifa: 4.50,
              horarios: [
                {
                  partida: "06:00",
                  chegada: "06:45",
                  dias: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"]
                },
                {
                  partida: "12:00",
                  chegada: "12:45",
                  dias: ["Segunda", "Quarta", "Sexta"]
                },
                {
                  partida: "18:00",
                  chegada: "18:45",
                  dias: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
                }
              ],
            paradas: [
                {
                  nome: "Terminal Central",
                  tipo: "terminal",
                  coordenadas: { latitude: -19.912998, longitude: -43.940933 }
                },
                {
                  nome: "Av. Brasil, 123",
                  tipo: "ponto",
                  coordenadas: { latitude: -19.915000, longitude: -43.937500 }
                },
                {
                  nome: "Bairro Novo Horizonte",
                  tipo: "final",
                  coordenadas: { latitude: -19.920000, longitude: -43.930000 }
                }
              ],
              empresaResponsavel: {
                nome: "TransMetropolitana",
                contato: "contato@transmetropolitana.com",
                telefone: "(31) 98765-4321",
                site: "www.transmetropolitana.com"
              },
              avaliacao: 4.2,
              acessibilidade: true
            }
        ]
        expect((tarifasMaisCaras.length).toBe(0))
    })
})