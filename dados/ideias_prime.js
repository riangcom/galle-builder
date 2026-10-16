// Banco de ideias: SPIKE Prime (45678). Peças conferidas por dados_kits/scripts/validar_ideias.py
window.IDEIAS = (window.IDEIAS || []).concat([
{
  "id": "prime-explorador",
  "kit": "prime",
  "titulo": "Explorador que desvia de obstáculos",
  "nivel": 1,
  "tempo": 50,
  "tags": [
    "veículo",
    "sensor de distância"
  ],
  "resumo": "Um carrinho que anda sozinho e muda de caminho quando encontra uma parede ou uma caixa.",
  "aprende": "Usar um sensor para tomar decisões: SE estiver perto, ENTÃO vire.",
  "pecas": [
    [
      "Eixo 5",
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
      "Bola 19 mm",
      1
    ],
    [
      "Pino com atrito",
      22
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
      "Bateria recarregável SPIKE (hub grande)",
      1
    ],
    [
      "Motor médio SPIKE",
      2
    ],
    [
      "Sensor de distância SPIKE",
      1
    ]
  ],
  "passos": [
    "Base: quadro 11x15 deitado, motores médios embaixo com as rodas grandes, rodízio de bola atrás.",
    "Hub (com a bateria) em cima de duas vigas de 11.",
    "Na frente: duas vigas conectoras 3x3 em pé, presas no quadro.",
    "Sensor de distância no meio da frente, olhando para frente, preso nos furos do meio das vigas conectoras."
  ],
  "programa": [
    "Quando o programa começar: defina os motores das rodas como par de movimento.",
    "Repita para sempre:",
    "  Se o sensor de distância medir menos de 15 cm: pare, ande um pouco para trás e gire para a direita.",
    "  Senão: ande para frente."
  ],
  "variacoes": [
    "Gire para um lado sorteado (direita ou esquerda) em vez de sempre o mesmo.",
    "Mostre uma carinha na matriz do hub: feliz andando, assustada quando vê obstáculo.",
    "Quanto mais perto do obstáculo, mais devagar ele anda (velocidade = distância)."
  ],
  "desafio": "Faça o robô sair de um labirinto feito com estojos e mochilas.",
  "pergunta": "Que robôs de verdade usam sensores para não bater? Como o carro autônomo decide?"
},
{
  "id": "prime-guindaste",
  "kit": "prime",
  "titulo": "Guindaste com braço que sobe e desce",
  "nivel": 2,
  "tempo": 50,
  "tags": [
    "guindaste",
    "engrenagens",
    "redução"
  ],
  "resumo": "Uma torre que gira e um braço que sobe e desce, os dois movidos por engrenagens que ganham força (12 dentes empurrando 36).",
  "aprende": "Redução: a engrenagem pequena (12 dentes) gira a grande (36 dentes) e o movimento fica 3 vezes mais lento e mais forte. Por isso o motor precisa girar 3 voltas para a engrenagem grande dar 1.",
  "pecas": [
    [
      "Pino longo com atrito + eixo 2",
      1
    ],
    [
      "Eixo 5",
      1
    ],
    [
      "Engrenagem 12 dentes dupla cônica",
      2
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
      "Engrenagem 36 dentes dupla cônica",
      2
    ],
    [
      "Viga 3 furos",
      2
    ],
    [
      "Viga 7 furos",
      2
    ],
    [
      "Eixo 4",
      2
    ],
    [
      "Bucha",
      7
    ],
    [
      "Quadro 11x19",
      1
    ],
    [
      "Eixo 7",
      1
    ],
    [
      "Pino com atrito",
      31
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
      "Motor grande SPIKE",
      1
    ],
    [
      "Motor médio SPIKE",
      1
    ],
    [
      "Sensor de força SPIKE",
      1
    ]
  ],
  "passos": [
    "Deite o quadro 11x19 como base. Prenda o hub no fundo (a bateria vai encaixada embaixo) e o sensor de força na frente do hub, com o botão para o lado direito.",
    "Prenda o motor grande no quadro, deitado, com o eixo para cima. Ele vai girar a torre. Ponha o eixo, a bucha e a engrenagem de 12 dentes no eixo dele.",
    "Prenda a viga de 3 no quadro: ela é o apoio da torre. Monte o eixo de 7 nela, com 4 buchas e a engrenagem de 36 dentes. As duas engrenagens ficam a 3 furos uma da outra.",
    "Em cima da engrenagem de 36 prenda as duas vigas de 7, deitadas. É a mesa da torre: ela gira junto com a engrenagem.",
    "Prenda o motor médio na mesa, com o eixo virado para a direita. Ele vai levantar o braço.",
    "Prenda a viga de 5 em pé na frente do motor médio. Ponha o eixo, a engrenagem de 12 dentes e a bucha no eixo do motor.",
    "Três furos acima, monte o eixo do braço com a engrenagem de 36 dentes. Gire as engrenagens com a mão: os dentes têm de se encaixar sem pular.",
    "Prenda a viga de 15 na engrenagem de 36 com 2 pinos: é o braço. Na ponta pendure a viga de 3 e coloque o gancho (pino com eixo) no furo de baixo."
  ],
  "programa": [
    "Quando o sensor de força for pressionado: o motor médio levanta o braço 90 graus (o motor gira 270 graus, por causa da redução 3 para 1).",
    "Quando o sensor de força for pressionado de novo: o motor grande gira a torre 180 graus (o motor gira 540 graus).",
    "Depois: o motor médio abaixa o braço e o motor grande leva a torre de volta para o começo.",
    "Dica: use velocidade baixa (30%) para o braço não balançar. O braço só desce uns 40 graus abaixo da horizontal; depois disso bate no quadro."
  ],
  "variacoes": [
    "Troque a ordem das engrenagens (36 girando a 12) e compare: o braço fica mais rápido, mas consegue levantar o mesmo peso?",
    "Use a força do aperto: aperto leve gira devagar, aperto forte gira rápido.",
    "Adicione o sensor de distância para o guindaste parar se alguém chegar perto."
  ],
  "desafio": "Transporte 3 peças leves de um lado da mesa para uma caixa sem derrubar nenhuma.",
  "pergunta": "Por que os guindastes de obra têm um contrapeso do outro lado do braço? Onde você poderia pôr um contrapeso neste?"
},
{
  "id": "prime-garra",
  "kit": "prime",
  "titulo": "Veículo com garra-gaiola que busca objetos",
  "nivel": 3,
  "tempo": 100,
  "tags": [
    "veículo",
    "garra",
    "sensor de cor"
  ],
  "resumo": "Um carrinho com uma gaiola na frente: ele chega no objeto, a porta (o 'dedo' da garra) desce e prende o objeto, e ele leva para outro lugar. É a mesma montagem da 'Gaiola caçadora' das missões FIRA, com montagem em 3D.",
  "aprende": "Dividir um problema grande em partes: andar, achar, pegar, voltar.",
  "pecas": [
    [
      "Eixo 11",
      2
    ],
    [
      "Eixo 5",
      2
    ],
    [
      "Viga em L 2x4",
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
      "Bucha",
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
      2
    ],
    [
      "Bola 19 mm",
      1
    ],
    [
      "Pino com atrito",
      23
    ],
    [
      "Pino longo com atrito",
      6
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
      "Sensor de distância SPIKE",
      1
    ],
    [
      "Sensor de cor SPIKE",
      1
    ]
  ],
  "passos": [
    "Monte a 'Gaiola caçadora' (montagem 3D abaixo): base com os motores médios, gaiola na frente e a porta no motor grande.",
    "A porta (vigas em L 2x4 amarelas e a barra de baixo) é o dedo da garra: desce e prende o objeto contra o fundo da gaiola.",
    "O sensor de distância (por fora da parede esquerda) vê o objeto chegando; o sensor de cor (atrás, embaixo) acha o lugar de entregar.",
    "Por que não duas engrenagens de 20 dentes? Elas só se encaixam com os eixos a 2,5 furos de distância, e os furos LEGO ficam a 1 furo um do outro. Para dedos que giram juntos, use 20 + 28 dentes (3 furos)."
  ],
  "programa": [
    "Abra a garra: porta da gaiola para cima (motor grande na posição inicial).",
    "Ande para frente até o sensor de distância medir menos de 5 cm.",
    "Feche a garra: a porta desce e prende o objeto (motor grande devagar, para não forçar).",
    "Gire 180 graus e ande até o sensor de cor ver a fita da base (ex.: azul).",
    "Abra a garra, dê ré e comemore com um som."
  ],
  "variacoes": [
    "Só pegue objetos de uma cor: se o objeto não for vermelho, desvie e procure outro.",
    "Conte quantos objetos já levou e mostre o número na matriz do hub.",
    "Desafio de montagem: troque a porta por uma pinça de 2 dedos que giram juntos (engrenagens de 20 e 28 dentes, eixos a 3 furos)."
  ],
  "desafio": "Leve 3 objetos para a base em menos de 2 minutos.",
  "pergunta": "Onde existem robôs que pegam e levam coisas? (fábricas, armazéns, hospitais)",
  "modelo3d": "fira-prime-coletor"
},
{
  "id": "prime-seguidor",
  "kit": "prime",
  "titulo": "Robô seguidor de linha",
  "nivel": 2,
  "tempo": 50,
  "tags": [
    "veículo",
    "sensor de cor",
    "linha"
  ],
  "resumo": "Um robô que segue uma fita preta no chão, como os carrinhos de fábrica.",
  "aprende": "Corrigir o caminho o tempo todo: se saiu da linha, volta.",
  "pecas": [
    [
      "Eixo 5",
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
      "Bola 19 mm",
      1
    ],
    [
      "Pino com atrito",
      16
    ],
    [
      "Pino longo com atrito",
      4
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
      "Sensor de cor SPIKE",
      1
    ]
  ],
  "passos": [
    "Base: quadro 11x15 deitado, motores médios embaixo com as rodas grandes, rodízio de bola atrás.",
    "Na frente, embaixo do quadro: viga de 3, 2 pinos longos e o sensor de cor olhando o chão. Ele fica a 0,8 cm do chão, na frente das rodas.",
    "Hub (com a bateria) em cima de duas vigas de 11.",
    "Faça uma pista com fita isolante preta em papel ou piso claro."
  ],
  "programa": [
    "Repita para sempre:",
    "  Se o sensor de cor vê preto: vire um pouco para a direita (motor esquerdo mais rápido).",
    "  Senão (vê branco): vire um pouco para a esquerda.",
    "O robô vai seguir a borda da linha fazendo zigue-zague."
  ],
  "variacoes": [
    "Use a intensidade da luz refletida (0 a 100) em vez de só preto ou branco: a curva fica mais suave.",
    "Coloque um quadrado vermelho na pista: o robô para 3 segundos, como num ponto de ônibus.",
    "Pare antes de um obstáculo na pista usando o sensor de distância."
  ],
  "desafio": "Complete a pista com uma curva fechada no menor tempo sem sair da linha.",
  "pergunta": "Por que o robô anda em zigue-zague? Como deixar o movimento mais liso?"
},
{
  "id": "prime-separador-moedas",
  "kit": "prime",
  "titulo": "Cofrinho que separa e conta moedas",
  "nivel": 2,
  "tempo": 50,
  "tags": [
    "educação financeira",
    "sensor de cor",
    "contagem"
  ],
  "resumo": "Peças coloridas fazem o papel de moedas. O robô lê a cor, separa para o lado certo e soma o valor guardado.",
  "aprende": "Classificar com sensor e usar variáveis para somar dinheiro.",
  "pecas": [
    [
      "Quadro 11x15",
      1
    ],
    [
      "Viga 13 furos",
      2
    ],
    [
      "Viga 9 furos",
      2
    ],
    [
      "Painel 3x11",
      2
    ],
    [
      "Viga em L 2x4",
      2
    ],
    [
      "Pino com atrito",
      20
    ],
    [
      "Eixo 5",
      1
    ],
    [
      "Bucha",
      2
    ],
    [
      "Placa redonda",
      6
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
      1
    ],
    [
      "Sensor de cor SPIKE",
      1
    ]
  ],
  "passos": [
    "Monte uma rampa com os painéis 3x11 inclinados sobre o quadro 11x15.",
    "No meio da rampa, prenda o sensor de cor olhando para baixo, onde a 'moeda' passa.",
    "No fim da rampa, coloque um portão (viga de 9 furos) preso no eixo do motor médio.",
    "O portão gira para a esquerda ou para a direita e manda a moeda para um dos dois lados.",
    "Use as placas redondas coloridas como moedas: cada cor vale um valor."
  ],
  "programa": [
    "Crie a variável 'total' começando em 0.",
    "Espere o sensor de cor ver uma cor.",
    "Se for amarelo: some 1 ao total e gire o portão para a esquerda.",
    "Se for azul: some 5 ao total e gire o portão para a direita.",
    "Mostre o total na matriz do hub e volte a esperar."
  ],
  "variacoes": [
    "Defina uma meta (ex.: 20). Quando o total chegar lá, toque uma música.",
    "Crie uma terceira cor que vale 10 e um terceiro caminho.",
    "Faça o contrário: um caixa eletrônico que 'paga' girando o portão um número de vezes."
  ],
  "desafio": "Junte exatamente 17 com o menor número de moedas possível.",
  "pergunta": "Por que vale a pena ter uma meta quando a gente guarda dinheiro?"
},
{
  "id": "prime-catapulta",
  "kit": "prime",
  "titulo": "Catapulta com gatilho",
  "nivel": 1,
  "tempo": 50,
  "tags": [
    "catapulta",
    "alavanca",
    "sensor de força"
  ],
  "resumo": "Um braço que lança uma bolinha quando o botão de força é apertado.",
  "aprende": "Alavanca e redução: quanto mais longo o braço, mais longe vai a bolinha. A engrenagem de 12 dentes girando a de 36 deixa o braço 3 vezes mais lento e mais forte (o motor gira 3 voltas para o braço dar 1).",
  "pecas": [
    [
      "Eixo 5",
      1
    ],
    [
      "Engrenagem 12 dentes dupla cônica",
      1
    ],
    [
      "Viga 5 furos",
      1
    ],
    [
      "Engrenagem 36 dentes dupla cônica",
      1
    ],
    [
      "Viga em L 3x5",
      1
    ],
    [
      "Eixo 4",
      1
    ],
    [
      "Bucha",
      2
    ],
    [
      "Quadro 11x19",
      1
    ],
    [
      "Viga conectora 3x3",
      1
    ],
    [
      "Viga 9 furos",
      1
    ],
    [
      "Bola 19 mm",
      1
    ],
    [
      "Pino com atrito",
      24
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
      "Motor grande SPIKE",
      1
    ],
    [
      "Sensor de força SPIKE",
      1
    ]
  ],
  "passos": [
    "Deite o quadro 11x19 e prenda o hub no fundo (a bateria vai embaixo do hub).",
    "Prenda o sensor de força no lado esquerdo do quadro, com o botão para fora. Ele é o botão de disparo.",
    "Prenda o motor grande deitado de lado na frente do quadro, com a saída virada para a direita.",
    "Na saída do motor prenda a viga de 5 em pé. No eixo do motor ponha a engrenagem de 12 dentes e uma bucha.",
    "Três furos acima, monte o eixo do braço com a engrenagem de 36 dentes. Os dentes têm de se encaixar sem pular.",
    "Prenda a viga de 9 na engrenagem de 36 com 2 pinos, apontando para trás. É o braço.",
    "Na ponta do braço prenda a viga conectora e, em cima dela, a viga em L deitada: é a colher. Ponha a bola de 19 mm na colher.",
    "Gire o braço com a mão: ele roda de cerca de 50 graus abaixo da horizontal até quase 190 graus (para a frente) sem bater. Se chegar no limite de baixo, pare."
  ],
  "programa": [
    "Quando o sensor de força for pressionado:",
    "  Gire o motor grande rápido (100%) por 450 graus: o braço dá meia volta e lança a bola.",
    "  Espere 1 segundo e volte devagar (20%) 450 graus para a posição inicial."
  ],
  "variacoes": [
    "Use a força do aperto para escolher a força do lançamento.",
    "Mude o lugar do prato no braço e meça a distância de cada lançamento numa tabela.",
    "Faça uma contagem regressiva na matriz do hub antes de lançar."
  ],
  "desafio": "Acerte a bola dentro de um copo a 1 metro de distância.",
  "pergunta": "O que mudou mais a distância: a velocidade do motor ou o tamanho do braço?"
},
{
  "id": "prime-ventilador",
  "kit": "prime",
  "titulo": "Ventilador que liga sozinho",
  "nivel": 1,
  "tempo": 50,
  "tags": [
    "ventilador",
    "engrenagens",
    "velocidade"
  ],
  "resumo": "Um ventilador que liga quando alguém chega perto e desliga quando a pessoa sai.",
  "aprende": "Multiplicação de velocidade: a engrenagem grande girando a pequena faz a hélice girar 3 vezes mais rápido.",
  "pecas": [
    [
      "Eixo 5",
      1
    ],
    [
      "Engrenagem 12 dentes dupla cônica",
      1
    ],
    [
      "Viga 5 furos",
      1
    ],
    [
      "Engrenagem 36 dentes dupla cônica",
      1
    ],
    [
      "Viga 7 furos",
      1
    ],
    [
      "Bucha",
      2
    ],
    [
      "Quadro 11x19",
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
      "Viga 2 furos (pino + eixo)",
      2
    ],
    [
      "Pino com atrito",
      20
    ],
    [
      "Pino longo com atrito",
      1
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
      1
    ],
    [
      "Sensor de distância SPIKE",
      1
    ]
  ],
  "passos": [
    "Deite o quadro 11x19 e prenda o hub no fundo (a bateria vai embaixo do hub).",
    "Na frente do quadro, prenda uma viga conectora em cada canto e encaixe o sensor de distância entre elas, olhando para a frente. Ele fica embaixo da hélice.",
    "Ponha o motor médio em pé no meio do quadro, com a saída virada para a frente, preso com 2 pinos na ponta de baixo.",
    "Prenda a viga de 5 deitada na frente do motor. No eixo do motor ponha a engrenagem de 36 dentes (a grande) e uma bucha.",
    "Três furos ao lado, passe o eixo da hélice pela viga e ponha a engrenagem de 12 dentes (a pequena). Os dentes têm de se encaixar sem pular. A grande girando a pequena faz a hélice girar 3 vezes mais rápido.",
    "Hélice: monte a viga de 7 entre as duas vigas de 2 no eixo, prenda com o pino longo e feche com a bucha. Gire com a mão: a hélice não pode bater no sensor."
  ],
  "programa": [
    "Repita para sempre:",
    "  Se a distância for menor que 30 cm: ligue o motor.",
    "  Senão: desligue o motor."
  ],
  "variacoes": [
    "Três velocidades: perto = forte, médio = média, longe = desligado.",
    "Faça o ventilador virar de um lado para o outro com um segundo motor.",
    "Troque as engrenagens de lugar e meça com um papel qual vento é mais forte."
  ],
  "desafio": "Faça um papel pendurado balançar a 50 cm de distância.",
  "pergunta": "Onde mais aparece a ideia de 'ligar só quando precisa' para economizar energia?"
},
{
  "id": "prime-cancela",
  "kit": "prime",
  "titulo": "Cancela de estacionamento",
  "nivel": 1,
  "tempo": 50,
  "tags": [
    "educação financeira",
    "cancela",
    "sensor de distância"
  ],
  "resumo": "A cancela abre quando um carro chega e cobra o estacionamento pelo tempo que ele ficou.",
  "aprende": "Medir tempo com o cronômetro do hub e transformar tempo em preço.",
  "pecas": [
    [
      "Viga 15 furos",
      1
    ],
    [
      "Quadro 11x19",
      1
    ],
    [
      "Viga conectora 3x3",
      2
    ],
    [
      "Pino com atrito",
      22
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
      1
    ],
    [
      "Sensor de distância SPIKE",
      1
    ]
  ],
  "passos": [
    "Deite o quadro 11x19 e prenda o hub no canto de trás à esquerda (a bateria vai embaixo do hub).",
    "Na frente do quadro, prenda uma viga conectora em cada canto e encaixe o sensor de distância entre elas, olhando para a frente. Ele fica 1 furo acima do quadro.",
    "Prenda o motor médio no lado direito do quadro, com a saída virada para fora.",
    "Na saída do motor prenda a viga de 15 em pé, com 2 pinos. O furo do meio fica no eixo do motor. Em pé a cancela está aberta; girada 90 graus para a frente ela fecha a pista.",
    "Ligue o motor e o sensor nas portas do hub. Antes de programar, gire a cancela com a mão: ela não pode bater em nada."
  ],
  "programa": [
    "No começo: gire o motor 90 graus para a cancela deitar na frente da pista (cancela fechada).",
    "Quando o sensor ver um carro a menos de 10 cm: zere o cronômetro e levante a cancela 90 graus (volta a ficar em pé).",
    "Espere o carro passar e abaixe a cancela de novo.",
    "Na saída (sensor vê o carro de novo): calcule preço = segundos x 2.",
    "Mostre o preço na matriz do hub e abra a cancela."
  ],
  "variacoes": [
    "Os primeiros 10 segundos são grátis.",
    "Preço fixo depois de 30 segundos (como uma diária).",
    "Use o sensor de cor como 'cartão de mensalista': cartão verde não paga."
  ],
  "desafio": "Crie uma tabela de preços e teste com 3 carros diferentes.",
  "pergunta": "Qual tabela de preço é mais justa para quem para pouco tempo? E para o dono do estacionamento?"
},
{
  "id": "prime-inseto",
  "kit": "prime",
  "titulo": "Inseto que anda com pernas",
  "nivel": 3,
  "tempo": 100,
  "tags": [
    "animal robô",
    "manivela",
    "mecanismo"
  ],
  "resumo": "Um robô sem rodas que anda com pernas movidas por manivelas.",
  "aprende": "Manivela: transformar o giro do motor em um movimento de passo.",
  "pecas": [
    [
      "Quadro 11x15",
      1
    ],
    [
      "Viga 11 furos",
      4
    ],
    [
      "Viga em L 3x5",
      4
    ],
    [
      "Haste de ligação 6",
      2
    ],
    [
      "Viga 5 furos",
      4
    ],
    [
      "Pino com atrito",
      30
    ],
    [
      "Pino-eixo sem atrito",
      8
    ],
    [
      "Pino longo com atrito",
      6
    ],
    [
      "Placa lisa redonda com desenho (olho)",
      2
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
      "Sensor de distância SPIKE",
      1
    ]
  ],
  "passos": [
    "Use o quadro 11x15 como corpo e prenda um motor médio de cada lado.",
    "Em cada motor, prenda uma viga em L como manivela (ela gira em círculo).",
    "Ligue a manivela a uma perna (viga de 11 furos) com um pino sem atrito, para girar livre.",
    "Prenda o meio da perna ao corpo com uma viga de 5 furos articulada: assim a perna faz um passo em vez de só girar.",
    "Coloque o sensor de distância na frente como cabeça e os olhos decorativos."
  ],
  "programa": [
    "Gire os dois motores ao mesmo tempo para andar para frente.",
    "Se o sensor ver algo perto: gire só um motor para o inseto virar.",
    "Dica: comece os dois motores na mesma posição (ângulo 0) para as pernas ficarem sincronizadas."
  ],
  "variacoes": [
    "Coloque as pernas de um lado meio passo atrasadas: o andar muda?",
    "Faça 4 pernas: cada manivela mexe duas pernas ao mesmo tempo.",
    "Use a matriz do hub para piscar como um vaga-lume."
  ],
  "desafio": "Faça o inseto andar 1 metro em linha reta.",
  "pergunta": "Por que alguns robôs usam pernas em vez de rodas? Em que lugar a perna é melhor?"
},
{
  "id": "prime-balanca",
  "kit": "prime",
  "titulo": "Balança de mercadinho",
  "nivel": 2,
  "tempo": 50,
  "tags": [
    "educação financeira",
    "sensor de força",
    "medida"
  ],
  "resumo": "Uma balança que mede o quanto um produto aperta o sensor e calcula o preço.",
  "aprende": "Medir força, calibrar e transformar medida em dinheiro.",
  "pecas": [
    [
      "Eixo 5",
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
      "Quadro 11x19",
      1
    ],
    [
      "Viga 2 furos (pino + eixo)",
      1
    ],
    [
      "Pino com atrito",
      19
    ],
    [
      "Quadro 5x7",
      1
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
      "Sensor de força SPIKE",
      1
    ],
    [
      "Motor médio SPIKE",
      1
    ]
  ],
  "passos": [
    "Deite o quadro 11x19 e prenda o hub no canto de trás à esquerda (a bateria vai embaixo do hub).",
    "Ponha o sensor de força em pé no lado esquerdo, com o botão para cima, preso com 2 pinos na ponta de baixo.",
    "Encaixe o eixo de 5 no furo de eixo do botão e a viga de 2 deitada no eixo. Em cima dela vai a viga de 5, presa com 1 pino.",
    "Prato: prenda o quadro 5x7 deitado em cima da viga de 5, com 2 pinos. O eixo passa pela abertura do quadro. Quando você pôr um peso, o eixo desce e aperta o botão.",
    "Prenda o motor médio na lateral direita do quadro, com a saída virada para fora.",
    "Ponteiro: prenda a viga de 15 em pé na saída do motor, com 2 pinos. Ela gira de 0 a 90 graus conforme o peso: quanto mais peso, mais o motor gira o ponteiro."
  ],
  "programa": [
    "Repita para sempre:",
    "  Leia a força em newtons.",
    "  Gire o ponteiro proporcional à força (ex.: força x 15 graus).",
    "  Calcule preço = força x 3 e mostre na matriz do hub."
  ],
  "variacoes": [
    "Calibre: coloque objetos que você conhece e anote o valor de cada um.",
    "Botão de 'tara': zera a medida com o prato vazio.",
    "Faça uma promoção: acima de certo peso, 10% de desconto."
  ],
  "desafio": "Descubra quantos estojos iguais cabem antes de o sensor chegar no máximo.",
  "pergunta": "Por que a balança do mercado precisa ser conferida (calibrada) de tempos em tempos?"
}
]);
