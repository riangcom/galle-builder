// Missões FIRA — SPIKE Essential (45345). Limites: hub com 2 portas (A e B) e kit sem engrenagens
// (só polias, elásticos e alavancas). Por isso a cremalheira impressa NÃO entra aqui: sem engrenagem
// não há pinhão para movê-la. Roda 43 x 14 = cerca de 13,5 cm por volta. 1 furo = 0,8 cm.
// {X} = porta do hub. Validado por dados_kits/scripts/validar_ideias.py.
window.IDEIAS = (window.IDEIAS || []).concat([
{
  "id": "fira-essential-coletor",
  "kit": "essential",
  "titulo": "Coletor com pá em U (parceiro do Prime)",
  "nivel": 2,
  "tempo": 50,
  "tags": [
    "FIRA M2",
    "pá em U",
    "dupla de robôs"
  ],
  "missao": {
    "prova": "M2",
    "parte": "Robô parceiro: empurrar 1 cubo + 1 esfera até o depósito e estacionar no quadrado vermelho",
    "pontos": "Junto com o Prime 'Gaiola caçadora': mira o bônus de cubo+esfera (+30) e os dois estacionados (+50)"
  },
  "medidas_cm": [
    9.7,
    9.6,
    7.4
  ],
  "resumo": "Robô pequeno com uma pá em U na frente (sem motor): o cubo ou a esfera (3 a 4,5 cm) entra na pá e fica preso dos lados. Para depositar, basta dar ré. Tem montagem em 3D passo a passo.",
  "aprende": "Mecanismo passivo: a forma do funil faz o trabalho, sem gastar uma porta do hub.",
  "pecas": [
    [
      "Viga 7 furos",
      3
    ],
    [
      "Viga em L 3x5",
      2
    ],
    [
      "Viga conectora 3x3",
      2
    ],
    [
      "Eixo 3",
      2
    ],
    [
      "Pino com atrito",
      20
    ],
    [
      "Roda 43 x 14 com pneu",
      2
    ]
  ],
  "eletronica": [
    [
      "Hub pequeno SPIKE (2 portas)",
      1
    ],
    [
      "Motor pequeno SPIKE",
      2
    ]
  ],
  "portas": {
    "A": "Motor pequeno SPIKE",
    "B": "Motor pequeno SPIKE"
  },
  "passos": [
    "Base: os dois motores pequenos deitados, costas com costas (saídas para fora, portas A e B), presos um no outro com 3 pinos.",
    "Duas vigas de 7 atravessadas em cima dos motores e o hub pequeno (com a bateria) em cima delas.",
    "Rodas grandes direto na saída de cada motor, com eixo de 3.",
    "Frente = lado do 'rabo' dos motores: viga de 7 em pé presa nos motores, duas vigas conectoras 3x3 (fundo da pá) e duas vigas em L 3x5 com a perna longa no chão (paredes).",
    "A pá também é o apoio do robô: ela desliza a 1,6 mm do chão. Corredor de 4,8 cm entre as paredes."
  ],
  "programa": [
    "Estratégia 1: trajeto por rotações das rodas.",
    "Estratégia 2: o mesmo trajeto por tempo. Compare qual erra menos."
  ],
  "blocos": [
    {
      "estrategia": "Trajeto por rotações",
      "descricao": "O robô mede quanto as rodas giraram. Erra pouco mesmo se a bateria estiver fraca.",
      "lista": [
        {
          "t": "evento",
          "txt": "quando o programa começar"
        },
        {
          "t": "movimento",
          "txt": "definir motores de movimento {A} e {B}"
        },
        {
          "t": "movimento",
          "txt": "definir velocidade de movimento = 40%"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 2 rotações (≈ 27 cm: o cubo entra na pá)"
        },
        {
          "t": "movimento",
          "txt": "mover direção -100 por 0,6 rotação (vira à esquerda)"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 1,5 rotação (a esfera fica na frente do cubo)"
        },
        {
          "t": "movimento",
          "txt": "mover direção 100 por 0,6 rotação"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 3 rotações a 30% (empurra os dois até o depósito)"
        },
        {
          "t": "movimento",
          "txt": "mover para trás 1 rotação (solta os itens no depósito)"
        },
        {
          "t": "movimento",
          "txt": "mover direção 100 por 0,6 rotação"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 1 rotação (estaciona no quadrado vermelho)"
        },
        {
          "t": "som",
          "txt": "tocar som Tada no tablet"
        }
      ],
      "ajustes": [
        "Número de rotações: 1 rotação ≈ 13,5 cm. Meça a arena e divida.",
        "0,6 rotação ≈ 90° de giro: teste num transferidor de papel.",
        "30% ao empurrar: mais rápido, a esfera escapa na curva.",
        "A frente deste robô é o lado da pá. Se ele andar de ré no 'para frente', troque a ordem: definir motores de movimento {B} e {A}."
      ]
    },
    {
      "estrategia": "Trajeto por tempo",
      "descricao": "Mais fácil de pensar ('anda 2 segundos'), mas muda conforme a bateria e o piso. Bom para comparar e aprender por que robôs medem rotações.",
      "lista": [
        {
          "t": "evento",
          "txt": "quando o programa começar"
        },
        {
          "t": "movimento",
          "txt": "definir motores de movimento {A} e {B}"
        },
        {
          "t": "movimento",
          "txt": "mover para frente por 2 segundos a 40%"
        },
        {
          "t": "movimento",
          "txt": "mover direção -100 por 0,7 segundo"
        },
        {
          "t": "movimento",
          "txt": "mover para frente por 1,5 segundo a 40%"
        },
        {
          "t": "movimento",
          "txt": "mover direção 100 por 0,7 segundo"
        },
        {
          "t": "movimento",
          "txt": "mover para frente por 3 segundos a 30%"
        },
        {
          "t": "movimento",
          "txt": "mover para trás por 1 segundo"
        },
        {
          "t": "som",
          "txt": "tocar som Tada no tablet"
        }
      ],
      "ajustes": [
        "Rode 3 vezes e marque onde parou: compare com a estratégia por rotações.",
        "Bateria cheia x fraca muda o resultado: anote a diferença."
      ]
    }
  ],
  "variacoes": [
    "Dois boxes no funil (um para o cubo, outro para a esfera) separados por um tijolo 1x4.",
    "Aba de entrada: um tijolo Technic pendurado num pino sem atrito que deixa o item entrar e não sair.",
    "Combine o trajeto com o robô Prime para não baterem um no outro."
  ],
  "desafio": "Leve cubo e esfera ao depósito e estacione no quadrado vermelho em menos de 1 minuto.",
  "pergunta": "Por que medir rotações é mais confiável que medir tempo?"
},
{
  "id": "fira-essential-argola",
  "kit": "essential",
  "titulo": "Alavanca de argola, ida e volta",
  "nivel": 2,
  "tempo": 50,
  "tags": [
    "FIRA M3",
    "alavanca",
    "um motor para andar"
  ],
  "missao": {
    "prova": "M3",
    "parte": "Levar argola (e clipe) até a haste em linha reta e voltar à partida",
    "pontos": "Mira 50 (argola) + 100 (clipe) + 100 (voltar)"
  },
  "medidas_cm": [
    19.2,
    12.8,
    16
  ],
  "resumo": "Um motor anda (só para frente e para trás, em linha reta) e o outro gira uma alavanca com um gancho. O gancho sobe até a altura da haste, o robô encosta, a alavanca desce um pouco e a argola fica na haste.",
  "aprende": "Usar bem 2 portas: quando o caminho é reto, um motor só basta para andar. O motor da alavanca sabe em que ângulo está.",
  "pecas": [
    [
      "Placa Technic 2x8",
      2
    ],
    [
      "Tijolo Technic 1x8",
      2
    ],
    [
      "Tijolo Technic 1x12",
      1
    ],
    [
      "Tijolo Technic 1x4",
      2
    ],
    [
      "Torre treliça",
      1
    ],
    [
      "Eixo 8",
      1
    ],
    [
      "Eixo 6",
      1
    ],
    [
      "Bucha",
      4
    ],
    [
      "Roda 43 x 14 com pneu",
      2
    ],
    [
      "Roda de cadeira de rodas",
      2
    ],
    [
      "Pino com atrito",
      14
    ],
    [
      "Conector angular nº 1",
      2
    ]
  ],
  "eletronica": [
    [
      "Hub pequeno SPIKE (2 portas)",
      1
    ],
    [
      "Motor pequeno SPIKE",
      2
    ]
  ],
  "portas": {
    "A": "Motor pequeno SPIKE",
    "B": "Motor pequeno SPIKE"
  },
  "passos": [
    "Chassi com placas Technic 2x8 e tijolos Technic 1x8. Eixo de 8 atrás com as rodas grandes, preso direto no motor A (as duas rodas giram juntas: o robô anda reto).",
    "Na frente, eixo de 6 com as rodas de cadeira de rodas, soltas.",
    "Torre treliça em pé no meio do robô. No alto, o motor B com a alavanca: tijolo Technic 1x12.",
    "Na ponta da alavanca, conectores angulares formam o gancho onde a argola (e o clipe) ficam pendurados.",
    "Alinhe o robô na partida apontando para a estação: ele só anda em linha reta."
  ],
  "programa": [
    "Estratégia 1: uma viagem, só a argola (mais segura).",
    "Estratégia 2: argola e clipe na mesma viagem (mais pontos, mais risco)."
  ],
  "blocos": [
    {
      "estrategia": "Só a argola (segura)",
      "descricao": "Menos coisas podem dar errado: 50 + 100 de voltar = 150 pontos garantidos.",
      "lista": [
        {
          "t": "evento",
          "txt": "quando o programa começar"
        },
        {
          "t": "motor",
          "txt": "motor {B} ir para posição 0 (alavanca deitada para frente)"
        },
        {
          "t": "motor",
          "txt": "motor {B} ir para posição 70 graus (gancho na altura da haste)"
        },
        {
          "t": "motor",
          "txt": "ligar motor {A} por 3 rotações a 40%"
        },
        {
          "t": "motor",
          "txt": "ligar motor {A} por 0,3 rotação a 15% (a haste entra na argola)"
        },
        {
          "t": "motor",
          "txt": "motor {B} ir para posição 55 graus (argola fica na haste)"
        },
        {
          "t": "motor",
          "txt": "ligar motor {A} por -3,3 rotações a 40% (volta à partida)"
        },
        {
          "t": "som",
          "txt": "tocar som Tada no tablet"
        }
      ],
      "ajustes": [
        "70 graus: altura da haste. Com a alavanca de 12 furos (9,6 cm), cada 10 graus muda cerca de 1,7 cm.",
        "3 rotações: distância até a estação ÷ 13,5 cm.",
        "55 graus: o quanto descer para a argola soltar sem puxar a haste."
      ]
    },
    {
      "estrategia": "Argola + clipe (arriscada)",
      "descricao": "Gancho duplo: o clipe fica mais perto da ponta e sai primeiro. Até 250 pontos, mas a haste pode cair.",
      "lista": [
        {
          "t": "evento",
          "txt": "quando o programa começar"
        },
        {
          "t": "motor",
          "txt": "motor {B} ir para posição 70 graus"
        },
        {
          "t": "motor",
          "txt": "ligar motor {A} por 3 rotações a 40%"
        },
        {
          "t": "motor",
          "txt": "ligar motor {A} por 0,3 rotação a 15%"
        },
        {
          "t": "motor",
          "txt": "motor {B} ir para posição 62 graus (solta o clipe)"
        },
        {
          "t": "motor",
          "txt": "ligar motor {A} por -0,15 rotação a 10%"
        },
        {
          "t": "motor",
          "txt": "motor {B} ir para posição 52 graus (solta a argola)"
        },
        {
          "t": "controle",
          "txt": "esperar 0,5 segundo"
        },
        {
          "t": "motor",
          "txt": "ligar motor {A} por -3,15 rotações a 40%"
        },
        {
          "t": "som",
          "txt": "tocar som Tada no tablet"
        }
      ],
      "ajustes": [
        "62 e 52 graus: teste devagar, de 2 em 2 graus.",
        "-0,15 rotação: recuo pequeno entre soltar o clipe e soltar a argola."
      ]
    }
  ],
  "variacoes": [
    "Alavanca mais longa (tijolo Technic 1x16) para hastes mais altas.",
    "Contrapeso do outro lado da alavanca para o motor B fazer menos força.",
    "Volta com a alavanca baixa para o robô ficar mais estável."
  ],
  "desafio": "Volte exatamente para a área de partida (marque com fita) depois de soltar a argola.",
  "pergunta": "Por que este robô consegue andar com um motor só? Em que prova isso não daria certo?"
},
{
  "id": "fira-essential-pneus",
  "kit": "essential",
  "titulo": "Mini trator com pá em cunha",
  "nivel": 1,
  "tempo": 50,
  "tags": [
    "FIRA M1",
    "pá",
    "empurrar"
  ],
  "missao": {
    "prova": "M1",
    "parte": "Empurrar a pilha de pneus pelo percurso até a linha vermelha",
    "pontos": "Mira 50 (linha vermelha) + 25 por linha de progressão + 50 a 200 (pneus)"
  },
  "medidas_cm": [
    20,
    12.8,
    9
  ],
  "resumo": "Robô bem pequeno (cabe em meia A4 com folga) com uma pá em cunha na frente, que encaixa na pilha de pneus e empurra sem derrubar.",
  "aprende": "O formato da pá muda o resultado: uma cunha centraliza a pilha, uma pá reta deixa os pneus escorregarem para o lado.",
  "pecas": [
    [
      "Placa Technic 2x8",
      2
    ],
    [
      "Placa Technic 2x6",
      1
    ],
    [
      "Placa em cunha 4x6",
      2
    ],
    [
      "Tijolo Technic 1x8",
      2
    ],
    [
      "Tijolo 1x4",
      2
    ],
    [
      "Roda 43 x 14 com pneu",
      2
    ],
    [
      "Rodinha de skate",
      1
    ],
    [
      "Pino com atrito",
      10
    ]
  ],
  "eletronica": [
    [
      "Hub pequeno SPIKE (2 portas)",
      1
    ],
    [
      "Motor pequeno SPIKE",
      2
    ]
  ],
  "portas": {
    "A": "Motor pequeno SPIKE",
    "B": "Motor pequeno SPIKE"
  },
  "passos": [
    "Base com placas Technic e um motor pequeno de cada lado (A e B), rodinha de skate atrás.",
    "Pá: duas placas em cunha 4x6 de pé, formando um V aberto para frente, presas nos tijolos Technic 1x8.",
    "Meça: no máximo 26 x 18 furos (21 x 14,8 cm) com a pá."
  ],
  "programa": [
    "Estratégia 1: empurrar reto pelo meio da pista.",
    "Estratégia 2: contornar o obstáculo pela lateral com caminho decorado."
  ],
  "blocos": [
    {
      "estrategia": "Empurrar reto",
      "descricao": "Se o caminho até a linha vermelha estiver livre, é o mais rápido.",
      "lista": [
        {
          "t": "evento",
          "txt": "quando o programa começar"
        },
        {
          "t": "movimento",
          "txt": "definir motores de movimento {A} e {B}"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 1 rotação a 50% (chega na pilha)"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 8 rotações a 30% (empurra até a linha vermelha)"
        },
        {
          "t": "movimento",
          "txt": "parar movimento"
        },
        {
          "t": "som",
          "txt": "tocar som Tada no tablet"
        }
      ],
      "ajustes": [
        "8 rotações ≈ 108 cm: troque pela distância da arena.",
        "30%: com 3 pneus, teste 20%."
      ]
    },
    {
      "estrategia": "Contornar o obstáculo",
      "descricao": "Quando há um obstáculo no meio, o robô faz um 'S' para passar pelo lado, devagar para não perder a pilha.",
      "lista": [
        {
          "t": "evento",
          "txt": "quando o programa começar"
        },
        {
          "t": "movimento",
          "txt": "definir motores de movimento {A} e {B}"
        },
        {
          "t": "movimento",
          "txt": "definir velocidade de movimento = 25%"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 3 rotações"
        },
        {
          "t": "controle",
          "txt": "repetir 2 vezes",
          "filhos": [
            {
              "t": "movimento",
              "txt": "mover com direção 40 por 1 rotação (curva suave à direita)"
            },
            {
              "t": "movimento",
              "txt": "mover com direção -40 por 1 rotação (endireita)"
            }
          ]
        },
        {
          "t": "movimento",
          "txt": "mover para frente 4 rotações"
        },
        {
          "t": "som",
          "txt": "tocar som Tada no tablet"
        }
      ],
      "ajustes": [
        "Direção 40: curvas suaves seguram a pilha; 100 gira no lugar e derruba.",
        "Número de repetições do 'S' depende da largura do obstáculo."
      ]
    }
  ],
  "variacoes": [
    "Troque a cunha por uma pá reta (tijolos 1x4) e compare quantos pneus chegam.",
    "Pá mais alta com tijolos 2x2 para segurar 3 pneus empilhados.",
    "Rodas de cadeira de rodas atrás no lugar da rodinha de skate."
  ],
  "desafio": "Leve 2 pneus até a linha vermelha sem derrubar a pilha.",
  "pergunta": "Por que a pá em V segura melhor a pilha que uma pá reta?"
}
]);
