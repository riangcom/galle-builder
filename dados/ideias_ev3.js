// Banco de ideias: EV3 Core (45544). Brick: portas A-D para motores, 1-4 para sensores.
window.IDEIAS = (window.IDEIAS || []).concat([
{
  "id": "ev3-explorador",
  "kit": "ev3",
  "titulo": "Explorador que desvia de obstáculos",
  "nivel": 1,
  "tempo": 50,
  "tags": [
    "veículo",
    "sensor ultrassônico"
  ],
  "resumo": "Um robô que anda pela sala e desvia sozinho de paredes e cadeiras.",
  "aprende": "Usar um sensor para decidir: SE estiver perto, ENTÃO vire.",
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
      4
    ],
    [
      "Pino com atrito",
      20
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
      "Roda 43,2 x 26",
      2
    ],
    [
      "Pneu 56 x 28",
      2
    ],
    [
      "Bucha",
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
      "Bateria recarregável EV3",
      1
    ],
    [
      "Motor grande EV3",
      2
    ],
    [
      "Sensor ultrassônico EV3",
      1
    ],
    [
      "Cabo 25 cm EV3",
      2
    ],
    [
      "Cabo 35 cm EV3",
      1
    ]
  ],
  "passos": [
    "Prenda os dois motores grandes embaixo do Brick com vigas de 15 e 11 furos.",
    "Coloque uma roda (aro + pneu) em cada motor.",
    "Atrás, monte o rodízio com a bola de aço no encaixe.",
    "Na frente, use as vigas em L para segurar o sensor ultrassônico olhando para frente.",
    "Ligue os motores nas portas B e C e o sensor na porta 4."
  ],
  "programa": [
    "Repita para sempre:",
    "  Se a distância for menor que 20 cm: pare, dê ré meia volta e gire para a direita.",
    "  Senão: ande para frente com os motores B e C."
  ],
  "variacoes": [
    "Gire para um lado sorteado.",
    "Mostre olhos na tela do Brick: abertos andando, assustados perto do obstáculo.",
    "Velocidade proporcional à distância: mais perto, mais devagar."
  ],
  "desafio": "Saia de um labirinto feito com caixas e mochilas.",
  "pergunta": "Que outros sensores ajudariam um robô aspirador a não se perder?"
},
{
  "id": "ev3-guindaste-rosca",
  "kit": "ev3",
  "titulo": "Guindaste com rosca sem-fim",
  "nivel": 2,
  "tempo": 100,
  "tags": [
    "guindaste",
    "rosca sem-fim",
    "redução"
  ],
  "resumo": "Uma torre que gira bem devagar e com precisão, e um braço que sobe e desce.",
  "aprende": "Rosca sem-fim: cada volta dela empurra só um dente da engrenagem. Gira devagar, com muita força, e trava sozinha.",
  "pecas": [
    [
      "Mesa giratória pequena (base)",
      1
    ],
    [
      "Mesa giratória pequena (topo)",
      1
    ],
    [
      "Rosca sem-fim",
      1
    ],
    [
      "Engrenagem 8 dentes",
      1
    ],
    [
      "Engrenagem 40 dentes",
      1
    ],
    [
      "Viga 15 furos",
      4
    ],
    [
      "Viga 13 furos",
      2
    ],
    [
      "Quadro 5x7",
      2
    ],
    [
      "Eixo 7",
      2
    ],
    [
      "Eixo 5",
      2
    ],
    [
      "Bucha",
      6
    ],
    [
      "Pino com atrito",
      30
    ],
    [
      "Pino longo com atrito",
      8
    ],
    [
      "Dente 1x3",
      2
    ]
  ],
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
      1
    ],
    [
      "Motor médio EV3",
      1
    ],
    [
      "Sensor de toque EV3",
      1
    ],
    [
      "Cabo 25 cm EV3",
      2
    ],
    [
      "Cabo 35 cm EV3",
      1
    ]
  ],
  "passos": [
    "Use o Brick na base como contrapeso.",
    "Prenda a mesa giratória pequena em cima da base. O motor grande gira a rosca sem-fim, que encaixa nos dentes da mesa.",
    "Monte a torre (vigas de 15 furos e quadros 5x7) em cima da mesa.",
    "No alto, o motor médio gira a engrenagem de 8 dentes, que gira a de 40 no eixo do braço (5 vezes mais força).",
    "O braço são as vigas de 13 furos, com os dentes 1x3 na ponta como gancho.",
    "O sensor de toque na base é o botão de comando."
  ],
  "programa": [
    "Quando o sensor de toque for apertado: o motor médio levanta o braço.",
    "O motor grande gira a torre (muitas voltas da rosca = um pouco de giro da torre).",
    "O braço abaixa e a torre volta.",
    "Experimente: quantas voltas do motor grande fazem a torre dar 1 volta?"
  ],
  "variacoes": [
    "Use o segundo sensor de toque como fim de curso: a torre para quando encosta nele.",
    "Troque 8 e 40 por 24 e 24: o braço consegue levantar a mesma carga?",
    "Marque 3 posições na base e faça o guindaste visitar cada uma."
  ],
  "desafio": "Descubra a redução da rosca girando o motor e contando as voltas da torre.",
  "pergunta": "Por que a rosca sem-fim não deixa a torre girar sozinha quando o motor desliga?"
},
{
  "id": "ev3-tanque",
  "kit": "ev3",
  "titulo": "Tanque de esteiras que gira certinho",
  "nivel": 2,
  "tempo": 100,
  "tags": [
    "esteira",
    "giroscópio",
    "veículo"
  ],
  "resumo": "Um veículo com esteiras que passa por cima de obstáculos e faz curvas exatas de 90 graus.",
  "aprende": "Esteira espalha o peso e segura melhor. O giroscópio mede o giro de verdade, mesmo se a esteira escorregar.",
  "pecas": [
    [
      "Elo de esteira",
      54
    ],
    [
      "Roda dentada de esteira",
      4
    ],
    [
      "Viga 15 furos",
      4
    ],
    [
      "Viga 13 furos",
      2
    ],
    [
      "Eixo 5",
      2
    ],
    [
      "Eixo 7",
      2
    ],
    [
      "Bucha",
      4
    ],
    [
      "Pino com atrito",
      24
    ],
    [
      "Pino longo com atrito",
      8
    ]
  ],
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
      "Sensor giroscópio EV3",
      1
    ],
    [
      "Cabo 25 cm EV3",
      2
    ],
    [
      "Cabo 35 cm EV3",
      1
    ]
  ],
  "passos": [
    "Monte duas laterais com vigas de 15 furos, uma de cada lado do Brick.",
    "Em cada lateral, coloque duas rodas dentadas: a de trás no motor grande, a da frente solta num eixo.",
    "Monte cada esteira com metade dos elos (cerca de 27) e passe em volta das rodas dentadas.",
    "Prenda o giroscópio deitado e firme no meio do robô."
  ],
  "programa": [
    "Zere o giroscópio.",
    "Ande para frente 3 voltas do motor.",
    "Gire (um motor para frente, outro para trás) até o giroscópio marcar 90 graus.",
    "Repita 4 vezes: o tanque desenha um quadrado."
  ],
  "variacoes": [
    "Faça um triângulo: gire 120 graus em cada canto.",
    "Compare: girar por tempo, girar por voltas do motor e girar pelo giroscópio. Qual acerta mais?",
    "Suba uma rampa de livros: o que muda com a esteira esticada ou frouxa?"
  ],
  "desafio": "Desenhe um quadrado e volte exatamente ao ponto de partida.",
  "pergunta": "Por que máquinas de obra e tratores de neve usam esteiras?"
},
{
  "id": "ev3-garra",
  "kit": "ev3",
  "titulo": "Veículo com garra",
  "nivel": 3,
  "tempo": 100,
  "tags": [
    "veículo",
    "garra",
    "missão"
  ],
  "resumo": "Um robô que encontra um objeto, agarra, leva até a base e solta.",
  "aprende": "Dividir uma missão em etapas e usar dois sensores juntos.",
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
      "Viga dobrada 9 furos",
      2
    ],
    [
      "Engrenagem 24 dentes",
      2
    ],
    [
      "Engrenagem 12 dentes dupla cônica",
      1
    ],
    [
      "Engrenagem 20 dentes dupla cônica",
      1
    ],
    [
      "Eixo 5",
      3
    ],
    [
      "Eixo 7",
      2
    ],
    [
      "Bucha",
      6
    ],
    [
      "Pino com atrito",
      30
    ],
    [
      "Pino longo com atrito",
      8
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
      "Sensor ultrassônico EV3",
      1
    ],
    [
      "Sensor de cor EV3",
      1
    ],
    [
      "Cabo 25 cm EV3",
      3
    ],
    [
      "Cabo 35 cm EV3",
      2
    ]
  ],
  "passos": [
    "Monte a base de tração (2 motores grandes, rodas e rodízio).",
    "Na frente, monte a garra: duas vigas dobradas, cada uma presa a uma engrenagem de 24 dentes. As engrenagens se tocam e giram em sentidos opostos.",
    "O motor médio gira uma das engrenagens de 24 usando as engrenagens cônicas (12 e 20) para mudar a direção em 90 graus.",
    "O ultrassônico fica entre os dedos da garra. O sensor de cor fica embaixo, olhando o chão."
  ],
  "programa": [
    "Abra a garra.",
    "Ande até o ultrassônico medir menos de 5 cm.",
    "Feche a garra com o motor médio (potência baixa).",
    "Gire 180 graus e ande até o sensor de cor ver a base (fita azul).",
    "Abra a garra, dê ré e mostre 'Missão cumprida' na tela do Brick."
  ],
  "variacoes": [
    "Separe objetos: vermelhos para uma base, azuis para outra.",
    "Use o giroscópio para voltar pelo mesmo caminho.",
    "Troque a garra por uma pá que empurra."
  ],
  "desafio": "Leve 3 objetos para a base em menos de 3 minutos.",
  "pergunta": "Que trabalhos perigosos um robô com garra pode fazer no lugar das pessoas?"
},
{
  "id": "ev3-seguidor",
  "kit": "ev3",
  "titulo": "Seguidor de linha",
  "nivel": 2,
  "tempo": 50,
  "tags": [
    "veículo",
    "sensor de cor",
    "linha"
  ],
  "resumo": "Um robô que segue uma fita preta no chão.",
  "aprende": "Corrigir o caminho o tempo todo com a luz refletida.",
  "pecas": [
    [
      "Pino com atrito",
      22
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
      "Eixo 6",
      2
    ],
    [
      "Eixo 12",
      1
    ],
    [
      "Bucha",
      2
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
      "Cabo 25 cm EV3",
      3
    ]
  ],
  "passos": [
    "Base: os dois motores grandes (B e C) lado a lado, o Brick em cima e o rodízio de bola atrás.",
    "Rodas: eixo de 6 e roda encostada no motor.",
    "Na frente do Brick: uma viga de 15 em pé de cada lado.",
    "Embaixo: eixo de 12 com o sensor de cor (porta 3) olhando para o chão, a 0,8 cm. Duas buchas seguram o sensor no meio.",
    "Faça a pista com fita isolante preta em papel ou piso claro."
  ],
  "programa": [
    "Use o modo 'luz refletida' do sensor de cor (0 a 100).",
    "Repita para sempre:",
    "  Se a luz for menor que 40 (preto): vire para a direita.",
    "  Senão (branco): vire para a esquerda."
  ],
  "variacoes": [
    "Correção proporcional: quanto mais longe da borda, mais forte a curva.",
    "Pare 3 segundos num quadrado verde.",
    "Adicione o ultrassônico para parar antes de um obstáculo na pista."
  ],
  "desafio": "Complete a pista com uma curva fechada no menor tempo.",
  "pergunta": "Por que o número 40? Como descobrir o melhor valor para a nossa pista?"
},
{
  "id": "ev3-separador-esteira",
  "kit": "ev3",
  "titulo": "Separador de moedas com esteira",
  "nivel": 3,
  "tempo": 100,
  "tags": [
    "educação financeira",
    "esteira",
    "sensor de cor"
  ],
  "resumo": "Uma esteira leva peças coloridas (as moedas), o sensor lê a cor e um braço empurra cada uma para o lado certo. A tela mostra o total.",
  "aprende": "Automação de fábrica: transportar, identificar e separar. E somar o valor com variáveis.",
  "pecas": [
    [
      "Elo de esteira",
      40
    ],
    [
      "Roda dentada de esteira",
      2
    ],
    [
      "Viga 15 furos",
      4
    ],
    [
      "Viga 9 furos",
      2
    ],
    [
      "Viga 7 furos",
      2
    ],
    [
      "Eixo 7",
      2
    ],
    [
      "Bucha",
      4
    ],
    [
      "Pino com atrito",
      30
    ],
    [
      "Viga em L 3x5",
      2
    ],
    [
      "Eixo 3",
      2
    ]
  ],
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
      1
    ],
    [
      "Motor médio EV3",
      1
    ],
    [
      "Sensor de cor EV3",
      1
    ],
    [
      "Sensor de toque EV3",
      1
    ],
    [
      "Cabo 25 cm EV3",
      2
    ],
    [
      "Cabo 35 cm EV3",
      2
    ]
  ],
  "passos": [
    "Monte uma estrutura comprida com as vigas de 15 furos.",
    "Coloque uma roda dentada em cada ponta e passe a esteira de elos em volta.",
    "O motor grande gira uma das rodas dentadas: a esteira anda.",
    "No meio do caminho, prenda o sensor de cor olhando para baixo.",
    "Depois do sensor, o motor médio gira um braço (viga de 7 furos) que empurra a moeda para fora.",
    "O sensor de toque liga e desliga a máquina."
  ],
  "programa": [
    "Crie a variável 'total' = 0.",
    "Ligue a esteira devagar.",
    "Quando o sensor ver vermelho: some 5, espere a peça chegar no braço e empurre.",
    "Quando ver amarelo: some 1 e deixe passar até o fim.",
    "Mostre o total na tela do Brick."
  ],
  "variacoes": [
    "Meta de poupança: ao chegar em 50, a máquina para e toca um som.",
    "Moeda falsa (cor desconhecida): a máquina para e mostra um alerta.",
    "Conte também quantas moedas de cada tipo passaram."
  ],
  "desafio": "Separe 10 moedas misturadas sem nenhum erro.",
  "pergunta": "Como os bancos e os caixas eletrônicos contam e conferem o dinheiro?"
},
{
  "id": "ev3-catapulta",
  "kit": "ev3",
  "titulo": "Catapulta com redução",
  "nivel": 1,
  "tempo": 50,
  "tags": [
    "catapulta",
    "engrenagens",
    "alavanca"
  ],
  "resumo": "Uma catapulta que usa engrenagens para ter força e um botão de disparo.",
  "aprende": "Engrenagem de 8 dentes girando a de 40 dá 5 vezes mais força.",
  "pecas": [
    [
      "Viga 15 furos",
      1
    ],
    [
      "Viga 9 furos",
      2
    ],
    [
      "Viga em T 3x3",
      2
    ],
    [
      "Engrenagem 8 dentes",
      1
    ],
    [
      "Engrenagem 40 dentes",
      1
    ],
    [
      "Eixo 7",
      2
    ],
    [
      "Bucha",
      4
    ],
    [
      "Pino com atrito",
      16
    ],
    [
      "Viga triângulo",
      2
    ]
  ],
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
      1
    ],
    [
      "Sensor de toque EV3",
      1
    ],
    [
      "Cabo 25 cm EV3",
      1
    ],
    [
      "Cabo 35 cm EV3",
      1
    ]
  ],
  "passos": [
    "O Brick fica deitado como base pesada.",
    "Monte dois apoios com vigas de 9 furos e vigas em T.",
    "O motor grande gira a engrenagem de 8, que gira a de 40 no eixo do braço.",
    "O braço é a viga de 15 furos. Na ponta, duas vigas triângulo fazem a 'colher'.",
    "O sensor de toque é o gatilho."
  ],
  "programa": [
    "Quando o sensor de toque for apertado: conte 3, 2, 1 na tela.",
    "Gire o motor rápido (100%) por um quarto de volta da engrenagem grande.",
    "Volte devagar para a posição inicial."
  ],
  "variacoes": [
    "Sem redução (motor direto no braço): lança mais longe ou mais perto?",
    "Mude a velocidade do motor e anote a distância de cada lançamento.",
    "Dois botões: um para lançamento fraco, outro para forte."
  ],
  "desafio": "Acerte uma bolinha de papel num copo a 1 metro.",
  "pergunta": "Mais força ou mais velocidade: o que faz a bolinha ir mais longe?"
},
{
  "id": "ev3-ponte",
  "kit": "ev3",
  "titulo": "Ponte levadiça",
  "nivel": 2,
  "tempo": 50,
  "tags": [
    "ponte",
    "rosca sem-fim",
    "sensor ultrassônico"
  ],
  "resumo": "Uma ponte que levanta sozinha quando um barco chega e abaixa depois que ele passa.",
  "aprende": "Rosca sem-fim segura a ponte levantada sem gastar energia. Sensor de toque como fim de curso.",
  "pecas": [
    [
      "Viga 15 furos",
      4
    ],
    [
      "Viga 13 furos",
      2
    ],
    [
      "Quadro 5x7",
      2
    ],
    [
      "Rosca sem-fim",
      1
    ],
    [
      "Engrenagem 24 dentes",
      1
    ],
    [
      "Eixo 7",
      2
    ],
    [
      "Eixo 5",
      1
    ],
    [
      "Bucha",
      4
    ],
    [
      "Pino com atrito",
      24
    ],
    [
      "Conector perpendicular 3 furos",
      4
    ]
  ],
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
      1
    ],
    [
      "Cabo 35 cm EV3",
      1
    ],
    [
      "Cabo 50 cm EV3",
      1
    ]
  ],
  "passos": [
    "Monte duas torres com os quadros 5x7.",
    "O tabuleiro da ponte são as vigas de 15 furos, presas num eixo que gira numa das torres.",
    "Nesse eixo vai a engrenagem de 24. O motor grande gira a rosca sem-fim, que gira a engrenagem.",
    "O ultrassônico fica na margem do 'rio', olhando para onde o barco vem.",
    "O sensor de toque fica embaixo do tabuleiro: ele avisa quando a ponte está abaixada."
  ],
  "programa": [
    "Espere o ultrassônico ver um barco a menos de 15 cm.",
    "Mostre 'ATENÇÃO' na tela e levante a ponte (motor um número fixo de voltas).",
    "Espere o barco passar (distância maior que 30 cm).",
    "Abaixe a ponte até o sensor de toque ser apertado."
  ],
  "variacoes": [
    "Acenda a luz do Brick em vermelho enquanto a ponte está levantada.",
    "Conte quantos barcos passaram no dia.",
    "Faça uma ponte de duas partes que se abrem para os dois lados."
  ],
  "desafio": "Levante a ponte em menos de 5 segundos sem que ela trema.",
  "pergunta": "Por que a ponte não cai quando o motor desliga no meio do caminho?"
},
{
  "id": "ev3-medidor",
  "kit": "ev3",
  "titulo": "Robô que mede a sala",
  "nivel": 2,
  "tempo": 50,
  "tags": [
    "matemática",
    "medida",
    "rotações"
  ],
  "resumo": "O robô anda até a parede, conta as voltas da roda e calcula a distância em centímetros.",
  "aprende": "Perímetro do círculo: cada volta da roda anda cerca de 17,6 cm (roda de 5,6 cm x 3,14).",
  "pecas": [
    [
      "Pino com atrito",
      24
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
      1
    ],
    [
      "Bucha",
      2
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
      "Junta esférica de direção (encaixe)",
      1
    ],
    [
      "Bola de aço 18 mm (rodízio)",
      1
    ]
  ],
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
      "Sensor ultrassônico EV3",
      1
    ],
    [
      "Sensor de toque EV3",
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
  "passos": [
    "Base: os dois motores grandes (B e C) lado a lado, o Brick em cima e o rodízio de bola atrás.",
    "Rodas: eixo de 6 e roda encostada no motor.",
    "Na frente do Brick: uma viga de 15 em pé de cada lado.",
    "No alto: o ultrassônico (porta 4) num eixo de 12, olhando para frente.",
    "Atrás: o sensor de toque (porta 1) com o botão para cima. É o botão de início."
  ],
  "programa": [
    "Quando o toque for apertado: zere o contador de rotações do motor B.",
    "Ande até o ultrassônico medir menos de 5 cm.",
    "Calcule distância = rotações x 17,6 e mostre em cm na tela.",
    "Confira com uma fita métrica."
  ],
  "variacoes": [
    "Meça o comprimento e a largura e calcule a área da sala.",
    "Some a distância do ultrassônico (os últimos 5 cm) para ficar mais exato.",
    "Troque o pneu e descubra o novo valor de cada volta."
  ],
  "desafio": "Erre menos de 5 cm na medida do corredor.",
  "pergunta": "Por que a medida do robô e da fita métrica não dão exatamente iguais?"
},
{
  "id": "ev3-cofre",
  "kit": "ev3",
  "titulo": "Cofre com senha",
  "nivel": 1,
  "tempo": 50,
  "tags": [
    "educação financeira",
    "senha",
    "sensor de toque"
  ],
  "resumo": "Um cofre que só destrava quando os dois botões são apertados na sequência certa.",
  "aprende": "Senha é uma sequência. O programa guarda o que foi apertado e compara.",
  "pecas": [
    [
      "Viga 15 furos",
      4
    ],
    [
      "Viga 11 furos",
      4
    ],
    [
      "Quadro 5x7",
      3
    ],
    [
      "Viga 7 furos",
      1
    ],
    [
      "Eixo 3",
      1
    ],
    [
      "Pino com atrito",
      30
    ],
    [
      "Pino longo com atrito",
      6
    ],
    [
      "Painel curvo (carenagem)",
      4
    ]
  ],
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
      "Motor médio EV3",
      1
    ],
    [
      "Sensor de toque EV3",
      2
    ],
    [
      "Cabo 25 cm EV3",
      2
    ],
    [
      "Cabo 35 cm EV3",
      1
    ]
  ],
  "passos": [
    "Monte uma caixa com os quadros 5x7 e as vigas.",
    "A tampa é presa com pinos sem atrito para abrir como porta.",
    "O motor médio gira uma trava (viga de 7 furos) que segura a tampa.",
    "Os dois sensores de toque ficam na frente: botão 1 e botão 2."
  ],
  "programa": [
    "Senha: 1, 1, 2 (botão 1 duas vezes e depois o botão 2).",
    "Guarde cada botão apertado numa variável e compare com a senha.",
    "Se acertar: gire a trava, mostre 'ABERTO' e toque um som.",
    "Se errar 3 vezes: mostre 'BLOQUEADO' por 30 segundos."
  ],
  "variacoes": [
    "Senha mais longa, de 5 toques.",
    "Use os botões do Brick para trocar a senha.",
    "Mostre na tela quanto dinheiro está guardado e quanto falta para a meta."
  ],
  "desafio": "Outra equipe tenta descobrir a senha. Quantas tentativas ela precisa?",
  "pergunta": "Por que senhas longas são mais seguras? Que senha NÃO devemos usar?"
}
]);
