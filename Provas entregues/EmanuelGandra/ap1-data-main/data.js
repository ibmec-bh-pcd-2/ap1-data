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
  },
  {
    id: 202,
    nomeLinha: "Rodoviária - Vila Esperança",
    tarifa: 5.00,
    horarios: [
      {
        partida: "07:30",
        chegada: "08:10",
        dias: ["Segunda", "Quarta", "Sexta"]
      },
      {
        partida: "15:30",
        chegada: "16:10",
        dias: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"]
      },
      {
        partida: "20:30",
        chegada: "21:10",
        dias: ["Segunda", "Quarta", "Sexta"]
      }
    ],
    paradas: [
      {
        nome: "Rodoviária",
        tipo: "terminal",
        coordenadas: { latitude: -19.924500, longitude: -43.991500 }
      },
      {
        nome: "Rua das Flores, 567",
        tipo: "ponto",
        coordenadas: { latitude: -19.926000, longitude: -43.985000 }
      },
      {
        nome: "Vila Esperança",
        tipo: "final",
        coordenadas: { latitude: -19.930000, longitude: -43.980000 }
      }
    ],
    empresaResponsavel: {
      nome: "MetroBus",
      contato: "sac@metrobus.com",
      telefone: "(31) 98888-9999",
      site: "www.metrobus.com"
    },
    avaliacao: 3.8,
    acessibilidade: true
  },
  {
    id: 303,
    nomeLinha: "Bairro Industrial - Praça da Estação",
    tarifa: 4.80,
    horarios: [
      {
        partida: "05:45",
        chegada: "06:30",
        dias: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"]
      },
      {
        partida: "11:45",
        chegada: "12:30",
        dias: ["Sábado", "Domingo"]
      },
      {
        partida: "19:45",
        chegada: "20:30",
        dias: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"]
      }
    ],
    paradas: [
      {
        nome: "Bairro Industrial",
        tipo: "final",
        coordenadas: { latitude: -19.950000, longitude: -43.992000 }
      },
      {
        nome: "Avenida Amazonas, 998",
        tipo: "ponto",
        coordenadas: { latitude: -19.947500, longitude: -43.990000 }
      },
      {
        nome: "Praça da Estação",
        tipo: "terminal",
        coordenadas: { latitude: -19.920800, longitude: -43.937000 }
      }
    ],
    empresaResponsavel: {
      nome: "SuperOnibus",
      contato: "atendimento@superonibus.com",
      telefone: "(31) 99999-1111",
      site: "www.superonibus.com"
    },
    avaliacao: 4.5,
    acessibilidade: false
  },
  {
    id: 404,
    nomeLinha: "Shopping Via Centro - Jardim Europa",
    tarifa: 6.00,
    horarios: [
      {
        partida: "09:00",
        chegada: "09:50",
        dias: ["Sábado", "Domingo"]
      },
      {
        partida: "13:00",
        chegada: "13:50",
        dias: ["Segunda", "Quarta", "Sábado"]
      },
      {
        partida: "18:00",
        chegada: "18:50",
        dias: ["Segunda", "Terça", "Sábado"]
      }
    ],
    paradas: [
      {
        nome: "Shopping Via Centro",
        tipo: "terminal",
        coordenadas: { latitude: -19.950300, longitude: -43.982100 }
      },
      {
        nome: "Rua José Bonifácio, 1000",
        tipo: "ponto",
        coordenadas: { latitude: -19.945000, longitude: -43.978000 }
      },
      {
        nome: "Jardim Europa",
        tipo: "final",
        coordenadas: { latitude: -19.920000, longitude: -43.965000 }
      }
    ],
    empresaResponsavel: {
      nome: "Expresso Europa",
      contato: "contato@expressoeuropa.com",
      telefone: "(31) 92222-3333",
      site: "www.expressoeuropa.com"
    },
    avaliacao: 4.7,
    acessibilidade: true,
    frota: [
      { modelo: "Mercedes-Benz O500", ano: 2019, capacidade: 40 },
      { modelo: "Volvo B270F", ano: 2021, capacidade: 45 }
    ]
  },
  {
    id: 505,
    nomeLinha: "Centro - Bairro da Serra",
    tarifa: 3.90,
    horarios: [
      {
        partida: "07:15",
        chegada: "07:55",
        dias: ["Segunda", "Terça", "Quinta", "Sábado"]
      },
      {
        partida: "16:15",
        chegada: "16:55",
        dias: ["Segunda", "Terça", "Quarta", "Sexta"]
      }
    ],
    paradas: [
      {
        nome: "Centro",
        tipo: "terminal",
        coordenadas: { latitude: -19.918900, longitude: -43.930100 }
      },
      {
        nome: "Rua Serra Negra, 45",
        tipo: "ponto",
        coordenadas: { latitude: -19.926500, longitude: -43.920800 }
      },
      {
        nome: "Bairro da Serra",
        tipo: "final",
        coordenadas: { latitude: -19.930200, longitude: -43.915300 }
      }
    ],
    empresaResponsavel: {
      nome: "SerraTrans",
      contato: "sac@serratrans.com",
      telefone: "(31) 94444-5555",
      site: "www.serratrans.com"
    },
    avaliacao: 4.1,
    acessibilidade: false
  }
];

module export = linhasOnibusMetropolitanos;