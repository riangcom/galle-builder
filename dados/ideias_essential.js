// Banco de ideias: SPIKE Essential (45345). Hub pequeno = só 2 portas. O kit não tem engrenagens:
// os mecanismos usam polias, elásticos e o motor girando direto.
window.IDEIAS = (window.IDEIAS || []).concat([
{
  "id": "essential-corrida",
  "kit": "essential",
  "titulo": "Carrinho de corrida",
  "nivel": 1,
  "tempo": 50,
  "tags": [
    "veículo",
    "velocidade"
  ],
  "resumo": "Um carrinho com dois motores, um em cada roda, que corre e faz curvas.",
  "aprende": "Para virar, uma roda gira mais rápido que a outra.",
  "pecas": [
    [
      "Viga 7 furos",
      3
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
      16
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
      "Bateria recarregável SPIKE (hub pequeno)",
      1
    ],
    [
      "Motor pequeno SPIKE",
      2
    ]
  ],
  "passos": [
    "Motores pequenos deitados, costas com costas, presos um no outro com 3 pinos.",
    "Duas vigas de 7 atravessadas em cima e o hub pequeno (com a bateria) em cima delas.",
    "Rodas grandes direto na saída de cada motor, com eixo de 3.",
    "Na frente: viga de 7 em pé e duas vigas conectoras 3x3. Elas deslizam no chão como apoio.",
    "Decore com as placas lisas por cima, sem cobrir os botões do hub. É o mesmo robô do 'treino' do Essential (montagem 3D abaixo)."
  ],
  "programa": [
    "Ligue os dois motores na mesma velocidade: o carro anda reto.",
    "Deixe um motor mais lento: o carro faz curva.",
    "Gire um motor para frente e outro para trás: o carro gira no lugar."
  ],
  "variacoes": [
    "Desenhe um oito no chão com giz e tente fazer o carro andar em cima.",
    "Corrida contra o tempo: quem chega primeiro na linha de chegada?",
    "Troque as rodas grandes pelas rodas da cadeira de rodas: o que muda?"
  ],
  "desafio": "Faça o carro dar uma volta completa em um cone e voltar ao início.",
  "pergunta": "Por que um carro de verdade precisa fazer as rodas girarem diferente na curva?",
  "modelo3d": "fira-essential-treino"
},
{
  "id": "essential-carrossel",
  "kit": "essential",
  "titulo": "Carrossel com luzes",
  "nivel": 1,
  "tempo": 50,
  "tags": [
    "parque",
    "luz",
    "giro"
  ],
  "resumo": "Um carrossel que gira com bichinhos e acende luzes coloridas.",
  "aprende": "Motor girando um eixo central e luzes avisando o que está acontecendo.",
  "pecas": [
    [
      "Tijolo 1x4",
      1
    ],
    [
      "Caranguejo",
      1
    ],
    [
      "Sapo",
      1
    ],
    [
      "Tijolo Technic 1x4",
      5
    ],
    [
      "Eixo 6",
      1
    ],
    [
      "Tijolo redondo",
      1
    ],
    [
      "Cone",
      2
    ],
    [
      "Placa 8x8",
      1
    ],
    [
      "Pino com atrito",
      6
    ],
    [
      "Placa 16x16",
      1
    ],
    [
      "Assento",
      4
    ],
    [
      "Cachorro",
      1
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
      1
    ],
    [
      "Matriz de luz 3x3 SPIKE",
      1
    ]
  ],
  "passos": [
    "Use a placa 16x16 como chão do parque.",
    "No meio, prenda um tijolo Technic 1x4 de cada lado e o motor pequeno em pé entre eles, com 2 pinos. A saída do motor fica para cima.",
    "Encaixe o eixo de 6 no motor. Ponha o tijolo redondo 2x2 no eixo e a placa 8x8 em cima dele: ela é o disco que gira.",
    "Coloque o sapo, o caranguejo, os cones, os assentos e o cachorro no disco, bem encaixados nos pinos.",
    "Na frente, prenda o tijolo Technic 1x4 em cima de um tijolo 1x4 e encaixe o hub no lado dele com 2 pinos (a bateria vai embaixo do hub).",
    "No fundo, à esquerda, monte a torre da luz: dois tijolos Technic 1x4 empilhados com a matriz de luz presa por 2 pinos. Gire o disco com a mão: ele dá a volta inteira sem bater."
  ],
  "programa": [
    "Quando o programa começar: a matriz mostra verde.",
    "O motor gira devagar por 10 segundos.",
    "A matriz mostra amarelo e o motor para devagar.",
    "A matriz mostra vermelho: hora de descer."
  ],
  "variacoes": [
    "Toque uma música no hub enquanto o carrossel gira.",
    "Gire para um lado e depois para o outro.",
    "Desenhe uma seta na matriz mostrando o sentido do giro."
  ],
  "desafio": "Faça o carrossel girar devagar sem que nenhum bichinho caia.",
  "pergunta": "Por que o carrossel precisa parar devagar e não de uma vez?"
},
{
  "id": "essential-semaforo",
  "kit": "essential",
  "titulo": "Semáforo com cancela",
  "nivel": 1,
  "tempo": 50,
  "tags": [
    "trânsito",
    "luz",
    "sequência"
  ],
  "resumo": "Um semáforo que troca de cor e uma cancela que só abre no verde.",
  "aprende": "Sequência e tempo: cada passo do programa acontece na ordem certa.",
  "pecas": [
    [
      "Tijolo 1x4",
      1
    ],
    [
      "Tijolo Technic 1x2 com furo de eixo e pino",
      1
    ],
    [
      "Tijolo Technic 1x4",
      5
    ],
    [
      "Eixo 4",
      1
    ],
    [
      "Tijolo Technic 1x12",
      1
    ],
    [
      "Pino com atrito",
      6
    ],
    [
      "Placa 8x16",
      1
    ],
    [
      "Torre treliça",
      1
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
      "Matriz de luz 3x3 SPIKE",
      1
    ],
    [
      "Motor pequeno SPIKE",
      1
    ]
  ],
  "passos": [
    "Ponha a placa 8x16 deitada. No canto de trás à esquerda prenda a torre treliça: é o poste. No alto dela encaixe dois tijolos Technic 1x4 empilhados.",
    "Na frente, prenda o tijolo Technic 1x4 em cima de um tijolo 1x4, no lado direito. Encaixe o hub no lado dele com 2 pinos (a bateria vai embaixo do hub).",
    "Prenda a matriz de luz no tijolo do alto do poste com 2 pinos, olhando para a frente. Ela é a luz do semáforo.",
    "À direita monte o pilar da cancela: dois tijolos Technic 1x4 empilhados. Atrás dele prenda o motor pequeno em pé, com a saída encostada no pilar, usando 2 pinos.",
    "Passe o eixo de 4 pelo pilar. Na frente, ponha o tijolo Technic 1x2 com furo de eixo no eixo e, por cima dele, a cancela (tijolo Technic 1x12) deitada sobre a rua.",
    "Gire o eixo com a mão: a cancela sobe até ficar em pé (cerca de 120 graus) sem bater."
  ],
  "programa": [
    "Repita para sempre:",
    "  Matriz vermelha, cancela abaixada, espere 5 segundos.",
    "  Matriz verde, levante a cancela 90 graus, espere 5 segundos.",
    "  Matriz amarela, espere 2 segundos e abaixe a cancela."
  ],
  "variacoes": [
    "Desenhe um bonequinho andando na matriz quando for a vez do pedestre.",
    "Faça uma contagem regressiva com as luzes apagando uma a uma.",
    "Troque o motor pelo sensor de cor: um 'cartão' azul chama o verde mais cedo."
  ],
  "desafio": "Monte um cruzamento com outra equipe: os dois semáforos nunca podem ficar verdes juntos.",
  "pergunta": "O que aconteceria se o semáforo não tivesse a luz amarela?"
},
{
  "id": "essential-portao-cartao",
  "kit": "essential",
  "titulo": "Portão que abre com cartão",
  "nivel": 2,
  "tempo": 50,
  "tags": [
    "educação financeira",
    "sensor de cor",
    "segurança"
  ],
  "resumo": "Um portão que só abre com o cartão da cor certa, como um cartão de acesso ou de pagamento.",
  "aprende": "Usar o sensor de cor para conferir uma 'senha' de cor.",
  "pecas": [
    [
      "Tijolo 1x4",
      1
    ],
    [
      "Tijolo Technic 1x2 com furo de eixo e pino",
      1
    ],
    [
      "Tijolo Technic 1x4",
      5
    ],
    [
      "Tijolo Technic 1x8",
      1
    ],
    [
      "Eixo 4",
      1
    ],
    [
      "Pino com atrito",
      6
    ],
    [
      "Placa lisa 2x4",
      4
    ],
    [
      "Placa 8x16",
      1
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
      "Sensor de cor SPIKE",
      1
    ],
    [
      "Motor pequeno SPIKE",
      1
    ]
  ],
  "passos": [
    "Ponha a placa 8x16 deitada. Ao fundo monte o muro: dois pilares de tijolos Technic 1x4, com 2 camadas cada, e um vão no meio.",
    "Na frente, prenda o tijolo Technic 1x4 em cima de um tijolo 1x4, no lado direito. Encaixe o hub no lado dele com 2 pinos (a bateria vai embaixo do hub).",
    "No pilar esquerdo prenda o sensor de cor com 2 pinos, olhando para a frente. É nele que o cartão encosta.",
    "Atrás do pilar direito prenda o motor pequeno em pé, com a saída encostada no pilar, usando 2 pinos. Ele fica pendurado para fora da placa.",
    "Passe o eixo de 4 pelo pilar, do motor até a frente. Ponha o tijolo Technic 1x2 com furo de eixo no eixo e, por cima dele, o portão (tijolo Technic 1x8) deitado sobre o vão.",
    "Separe os 4 cartões (placas lisas 2x4 de cores diferentes). Gire o eixo com a mão: o portão sobe até ficar em pé (cerca de 120 graus) sem bater; para baixo ele não pode passar da horizontal."
  ],
  "programa": [
    "Espere o sensor ver uma cor.",
    "Se for azul (o cartão certo): abra o portão (o motor gira 90 graus para ele subir), espere 3 segundos e feche (volte a 0 grau).",
    "Se for outra cor: o hub toca um som de erro e o portão continua fechado."
  ],
  "variacoes": [
    "Cartão com saldo: cada passagem gasta 1, e com saldo zero o portão não abre.",
    "Duas cores em sequência (azul e depois amarelo) para abrir.",
    "Conte quantas pessoas entraram."
  ],
  "desafio": "Crie um cartão de 'visitante' que só funciona 2 vezes.",
  "pergunta": "Que cuidados a gente precisa ter com cartões e senhas de verdade?"
},
{
  "id": "essential-ventilador-polia",
  "kit": "essential",
  "titulo": "Ventilador com polia",
  "nivel": 1,
  "tempo": 50,
  "tags": [
    "polia",
    "elástico",
    "ventilador"
  ],
  "resumo": "O motor fica embaixo e um elástico leva o movimento até a hélice lá em cima.",
  "aprende": "Polia e elástico passam o giro de um eixo para outro, longe dele.",
  "pecas": [
    [
      "Tijolo 1x4",
      1
    ],
    [
      "Tijolo Technic 1x2 com furo de eixo e pino",
      1
    ],
    [
      "Tijolo Technic 1x4",
      1
    ],
    [
      "Tijolo Technic 1x8",
      5
    ],
    [
      "Eixo 4",
      1
    ],
    [
      "Tijolo Technic 1x12",
      2
    ],
    [
      "Polia",
      2
    ],
    [
      "Eixo 3",
      1
    ],
    [
      "Pino com atrito",
      4
    ],
    [
      "Placa 8x16",
      1
    ],
    [
      "Elástico 33 mm",
      1
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
      1
    ]
  ],
  "passos": [
    "Ponha a placa 8x16 deitada. Ao fundo monte a torre: 4 camadas de tijolos Technic 1x8 e, por cima, 2 camadas de tijolos Technic 1x12.",
    "Na frente, prenda o tijolo Technic 1x4 em cima de um tijolo 1x4, no lado direito. Encaixe o hub no lado dele com 2 pinos (a bateria vai embaixo do hub).",
    "Atrás da torre prenda o motor pequeno em pé, na 2ª camada, com 2 pinos. Passe o eixo de 4 pelo furo do meio e ponha uma polia nele, na frente da torre.",
    "Na 6ª camada (a de cima) passe o eixo de 3 pelo furo do meio e ponha a outra polia na frente da torre. Ligue as duas polias com o elástico.",
    "A hélice: tijolo Technic 1x2 com furo de eixo no eixo de cima e, por cima dele, um tijolo Technic 1x8. Gire com a mão: a hélice dá a volta inteira sem bater."
  ],
  "programa": [
    "Ligue o motor na velocidade máxima por 10 segundos.",
    "Depois faça o ventilador ir mais devagar e parar."
  ],
  "variacoes": [
    "Cruze o elástico em forma de 8: a hélice passa a girar para o outro lado!",
    "Coloque um pneu na polia de cima: o elástico escorrega menos?",
    "Use o sensor de cor: cartão vermelho = rápido, azul = devagar."
  ],
  "desafio": "Faça um papel pendurado balançar a 30 cm de distância.",
  "pergunta": "Onde existem polias e correias de verdade? (bicicleta, motor do carro, máquina de lavar)"
},
{
  "id": "essential-sapo",
  "kit": "essential",
  "titulo": "Sapo que pula",
  "nivel": 2,
  "tempo": 50,
  "tags": [
    "animal robô",
    "alavanca",
    "movimento"
  ],
  "resumo": "Um sapo que levanta o corpo e dá um pulinho para frente.",
  "aprende": "O motor girando uma alavanca pode empurrar o corpo para cima.",
  "pecas": [
    [
      "Tijolo Technic 1x2 com furo de eixo e pino",
      2
    ],
    [
      "Viga 7 furos",
      3
    ],
    [
      "Tijolo Technic 1x8",
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
      16
    ],
    [
      "Placa lisa redonda com desenho (olho)",
      2
    ],
    [
      "Tijolo curvo",
      6
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
  "passos": [
    "Prenda os dois motores pequenos costas com costas, com a saída de cada um virada para fora, usando 3 pinos.",
    "Ponha duas vigas de 7 deitadas em cima dos motores e o hub em cima delas, com 3 pinos (a bateria vai embaixo do hub). O hub é o corpo do sapo.",
    "Na frente prenda a viga de 7 em pé e as duas vigas conectoras: são as patas da frente, paradas.",
    "Atrás, em cada motor, ponha o eixo de 3, o tijolo Technic 1x2 com furo de eixo e, em cima dele, um tijolo Technic 1x8 apontando para trás: são as pernas.",
    "Decore com os tijolos curvos e os olhos. Gire as pernas com a mão: elas dão a volta inteira sem bater no corpo; quando passam por baixo, empurram o chão e o sapo levanta."
  ],
  "programa": [
    "Os dois motores giram juntos, rápido, meia volta para baixo: o sapo levanta.",
    "Os motores voltam devagar.",
    "Repita 5 vezes para o sapo ir pulando para frente."
  ],
  "variacoes": [
    "Gire só um motor: o sapo vira para o lado.",
    "Mude o comprimento das pernas e meça quanto ele anda em 5 pulos.",
    "Troque um motor pela matriz de luz e faça o sapo piscar a cada pulo."
  ],
  "desafio": "Faça o sapo chegar até a 'lagoa' (uma folha azul) a 50 cm.",
  "pergunta": "Por que as pernas de trás dos sapos de verdade são maiores?"
},
{
  "id": "essential-cofrinho",
  "kit": "essential",
  "titulo": "Cofrinho que conta moedas",
  "nivel": 2,
  "tempo": 50,
  "tags": [
    "educação financeira",
    "sensor de cor",
    "contagem"
  ],
  "resumo": "Cada peça colorida é uma moeda. O cofrinho lê a cor, soma o valor e mostra na luz se chegou na meta.",
  "aprende": "Somar valores com variável e acompanhar uma meta de poupança.",
  "pecas": [
    [
      "Tijolo 1x4",
      5
    ],
    [
      "Tijolo Technic 1x4",
      5
    ],
    [
      "Tijolo redondo",
      1
    ],
    [
      "Placa lisa 1x8",
      2
    ],
    [
      "Pino com atrito",
      6
    ],
    [
      "Placa 8x16",
      1
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
      "Sensor de cor SPIKE",
      1
    ],
    [
      "Matriz de luz 3x3 SPIKE",
      1
    ]
  ],
  "passos": [
    "Ponha a placa 8x16 deitada. Monte a caixa: duas paredes laterais de 3 camadas de tijolos 1x4 (a de baixo é Technic) e, na frente, a parede de 2 tijolos Technic 1x4.",
    "Entre as paredes laterais prenda o sensor de cor, olhando para cima, com 1 pino de cada lado.",
    "Cubra a caixa com as duas peças lisas 1x8, deixando uma fenda no meio: é por ali que a moeda entra e cai em cima do sensor.",
    "À direita, prenda o tijolo Technic 1x4 em cima de um tijolo 1x4 e encaixe o hub no lado dele com 2 pinos (a bateria vai embaixo do hub).",
    "Na parede da frente prenda a matriz de luz com 2 pinos. Use os tijolos redondos coloridos como moedas: a fenda tem a largura exata de uma moeda, então ponha de pé e sem inclinar."
  ],
  "programa": [
    "Crie a variável 'poupança' começando em 0.",
    "Quando o sensor ver amarelo: some 1. Quando ver vermelho: some 5.",
    "A matriz acende uma luz para cada 5 guardados.",
    "Quando chegar em 20: todas as luzes ficam verdes e o hub toca uma música."
  ],
  "variacoes": [
    "Crie uma 'retirada': cor azul tira 5 da poupança.",
    "A meta muda: cada aluno escolhe a sua.",
    "Mostre na luz quanto falta para a meta, e não quanto já tem."
  ],
  "desafio": "Chegue exatamente em 20 usando o menor número de moedas.",
  "pergunta": "Para que você guardaria dinheiro? Quanto tempo levaria para juntar?"
},
{
  "id": "essential-guindaste",
  "kit": "essential",
  "titulo": "Guindaste de obra",
  "nivel": 2,
  "tempo": 50,
  "tags": [
    "guindaste",
    "torre",
    "giro"
  ],
  "resumo": "Uma torre alta com braço que gira e levanta uma carga leve.",
  "aprende": "Estrutura firme (treliça) e contrapeso para a torre não cair.",
  "pecas": [
    [
      "Tijolo 1x4",
      1
    ],
    [
      "Tijolo 2x2",
      2
    ],
    [
      "Tijolo Technic 1x2 com furo de eixo e pino",
      1
    ],
    [
      "Tijolo Technic 1x4",
      3
    ],
    [
      "Tijolo Technic 1x8",
      1
    ],
    [
      "Tijolo Technic 1x16",
      1
    ],
    [
      "Eixo 4",
      1
    ],
    [
      "Tijolo redondo",
      1
    ],
    [
      "Placa 8x8",
      1
    ],
    [
      "Eixo 3",
      1
    ],
    [
      "Pino com atrito",
      6
    ],
    [
      "Placa 16x16",
      1
    ],
    [
      "Torre treliça",
      3
    ],
    [
      "Bola / esfera",
      1
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
  "passos": [
    "Ponha a placa 16x16 deitada. Na frente, prenda o tijolo Technic 1x4 em cima de um tijolo 1x4 e encaixe o hub no lado dele com 2 pinos (a bateria vai embaixo do hub).",
    "No meio da placa empilhe as 3 torres treliça e ponha a placa 8x8 no alto.",
    "No alto da torre prenda dois tijolos Technic 1x4 e, entre eles, o motor do braço em pé, com 2 pinos.",
    "Encaixe o eixo de 3 no motor, o tijolo redondo 2x2 e, por cima dele, o braço (tijolo Technic 1x16). Na ponta da esquerda ponha os 2 tijolos 2x2 de contrapeso.",
    "Na ponta da direita do braço prenda o segundo motor atrás do braço, com 2 pinos nos furos do tijolo.",
    "Passe o eixo de 4 pelo furo do braço. Na frente do braço ponha o tijolo Technic 1x2 com furo de eixo e, por cima dele, a alavanca (tijolo Technic 1x8). A carga (a esfera) fica na ponta da alavanca. Atenção: a alavanca só desce uns 20 graus abaixo da horizontal; mais que isso ela bate na torre."
  ],
  "programa": [
    "O motor do braço gira 90 graus devagar.",
    "O motor da ponta abaixa a alavanca, espera, e levanta.",
    "O braço volta para o lugar inicial."
  ],
  "variacoes": [
    "Tire o contrapeso: o que acontece com a torre?",
    "Faça o guindaste ir para 3 posições diferentes, como 3 andares de uma obra.",
    "Use o sensor de cor no lugar de um motor para escolher a posição com cartões."
  ],
  "desafio": "Leve a carga de um lado para o outro sem a torre balançar.",
  "pergunta": "Por que as torres de verdade são feitas de triângulos?"
},
{
  "id": "essential-limpador",
  "kit": "essential",
  "titulo": "Limpador de para-brisa",
  "nivel": 1,
  "tempo": 50,
  "tags": [
    "carro",
    "vai e vem",
    "posição"
  ],
  "resumo": "Uma palheta que vai e volta, limpando a 'chuva' do vidro.",
  "aprende": "O motor sabe em que ângulo está: dá para mandar ele ir até uma posição e voltar.",
  "pecas": [
    [
      "Placa lisa 1x4",
      1
    ],
    [
      "Tijolo 1x4",
      1
    ],
    [
      "Tijolo Technic 1x2 com furo de eixo e pino",
      1
    ],
    [
      "Tijolo Technic 1x4",
      1
    ],
    [
      "Tijolo Technic 1x8",
      4
    ],
    [
      "Tijolo Technic 1x16",
      2
    ],
    [
      "Eixo 3",
      1
    ],
    [
      "Pino com atrito",
      6
    ],
    [
      "Placa 8x16",
      1
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
      1
    ],
    [
      "Sensor de cor SPIKE",
      1
    ]
  ],
  "passos": [
    "Ponha a placa 8x16 deitada. Ao fundo monte o 'vidro': uma parede de tijolos Technic, duas camadas de tijolo 1x16 e duas de tijolos 1x8 por cima.",
    "Atrás do vidro prenda o motor pequeno em pé, com a saída encostada na parede, usando 2 pinos nos furos do tijolo. Ele fica pendurado para fora da placa.",
    "Na frente, prenda o tijolo Technic 1x4 em cima de um tijolo 1x4, no lado esquerdo. Encaixe o hub no lado dele com 2 pinos (a bateria vai embaixo do hub).",
    "No lado direito do vidro, prenda o sensor de cor com 2 pinos, olhando para a frente. Ele 'sente a chuva'.",
    "Passe o eixo de 3 pelo furo do meio do vidro até o motor. Do outro lado do vidro, ponha o tijolo Technic 1x2 com furo de eixo no eixo e, por cima dele, a palheta (a peça lisa 1x4).",
    "Gire o eixo com a mão: a palheta sobe até ficar para trás sem bater. Ela só não pode descer: abaixo da horizontal ela bate na placa."
  ],
  "programa": [
    "Quando o sensor ver azul (chuva): mova o motor até 90 graus (a palheta sobe) e depois volte para 0 grau (a palheta deita), 5 vezes.",
    "Quando ver branco (sem chuva): pare a palheta deitada, em 0 grau."
  ],
  "variacoes": [
    "Chuva forte (azul escuro) = limpador rápido; chuva fraca = devagar.",
    "Use o botão do hub para ligar e desligar o limpador.",
    "Faça o limpador parar sempre deitado, na posição de descanso."
  ],
  "desafio": "Faça a palheta varrer exatamente de uma ponta à outra do vidro, sem bater.",
  "pergunta": "Que outros aparelhos ligam sozinhos quando percebem alguma coisa?"
},
{
  "id": "essential-carro-faixa",
  "kit": "essential",
  "titulo": "Carro que respeita a faixa",
  "nivel": 3,
  "tempo": 100,
  "tags": [
    "veículo",
    "sensor de cor",
    "trânsito"
  ],
  "resumo": "Um carro com um motor só que anda pela rua e para sozinho na faixa vermelha.",
  "aprende": "Um motor movendo duas rodas pelo mesmo eixo e o sensor de cor lendo o chão.",
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
      "Tijolo Technic 1x2 com furo de eixo e pino",
      2
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
      "Roda 43 x 14 com pneu",
      2
    ],
    [
      "Roda de cadeira de rodas",
      2
    ],
    [
      "Bucha",
      4
    ],
    [
      "Polia",
      2
    ],
    [
      "Elástico 33 mm",
      1
    ],
    [
      "Pino com atrito",
      8
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
      1
    ],
    [
      "Sensor de cor SPIKE",
      1
    ]
  ],
  "passos": [
    "Monte o chassi com as placas Technic e os tijolos Technic 1x8.",
    "Passe o eixo 8 por trás, com uma roda grande em cada ponta e uma polia no meio.",
    "Prenda o motor no chassi com outra polia e ligue as duas com o elástico.",
    "Na frente, o eixo 6 com as rodas de cadeira de rodas, soltas para girar.",
    "Prenda o sensor de cor embaixo, olhando para o chão."
  ],
  "programa": [
    "Ande para frente.",
    "Espere o sensor ver vermelho: pare por 3 segundos.",
    "Ande de novo até sair da faixa e repita."
  ],
  "variacoes": [
    "Amarelo = diminua a velocidade, vermelho = pare.",
    "Conte quantas faixas o carro passou.",
    "Tire o elástico e prenda a roda direto no motor: o que muda na velocidade?"
  ],
  "desafio": "Monte uma rua com 3 faixas e faça o carro parar em todas sem passar do ponto.",
  "pergunta": "Por que o carro não para exatamente em cima da faixa? Como corrigir?"
}
]);
