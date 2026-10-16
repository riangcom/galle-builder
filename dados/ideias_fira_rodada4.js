// Missões FIRA — 4ª rodada (15/10/2026): Prime "dois em um" (M3 + M1, ferramenta de troca rápida)
// e dupla Prime + Essential nos pneus (M1). {X} = porta do hub. Validado por dados_kits/scripts/validar_ideias.py.
window.IDEIAS = (window.IDEIAS || []).concat([
{
  "id": "fira-prime-dois-em-um",
  "kit": "prime",
  "titulo": "Dois em um: elevador com ferramenta trocável",
  "nivel": 3,
  "tempo": 120,
  "tags": [
    "FIRA M3",
    "FIRA M1",
    "troca rápida",
    "ferramentas"
  ],
  "missao": {
    "prova": "M3",
    "provas": [
      "M3",
      "M1"
    ],
    "parte": "Um robô para os dois dias: na M3 leva a argola até a haste e volta; na M1 troca a ferramenta (sem desmontar o robô) e leva a pilha de pneus até a linha vermelha",
    "pontos": "M3: 50 por argola na haste + 100 por voltar à partida. M1: 50 (linha vermelha) + 25 por linha de progressão + 50 a 200 (pneus)"
  },
  "medidas_cm": [
    18.3,
    13.2,
    16
  ],
  "resumo": "A mesma torre com cremalheira sobe e desce um carrinho; na frente dele vai a ferramenta do dia. Na M3, um pino-eixo é o gancho da argola. Na M1, a pá (viga em T + viga de 11) presa por um pino longo: troca em segundos. Tem as duas montagens em 3D.",
  "aprende": "Projeto modular: uma base que não muda e ferramentas que se trocam. E medir: o robô precisa caber no limite mais apertado das duas provas (20 cm da M3 e 14,8 cm da M1).",
  "eletronica": [
    [
      "Hub grande SPIKE (6 portas)",
      1
    ],
    [
      "Bateria recarregável SPIKE (hub grande)",
      1
    ],
    [
      "Motor médio SPIKE",
      2
    ],
    [
      "Motor grande SPIKE",
      1
    ],
    [
      "Sensor de cor SPIKE",
      1
    ],
    [
      "Sensor de distância SPIKE",
      1
    ]
  ],
  "portas": {
    "A": "Motor médio SPIKE",
    "B": "Motor médio SPIKE",
    "C": "Motor grande SPIKE",
    "D": "Sensor de cor SPIKE",
    "E": "Sensor de distância SPIKE"
  },
  "pecas": [
    [
      "Pino longo com atrito + eixo 2",
      1
    ],
    [
      "Eixo 5",
      2
    ],
    [
      "Engrenagem 12 dentes dupla cônica",
      1
    ],
    [
      "Viga 15 furos",
      1
    ],
    [
      "Viga 5 furos",
      1
    ],
    [
      "Viga 3 furos",
      2
    ],
    [
      "Viga 11 furos",
      3
    ],
    [
      "Viga em L 3x5",
      2
    ],
    [
      "Bucha",
      1
    ],
    [
      "Roda 57 x 14 com pneu",
      2
    ],
    [
      "Viga 3x5 com bola giratória",
      1
    ],
    [
      "Quadro 11x15",
      1
    ],
    [
      "Eixo 7",
      1
    ],
    [
      "Bola 19 mm",
      1
    ],
    [
      "Pino com atrito",
      34
    ],
    [
      "Quadro 5x7",
      2
    ],
    [
      "Pino longo com atrito",
      5
    ],
    [
      "Viga em T 3x3",
      1
    ]
  ],
  "passos": [
    "Deite o quadro 11x15 e prenda embaixo os motores médios A e B, com as rodas.",
    "Atrás, ponha o rodízio e o sensor de cor (porta D). Coloque o hub (com a bateria) em cima.",
    "Monte a torre na frente: duas vigas em L 3x5 deitadas e dois quadros 5x7 em pé.",
    "Ponha o motor grande (C) ao lado da torre.",
    "Coloque a engrenagem de 12 dentes entre os quadros.",
    "Monte o carrinho: prenda a cremalheira impressa na viga de 15, com os dentes virados para o pinhão.",
    "Ferramenta 1 (para a M3): prenda um pino-eixo no furo de cima do carrinho, para a frente. A argola fica pendurada nele.",
    "Ferramenta 2 (para a M1): prenda uma viga em T no carrinho com um pino longo.",
    "Atravesse embaixo dela a viga de 11. Ela é a pá.",
    "Para trocar de ferramenta, puxe o pino longo (sai a pá) ou o pino-eixo (sai o gancho).",
    "Treine a troca até fazer em menos de 20 segundos.",
    "Ponha o sensor de distância (porta E) na lateral da torre, olhando para a frente."
  ],
  "programa": [
    "Estratégia 1 (M3): argola na haste usando o sensor de distância.",
    "Estratégia 2 (M1): pilha de pneus com a pá até a linha vermelha.",
    "Estratégia 3 (M1): a mesma, só por distância medida."
  ],
  "blocos": [
    {
      "estrategia": "M3: argola na haste",
      "prova": "M3",
      "descricao": "Ferramenta 1. A argola fica pendurada no gancho, na altura da haste. O robô anda até a ponta da haste entrar na argola, abaixa o braço (a argola cai na haste) e volta para a partida (+100).",
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
          "t": "motor",
          "txt": "motor {C} ir para posição 0 (carrinho no alto: argola na altura da haste)"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 30 cm a 40% (até perto da estação)"
        },
        {
          "t": "controle",
          "txt": "repetir até sensor de distância {E} mais perto que 6 cm",
          "filhos": [
            {
              "t": "movimento",
              "txt": "iniciar mover para frente a 15% (a ponta da haste entra na argola)"
            }
          ]
        },
        {
          "t": "movimento",
          "txt": "parar movimento"
        },
        {
          "t": "motor",
          "txt": "ligar motor {C} por 120 graus a 20% (o carrinho desce 1 cm e a argola fica na haste)"
        },
        {
          "t": "movimento",
          "txt": "mover para trás 8 cm a 20% (o gancho sai da argola)"
        },
        {
          "t": "motor",
          "txt": "motor {C} ir para posição 0"
        },
        {
          "t": "movimento",
          "txt": "mover para trás 30 cm a 40% (volta à partida: +100)"
        },
        {
          "t": "som",
          "txt": "tocar som Vitória"
        }
      ],
      "ajustes": [
        "30 cm: distância da partida até a estação (meça).",
        "6 cm: o sensor vê a caixa de leite; ajuste até a haste ficar bem dentro da argola.",
        "120 graus: só o suficiente para o carrinho descer 1 cm e a argola sair do gancho. Se derrubar a haste, a estação sai do jogo: vá devagar (20%).",
        "8 cm de ré: o gancho precisa sair da argola antes de o braço subir."
      ]
    },
    {
      "estrategia": "M1: pneus na gaiola (sensor de cor)",
      "prova": "M1",
      "descricao": "Ferramenta 2. A gaiola desce na frente da pilha (no máximo metade do pneu dentro do robô) e o robô anda até a linha vermelha contando as linhas de progressão.",
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
          "t": "motor",
          "txt": "motor {C} ir para posição 0 (pá levantada)"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 20 cm a 35% (gaiola chega na pilha)"
        },
        {
          "t": "motor",
          "txt": "ligar motor {C} por 375 graus a 30% (a pá desce 4 cm até o chão, na frente da pilha)"
        },
        {
          "t": "variavel",
          "txt": "definir linhas = 0"
        },
        {
          "t": "controle",
          "txt": "repetir até sensor de cor {D} ver vermelho",
          "filhos": [
            {
              "t": "controle",
              "txt": "se sensor de cor {D} ver azul (linha de progressão) então",
              "filhos": [
                {
                  "t": "variavel",
                  "txt": "mudar linhas em 1"
                },
                {
                  "t": "movimento",
                  "txt": "mover para frente 2 cm a 30% (não contar a mesma linha duas vezes)"
                }
              ]
            },
            {
              "t": "movimento",
              "txt": "iniciar mover para frente a 30%"
            }
          ]
        },
        {
          "t": "movimento",
          "txt": "parar movimento"
        },
        {
          "t": "motor",
          "txt": "motor {C} ir para posição 0 (pá sobe e solta os pneus)"
        },
        {
          "t": "som",
          "txt": "tocar som Vitória"
        }
      ],
      "ajustes": [
        "20 cm: distância até a pilha de pneus (meça).",
        "375 graus: 1 volta do motor = 12 dentes x 3,2 mm = 3,84 cm de cremalheira. Do alto até o chão são uns 4 cm; confira no robô.",
        "30%: mais rápido, a pilha tomba nas curvas e nos obstáculos.",
        "Cor da linha de progressão: confira na arena (aqui está azul)."
      ]
    },
    {
      "estrategia": "M1: pneus por distância medida",
      "prova": "M1",
      "descricao": "Mesma ferramenta 2, sem depender da leitura de cor: o robô anda a distância medida na arena. Mais simples; erra mais se a roda patinar.",
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
          "txt": "definir 1 rotação de movimento = 17,6 cm"
        },
        {
          "t": "motor",
          "txt": "motor {C} ir para posição 0 (pá levantada)"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 20 cm a 35%"
        },
        {
          "t": "motor",
          "txt": "ligar motor {C} por 375 graus a 30% (pá no chão)"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 120 cm a 30% (até passar da linha vermelha)"
        },
        {
          "t": "motor",
          "txt": "motor {C} ir para posição 0"
        },
        {
          "t": "som",
          "txt": "tocar som Vitória"
        }
      ],
      "ajustes": [
        "120 cm: da pilha até a linha vermelha (meça a arena).",
        "17,6 cm por rotação: roda de 5,6 cm. Confira com o robô de treino.",
        "Compare com a estratégia 2: quantas vezes cada uma chega na linha em 5 tentativas?"
      ]
    }
  ],
  "variacoes": [
    "Terceira ferramenta para a M2 (pá em U) usando o mesmo engate.",
    "Ferramenta 1 com 2 ganchos: leva argola e clipe na mesma viagem (+100 do clipe).",
    "Marque cada ferramenta com uma cor e faça o robô ler qual está encaixada antes de começar."
  ],
  "desafio": "Troque a ferramenta e rode a outra prova em menos de 1 minuto, sem errar.",
  "pergunta": "O que é mais fácil: um robô para cada prova ou um robô com ferramentas? O que se ganha e o que se perde?",
  "modelos3d": [
    {
      "id": "fira-prime-dois-em-um-argolas",
      "rotulo": "Ferramenta 1: gancho de argola (M3)"
    },
    {
      "id": "fira-prime-dois-em-um-pneus",
      "rotulo": "Ferramenta 2: pá de pneus (M1)"
    }
  ],
  "pecas_impressas": [
    [
      "Cremalheira LEGO impressa 3D (cópia da 64781)",
      1,
      "testada e aprovada em 15/10/2026. Em pé no carrinho, dentes para trás (no pinhão)."
    ]
  ]
},
{
  "id": "fira-prime-dupla-pneus",
  "kit": "prime",
  "titulo": "Dupla dos pneus: Prime leva dois, Essential empurra um",
  "nivel": 3,
  "tempo": 120,
  "tags": [
    "FIRA M1",
    "2 robôs",
    "pneus"
  ],
  "modelo3d": "fira-prime-pneus",
  "missao": {
    "prova": "M1",
    "parte": "Treino em dupla (confirme no regulamento se a M1 aceita 2 robôs): o Prime leva 2 pneus na pá e o Essential empurra o 3º; os dois até a linha vermelha",
    "pontos": "Mira 200 (3 pneus) + 50 (linha vermelha) + 25 por linha de progressão"
  },
  "medidas_cm": [
    18.3,
    13.2,
    13.6
  ],
  "resumo": "Divisão de trabalho: a pilha de 3 pneus é separada antes da largada. O Prime (trator com pá elevatória, montagem 3D abaixo) leva 2 pneus; o Essential (mini trator com pá em cunha) empurra o 3º. Os dois precisam não bater um no outro.",
  "aprende": "Dividir uma tarefa entre dois robôs e combinar quem vai primeiro. Cada robô também precisa caber em meia folha A4.",
  "robo1_titulo": "Robô 1 – SPIKE Prime (pá elevatória)",
  "pecas_impressas": [
    [
      "Cremalheira LEGO impressa 3D (cópia da 64781)",
      1,
      "testada e aprovada em 15/10/2026. Em pé no meio da torre, dentes para trás (no pinhão)."
    ]
  ],
  "pecas": [
    [
      "Eixo 5",
      2
    ],
    [
      "Engrenagem 12 dentes dupla cônica",
      1
    ],
    [
      "Viga 15 furos",
      1
    ],
    [
      "Viga 5 furos",
      1
    ],
    [
      "Viga 3 furos",
      1
    ],
    [
      "Viga 11 furos",
      3
    ],
    [
      "Viga em L 3x5",
      2
    ],
    [
      "Bucha",
      1
    ],
    [
      "Roda 57 x 14 com pneu",
      2
    ],
    [
      "Viga 3x5 com bola giratória",
      1
    ],
    [
      "Quadro 11x15",
      1
    ],
    [
      "Eixo 7",
      1
    ],
    [
      "Bola 19 mm",
      1
    ],
    [
      "Viga em T 3x3",
      1
    ],
    [
      "Pino com atrito",
      36
    ],
    [
      "Quadro 5x7",
      2
    ],
    [
      "Pino longo com atrito",
      3
    ]
  ],
  "eletronica": [
    [
      "Hub grande SPIKE (6 portas)",
      1
    ],
    [
      "Bateria recarregável SPIKE (hub grande)",
      1
    ],
    [
      "Motor médio SPIKE",
      2
    ],
    [
      "Motor grande SPIKE",
      1
    ],
    [
      "Sensor de cor SPIKE",
      1
    ],
    [
      "Sensor de distância SPIKE",
      1
    ]
  ],
  "portas": {
    "A": "Motor médio SPIKE",
    "B": "Motor médio SPIKE",
    "C": "Motor grande SPIKE",
    "D": "Sensor de cor SPIKE",
    "E": "Sensor de distância SPIKE"
  },
  "robo2": {
    "kit": "essential",
    "titulo": "Robô 2 – SPIKE Essential (pá em cunha)",
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
        "Bateria recarregável SPIKE (hub pequeno)",
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
    }
  },
  "passos": [
    "Robô 1: monte o 'Trator de pneus com pá elevatória' (montagem 3D abaixo).",
    "Robô 2: monte o 'Mini trator com pá em cunha' do Essential (ideia da M1 no kit Essential).",
    "Meça cada robô com a pá: no máximo 21 x 14,8 cm.",
    "Antes da largada, separe a pilha: 2 pneus na frente do Prime e 1 pneu na frente do Essential.",
    "Confirme no regulamento se pode separar a pilha.",
    "Na largada, ponha o Essential na frente e o Prime atrás, na mesma faixa.",
    "O Essential fica 20 cm à frente do Prime."
  ],
  "programa": [
    "Estratégia 1: o Essential vai na frente e o Prime segue a 15 cm (sensor de distância).",
    "Estratégia 2: o Prime vai primeiro e o Essential sai depois de um tempo combinado."
  ],
  "blocos": [
    {
      "estrategia": "Essential na frente, Prime seguindo",
      "descricao": "O Essential abre caminho empurrando o pneu dele; o Prime vem atrás e usa o sensor de distância para nunca chegar a menos de 15 cm. Se o Essential parar, o Prime para também.",
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
          "t": "motor",
          "txt": "motor {C} ir para posição 0 (pá embaixo)"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 12 cm a 30% (pá entra embaixo dos 2 pneus)"
        },
        {
          "t": "motor",
          "txt": "ligar motor {C} por 120 graus (levanta só a frente dos pneus)"
        },
        {
          "t": "controle",
          "txt": "repetir até sensor de cor {D} ver vermelho",
          "filhos": [
            {
              "t": "controle",
              "txt": "se sensor de distância {E} mais perto que 15 cm então",
              "filhos": [
                {
                  "t": "movimento",
                  "txt": "parar movimento (o Essential está perto: espera)"
                }
              ],
              "senao": [
                {
                  "t": "movimento",
                  "txt": "iniciar mover para frente a 35%"
                }
              ]
            }
          ]
        },
        {
          "t": "movimento",
          "txt": "parar movimento"
        },
        {
          "t": "motor",
          "txt": "ligar motor {C} por -120 graus (solta os pneus)"
        },
        {
          "t": "som",
          "txt": "tocar som Vitória"
        }
      ],
      "lista2": [
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
          "txt": "mover para frente 8 rotações a 40% (≈ 108 cm empurrando o pneu)"
        },
        {
          "t": "movimento",
          "txt": "mover direção 100 por 0,6 rotação (vira para sair da frente do Prime)"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 1 rotação"
        },
        {
          "t": "som",
          "txt": "tocar som Tada no tablet"
        }
      ],
      "ajustes": [
        "8 rotações (Essential): da largada até passar da linha vermelha (1 rotação ≈ 13,5 cm).",
        "15 cm: o sensor do Prime fica acima da pá e precisa 'ver' o Essential; teste na arena.",
        "Se o Essential virar para o lado errado, troque 100 por -100.",
        "40% no Essential: rápido o bastante para o Prime não ficar parado muito tempo (a M1 tem só 1min30)."
      ]
    },
    {
      "estrategia": "Prime primeiro, Essential depois",
      "descricao": "Os dois começam juntos (dois alunos apertam ao mesmo tempo). O Prime vai na frente; o Essential espera um tempo medido e sai empurrando o pneu dele. Simples, mas depende do cronômetro.",
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
          "t": "motor",
          "txt": "motor {C} ir para posição 0 (pá embaixo)"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 12 cm a 30%"
        },
        {
          "t": "motor",
          "txt": "ligar motor {C} por 120 graus"
        },
        {
          "t": "controle",
          "txt": "repetir até sensor de cor {D} ver vermelho",
          "filhos": [
            {
              "t": "movimento",
              "txt": "iniciar mover para frente a 40%"
            }
          ]
        },
        {
          "t": "movimento",
          "txt": "parar movimento"
        },
        {
          "t": "movimento",
          "txt": "mover direção 100 por 0,4 rotação (abre espaço para o Essential)"
        },
        {
          "t": "motor",
          "txt": "ligar motor {C} por -120 graus"
        }
      ],
      "lista2": [
        {
          "t": "evento",
          "txt": "quando o programa começar"
        },
        {
          "t": "sensor",
          "txt": "zerar cronômetro"
        },
        {
          "t": "controle",
          "txt": "esperar até cronômetro maior que 8 segundos (o Prime já saiu da frente)"
        },
        {
          "t": "movimento",
          "txt": "definir motores de movimento {A} e {B}"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 8 rotações a 40%"
        },
        {
          "t": "som",
          "txt": "tocar som Tada no tablet"
        }
      ],
      "ajustes": [
        "8 segundos: cronometre quanto o Prime leva para andar 30 cm e some 2 s.",
        "Prime a 40%: com 2 pneus na pá, mais rápido pode derrubar a pilha.",
        "A M1 tem 1min30: os dois juntos precisam terminar antes. Use o modo prova."
      ]
    }
  ],
  "variacoes": [
    "Troque os papéis: o Essential leva 2 pneus numa pá maior e o Prime leva 1.",
    "Sinal entre os robôs: o Essential só sai quando vê a pá AMARELA do Prime levantada (como na 'Dupla sincronizada').",
    "Um robô só com os 3 pneus x a dupla: qual faz mais pontos em 5 tentativas?"
  ],
  "desafio": "Os 3 pneus na linha vermelha em menos de 1min30, sem os robôs se tocarem.",
  "pergunta": "Quando vale a pena dividir uma tarefa entre dois robôs? E quando atrapalha?"
}
]);
