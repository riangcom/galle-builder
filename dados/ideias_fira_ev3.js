// Missões FIRA — EV3 (45544, sem expansão). Prioridade baixa (foco no SPIKE): 2 ideias.
// Brick EV3: motores nas portas A-D, sensores nas portas 1-4. Roda 5,6 cm = 17,6 cm por volta.
// Blocos no estilo do EV3 Classroom (Scratch). {X} = porta. Validado por validar_ideias.py.
window.IDEIAS = (window.IDEIAS || []).concat([
{
  "id": "fira-ev3-argolas",
  "kit": "ev3",
  "titulo": "Braço de argolas com giroscópio",
  "nivel": 3,
  "tempo": 100,
  "tags": [
    "FIRA M3",
    "giroscópio",
    "braço"
  ],
  "missao": {
    "prova": "M3",
    "parte": "Ir reto até a estação, enfiar argola e clipe na haste e voltar à partida",
    "pontos": "Mira 50 + 100 + 100 (voltar)"
  },
  "medidas_cm": [
    19.5,
    14.6,
    17.6
  ],
  "resumo": "Base EV3 compacta que anda reto 'travada' no giroscópio. Um braço no motor médio leva a argola pendurada num gancho, na frente do robô. A haste entra na argola, o braço abaixa e a argola fica na haste. Tem montagem em 3D passo a passo.",
  "aprende": "Andar reto de verdade: o giroscópio mede quanto o robô desviou e o programa corrige a direção o tempo todo.",
  "pecas": [
    [
      "Pino com atrito",
      26
    ],
    [
      "Eixo 5",
      1
    ],
    [
      "Viga em L 2x4",
      2
    ],
    [
      "Viga 15 furos",
      2
    ],
    [
      "Viga 3 furos",
      2
    ],
    [
      "Viga 7 furos",
      1
    ],
    [
      "Viga 11 furos",
      2
    ],
    [
      "Eixo 6",
      2
    ],
    [
      "Eixo 12",
      2
    ],
    [
      "Bucha",
      5
    ],
    [
      "Viga 9 furos",
      4
    ],
    [
      "Pneu 56 x 28",
      2
    ],
    [
      "Eixo 3",
      1
    ],
    [
      "Eixo 8 com batente",
      1
    ],
    [
      "Roda 43,2 x 26",
      2
    ],
    [
      "Pino longo com atrito",
      8
    ],
    [
      "Viga dobrada 9 furos",
      1
    ],
    [
      "Junta esférica de direção (encaixe)",
      1
    ],
    [
      "Bola de aço 18 mm (rodízio)",
      1
    ]
  ],
  "pecas_impressas": [],
  "eletronica": [
    [
      "Brick EV3",
      1
    ],
    [
      "Bateria recarregável EV3",
      1
    ],
    [
      "Motor grande EV3",
      2
    ],
    [
      "Motor médio EV3",
      1
    ],
    [
      "Sensor giroscópio EV3",
      1
    ],
    [
      "Sensor ultrassônico EV3",
      1
    ],
    [
      "Sensor de toque EV3",
      1
    ],
    [
      "Cabo 25 cm EV3",
      4
    ],
    [
      "Cabo 35 cm EV3",
      2
    ]
  ],
  "portas": {
    "B": "Motor grande EV3",
    "C": "Motor grande EV3",
    "A": "Motor médio EV3",
    "2": "Sensor giroscópio EV3",
    "4": "Sensor ultrassônico EV3",
    "1": "Sensor de toque EV3"
  },
  "passos": [
    "Junte os 2 motores grandes (B e C).",
    "Ponha o Brick em cima deles e o rodízio atrás. Assim o robô cabe em 20 x 20 cm.",
    "Na frente do Brick, prenda uma viga de 15 em pé de cada lado.",
    "No alto, prenda o sensor ultrassônico (porta 4) num eixo de 12, olhando para a frente.",
    "Embaixo, prenda o giroscópio (porta 2) deitado num eixo de 12. Ele precisa ficar firme: se balançar, a leitura erra.",
    "Prenda o motor médio (porta A) por fora da viga de 15 da direita, com a saída para a frente.",
    "Monte o braço: ponha um eixo de 5 no motor médio e prenda a viga dobrada, com a dobra para baixo.",
    "Monte o gancho: prenda na ponta do braço um eixo de 3, para a frente, com uma bucha.",
    "Pendure a argola no gancho.",
    "Atrás, ponha o sensor de toque (porta 1) com o botão para cima. Ele é o botão de largada."
  ],
  "programa": [
    "Estratégia 1: anda reto corrigindo pelo giroscópio e para pelo ultrassônico.",
    "Estratégia 2: anda por rotações sem correção. Compare o desvio."
  ],
  "blocos": [
    {
      "estrategia": "Reto pelo giroscópio",
      "descricao": "Corrige o desvio enquanto anda: chega bem alinhado com a haste.",
      "lista": [
        {
          "t": "evento",
          "txt": "quando o programa iniciar"
        },
        {
          "t": "controle",
          "txt": "esperar até sensor de toque {1} pressionado"
        },
        {
          "t": "sensor",
          "txt": "zerar ângulo do sensor giroscópio {2}"
        },
        {
          "t": "controle",
          "txt": "repetir até sensor ultrassônico {4} < 9 cm",
          "filhos": [
            {
              "t": "movimento",
              "txt": "mover com motores {B} e {C}: direção = 0 - (ângulo do sensor giroscópio {2}) x 2, velocidade 30%"
            }
          ]
        },
        {
          "t": "movimento",
          "txt": "parar motores {B} e {C}"
        },
        {
          "t": "movimento",
          "txt": "mover motores {B} e {C} 0,25 rotação a 10% (a haste entra na argola)"
        },
        {
          "t": "motor",
          "txt": "motor {A} girar 30 graus a 15% (o braço abaixa: a argola fica na haste)"
        },
        {
          "t": "movimento",
          "txt": "mover motores {B} e {C} -0,25 rotação a 10%"
        },
        {
          "t": "motor",
          "txt": "motor {A} girar -30 graus (o braço volta)"
        },
        {
          "t": "controle",
          "txt": "repetir até sensor ultrassônico {4} > 60 cm",
          "filhos": [
            {
              "t": "movimento",
              "txt": "mover com motores {B} e {C}: direção = 0 - (ângulo do sensor giroscópio {2}) x 2, velocidade -35%"
            }
          ]
        },
        {
          "t": "movimento",
          "txt": "parar motores {B} e {C}"
        },
        {
          "t": "som",
          "txt": "tocar som Cheering"
        }
      ],
      "ajustes": [
        "Fator 2 da correção: maior corrige mais forte, mas pode balançar.",
        "60 cm na volta: distância da estação até a partida.",
        "30 graus: só o suficiente para a argola sair do gancho (no 3D, 30° abaixa o gancho 2,5 cm). Se o braço SUBIR, use -30."
      ]
    },
    {
      "estrategia": "Reto por rotações",
      "descricao": "Sem correção: mais simples, mas qualquer diferença entre as rodas faz o robô chegar torto.",
      "lista": [
        {
          "t": "evento",
          "txt": "quando o programa iniciar"
        },
        {
          "t": "controle",
          "txt": "esperar até sensor de toque {1} pressionado"
        },
        {
          "t": "movimento",
          "txt": "mover motores {B} e {C} 3 rotações a 30%"
        },
        {
          "t": "movimento",
          "txt": "mover motores {B} e {C} 0,25 rotação a 10%"
        },
        {
          "t": "motor",
          "txt": "motor {A} girar 30 graus a 15% (o braço abaixa: a argola fica na haste)"
        },
        {
          "t": "motor",
          "txt": "motor {A} girar -30 graus (o braço volta)"
        },
        {
          "t": "movimento",
          "txt": "mover motores {B} e {C} -3,25 rotações a 35%"
        },
        {
          "t": "som",
          "txt": "tocar som Cheering"
        }
      ],
      "ajustes": [
        "3 rotações ≈ 53 cm: troque pela distância da arena.",
        "Marque onde o robô chega em 5 tentativas e compare com a estratégia 1.",
        "30 graus: só o suficiente para a argola sair do gancho (no 3D, 30° abaixa o gancho 2,5 cm). Se o braço SUBIR, use -30."
      ]
    }
  ],
  "variacoes": [
    "Gancho duplo para levar argola e clipe.",
    "Volte usando a linha de partida: troque o toque pelo sensor de cor.",
    "Faça o giroscópio também conferir se o robô voltou de frente."
  ],
  "desafio": "Chegue à haste 5 vezes seguidas sem encostar na caixa de leite.",
  "pergunta": "Por que dois motores iguais não andam exatamente igual?"
},
{
  "id": "fira-ev3-coletor",
  "kit": "ev3",
  "titulo": "Caçamba sob o nariz (depósito de ré)",
  "nivel": 3,
  "tempo": 100,
  "tags": [
    "FIRA M2",
    "caçamba",
    "depósito de ré"
  ],
  "missao": {
    "prova": "M2",
    "parte": "Coletar cubo e esfera e depositá-los empurrando para fora (um dos dois robôs da dupla)",
    "pontos": "Mira 20+10 (coleta) + 20+30 (depósito) + 50 (estacionar)"
  },
  "medidas_cm": [
    18.3,
    14.9,
    16.0
  ],
  "resumo": "A caçamba fica embaixo da frente do Brick, entre as rodas: cubo ou esfera de 4 a 5,4 cm entra e fica preso dos lados. No depósito o robô dá ré e os itens ficam. Tem montagem em 3D passo a passo.",
  "aprende": "Usar o espaço que sobra embaixo do robô, e por que um mecanismo sem motor (passivo) é mais confiável.",
  "pecas": [
    [
      "Pino com atrito",
      26
    ],
    [
      "Eixo 5",
      1
    ],
    [
      "Viga em L 2x4",
      2
    ],
    [
      "Viga 15 furos",
      2
    ],
    [
      "Viga 3 furos",
      2
    ],
    [
      "Viga 11 furos",
      2
    ],
    [
      "Viga em L 3x5",
      2
    ],
    [
      "Eixo 6",
      2
    ],
    [
      "Eixo 12",
      1
    ],
    [
      "Bucha",
      3
    ],
    [
      "Viga 9 furos",
      4
    ],
    [
      "Pneu 56 x 28",
      2
    ],
    [
      "Roda 43,2 x 26",
      2
    ],
    [
      "Pino longo com atrito",
      8
    ],
    [
      "Junta esférica de direção (encaixe)",
      1
    ],
    [
      "Bola de aço 18 mm (rodízio)",
      1
    ]
  ],
  "pecas_impressas": [],
  "eletronica": [
    [
      "Brick EV3",
      1
    ],
    [
      "Bateria recarregável EV3",
      1
    ],
    [
      "Motor grande EV3",
      2
    ],
    [
      "Sensor de cor EV3",
      1
    ],
    [
      "Sensor ultrassônico EV3",
      1
    ],
    [
      "Cabo 25 cm EV3",
      3
    ],
    [
      "Cabo 35 cm EV3",
      1
    ]
  ],
  "portas": {
    "B": "Motor grande EV3",
    "C": "Motor grande EV3",
    "3": "Sensor de cor EV3",
    "4": "Sensor ultrassônico EV3"
  },
  "passos": [
    "Junte os motores grandes B e C.",
    "Ponha o Brick em cima deles e o rodízio atrás.",
    "Na frente do Brick, prenda uma viga de 15 em pé de cada lado, descendo até perto do chão.",
    "No alto, prenda o sensor ultrassônico (porta 4) num eixo de 12, olhando para a frente.",
    "Faça as paredes da caçamba: prenda uma viga em L 3x5 por dentro de cada viga de 15, com a perna comprida rente ao chão.",
    "O fundo da caçamba é a frente dos motores. Cabe um cubo ou uma esfera de 4 a 5,4 cm.",
    "Prenda o sensor de cor (porta 3) por fora da viga da direita, olhando para o chão. Ele acha o quadrado vermelho.",
    "Este robô não tem motor médio. Para depositar, ele dá ré."
  ],
  "programa": [
    "Estratégia 1: caminho decorado até os itens e depósito de ré.",
    "Estratégia 2: varrer a área e usar o ultrassônico para não bater na parede."
  ],
  "blocos": [
    {
      "estrategia": "Caminho decorado",
      "descricao": "O robô faz um caminho medido na arena. Os itens entram na caçamba embaixo do nariz; no depósito ele dá ré e eles ficam.",
      "lista": [
        {
          "t": "evento",
          "txt": "quando o programa iniciar"
        },
        {
          "t": "movimento",
          "txt": "mover motores {B} e {C} 2 rotações a 40%"
        },
        {
          "t": "movimento",
          "txt": "girar com motores {B} e {C} direção 100 por 0,5 rotação"
        },
        {
          "t": "movimento",
          "txt": "mover motores {B} e {C} 1,5 rotação a 25% (os itens entram na caçamba)"
        },
        {
          "t": "controle",
          "txt": "repetir até sensor de cor {3} = vermelho",
          "filhos": [
            {
              "t": "movimento",
              "txt": "ligar motores {B} e {C} a 25%"
            }
          ]
        },
        {
          "t": "movimento",
          "txt": "parar motores {B} e {C}"
        },
        {
          "t": "movimento",
          "txt": "mover motores {B} e {C} -1 rotação a 20% (ré: os itens ficam no depósito)"
        },
        {
          "t": "som",
          "txt": "tocar som Cheering"
        }
      ],
      "ajustes": [
        "1 rotação ≈ 17,6 cm (roda de 5,6 cm). Meça a arena e divida.",
        "0,5 rotação de giro: teste quanto dá 90° com o robô de treino.",
        "25% com itens: mais rápido, a esfera escapa na curva.",
        "1 rotação de ré: a caçamba tem uns 6 cm; é o suficiente para sair de cima dos itens."
      ]
    },
    {
      "estrategia": "Varrer até a parede",
      "descricao": "Anda para frente até o ultrassônico ver a parede, vira e volta, varrendo a área. Não precisa enxergar os itens: eles entram na caçamba no caminho.",
      "lista": [
        {
          "t": "evento",
          "txt": "quando o programa iniciar"
        },
        {
          "t": "controle",
          "txt": "repetir 2 vezes",
          "filhos": [
            {
              "t": "controle",
              "txt": "repetir até sensor ultrassônico {4} < 12 cm",
              "filhos": [
                {
                  "t": "movimento",
                  "txt": "ligar motores {B} e {C} a 30%"
                }
              ]
            },
            {
              "t": "movimento",
              "txt": "parar motores {B} e {C}"
            },
            {
              "t": "movimento",
              "txt": "girar com motores {B} e {C} direção 100 por 1 rotação (meia volta)"
            }
          ]
        },
        {
          "t": "controle",
          "txt": "repetir até sensor de cor {3} = vermelho",
          "filhos": [
            {
              "t": "movimento",
              "txt": "ligar motores {B} e {C} a 25%"
            }
          ]
        },
        {
          "t": "movimento",
          "txt": "parar motores {B} e {C}"
        },
        {
          "t": "movimento",
          "txt": "mover motores {B} e {C} -1 rotação a 20%"
        }
      ],
      "ajustes": [
        "12 cm: o ultrassônico fica no alto e vê a parede, não os itens (eles passam por baixo).",
        "1 rotação ≈ meia volta: confira com o robô de treino.",
        "Se perder itens na meia volta, gire mais devagar (20%)."
      ]
    }
  ],
  "variacoes": [
    "Dois andares de caçamba: cubo embaixo, esfera em cima.",
    "Empurrador com elástico (lançador): solta a cremalheira de repente.",
    "Volte ao quadrado vermelho de ré para o empurrador ficar virado para o depósito."
  ],
  "desafio": "Deposite cubo e esfera e estacione em menos de 2 minutos.",
  "pergunta": "Empurrar com uma cremalheira ou virar a caçamba (basculante): qual derruba menos itens?"
}
]);
