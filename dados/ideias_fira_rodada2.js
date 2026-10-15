// Missões FIRA — 2ª rodada (15/10/2026): versões alternativas e robôs de treino.
// Mesmas regras da 1ª rodada: kit base, {X} = porta, valores dos blocos são exemplos (calibrar na arena).
// Prime: roda grande 5,6 cm = 17,6 cm/volta. Essential: roda 4,3 cm = 13,5 cm/volta. EV3: 17,6 cm/volta.
// Cremalheira 64781: ~32 dentes; com a engrenagem de 12 dentes, 1 volta do motor = 12 dentes ≈ 3,8 cm.
window.IDEIAS = (window.IDEIAS || []).concat([
{
  "id": "fira-prime-degrau",
  "kit": "prime",
  "titulo": "Escalador 4 rodas com muleta",
  "nivel": 3,
  "tempo": 100,
  "tags": [
    "FIRA M1",
    "obstáculo",
    "muleta"
  ],
  "missao": {
    "prova": "M1",
    "parte": "Passar por obstáculos e degraus baixos no percurso até a linha vermelha",
    "pontos": "Mira 50 (linha vermelha) + 25 por linha de progressão"
  },
  "medidas_cm": [
    20.8,
    14.0,
    9.6
  ],
  "resumo": "Quatro rodas grandes: as da frente têm motor e as de trás giram livres, na mesma altura. Degraus baixos (até cerca de 1,2 cm) ele sobe só com as rodas; para degraus mais altos, a muleta da frente apoia no chão e levanta o nariz. Tem montagem em 3D passo a passo.",
  "aprende": "Por que rodas grandes e vão livre embaixo do robô vencem obstáculos, e como uma alavanca (a muleta) ajuda quando a roda sozinha não consegue.",
  "pecas": [
    [
      "Eixo 11",
      2
    ],
    [
      "Eixo 5",
      4
    ],
    [
      "Viga em L 2x4",
      2
    ],
    [
      "Viga 11 furos",
      2
    ],
    [
      "Viga em L 3x5",
      4
    ],
    [
      "Bucha",
      4
    ],
    [
      "Roda 57 x 14 com pneu",
      4
    ],
    [
      "Quadro 11x15",
      1
    ],
    [
      "Viga conectora 3x3",
      4
    ],
    [
      "Pino com atrito",
      35
    ]
  ],
  "eletronica": [
    [
      "Hub grande SPIKE (6 portas)",
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
    ]
  ],
  "portas": {
    "A": "Motor médio SPIKE",
    "B": "Motor médio SPIKE",
    "C": "Motor grande SPIKE",
    "D": "Sensor de cor SPIKE"
  },
  "passos": [
    "Base: quadro 11x15 deitado, motores médios A e B embaixo com as rodas grandes na frente, sensor de cor (D) atrás no meio, hub mais para trás.",
    "Atrás: vigas conectoras 3x3 em pé na face de trás do quadro e vigas em L 3x5 em pé; as rodas de trás ficam no furo de baixo, na mesma altura das da frente.",
    "Na frente: vigas conectoras 3x3 em pé e duas vigas em L 3x5 como paredes da muleta.",
    "Motor grande (C) por fora da parede direita, com o eixo de 11 da muleta (2 vigas em L 2x4 e uma barra embaixo).",
    "Sem sensor de distância: com ele o robô passava de 14,8 cm de largura. O degrau é achado pela distância percorrida."
  ],
  "programa": [
    "Estratégia 1: sobe só com as rodas (degraus de até ~1,2 cm).",
    "Estratégia 2: usa a muleta para degraus mais altos."
  ],
  "blocos": [
    {
      "estrategia": "Subir só com as rodas",
      "descricao": "Para degraus baixos. O teste do modelo 3D mostra: até 1,2 cm a roda encosta primeiro no degrau e o robô não encalha embaixo.",
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
          "txt": "motor {C} ir para posição 0 (muleta recolhida, para frente)"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 40 cm a 45% (até perto do degrau)"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 15 cm a 20% (sobe devagar, para a roda não patinar)"
        },
        {
          "t": "controle",
          "txt": "repetir até sensor de cor {D} ver vermelho",
          "filhos": [
            {
              "t": "movimento",
              "txt": "iniciar mover para frente a 45%"
            }
          ]
        },
        {
          "t": "movimento",
          "txt": "parar movimento"
        },
        {
          "t": "som",
          "txt": "tocar som Vitória até o fim"
        }
      ],
      "ajustes": [
        "40 cm: distância da largada até o degrau (meça na arena).",
        "20% na subida: se patinar, 15%; se não subir, 30%.",
        "15 cm: o robô inteiro precisa passar (as rodas de trás também sobem)."
      ]
    },
    {
      "estrategia": "Muleta para degrau alto",
      "descricao": "Para degraus de 1,5 a 3 cm: o robô para antes do degrau, a muleta desce e levanta o nariz, e as rodas da frente sobem.",
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
          "txt": "motor {C} ir para posição 0 (muleta recolhida)"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 36 cm a 40% (para uns 4 cm antes do degrau)"
        },
        {
          "t": "motor",
          "txt": "ligar motor {C} por 120 graus a 50% (muleta desce e levanta o nariz)"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 6 cm a 25% (rodas da frente sobem no degrau)"
        },
        {
          "t": "motor",
          "txt": "motor {C} ir para posição 0 (recolhe a muleta)"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 15 cm a 30% (rodas de trás sobem)"
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
        }
      ],
      "ajustes": [
        "120 graus: a muleta é ligada direto no motor (sem engrenagens); ajuste até o nariz subir um pouco acima do degrau.",
        "36 cm: a muleta precisa apoiar ANTES do degrau.",
        "6 e 15 cm: dependem do comprimento do robô (20,8 cm)."
      ]
    }
  ],
  "variacoes": [
    "Eixo de trás articulado: prenda as rodas de trás numa viga que balança num pino só (acompanha o chão torto).",
    "Rodas de trás menores (roda 18 x 8): o que muda na subida?",
    "Peso em cima das rodas da frente ajuda a não patinar."
  ],
  "desafio": "Suba um livro de 2 cm sem empinar nem tombar.",
  "pergunta": "Por que carros de trilha têm suspensão e rodas grandes?"
},
{
  "id": "fira-prime-lancador",
  "kit": "prime",
  "titulo": "Lançador de argola com cremalheira e elástico",
  "nivel": 3,
  "tempo": 100,
  "tags": [
    "FIRA M3",
    "cremalheira impressa",
    "lançador"
  ],
  "missao": {
    "prova": "M3",
    "parte": "Lançar a argola na haste (lançar é permitido) e voltar à partida",
    "pontos": "Mira 50 por argola + 100 (voltar)"
  },
  "medidas_cm": [
    18.7,
    13.2,
    15.2
  ],
  "resumo": "O motor puxa a cremalheira (deitada em cima do robô) para trás, esticando os elásticos. Quando os dentes acabam, ela escapa da engrenagem e dispara para frente; a argola, deitada na ponta, voa. Se o motor continua girando, ele recarrega sozinho. Tem montagem em 3D passo a passo.",
  "aprende": "Energia guardada no elástico e um gatilho mecânico: a engrenagem que 'perde' os dentes da cremalheira.",
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
      1
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
      "Viga 9 furos",
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
      36
    ],
    [
      "Quadro 5x7",
      2
    ],
    [
      "Pino longo com atrito",
      2
    ],
    [
      "Elástico 33 mm",
      4
    ]
  ],
  "pecas_impressas": [
    [
      "Cremalheira LEGO impressa 3D (cópia da 64781)",
      1,
      "testada e aprovada em 15/10/2026. Deitada, dentes para baixo: curso de cerca de 8,8 cm. Para lançar mais forte, emende a segunda."
    ]
  ],
  "eletronica": [
    [
      "Hub grande SPIKE (6 portas)",
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
  "passos": [
    "Base: quadro 11x15, motores médios A e B, rodízio e sensor de cor (D) atrás, hub mais para trás. Limite: 20 x 20 cm.",
    "Torre de 2 quadros 5x7 na frente: eles são o trilho. A cremalheira impressa deitada (dentes para baixo) desliza entre eles, por cima do hub, com uma viga de 15 e uma viga de 9 por cima.",
    "Na ponta da viga de 9, um pino-eixo virado para cima: a argola fica deitada em volta dele. Elásticos dos quadros até os pinos de trás do carrinho puxam para frente.",
    "Motor grande (C) de pé ao lado da torre (com uma viga de 5 de espaçador) e a engrenagem de 12 dentes embaixo da cremalheira. Girando, puxa o carrinho para trás; quando acabam os dentes, ele escapa e dispara.",
    "Sensor de distância (E) na lateral da torre, olhando para frente. Sensor de cor (D) atrás, para achar a partida."
  ],
  "programa": [
    "Estratégia 1: lança de longe (30 cm), mais rápido.",
    "Estratégia 2: lança de perto (12 cm) com metade da força, mais preciso."
  ],
  "blocos": [
    {
      "estrategia": "Lançar de longe",
      "descricao": "Chega rápido e lança de 30 cm. Precisa calibrar bem a força (número de elásticos).",
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
          "t": "luz",
          "txt": "matriz do hub: mostrar alvo"
        },
        {
          "t": "motor",
          "txt": "ligar motor {C} por 700 graus a 60% (puxa até quase o fim dos dentes: armado)"
        },
        {
          "t": "movimento",
          "txt": "iniciar mover para frente a 40%"
        },
        {
          "t": "controle",
          "txt": "esperar até sensor de distância {E} mais perto que 30 cm"
        },
        {
          "t": "movimento",
          "txt": "parar movimento"
        },
        {
          "t": "controle",
          "txt": "esperar 0,5 segundo (o robô para de balançar)"
        },
        {
          "t": "motor",
          "txt": "ligar motor {C} por 150 graus (os dentes acabam: DISPARO)"
        },
        {
          "t": "som",
          "txt": "tocar som Laser"
        },
        {
          "t": "controle",
          "txt": "repetir até sensor de cor {D} ver verde",
          "filhos": [
            {
              "t": "movimento",
              "txt": "iniciar mover para trás a 40%"
            }
          ]
        },
        {
          "t": "movimento",
          "txt": "parar movimento (voltou à partida: +100)"
        }
      ],
      "ajustes": [
        "700 + 150 graus: o curso de 8,8 cm é cerca de 830 graus. Confira girando devagar onde os dentes acabam.",
        "30 cm: aumente ou diminua até a argola cair na haste.",
        "Força: teste com 2, 3 e 4 elásticos e anote o alcance."
      ]
    },
    {
      "estrategia": "Lançar de perto",
      "descricao": "Encosta a 12 cm e usa só 2 elásticos: a argola vai em arco curto, mais fácil de acertar.",
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
          "txt": "ligar motor {C} por 350 graus a 60% (meio curso: menos força)"
        },
        {
          "t": "movimento",
          "txt": "iniciar mover para frente a 30%"
        },
        {
          "t": "controle",
          "txt": "esperar até sensor de distância {E} mais perto que 12 cm"
        },
        {
          "t": "movimento",
          "txt": "parar movimento"
        },
        {
          "t": "motor",
          "txt": "ligar motor {C} por 500 graus a 60% (completa o curso e dispara)"
        },
        {
          "t": "movimento",
          "txt": "mover para trás 20 cm a 40%"
        },
        {
          "t": "controle",
          "txt": "repetir até sensor de cor {D} ver verde",
          "filhos": [
            {
              "t": "movimento",
              "txt": "iniciar mover para trás a 40%"
            }
          ]
        },
        {
          "t": "movimento",
          "txt": "parar movimento"
        }
      ],
      "ajustes": [
        "Com 2 elásticos: tire 2 dos 4.",
        "12 cm: distância do disparo até a haste.",
        "Ângulo do trilho: incline 2 furos para a argola subir mais."
      ]
    }
  ],
  "variacoes": [
    "Rampa de recarga: um tubo com 3 argolas que cai uma na colher a cada disparo.",
    "Trilho inclinado com viga em L para mudar o ângulo do lançamento.",
    "Gráfico: distância do disparo x número de elásticos."
  ],
  "desafio": "Acerte 2 argolas seguidas na mesma haste.",
  "pergunta": "Onde a energia fica guardada antes do disparo? Para onde ela vai depois?"
},
{
  "id": "fira-prime-funil",
  "kit": "prime",
  "titulo": "Funil de esferas com boca larga",
  "nivel": 2,
  "tempo": 100,
  "tags": [
    "FIRA M2",
    "funil",
    "esferas"
  ],
  "missao": {
    "prova": "M2",
    "parte": "Versão só para esferas: recolher e depositar esferas (robô parceiro: Essential)",
    "pontos": "Mira 10 por esfera coletada + 30 por esfera depositada + 50 (estacionar)"
  },
  "medidas_cm": [
    19.3,
    14.5,
    8.8
  ],
  "resumo": "Um corredor de vigas em L na frente com duas abas abertas (vigas dobradas): a boca pega esferas em 12,8 cm de largura e guia todas para o meio. Sem motor no funil: para depositar, o robô dá ré e as esferas ficam. Tem montagem em 3D passo a passo.",
  "aprende": "Mecanismo passivo: a forma do funil faz o trabalho. E por que a ponta da aba precisa estar virada para FORA: o teste do 3D mostra que sem as abas a boca útil cai de 12,8 para 7,2 cm.",
  "pecas": [
    [
      "Eixo 5",
      2
    ],
    [
      "Viga dobrada 9 furos",
      2
    ],
    [
      "Viga 3 furos",
      1
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
      "Viga conectora 3x3",
      4
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
      "Pino longo com atrito",
      2
    ]
  ],
  "eletronica": [
    [
      "Hub grande SPIKE (6 portas)",
      1
    ],
    [
      "Motor médio SPIKE",
      2
    ],
    [
      "Sensor de cor SPIKE",
      1
    ]
  ],
  "portas": {
    "A": "Motor médio SPIKE",
    "B": "Motor médio SPIKE",
    "D": "Sensor de cor SPIKE"
  },
  "passos": [
    "Base: quadro 11x15 deitado, motores médios A e B embaixo com as rodas, rodízio de bola e sensor de cor (D) olhando o chão, hub em cima.",
    "Fundo do corredor: duas vigas conectoras 3x3 em pé na face da frente do quadro.",
    "Paredes: vigas em L 3x5 em pé nas laterais (7,2 cm entre elas).",
    "Boca: por fora de cada parede, uma viga conectora 3x3 deitada e, embaixo dela, uma viga dobrada de 9 deitada com a ponta para fora.",
    "Sem porta e sem motor grande: com a porta motorizada o motor e o sensor de distância ocupavam o lugar das abas (passava de 20 cm). Depósito por ré."
  ],
  "programa": [
    "Estratégia 1: varrer em faixas (cortador de grama).",
    "Estratégia 2: ir direto ao depósito contando faixas pela cor e voltar para estacionar."
  ],
  "blocos": [
    {
      "estrategia": "Varrer em faixas",
      "descricao": "Passa pela área em faixas, como um cortador de grama. As esferas que entram na boca ficam presas na frente do corredor enquanto o robô anda para a frente.",
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
          "txt": "definir velocidade de movimento = 35%"
        },
        {
          "t": "controle",
          "txt": "repetir 3 vezes",
          "filhos": [
            {
              "t": "movimento",
              "txt": "mover para frente 60 cm (varre uma faixa)"
            },
            {
              "t": "movimento",
              "txt": "mover direção 100 por 0,5 rotação (meia volta, devagar para não perder as esferas)"
            },
            {
              "t": "movimento",
              "txt": "mover para frente 12 cm (próxima faixa: a boca tem 12,8 cm)"
            },
            {
              "t": "movimento",
              "txt": "mover direção 100 por 0,5 rotação"
            }
          ]
        },
        {
          "t": "controle",
          "txt": "repetir até sensor de cor {D} ver amarelo (depósito)",
          "filhos": [
            {
              "t": "movimento",
              "txt": "iniciar mover para frente"
            }
          ]
        },
        {
          "t": "movimento",
          "txt": "mover para trás 15 cm (as esferas ficam no depósito)"
        },
        {
          "t": "som",
          "txt": "tocar som Vitória"
        }
      ],
      "ajustes": [
        "60 cm e 12 cm: tamanho da área e largura da faixa (a boca pega 12,8 cm).",
        "Cor do depósito (amarelo é exemplo).",
        "Na curva a esfera pode escapar: vire devagar (25%)."
      ]
    },
    {
      "estrategia": "Depósito e estacionar pela cor",
      "descricao": "Faz um caminho só (onde estão as esferas), deposita dando ré e estaciona no quadrado vermelho (+50 com o parceiro).",
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
          "txt": "mover para frente 50 cm a 35% (passa pelas esferas)"
        },
        {
          "t": "movimento",
          "txt": "mover direção -100 por 0,25 rotação (vira à esquerda devagar)"
        },
        {
          "t": "controle",
          "txt": "repetir até sensor de cor {D} ver amarelo",
          "filhos": [
            {
              "t": "movimento",
              "txt": "iniciar mover para frente a 30%"
            }
          ]
        },
        {
          "t": "movimento",
          "txt": "mover para trás 15 cm (deposita)"
        },
        {
          "t": "movimento",
          "txt": "mover direção 100 por 0,25 rotação"
        },
        {
          "t": "controle",
          "txt": "repetir até sensor de cor {D} ver vermelho",
          "filhos": [
            {
              "t": "movimento",
              "txt": "iniciar mover para frente a 30%"
            }
          ]
        },
        {
          "t": "movimento",
          "txt": "parar movimento (estacionado)"
        }
      ],
      "ajustes": [
        "50 cm: até a fileira de esferas (meça).",
        "0,25 rotação ≈ 45°: teste no transferidor de papel.",
        "15 cm de ré: o corredor inteiro precisa sair de cima das esferas."
      ]
    }
  ],
  "variacoes": [
    "Abas mais compridas (viga dobrada de 11,5): boca maior, mas confira os 20 cm.",
    "Combine com a empilhadeira de cubos: cada robô da dupla pega um tipo.",
    "Porta motorizada de volta: só cabe tirando as abas (veja a Gaiola caçadora)."
  ],
  "desafio": "Recolha 3 esferas em menos de 90 segundos.",
  "pergunta": "Por que a esfera sobe a rampa sem motor? De onde vem a energia?"
},
{
  "id": "fira-prime-empilhadeira",
  "kit": "prime",
  "titulo": "Empilhadeira de cubos",
  "nivel": 3,
  "tempo": 100,
  "tags": [
    "FIRA M2",
    "cremalheira do kit",
    "garfo"
  ],
  "missao": {
    "prova": "M2",
    "parte": "Versão só para cubos: levantar o cubo com garfo e depositar",
    "pontos": "Mira 20 por cubo coletado + 20 por cubo depositado + 50 (estacionar)"
  },
  "medidas_cm": [
    18.3,
    15.6,
    13.6
  ],
  "resumo": "Como uma empilhadeira: dois garfos (vigas em L) rentes ao chão sobem e descem pela cremalheira que já vem no kit. Tem montagem em 3D passo a passo. Atenção: os garfos têm 8 mm de altura; teste com o cubo da arena se ele sobe no garfo (se não subir, ponha uma rampinha na ponta).",
  "aprende": "Elevador de cremalheira e pinhão: o garfo sobe reto, guiado pelos dois quadros da torre.",
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
      2
    ],
    [
      "Viga em L 3x5",
      4
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
      "Viga conectora 3x3",
      2
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
      42
    ],
    [
      "Quadro 5x7",
      2
    ],
    [
      "Cremalheira 13",
      1
    ],
    [
      "Pino longo com atrito",
      2
    ]
  ],
  "eletronica": [
    [
      "Hub grande SPIKE (6 portas)",
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
  "passos": [
    "Base: quadro 11x15, motores médios A e B, rodízio e sensor de cor (D) atrás, hub mais para trás.",
    "Torre: vigas em L 3x5 deitadas e dois quadros 5x7 em pé. Carrinho: cremalheira do kit (dentes para trás) numa viga de 15.",
    "Garfos: viga conectora 3x3 em pé embaixo do carrinho e duas vigas em L 3x5 com a perna comprida para frente.",
    "Motor grande (C) de pé ao lado da torre, com a engrenagem de 12 dentes no eixo de 7.",
    "Sensor de distância (E) embaixo, à esquerda, numa viga conectora na face da frente do quadro."
  ],
  "programa": [
    "Estratégia 1: um cubo por viagem (seguro).",
    "Estratégia 2: empilhar 2 cubos no garfo (mais pontos por viagem)."
  ],
  "blocos": [
    {
      "estrategia": "Um cubo por viagem",
      "descricao": "Pega um, leva, volta. Mais viagens, menos risco de derrubar.",
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
          "txt": "motor {C} ir para posição 0 (garfo no chão)"
        },
        {
          "t": "controle",
          "txt": "repetir 2 vezes",
          "filhos": [
            {
              "t": "movimento",
              "txt": "iniciar mover para frente a 30%"
            },
            {
              "t": "controle",
              "txt": "esperar até sensor de distância {E} mais perto que 3 cm"
            },
            {
              "t": "movimento",
              "txt": "mover para frente 4 cm a 15% (garfo entra embaixo)"
            },
            {
              "t": "motor",
              "txt": "ligar motor {C} por 360 graus (sobe cerca de 4 cm)"
            },
            {
              "t": "controle",
              "txt": "repetir até sensor de cor {D} ver amarelo",
              "filhos": [
                {
                  "t": "movimento",
                  "txt": "iniciar mover para trás a 35%"
                }
              ]
            },
            {
              "t": "movimento",
              "txt": "parar movimento"
            },
            {
              "t": "motor",
              "txt": "motor {C} ir para posição 0 (abaixa e deixa o cubo)"
            },
            {
              "t": "movimento",
              "txt": "mover para trás 6 cm"
            },
            {
              "t": "movimento",
              "txt": "mover direção 100 por 1 rotação (meia-volta para o próximo)"
            }
          ]
        }
      ],
      "ajustes": [
        "360 graus ≈ 3,8 cm de subida.",
        "Garfo: se o cubo não entra, deixe as placas mais rentes ao chão.",
        "Cor do depósito."
      ]
    },
    {
      "estrategia": "Empilhar 2 cubos",
      "descricao": "Levanta o primeiro alto, pega o segundo embaixo e leva os dois juntos.",
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
          "txt": "motor {C} ir para posição 0"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 30 cm a 30%"
        },
        {
          "t": "motor",
          "txt": "ligar motor {C} por 900 graus (primeiro cubo bem alto)"
        },
        {
          "t": "movimento",
          "txt": "mover direção 100 por 0,5 rotação"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 25 cm a 25%"
        },
        {
          "t": "motor",
          "txt": "ligar motor {C} por -540 graus (encosta o 1º em cima do 2º)"
        },
        {
          "t": "controle",
          "txt": "repetir até sensor de cor {D} ver amarelo",
          "filhos": [
            {
              "t": "movimento",
              "txt": "iniciar mover para trás a 25%"
            }
          ]
        },
        {
          "t": "movimento",
          "txt": "parar movimento"
        },
        {
          "t": "motor",
          "txt": "motor {C} ir para posição 0"
        }
      ],
      "ajustes": [
        "900 e -540 graus: dependem da altura do cubo.",
        "Velocidade baixa (25%) com 2 cubos."
      ]
    }
  ],
  "variacoes": [
    "Encosto atrás do garfo para o cubo não escorregar.",
    "Garfo com dentes 1x3 na ponta para entrar mais fácil.",
    "Troque o depósito por empilhar no próprio chão."
  ],
  "desafio": "Leve 2 cubos de uma vez sem deixar cair.",
  "pergunta": "Por que a empilhadeira de verdade inclina o garfo um pouco para trás?"
},
{
  "id": "fira-essential-palito",
  "kit": "essential",
  "titulo": "Gancho em L para o palito",
  "nivel": 3,
  "tempo": 100,
  "tags": [
    "FIRA M4",
    "gancho",
    "alavanca"
  ],
  "missao": {
    "prova": "M4",
    "parte": "Versão simplificada: tirar o palito do copo A com um gancho, levar ao copo B (em linha reta) e soltar",
    "pontos": "Mira a prova completa sem mexer nos copos"
  },
  "medidas_cm": [
    13.6,
    12.8,
    12.4
  ],
  "resumo": "Um motor (A) gira as duas rodas juntas, então o robô só anda reto; o outro (B) move uma alavanca alta com um gancho em L de vigas. O gancho desce no copo A antes do palito, o robô avança 1 cm para o pé do L passar por baixo, e a alavanca sobe: o palito escorrega para o canto do L. No copo B, a alavanca abaixa um pouco além da horizontal e o robô recua 1,6 cm: o palito fica no copo. Tem montagem em 3D passo a passo.",
  "aprende": "Com só 2 portas: um motor anda (em linha reta) e o outro faz todo o trabalho fino com a alavanca.",
  "pecas": [
    [
      "Viga 7 furos",
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
      1
    ],
    [
      "Eixo 7",
      1
    ],
    [
      "Pino com atrito",
      16
    ],
    [
      "Roda 43 x 14 com pneu",
      2
    ],
    [
      "Viga dobrada 9 furos",
      1
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
    "Motor A deitado, saída para a direita: eixo de 6 com as DUAS rodas grandes lado a lado (giram juntas: o robô anda reto).",
    "Do lado esquerdo do motor A: viga de 11 em pé (frente) e viga de 7 em pé (trás), 2 pinos cada. A ponta de baixo delas é o apoio que desliza no chão.",
    "Hub pequeno deitado em cima do motor A, preso na viga de 11 com 2 pinos. Em cima do hub: viga de 7 deitada e o motor B.",
    "Alavanca: eixo de 7 na saída do motor B, viga dobrada laranja na ponta (furo de eixo) e viga de 11 para a frente.",
    "Gancho: viga em L com a perna longa para baixo (poste) e outra viga em L com o pé virado para a FRENTE.",
    "O gancho fica 4 cm à direita das rodas: os copos ficam em linha reta e o corpo do robô passa AO LADO do copo A.",
    "O palito precisa estar atravessado no copo (de lado para o robô). Monte a alavanca na horizontal com o motor B na posição 0."
  ],
  "programa": [
    "Estratégia 1: o gancho entra no copo antes do palito e passa por baixo (testada no modelo 3D com um copo de 7 x 8 cm).",
    "Estratégia 2: o pé pega a ponta do palito que sai da borda (não testada no 3D: depende do palito sair da borda)."
  ],
  "blocos": [
    {
      "estrategia": "Gancho por dentro do copo",
      "descricao": "Testada no 3D: com o copo a 11 cm do eixo das rodas, o gancho desce, passa por baixo do palito, levanta, solta no copo B e sai sem tocar na parede. Comece com a alavanca para cima (posição 30).",
      "lista": [
        {
          "t": "evento",
          "txt": "quando o programa começar"
        },
        {
          "t": "motor",
          "txt": "motor {B} ir para posição 30 graus (gancho para cima)"
        },
        {
          "t": "motor",
          "txt": "ligar motor {A} por 2 rotações a 30% (até o copo A: o pé para uns 3 mm antes do palito)"
        },
        {
          "t": "motor",
          "txt": "motor {B} ir para posição 0 a 20% (gancho desce dentro do copo)"
        },
        {
          "t": "motor",
          "txt": "ligar motor {A} por 0,09 rotação a 10% (≈ 1,2 cm: o pé passa por baixo do palito)"
        },
        {
          "t": "motor",
          "txt": "motor {B} ir para posição 30 graus a 20% (levanta: o palito escorrega para o canto do L)"
        },
        {
          "t": "motor",
          "txt": "ligar motor {A} por 14,8 rotações a 25% (≈ 2 m até o copo B, passando ao lado do copo A)"
        },
        {
          "t": "motor",
          "txt": "motor {B} ir para posição -15 graus a 15% (gancho entra no copo B e o pé inclina para a frente)"
        },
        {
          "t": "motor",
          "txt": "ligar motor {A} por -0,12 rotação a 10% (recua 1,6 cm: o pé sai de baixo do palito)"
        },
        {
          "t": "motor",
          "txt": "motor {B} ir para posição 30 graus"
        },
        {
          "t": "motor",
          "txt": "ligar motor {A} por -1,5 rotação a 30% (afasta mais de 15 cm)"
        },
        {
          "t": "som",
          "txt": "tocar som Tada no tablet"
        }
      ],
      "ajustes": [
        "1 rotação ≈ 13,6 cm (roda de 4,3 cm). 2 rotações = distância da partida até o copo A: meça e divida.",
        "Se a alavanca DESCER no 'posição 30', inverta os sinais (30 vira -30 e -15 vira 15).",
        "0,09 rotação é pouco: rode o motor A a 10% para não passar do ponto.",
        "Se o palito não escorregar no copo B, use -20 graus (no 3D, a partir de -16 graus a viga de 11 começa a encostar na borda)."
      ]
    },
    {
      "estrategia": "Gancho pela ponta (fora do copo)",
      "descricao": "Só se o palito tiver uma ponta para fora da borda, virada para o robô. O pé fica um pouco abaixo da borda e entra embaixo da ponta, sem chegar na parede. Não foi testada no 3D.",
      "lista": [
        {
          "t": "evento",
          "txt": "quando o programa começar"
        },
        {
          "t": "motor",
          "txt": "motor {B} ir para posição 20 graus (pé logo abaixo da altura da borda)"
        },
        {
          "t": "motor",
          "txt": "ligar motor {A} por 2 rotações a 15% (o pé entra embaixo da ponta e para antes da parede)"
        },
        {
          "t": "motor",
          "txt": "motor {B} ir para posição 30 graus (levanta)"
        },
        {
          "t": "motor",
          "txt": "ligar motor {A} por 14,8 rotações a 25%"
        },
        {
          "t": "motor",
          "txt": "motor {B} ir para posição -15 graus (solta no copo B)"
        },
        {
          "t": "motor",
          "txt": "ligar motor {A} por -0,12 rotação a 10%"
        },
        {
          "t": "motor",
          "txt": "motor {B} ir para posição 30 graus"
        },
        {
          "t": "motor",
          "txt": "ligar motor {A} por -1,5 rotação a 30%"
        }
      ],
      "ajustes": [
        "Confira antes se o palito sai da borda: se não sair, use a estratégia 1.",
        "20 graus: ajuste até o pé ficar 2 a 3 mm abaixo da borda.",
        "2 rotações: pare antes de o pé tocar a parede do copo."
      ]
    }
  ],
  "variacoes": [
    "Pé do L com um pedaço de mangueira flexível para o palito não rolar.",
    "Uma viga apoiando a ponta do eixo de 7 (ele é comprido e pode envergar com o peso da alavanca).",
    "Se os copos não estiverem em linha reta: troque o eixo das rodas por um motor em cada roda (aí não sobra porta para a alavanca: discutam outra solução)."
  ],
  "desafio": "Leve o palito 3 vezes seguidas sem mexer o copo mais de 1 cm.",
  "pergunta": "Por que um robô que só anda reto pode ser uma boa escolha nesta prova?"
},
{
  "id": "fira-prime-treino",
  "kit": "prime",
  "titulo": "Robô de treino e calibração (Prime)",
  "nivel": 1,
  "tempo": 50,
  "tags": [
    "FIRA treino",
    "calibração",
    "todas as provas"
  ],
  "missao": {
    "prova": "todas",
    "parte": "Medir e anotar os números que todas as outras ideias usam: cm por rotação, giro de 90°, parada na linha e pela distância",
    "pontos": "Não pontua sozinho: deixa os outros programas certos"
  },
  "medidas_cm": [
    16,
    14.4,
    10
  ],
  "resumo": "Uma base simples que cabe em todas as provas, com os dois sensores e um botão. Serve para medir os números da sua arena e do seu robô antes de programar as missões.",
  "aprende": "Calibrar: medir de verdade em vez de chutar. Cada robô e cada piso são um pouco diferentes.",
  "pecas": [
    [
      "Quadro 7x11",
      1
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
      "Pino com atrito",
      16
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
      "Bola 19 mm",
      1
    ]
  ],
  "eletronica": [
    [
      "Hub grande SPIKE (6 portas)",
      1
    ],
    [
      "Motor médio SPIKE",
      2
    ],
    [
      "Sensor de cor SPIKE",
      1
    ],
    [
      "Sensor de distância SPIKE",
      1
    ],
    [
      "Sensor de força SPIKE",
      1
    ]
  ],
  "portas": {
    "A": "Motor médio SPIKE",
    "B": "Motor médio SPIKE",
    "D": "Sensor de cor SPIKE",
    "E": "Sensor de distância SPIKE",
    "F": "Sensor de força SPIKE"
  },
  "passos": [
    "Base: quadro 7x11, motores médios A e B, rodas grandes, rodízio atrás.",
    "Sensor de cor (D) na frente, olhando o chão a 1 cm.",
    "Sensor de distância (E) na frente, olhando para frente.",
    "Sensor de força (F) em cima: é o botão para começar cada teste."
  ],
  "programa": [
    "Teste 1: cm por rotação e giro de 90°.",
    "Teste 2: parar na linha e parar pela distância."
  ],
  "blocos": [
    {
      "estrategia": "Distância e giro",
      "descricao": "Anote os resultados numa tabela. Use os números nas missões.",
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
          "t": "controle",
          "txt": "esperar até sensor de força {F} ser pressionado"
        },
        {
          "t": "movimento",
          "txt": "mover para frente 5 rotações a 40%"
        },
        {
          "t": "luz",
          "txt": "matriz do hub: escrever 'MEDIR' (meça com a trena e divida por 5 = cm por rotação)"
        },
        {
          "t": "controle",
          "txt": "esperar até sensor de força {F} ser pressionado"
        },
        {
          "t": "movimento",
          "txt": "mover direção 100 por 0,5 rotação a 30%"
        },
        {
          "t": "luz",
          "txt": "matriz do hub: escrever 'GIRO' (girou 90°? ajuste 0,5 para mais ou menos)"
        },
        {
          "t": "controle",
          "txt": "esperar até sensor de força {F} ser pressionado"
        },
        {
          "t": "controle",
          "txt": "repetir 4 vezes",
          "filhos": [
            {
              "t": "movimento",
              "txt": "mover direção 100 por 0,5 rotação a 30%"
            }
          ]
        },
        {
          "t": "luz",
          "txt": "matriz do hub: escrever 'VOLTA' (deu uma volta completa?)"
        }
      ],
      "ajustes": [
        "Anote: cm por rotação (≈ 17,6 cm).",
        "Anote: rotações para 90° (≈ 0,5).",
        "Repita em velocidades diferentes: 30%, 50%, 70%."
      ]
    },
    {
      "estrategia": "Parar na linha e na distância",
      "descricao": "Descobre qual valor de cor/distância funciona na sua arena e quanto o robô 'passa do ponto'.",
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
          "t": "controle",
          "txt": "esperar até sensor de força {F} ser pressionado"
        },
        {
          "t": "movimento",
          "txt": "iniciar mover para frente a 40%"
        },
        {
          "t": "controle",
          "txt": "esperar até sensor de cor {D} ver preto"
        },
        {
          "t": "movimento",
          "txt": "parar movimento"
        },
        {
          "t": "luz",
          "txt": "matriz do hub: escrever luz refletida do sensor de cor {D}"
        },
        {
          "t": "controle",
          "txt": "esperar até sensor de força {F} ser pressionado"
        },
        {
          "t": "movimento",
          "txt": "iniciar mover para frente a 40%"
        },
        {
          "t": "controle",
          "txt": "esperar até sensor de distância {E} mais perto que 10 cm"
        },
        {
          "t": "movimento",
          "txt": "parar movimento"
        },
        {
          "t": "luz",
          "txt": "matriz do hub: escrever distância do sensor de distância {E} em cm"
        }
      ],
      "ajustes": [
        "Quanto o robô passou da linha? Meça em 3 velocidades.",
        "Valor da luz refletida no preto e no branco: use a média como limite no seguidor de linha.",
        "Parou em 10 cm mesmo? Se parou em 7, o robô 'escorrega' 3 cm."
      ]
    }
  ],
  "variacoes": [
    "Monte uma tabela no caderno e cole na parede do laboratório.",
    "Teste com a bateria cheia e quase vazia.",
    "Teste no piso da arena e no piso da sala."
  ],
  "desafio": "Faça o robô andar exatamente 1 metro e parar com erro de até 1 cm.",
  "pergunta": "Por que o mesmo programa funciona num piso e não no outro?"
},
{
  "id": "fira-essential-treino",
  "kit": "essential",
  "titulo": "Robô de treino e calibração (Essential)",
  "nivel": 1,
  "tempo": 50,
  "tags": [
    "FIRA treino",
    "calibração",
    "todas as provas"
  ],
  "missao": {
    "prova": "todas",
    "parte": "Medir cm por rotação e giro de 90° do Essential",
    "pontos": "Não pontua sozinho: deixa os outros programas certos"
  },
  "medidas_cm": [
    14.4,
    12.8,
    8
  ],
  "resumo": "Base mínima com dois motores, para descobrir os números do Essential: quanto anda em uma rotação e quanto girar para virar 90°.",
  "aprende": "Calibrar, e entender por que medir rotações é melhor que medir tempo.",
  "pecas": [
    [
      "Placa Technic 2x8",
      2
    ],
    [
      "Placa Technic 2x6",
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
      "Motor pequeno SPIKE",
      2
    ]
  ],
  "portas": {
    "A": "Motor pequeno SPIKE",
    "B": "Motor pequeno SPIKE"
  },
  "passos": [
    "Base com placas Technic e um motor pequeno de cada lado (A e B).",
    "Rodinha de skate atrás.",
    "Faça uma marca na frente do robô (ponto de medida)."
  ],
  "programa": [
    "Teste 1: cm por rotação.",
    "Teste 2: giro de 90° (no lugar e em curva aberta)."
  ],
  "blocos": [
    {
      "estrategia": "Distância por rotação",
      "descricao": "Compare rotações e tempo: qual repete melhor?",
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
          "txt": "mover para frente 5 rotações a 40%"
        },
        {
          "t": "controle",
          "txt": "esperar 5 segundos (meça e anote)"
        },
        {
          "t": "movimento",
          "txt": "mover para frente por 3 segundos a 40%"
        },
        {
          "t": "som",
          "txt": "tocar som Tada no tablet (meça de novo)"
        }
      ],
      "ajustes": [
        "Distância ÷ 5 = cm por rotação (≈ 13,5 cm).",
        "Rode 3 vezes: as rotações variam menos que o tempo?"
      ]
    },
    {
      "estrategia": "Giro de 90°",
      "descricao": "Descobre o valor para virar exatamente um ângulo reto.",
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
          "txt": "mover direção 100 por 0,6 rotação a 30% (giro no lugar)"
        },
        {
          "t": "controle",
          "txt": "esperar 3 segundos"
        },
        {
          "t": "controle",
          "txt": "repetir 4 vezes",
          "filhos": [
            {
              "t": "movimento",
              "txt": "mover direção 100 por 0,6 rotação a 30%"
            }
          ]
        },
        {
          "t": "controle",
          "txt": "esperar 3 segundos"
        },
        {
          "t": "movimento",
          "txt": "mover direção 50 por 1 rotação a 30% (curva aberta)"
        }
      ],
      "ajustes": [
        "0,6 rotação: ajuste até 4 giros darem uma volta completa.",
        "Curva aberta (direção 50): quanto o robô andou para o lado?"
      ]
    }
  ],
  "variacoes": [
    "Para treinar parada na linha: troque o motor B pelo sensor de cor (o robô passa a andar só reto, com o motor A nas duas rodas).",
    "Teste com e sem peso em cima.",
    "Anote tudo numa tabela."
  ],
  "desafio": "Faça um quadrado de 30 cm e volte ao ponto de partida.",
  "pergunta": "Por que o giro muda quando o piso escorrega mais?"
},
{
  "id": "fira-ev3-treino",
  "kit": "ev3",
  "titulo": "Robô de treino e calibração (EV3)",
  "nivel": 1,
  "tempo": 50,
  "tags": [
    "FIRA treino",
    "calibração",
    "giroscópio"
  ],
  "missao": {
    "prova": "todas",
    "parte": "Medir cm por rotação, giro de 90° pelo giroscópio, parada na linha e pela distância",
    "pontos": "Não pontua sozinho: deixa os outros programas certos"
  },
  "medidas_cm": [
    20,
    14.8,
    14
  ],
  "resumo": "Base EV3 compacta com cor, ultrassônico, giroscópio e um botão. Mede os números da arena para todas as missões.",
  "aprende": "Comparar giro por rotação da roda com giro medido pelo giroscópio.",
  "pecas": [
    [
      "Viga 15 furos",
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
      "Pino com atrito",
      24
    ],
    [
      "Pino longo com atrito",
      6
    ],
    [
      "Eixo 5",
      2
    ],
    [
      "Bucha",
      2
    ],
    [
      "Roda 43,2 x 26",
      2
    ],
    [
      "Pneu 56 x 28",
      2
    ],
    [
      "Bola de aço 18 mm (rodízio)",
      1
    ],
    [
      "Junta esférica de direção (encaixe)",
      1
    ]
  ],
  "eletronica": [
    [
      "Brick EV3",
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
    "1": "Sensor de toque EV3",
    "2": "Sensor giroscópio EV3",
    "3": "Sensor de cor EV3",
    "4": "Sensor ultrassônico EV3"
  },
  "passos": [
    "Base com motores grandes B e C bem juntos (cabe em meia A4: largura até 14,8 cm).",
    "Giroscópio (2) deitado e firme no meio.",
    "Sensor de cor (3) embaixo na frente; ultrassônico (4) olhando para frente.",
    "Sensor de toque (1) em cima: botão de começar."
  ],
  "programa": [
    "Teste 1: distância e giro (rodas x giroscópio).",
    "Teste 2: parar na linha e pela distância."
  ],
  "blocos": [
    {
      "estrategia": "Distância e giro",
      "descricao": "Compare o giro calculado pelas rodas com o giro medido pelo giroscópio.",
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
          "txt": "mover motores {B} e {C} 5 rotações a 40%"
        },
        {
          "t": "luz",
          "txt": "tela do Brick: escrever 'MEDIR' (distância ÷ 5)"
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
          "t": "movimento",
          "txt": "ligar motores {B} e {C} girando no lugar a 20%"
        },
        {
          "t": "controle",
          "txt": "esperar até ângulo do sensor giroscópio {2} > 88"
        },
        {
          "t": "movimento",
          "txt": "parar motores {B} e {C}"
        },
        {
          "t": "luz",
          "txt": "tela do Brick: escrever ângulo do sensor giroscópio {2}"
        }
      ],
      "ajustes": [
        "Anote cm por rotação (≈ 17,6 cm).",
        "88 em vez de 90: o robô 'passa' um pouco ao parar. Ajuste até parar em 90.",
        "Velocidade do giro: mais devagar = mais preciso."
      ]
    },
    {
      "estrategia": "Parar na linha e na distância",
      "descricao": "Descobre os limites de cor e de distância da arena.",
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
          "txt": "ligar motores {B} e {C} a 30%"
        },
        {
          "t": "controle",
          "txt": "esperar até luz refletida do sensor de cor {3} < 30"
        },
        {
          "t": "movimento",
          "txt": "parar motores {B} e {C}"
        },
        {
          "t": "luz",
          "txt": "tela do Brick: escrever luz refletida do sensor de cor {3}"
        },
        {
          "t": "controle",
          "txt": "esperar até sensor de toque {1} pressionado"
        },
        {
          "t": "movimento",
          "txt": "ligar motores {B} e {C} a 30%"
        },
        {
          "t": "controle",
          "txt": "esperar até sensor ultrassônico {4} < 10 cm"
        },
        {
          "t": "movimento",
          "txt": "parar motores {B} e {C}"
        },
        {
          "t": "luz",
          "txt": "tela do Brick: escrever distância do sensor ultrassônico {4}"
        }
      ],
      "ajustes": [
        "30: média entre a luz no preto e no branco da sua arena.",
        "Quantos cm o robô passou do ponto em cada velocidade?"
      ]
    }
  ],
  "variacoes": [
    "Tabela de calibração na parede do laboratório.",
    "Compare 5 robôs EV3 diferentes: os números mudam?",
    "Teste com bateria cheia e fraca."
  ],
  "desafio": "Faça um quadrado de 50 cm usando o giroscópio e volte ao ponto de partida.",
  "pergunta": "Por que o giroscópio acerta o giro melhor que contar rotações da roda?"
}
]);
