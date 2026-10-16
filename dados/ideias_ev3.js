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
  "resumo": "Um guindaste: a torre gira em cima do motor grande e o braço sobe e desce com uma rosca sem-fim, devagar e com precisão.",
  "aprende": "Rosca sem-fim: cada volta dela empurra só um dente da engrenagem (24 voltas do motor = 1 volta da engrenagem de 24). Gira devagar, com muita força, e trava sozinha: o braço não cai quando o motor para.",
  "pecas": [
    [
      "Pino com atrito",
      2
    ],
    [
      "Eixo 5",
      1
    ],
    [
      "Conector perpendicular 3 furos",
      4
    ],
    [
      "Viga 3 furos",
      1
    ],
    [
      "Engrenagem 24 dentes",
      1
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
      "Eixo 10",
      1
    ],
    [
      "Viga 13 furos",
      4
    ],
    [
      "Eixo 7",
      2
    ],
    [
      "Rosca sem-fim",
      1
    ],
    [
      "Eixo 9",
      1
    ],
    [
      "Pino longo com atrito",
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
    "Deite o motor grande de lado na mesa, com a saída (laranja) para cima: ele é a base e gira a torre.",
    "Torre: um eixo de 12 em pé na saída do motor e um eixo de 10 atrás, unidos por 2 blocos cruzados. Prenda 2 vigas de 13 em pé nos blocos com pinos longos.",
    "Braço: 2 vigas de 13 deitadas para a frente, presas no eixo de 9 do alto da torre por 2 blocos cruzados e um eixo de 7. Na ponta, outro eixo de 7 é o gancho.",
    "No eixo de 9, à direita, vai a engrenagem de 24. O motor médio fica em pé atrás da torre, com a saída para cima e a rosca sem-fim encostada na engrenagem de 24.",
    "O Brick fica deitado ao lado, com o sensor de toque na lateral: é o botão de comando.",
    "Por que não a mesa giratória? A rosca só encaixa nos dentes dela a 2,25 furos do centro, fora da grade das peças."
  ],
  "programa": [
    "Quando o sensor de toque for apertado: o motor médio levanta o braço 5 voltas (24 voltas = 1 volta da engrenagem, então 5 voltas sobem uns 75 graus).",
    "O motor grande gira a torre devagar (velocidade 15%) 90 graus.",
    "O braço abaixa (motor médio -5 voltas) e a torre volta (-90 graus).",
    "Experimente: quantas voltas do motor médio fazem o braço subir 45 graus? (Dica: 24 voltas = 360 graus.)"
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
      "Pino com atrito",
      24
    ],
    [
      "Eixo 5",
      2
    ],
    [
      "Viga 15 furos",
      4
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
      "Eixo 8",
      2
    ],
    [
      "Eixo 12",
      1
    ],
    [
      "Bucha",
      4
    ],
    [
      "Viga 9 furos",
      4
    ],
    [
      "Roda dentada de esteira",
      4
    ],
    [
      "Pino longo com atrito",
      4
    ],
    [
      "Elo de esteira",
      52
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
    "Monte a base do Explorador (2 motores grandes lado a lado, vigas de 11 atrás e o Brick em cima), mas sem o rodízio e sem as rodas.",
    "Em cada lado, prenda uma viga de 15 deitada por fora do motor, indo para trás.",
    "Rodas dentadas: a da frente vai no eixo de 8 do motor (ela puxa a esteira); a de trás fica solta, num eixo de 5 no último furo da viga de 15.",
    "Monte cada esteira com 26 elos e passe em volta das duas rodas dentadas do mesmo lado.",
    "Prenda o giroscópio deitado e firme embaixo da frente do Brick, num eixo de 12 entre duas vigas de 15 em pé."
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
      "Pino com atrito",
      30
    ],
    [
      "Viga dobrada 11,5 furos",
      1
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
      3
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
      "Eixo 7",
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
    "Monte a base de tração (2 motores grandes, rodas e rodízio) e, na frente do Brick, uma viga de 15 em pé de cada lado.",
    "Por dentro das vigas de 15, prenda duas vigas em L com a perna comprida rente ao chão: são as paredes da gaiola.",
    "O ultrassônico fica baixo, entre as vigas de 15, olhando para a frente. O sensor de cor fica por fora da viga da direita, olhando o chão.",
    "O motor médio fica por fora da viga da direita, com a saída para a frente. Nela vai a porta: uma viga dobrada dupla com uma viga em L embaixo (a travessa).",
    "Porta fechada: a travessa fica na frente da gaiola e o objeto não sai. Porta aberta: ela gira para cima e para a direita.",
    "Por que não uma pinça de 2 dedos? O ultrassônico tem 5,5 cm de largura e só cabe no meio; dedos em volta dele precisariam de 5 engrenagens de 24 em fila, e o kit tem 4. Desafio: monte uma pinça de 2 dedos com 2 engrenagens de 24 e coloque o ultrassônico em outro lugar."
  ],
  "programa": [
    "Abra a porta (motor médio -110 graus).",
    "Ande até o ultrassônico medir menos de 5 cm e ande mais 4 cm: o objeto entra na gaiola.",
    "Feche a porta (motor médio +110 graus, potência baixa).",
    "Gire 180 graus e ande até o sensor de cor ver a base (fita azul).",
    "Abra a porta, dê ré e mostre 'Missão cumprida' na tela do Brick."
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
      "Pino com atrito",
      14
    ],
    [
      "Viga 15 furos",
      3
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
      "Viga 13 furos",
      2
    ],
    [
      "Eixo 7",
      1
    ],
    [
      "Eixo 3",
      1
    ],
    [
      "Roda dentada de esteira",
      2
    ],
    [
      "Eixo 9",
      1
    ],
    [
      "Quadro 5x7",
      2
    ],
    [
      "Viga dobrada 9 furos",
      1
    ],
    [
      "Elo de esteira",
      25
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
    "Pernas: dois quadros 5x7 em pé, um de cada lado. Por cima deles, uma viga de 15 deitada de cada lado: são as laterais da esteira.",
    "Coloque uma roda dentada em cada ponta (12 furos uma da outra) e passe a esteira de 25 elos em volta.",
    "O motor grande fica em pé atrás, à direita, preso numa viga de 15 em pé: ele gira a roda dentada de trás e a esteira anda.",
    "No meio do caminho, o sensor de cor fica em cima da esteira, olhando para baixo, preso numa viga de 13 em pé.",
    "Depois do sensor, o motor médio fica pendurado sobre a borda, com a saída para baixo. Nele vai o braço (uma viga dobrada deitada): girado, ele atravessa a esteira e a moeda escorrega para fora.",
    "O sensor de toque, do lado do quadro da direita, liga e desliga a máquina."
  ],
  "programa": [
    "Crie a variável 'total' = 0.",
    "Quando o sensor de toque for apertado: ligue a esteira devagar (motor grande 20%).",
    "Quando o sensor de cor ver vermelho: some 5 e gire o braço -45 graus (motor médio). Espere a peça cair e volte o braço.",
    "Quando ver amarelo: some 1 e deixe passar até o fim da esteira.",
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
      "Engrenagem 8 dentes",
      1
    ],
    [
      "Pino com atrito",
      12
    ],
    [
      "Eixo 5",
      1
    ],
    [
      "Viga 15 furos",
      2
    ],
    [
      "Viga 7 furos",
      1
    ],
    [
      "Engrenagem 40 dentes",
      1
    ],
    [
      "Eixo 12",
      1
    ],
    [
      "Bucha",
      1
    ],
    [
      "Viga 9 furos",
      1
    ],
    [
      "Pino-eixo com atrito",
      1
    ],
    [
      "Eixo 8 com batente",
      1
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
    "O Brick fica deitado na mesa: ele é a base pesada.",
    "Nos dois lados do Brick, atrás, prenda uma viga em pé com 3 pinos: a de 15 furos na direita e a de 9 na esquerda.",
    "Prenda o motor grande em pé, por fora da viga de 15, com a saída embaixo. Na saída vai um eixo de 5 com a engrenagem de 8 dentes por dentro.",
    "O braço é a viga de 15 furos, deitado para trás. Ele fica preso na engrenagem de 40 por um pino-eixo e gira num eixo de 12 que atravessa as duas vigas em pé. A de 40 fica 3 furos acima da de 8.",
    "Na ponta do braço, duas vigas triângulo (uma de cada lado, ponta para cima) fazem a 'colher'.",
    "O sensor de toque é o gatilho: fica na frente, com o botão para cima."
  ],
  "programa": [
    "Quando o sensor de toque for apertado: conte 3, 2, 1 na tela.",
    "Gire o motor rápido (100%) por um quarto de volta da engrenagem grande: são 450 graus do motor (1 volta e um quarto), porque a de 8 gira 5 vezes mais.",
    "Volte devagar (20%) os mesmos 450 graus, para a posição inicial."
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
  "aprende": "Rosca sem-fim: cada volta dela empurra só um dente da engrenagem de 40 (40 voltas do motor = 1 volta da engrenagem) e ela segura a ponte levantada sem gastar energia.",
  "pecas": [
    [
      "Pino com atrito",
      6
    ],
    [
      "Conector perpendicular 3 furos",
      2
    ],
    [
      "Viga 15 furos",
      2
    ],
    [
      "Viga 11 furos",
      1
    ],
    [
      "Engrenagem 40 dentes",
      1
    ],
    [
      "Eixo 12",
      2
    ],
    [
      "Bucha",
      3
    ],
    [
      "Eixo 10",
      1
    ],
    [
      "Eixo 7",
      1
    ],
    [
      "Rosca sem-fim",
      1
    ],
    [
      "Quadro 5x7",
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
    "Monte a torre com dois quadros 5x7 em pé, unidos atrás por uma viga de 11.",
    "O tabuleiro são duas vigas de 15 deitadas para a frente. Dois blocos cruzados e um eixo de 7 prendem as vigas no eixo de 12 do alto da torre: o tabuleiro gira junto com esse eixo.",
    "No eixo de 12, por fora da torre, vai a engrenagem de 40. Embaixo dela fica a rosca sem-fim, num eixo de 10 que vem do motor grande, deitado atrás da torre.",
    "O ultrassônico fica embaixo do tabuleiro, olhando para o rio (para onde o barco vem).",
    "O sensor de toque fica do lado da torre: é o botão manual do operador.",
    "O Brick fica deitado ao lado, ligado pelos cabos."
  ],
  "programa": [
    "Espere o ultrassônico ver um barco a menos de 15 cm.",
    "Mostre 'ATENÇÃO' na tela e levante a ponte: motor 8 voltas (a ponte sobe uns 70 graus, porque 40 voltas do motor dão 1 volta da engrenagem).",
    "Espere o barco passar (distância maior que 30 cm).",
    "Abaixe a ponte: motor -8 voltas (a rosca segura a ponte, então ela volta para o mesmo lugar).",
    "Botão manual: se o sensor de toque for apertado, levante ou abaixe a ponte do mesmo jeito."
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
      "Pino com atrito",
      17
    ],
    [
      "Meia bucha",
      2
    ],
    [
      "Viga 5 furos",
      4
    ],
    [
      "Viga 3 furos",
      1
    ],
    [
      "Viga 7 furos",
      3
    ],
    [
      "Eixo 8",
      1
    ],
    [
      "Bucha",
      1
    ],
    [
      "Eixo 3",
      1
    ],
    [
      "Quadro 5x7",
      3
    ],
    [
      "Pino longo com atrito",
      2
    ],
    [
      "Viga triângulo",
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
    "Monte a caixa: dois quadros 5x7 em pé (paredes), um quadro 5x7 deitado em cima (teto) e duas vigas de 7 atrás (fundo).",
    "A porta são 4 vigas de 5 deitadas, uma em cima da outra, presas com pinos. Ela gira num eixo de 8 em pé (a dobradiça), preso no alto numa viga de 7 sobre o teto.",
    "O motor médio fica por fora da parede direita, com a saída para a frente. Nela vai uma viga triângulo: deitada na frente da porta, ela tranca; girada 90 graus para cima, ela solta.",
    "Os dois sensores de toque ficam na parede esquerda, um em cima do outro, com os botões para a frente: botão 1 (em cima) e botão 2 (embaixo).",
    "O Brick fica deitado ao lado do cofre, ligado pelos cabos."
  ],
  "programa": [
    "Senha: 1, 1, 2 (botão 1 duas vezes e depois o botão 2).",
    "Guarde cada botão apertado numa variável e compare com a senha.",
    "Se acertar: gire a trava 90 graus para cima com o motor médio, mostre 'ABERTO' e toque um som. Para trancar de novo, gire -90 graus.",
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
