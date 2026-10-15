// Missões FIRA — 2ª rodada (15/10/2026): versões alternativas e robôs de treino.
// Mesmas regras da 1ª rodada: kit base, {X} = porta, valores dos blocos são exemplos (calibrar na arena).
// Prime: roda grande 5,6 cm = 17,6 cm/volta. Essential: roda 4,3 cm = 13,5 cm/volta. EV3: 17,6 cm/volta.
// Cremalheira 64781: ~32 dentes; com a engrenagem de 12 dentes, 1 volta do motor = 12 dentes ≈ 3,8 cm.
window.IDEIAS = (window.IDEIAS || []).concat([
{
  "id": "fira-prime-degrau",
  "kit": "prime",
  "titulo": "Escalador 4 rodas com eixo articulado",
  "nivel": 3,
  "tempo": 100,
  "tags": ["FIRA M1", "obstáculo", "eixo articulado"],
  "missao": {"prova": "M1", "parte": "Passar por obstáculos e degraus baixos no percurso até a linha vermelha", "pontos": "Mira 50 (linha vermelha) + 25 por linha de progressão"},
  "medidas_cm": [20.8, 14.4, 12],
  "resumo": "Quatro rodas grandes: as de trás têm motor e as da frente ficam num eixo que balança (articulado), acompanhando o chão. Para degraus mais altos, uma 'muleta' na frente empurra o chão e levanta o nariz do robô.",
  "aprende": "Por que rodas maiores e eixo articulado sobem obstáculos: o robô mantém as 4 rodas no chão mesmo em piso irregular.",
  "pecas": [["Quadro 7x11", 1], ["Viga 15 furos", 2], ["Viga 9 furos", 2], ["Viga 5 furos", 2], ["Viga em L 3x5", 2], ["Roda 57 x 14 com pneu", 4], ["Eixo 5", 2], ["Bucha", 6], ["Pino-eixo sem atrito", 2], ["Engrenagem 12 dentes dupla cônica", 1], ["Engrenagem 36 dentes dupla cônica", 1], ["Eixo 7", 1], ["Pino com atrito", 30], ["Pino longo com atrito", 6]],
  "eletronica": [["Hub grande SPIKE (6 portas)", 1], ["Motor médio SPIKE", 2], ["Motor grande SPIKE", 1], ["Sensor de cor SPIKE", 1], ["Sensor de distância SPIKE", 1]],
  "portas": {"A": "Motor médio SPIKE", "B": "Motor médio SPIKE", "C": "Motor grande SPIKE", "D": "Sensor de cor SPIKE", "E": "Sensor de distância SPIKE"},
  "passos": [
    "Atrás: quadro 7x11 com os motores médios A e B e duas rodas grandes.",
    "Na frente: viga de 9 atravessada, presa no meio por pino-eixo sem atrito (ela balança como uma gangorra). Em cada ponta, um eixo de 5 com roda grande solta.",
    "Muleta: duas vigas em L 3x5 num eixo de 7 na frente. Motor grande (C) gira a engrenagem de 12, que gira a de 36 no eixo da muleta (3 vezes mais força).",
    "Sensor de distância (E) baixo, olhando para frente, para ver o degrau. Sensor de cor (D) embaixo.",
    "Confira a largura: no máximo 18 furos (14,4 cm) contando as rodas."
  ],
  "programa": ["Estratégia 1: sobe devagar e com força, só com o eixo articulado.", "Estratégia 2: usa a muleta quando o degrau é alto."],
  "blocos": [
    {
      "estrategia": "Subir só com o eixo articulado",
      "descricao": "Para obstáculos baixos (até 1,5 cm). Simples: o segredo é ir devagar para a roda subir em vez de patinar.",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "movimento", "txt": "definir motores de movimento {A} e {B}"},
        {"t": "controle", "txt": "repetir até sensor de cor {D} ver vermelho", "filhos": [
          {"t": "controle", "txt": "se sensor de distância {E} mais perto que 6 cm então", "filhos": [
            {"t": "movimento", "txt": "mover para frente 12 cm a 20% (sobe o obstáculo devagar)"}
          ], "senao": [
            {"t": "movimento", "txt": "iniciar mover para frente a 45%"}
          ]}
        ]},
        {"t": "movimento", "txt": "parar movimento"},
        {"t": "som", "txt": "tocar som Vitória até o fim"}
      ],
      "ajustes": ["6 cm: distância em que o robô reduz a velocidade.", "20% na subida: se patinar, tente 15%; se não subir, 30%.", "12 cm: comprimento do obstáculo + o robô inteiro."]
    },
    {
      "estrategia": "Muleta para degrau alto",
      "descricao": "Para degraus de 2 a 4 cm: a muleta apoia no chão e ergue a frente até as rodas da frente chegarem em cima do degrau.",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "movimento", "txt": "definir motores de movimento {A} e {B}"},
        {"t": "motor", "txt": "motor {C} ir para posição 0 (muleta recolhida, para cima)"},
        {"t": "movimento", "txt": "iniciar mover para frente a 40%"},
        {"t": "controle", "txt": "esperar até sensor de distância {E} mais perto que 4 cm"},
        {"t": "movimento", "txt": "parar movimento"},
        {"t": "motor", "txt": "ligar motor {C} por 270 graus a 50% (muleta desce e levanta o nariz)"},
        {"t": "movimento", "txt": "mover para frente 6 cm a 25% (rodas da frente sobem no degrau)"},
        {"t": "motor", "txt": "motor {C} ir para posição 0 (recolhe a muleta)"},
        {"t": "movimento", "txt": "mover para frente 15 cm a 30% (rodas de trás sobem)"},
        {"t": "controle", "txt": "repetir até sensor de cor {D} ver vermelho", "filhos": [
          {"t": "movimento", "txt": "iniciar mover para frente a 40%"}
        ]},
        {"t": "movimento", "txt": "parar movimento"}
      ],
      "ajustes": ["270 graus no motor = 90 graus na muleta (redução 3:1): ajuste até o nariz subir um pouco acima do degrau.", "4 cm: a muleta precisa apoiar antes do degrau.", "6 cm e 15 cm: dependem do comprimento do robô."]
    }
  ],
  "variacoes": ["Rodas da frente menores (roda 18 x 8 com pneu fino): o que muda na subida?", "Prenda as rodas da frente no eixo e ligue com elástico às de trás (tração nas 4).", "Peso em cima das rodas de trás (o hub) ajuda a não patinar."],
  "desafio": "Suba um livro de 2 cm sem empinar nem tombar.",
  "pergunta": "Por que carros de trilha têm suspensão e rodas grandes?"
},
{
  "id": "fira-prime-lancador",
  "kit": "prime",
  "titulo": "Lançador de argola com cremalheira e elástico",
  "nivel": 3,
  "tempo": 100,
  "tags": ["FIRA M3", "cremalheira impressa", "lançador"],
  "missao": {"prova": "M3", "parte": "Lançar a argola na haste (lançar é permitido) e voltar à partida", "pontos": "Mira 50 por argola + 100 (voltar)"},
  "medidas_cm": [19.2, 15.2, 14],
  "resumo": "O motor puxa as cremalheiras para trás, esticando os elásticos. Quando os dentes acabam, a cremalheira escapa da engrenagem e dispara para frente, jogando a argola. Se o motor continua girando, ele recarrega sozinho.",
  "aprende": "Energia guardada no elástico e um gatilho mecânico: a engrenagem que 'perde' os dentes da cremalheira.",
  "pecas": [["Quadro 11x15", 1], ["Viga 15 furos", 2], ["Viga 13 furos", 2], ["Viga 7 furos", 2], ["Elástico 33 mm", 4], ["Engrenagem 12 dentes dupla cônica", 1], ["Eixo 5", 1], ["Bucha", 4], ["Prato (antena)", 1], ["Pino com atrito", 30], ["Pino longo com atrito", 6], ["Roda 57 x 14 com pneu", 2], ["Viga 3x5 com bola giratória", 1], ["Bola 19 mm", 1]],
  "pecas_impressas": [["Cremalheira LEGO impressa 3D (cópia da 64781)", 2, "testada e aprovada em 15/10/2026. Emendadas: curso maior = lançamento mais forte."]],
  "eletronica": [["Hub grande SPIKE (6 portas)", 1], ["Motor médio SPIKE", 2], ["Motor grande SPIKE", 1], ["Sensor de cor SPIKE", 1], ["Sensor de distância SPIKE", 1]],
  "portas": {"A": "Motor médio SPIKE", "B": "Motor médio SPIKE", "C": "Motor grande SPIKE", "D": "Sensor de cor SPIKE", "E": "Sensor de distância SPIKE"},
  "passos": [
    "Base com o quadro 11x15, motores médios A e B e rodízio. Limite: 20 x 20 cm.",
    "Trilho: duas vigas de 13 paralelas por cima do robô. As cremalheiras impressas emendadas deslizam entre elas, com o prato (colher da argola) na ponta da frente.",
    "Elásticos: dos dois lados, presos na frente do trilho e na ponta de trás da cremalheira: puxam a cremalheira para frente.",
    "Motor grande (C) com a engrenagem de 12 dentes embaixo da cremalheira. Girando, puxa a cremalheira para trás; quando acabam os dentes, ela escapa e dispara.",
    "Sensor de distância (E) na frente para medir até a caixa de leite. Sensor de cor (D) embaixo para achar a partida."
  ],
  "programa": ["Estratégia 1: lança de longe (30 cm), mais rápido.", "Estratégia 2: lança de perto (12 cm) com metade da força, mais preciso."],
  "blocos": [
    {
      "estrategia": "Lançar de longe",
      "descricao": "Chega rápido e lança de 30 cm. Precisa calibrar bem a força (número de elásticos).",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "movimento", "txt": "definir motores de movimento {A} e {B}"},
        {"t": "luz", "txt": "matriz do hub: mostrar alvo"},
        {"t": "motor", "txt": "ligar motor {C} por 1800 graus a 60% (puxa até quase o fim dos dentes: armado)"},
        {"t": "movimento", "txt": "iniciar mover para frente a 40%"},
        {"t": "controle", "txt": "esperar até sensor de distância {E} mais perto que 30 cm"},
        {"t": "movimento", "txt": "parar movimento"},
        {"t": "controle", "txt": "esperar 0,5 segundo (o robô para de balançar)"},
        {"t": "motor", "txt": "ligar motor {C} por 120 graus (os dentes acabam: DISPARO)"},
        {"t": "som", "txt": "tocar som Laser"},
        {"t": "controle", "txt": "repetir até sensor de cor {D} ver verde", "filhos": [
          {"t": "movimento", "txt": "iniciar mover para trás a 40%"}
        ]},
        {"t": "movimento", "txt": "parar movimento (voltou à partida: +100)"}
      ],
      "ajustes": ["1800 + 120 graus: some os dois e confira o curso total da sua cremalheira (cerca de 960 graus por cremalheira).", "30 cm: aumente ou diminua até a argola cair na haste.", "Força: teste com 2, 3 e 4 elásticos e anote o alcance."]
    },
    {
      "estrategia": "Lançar de perto",
      "descricao": "Encosta a 12 cm e usa só 2 elásticos: a argola vai em arco curto, mais fácil de acertar.",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "movimento", "txt": "definir motores de movimento {A} e {B}"},
        {"t": "motor", "txt": "ligar motor {C} por 1000 graus a 60% (meio curso: menos força)"},
        {"t": "movimento", "txt": "iniciar mover para frente a 30%"},
        {"t": "controle", "txt": "esperar até sensor de distância {E} mais perto que 12 cm"},
        {"t": "movimento", "txt": "parar movimento"},
        {"t": "motor", "txt": "ligar motor {C} por 920 graus a 60% (completa o curso e dispara)"},
        {"t": "movimento", "txt": "mover para trás 20 cm a 40%"},
        {"t": "controle", "txt": "repetir até sensor de cor {D} ver verde", "filhos": [
          {"t": "movimento", "txt": "iniciar mover para trás a 40%"}
        ]},
        {"t": "movimento", "txt": "parar movimento"}
      ],
      "ajustes": ["Com 2 elásticos: tire 2 dos 4.", "12 cm: distância do disparo até a haste.", "Ângulo do trilho: incline 2 furos para a argola subir mais."]
    }
  ],
  "variacoes": ["Rampa de recarga: um tubo com 3 argolas que cai uma na colher a cada disparo.", "Trilho inclinado com viga em L para mudar o ângulo do lançamento.", "Gráfico: distância do disparo x número de elásticos."],
  "desafio": "Acerte 2 argolas seguidas na mesma haste.",
  "pergunta": "Onde a energia fica guardada antes do disparo? Para onde ela vai depois?"
},
{
  "id": "fira-prime-funil",
  "kit": "prime",
  "titulo": "Funil de esferas com rampa",
  "nivel": 2,
  "tempo": 100,
  "tags": ["FIRA M2", "funil", "esferas"],
  "missao": {"prova": "M2", "parte": "Versão só para esferas: recolher e depositar esferas (robô parceiro: Essential)", "pontos": "Mira 10 por esfera coletada + 30 por esfera depositada + 50 (estacionar)"},
  "medidas_cm": [19.2, 16, 12],
  "resumo": "Um funil largo na frente guia as esferas para uma rampa que as leva para um cesto dentro do robô. No depósito, uma comporta se abre e as esferas rolam para fora.",
  "aprende": "Usar a gravidade: a rampa leva a esfera sem motor; o motor só abre a comporta.",
  "pecas": [["Quadro 11x15", 1], ["Painel curvo 11x3", 2], ["Viga 15 furos", 2], ["Viga 9 furos", 2], ["Placa Technic 2x8", 4], ["Viga em L 3x5", 2], ["Engrenagem 12 dentes dupla cônica", 1], ["Engrenagem 36 dentes dupla cônica", 1], ["Eixo 7", 1], ["Bucha", 4], ["Pino com atrito", 34], ["Roda 57 x 14 com pneu", 2], ["Viga 3x5 com bola giratória", 1], ["Bola 19 mm", 1]],
  "eletronica": [["Hub grande SPIKE (6 portas)", 1], ["Motor médio SPIKE", 2], ["Motor grande SPIKE", 1], ["Sensor de cor SPIKE", 1], ["Sensor de distância SPIKE", 1]],
  "portas": {"A": "Motor médio SPIKE", "B": "Motor médio SPIKE", "C": "Motor grande SPIKE", "D": "Sensor de cor SPIKE", "E": "Sensor de distância SPIKE"},
  "passos": [
    "Base com o quadro 11x15, motores médios A e B e rodízio.",
    "Funil: os dois painéis curvos abertos em V na frente, rente ao chão.",
    "Rampa: placas Technic 2x8 inclinadas do fundo do funil até um cesto de vigas no meio do robô.",
    "Comporta: viga de 9 num eixo de 7 atrás do cesto. Motor grande (C) com 12 e 36 dentes abre e fecha.",
    "Sensor de distância (E) acima do funil; sensor de cor (D) embaixo, para o depósito e o quadrado vermelho."
  ],
  "programa": ["Estratégia 1: varrer em faixas (cortador de grama).", "Estratégia 2: ir até cada esfera vista pelo sensor."],
  "blocos": [
    {
      "estrategia": "Varrer em faixas",
      "descricao": "Passa pela área inteira em faixas, como um cortador de grama. Não precisa enxergar as esferas.",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "movimento", "txt": "definir motores de movimento {A} e {B}"},
        {"t": "motor", "txt": "motor {C} ir para posição 0 (comporta fechada)"},
        {"t": "controle", "txt": "repetir 3 vezes", "filhos": [
          {"t": "movimento", "txt": "mover para frente 60 cm a 35%"},
          {"t": "movimento", "txt": "mover direção 100 por 0,5 rotação"},
          {"t": "movimento", "txt": "mover para frente 15 cm a 35% (próxima faixa)"},
          {"t": "movimento", "txt": "mover direção 100 por 0,5 rotação"},
          {"t": "movimento", "txt": "mover para frente 60 cm a 35%"},
          {"t": "movimento", "txt": "mover direção -100 por 0,5 rotação"},
          {"t": "movimento", "txt": "mover para frente 15 cm a 35%"},
          {"t": "movimento", "txt": "mover direção -100 por 0,5 rotação"}
        ]},
        {"t": "controle", "txt": "repetir até sensor de cor {D} ver amarelo (depósito)", "filhos": [
          {"t": "movimento", "txt": "iniciar mover para frente a 35%"}
        ]},
        {"t": "movimento", "txt": "parar movimento"},
        {"t": "motor", "txt": "ligar motor {C} por 270 graus (abre a comporta)"},
        {"t": "controle", "txt": "esperar 2 segundos (esferas rolam para fora)"},
        {"t": "motor", "txt": "motor {C} ir para posição 0"}
      ],
      "ajustes": ["60 cm e 15 cm: tamanho da área e largura do funil.", "Cor do depósito (amarelo é exemplo).", "3 repetições: menos se o tempo apertar (3 minutos para a dupla)."]
    },
    {
      "estrategia": "Ir até cada esfera",
      "descricao": "Gira procurando e vai direto. Mais rápido se as esferas estiverem espalhadas e longe umas das outras.",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "movimento", "txt": "definir motores de movimento {A} e {B}"},
        {"t": "variavel", "txt": "definir esferas = 0"},
        {"t": "controle", "txt": "repetir até esferas = 3", "filhos": [
          {"t": "movimento", "txt": "iniciar mover com direção 100 a 20%"},
          {"t": "controle", "txt": "esperar até sensor de distância {E} mais perto que 35 cm"},
          {"t": "movimento", "txt": "iniciar mover para frente a 30%"},
          {"t": "controle", "txt": "esperar até sensor de distância {E} mais perto que 3 cm"},
          {"t": "movimento", "txt": "mover para frente 8 cm a 25% (esfera sobe a rampa)"},
          {"t": "variavel", "txt": "mudar esferas em 1"}
        ]},
        {"t": "controle", "txt": "repetir até sensor de cor {D} ver amarelo", "filhos": [
          {"t": "movimento", "txt": "iniciar mover para frente a 35%"}
        ]},
        {"t": "movimento", "txt": "parar movimento"},
        {"t": "motor", "txt": "ligar motor {C} por 270 graus"}
      ],
      "ajustes": ["35 cm: alcance da procura.", "3 esferas: troque pelo número da arena."]
    }
  ],
  "variacoes": ["Rampa mais longa = cesto maior.", "Uma 'escova' girando na boca do funil (motor grande) para puxar as esferas.", "Combine com a empilhadeira de cubos: cada robô da dupla pega um tipo."],
  "desafio": "Recolha 3 esferas em menos de 90 segundos.",
  "pergunta": "Por que a esfera sobe a rampa sem motor? De onde vem a energia?"
},
{
  "id": "fira-prime-empilhadeira",
  "kit": "prime",
  "titulo": "Empilhadeira de cubos",
  "nivel": 3,
  "tempo": 100,
  "tags": ["FIRA M2", "cremalheira do kit", "garfo"],
  "missao": {"prova": "M2", "parte": "Versão só para cubos: levantar o cubo com garfo e depositar", "pontos": "Mira 20 por cubo coletado + 20 por cubo depositado + 50 (estacionar)"},
  "medidas_cm": [20, 14.4, 16],
  "resumo": "Como uma empilhadeira de verdade: um garfo fino entra embaixo do cubo e sobe por duas cremalheiras (as que já vêm no kit).",
  "aprende": "Elevação com duas cremalheiras e um eixo comum: o garfo sobe reto, sem entortar.",
  "pecas": [["Quadro 7x11", 1], ["Viga 15 furos", 2], ["Viga 13 furos", 2], ["Viga 9 furos", 2], ["Cremalheira 13", 2], ["Engrenagem 12 dentes dupla cônica", 2], ["Eixo 9", 1], ["Placa Technic 2x8", 2], ["Bucha", 4], ["Pino com atrito", 32], ["Pino longo com atrito", 6], ["Roda 57 x 14 com pneu", 2], ["Viga 3x5 com bola giratória", 1], ["Bola 19 mm", 1]],
  "eletronica": [["Hub grande SPIKE (6 portas)", 1], ["Motor médio SPIKE", 2], ["Motor grande SPIKE", 1], ["Sensor de cor SPIKE", 1], ["Sensor de distância SPIKE", 1]],
  "portas": {"A": "Motor médio SPIKE", "B": "Motor médio SPIKE", "C": "Motor grande SPIKE", "D": "Sensor de cor SPIKE", "E": "Sensor de distância SPIKE"},
  "passos": [
    "Base: quadro 7x11, motores médios A e B, rodízio.",
    "Mastro: duas vigas de 15 em pé na frente. Em cada uma desliza uma viga de 13 com a cremalheira do kit presa.",
    "Garfo: duas placas Technic 2x8 deitadas, presas embaixo das vigas de 13 (as 'pás' da empilhadeira).",
    "Motor grande (C) gira um eixo de 9 com uma engrenagem de 12 em cada cremalheira.",
    "Sensor de distância (E) entre os garfos; sensor de cor (D) embaixo."
  ],
  "programa": ["Estratégia 1: um cubo por viagem (seguro).", "Estratégia 2: empilhar 2 cubos no garfo (mais pontos por viagem)."],
  "blocos": [
    {
      "estrategia": "Um cubo por viagem",
      "descricao": "Pega um, leva, volta. Mais viagens, menos risco de derrubar.",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "movimento", "txt": "definir motores de movimento {A} e {B}"},
        {"t": "motor", "txt": "motor {C} ir para posição 0 (garfo no chão)"},
        {"t": "controle", "txt": "repetir 2 vezes", "filhos": [
          {"t": "movimento", "txt": "iniciar mover para frente a 30%"},
          {"t": "controle", "txt": "esperar até sensor de distância {E} mais perto que 3 cm"},
          {"t": "movimento", "txt": "mover para frente 4 cm a 15% (garfo entra embaixo)"},
          {"t": "motor", "txt": "ligar motor {C} por 360 graus (sobe cerca de 4 cm)"},
          {"t": "controle", "txt": "repetir até sensor de cor {D} ver amarelo", "filhos": [
            {"t": "movimento", "txt": "iniciar mover para trás a 35%"}
          ]},
          {"t": "movimento", "txt": "parar movimento"},
          {"t": "motor", "txt": "motor {C} ir para posição 0 (abaixa e deixa o cubo)"},
          {"t": "movimento", "txt": "mover para trás 6 cm"},
          {"t": "movimento", "txt": "mover direção 100 por 1 rotação (meia-volta para o próximo)"}
        ]}
      ],
      "ajustes": ["360 graus ≈ 3,8 cm de subida.", "Garfo: se o cubo não entra, deixe as placas mais rentes ao chão.", "Cor do depósito."]
    },
    {
      "estrategia": "Empilhar 2 cubos",
      "descricao": "Levanta o primeiro alto, pega o segundo embaixo e leva os dois juntos.",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "movimento", "txt": "definir motores de movimento {A} e {B}"},
        {"t": "motor", "txt": "motor {C} ir para posição 0"},
        {"t": "movimento", "txt": "mover para frente 30 cm a 30%"},
        {"t": "motor", "txt": "ligar motor {C} por 900 graus (primeiro cubo bem alto)"},
        {"t": "movimento", "txt": "mover direção 100 por 0,5 rotação"},
        {"t": "movimento", "txt": "mover para frente 25 cm a 25%"},
        {"t": "motor", "txt": "ligar motor {C} por -540 graus (encosta o 1º em cima do 2º)"},
        {"t": "controle", "txt": "repetir até sensor de cor {D} ver amarelo", "filhos": [
          {"t": "movimento", "txt": "iniciar mover para trás a 25%"}
        ]},
        {"t": "movimento", "txt": "parar movimento"},
        {"t": "motor", "txt": "motor {C} ir para posição 0"}
      ],
      "ajustes": ["900 e -540 graus: dependem da altura do cubo.", "Velocidade baixa (25%) com 2 cubos."]
    }
  ],
  "variacoes": ["Encosto atrás do garfo para o cubo não escorregar.", "Garfo com dentes 1x3 na ponta para entrar mais fácil.", "Troque o depósito por empilhar no próprio chão."],
  "desafio": "Leve 2 cubos de uma vez sem deixar cair.",
  "pergunta": "Por que a empilhadeira de verdade inclina o garfo um pouco para trás?"
},
{
  "id": "fira-essential-palito",
  "kit": "essential",
  "titulo": "Gancho em L para o palito",
  "nivel": 3,
  "tempo": 100,
  "tags": ["FIRA M4", "gancho", "alavanca"],
  "missao": {"prova": "M4", "parte": "Versão simplificada: tirar o palito do copo A com um gancho, levar ao copo B (em linha reta) e soltar", "pontos": "Mira a prova completa sem mexer nos copos"},
  "medidas_cm": [20, 12.8, 22],
  "resumo": "Uma alavanca com um gancho em L desce por trás do palito, o robô recua um pouco para o 'pé' do L passar por baixo, e a alavanca sobe com o palito. No copo B, a alavanca abaixa e o palito escorrega para dentro.",
  "aprende": "Com só 2 portas: um motor anda (em linha reta) e o outro faz todo o trabalho fino com a alavanca.",
  "pecas": [["Placa Technic 2x8", 2], ["Tijolo Technic 1x8", 2], ["Tijolo Technic 1x12", 1], ["Torre treliça", 1], ["Conector angular nº 1", 1], ["Eixo 4", 1], ["Eixo 3", 1], ["Eixo 8", 1], ["Eixo 6", 1], ["Bucha", 4], ["Roda 43 x 14 com pneu", 2], ["Roda de cadeira de rodas", 2], ["Pino com atrito", 12]],
  "eletronica": [["Hub pequeno SPIKE (2 portas)", 1], ["Motor pequeno SPIKE", 2]],
  "portas": {"A": "Motor pequeno SPIKE", "B": "Motor pequeno SPIKE"},
  "passos": [
    "Chassi com placas Technic 2x8; eixo de 8 atrás com as rodas grandes direto no motor A (anda reto). Rodas de cadeira de rodas soltas na frente.",
    "Torre treliça em pé no meio: o motor B fica no alto, na altura do copo + 3 cm.",
    "Alavanca: tijolo Technic 1x12 no motor B.",
    "Gancho em L na ponta: eixo de 4 para baixo, conector angular e eixo de 3 deitado (o 'pé' do L, virado para o robô).",
    "Os dois copos precisam estar em linha reta com a partida: este robô não faz curva."
  ],
  "programa": ["Estratégia 1: o gancho entra atrás do palito, dentro do copo.", "Estratégia 2: o gancho pega a ponta do palito que fica para fora do copo."],
  "blocos": [
    {
      "estrategia": "Gancho por trás (dentro do copo)",
      "descricao": "Funciona com o palito em qualquer posição em cima do copo. Exige precisão: o gancho não pode tocar a parede do copo.",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "motor", "txt": "motor {B} ir para posição 0 (alavanca na horizontal)"},
        {"t": "motor", "txt": "ligar motor {A} por 2 rotações a 30% (até o copo A)"},
        {"t": "motor", "txt": "ligar motor {A} por 0,4 rotação a 10% (gancho passa por cima do palito)"},
        {"t": "motor", "txt": "motor {B} ir para posição -25 graus (gancho desce dentro do copo, atrás do palito)"},
        {"t": "motor", "txt": "ligar motor {A} por -0,1 rotação a 8% (o pé do L vai para baixo do palito)"},
        {"t": "motor", "txt": "motor {B} ir para posição 20 graus (levanta o palito)"},
        {"t": "motor", "txt": "ligar motor {A} por 14 rotações a 25% (vai até o copo B, ≈ 2 m)"},
        {"t": "motor", "txt": "motor {B} ir para posição -15 graus (o pé inclina e o palito escorrega no copo B)"},
        {"t": "motor", "txt": "motor {B} ir para posição 20 graus"},
        {"t": "motor", "txt": "ligar motor {A} por -1,5 rotação a 25% (afasta mais de 15 cm)"},
        {"t": "som", "txt": "tocar som Tada no tablet"}
      ],
      "ajustes": ["2 rotações e 14 rotações: distâncias da arena ÷ 13,5 cm.", "-25 / 20 / -15 graus: teste devagar com um copo vazio.", "-0,1 rotação: só o suficiente para o pé do L ficar embaixo do palito."]
    },
    {
      "estrategia": "Gancho pela ponta (fora do copo)",
      "descricao": "Mais seguro para o copo: o gancho nem chega perto da parede. Só funciona se o palito ficar com uma ponta para fora da borda.",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "motor", "txt": "motor {B} ir para posição -10 graus (pé do L logo abaixo da altura da borda)"},
        {"t": "motor", "txt": "ligar motor {A} por 2,2 rotações a 15% (o pé passa embaixo da ponta do palito)"},
        {"t": "motor", "txt": "motor {B} ir para posição 20 graus (levanta)"},
        {"t": "motor", "txt": "ligar motor {A} por 14 rotações a 25%"},
        {"t": "motor", "txt": "motor {B} ir para posição -15 graus (solta no copo B)"},
        {"t": "motor", "txt": "motor {B} ir para posição 20 graus"},
        {"t": "motor", "txt": "ligar motor {A} por -1,5 rotação a 25%"}
      ],
      "ajustes": ["Confira antes se o palito sai da borda: se não sair, use a estratégia 1.", "2,2 rotações: até o pé ficar bem embaixo da ponta."]
    }
  ],
  "variacoes": ["Pé do L com mangueira flexível para o palito não rolar.", "Contrapeso na outra ponta da alavanca.", "Se os copos não estiverem em linha reta: troque o eixo das rodas por um motor em cada roda (aí não sobra porta para a alavanca: discutam outra solução)."],
  "desafio": "Leve o palito 3 vezes seguidas sem mexer o copo mais de 1 cm.",
  "pergunta": "Por que um robô que só anda reto pode ser uma boa escolha nesta prova?"
},
{
  "id": "fira-prime-treino",
  "kit": "prime",
  "titulo": "Robô de treino e calibração (Prime)",
  "nivel": 1,
  "tempo": 50,
  "tags": ["FIRA treino", "calibração", "todas as provas"],
  "missao": {"prova": "todas", "parte": "Medir e anotar os números que todas as outras ideias usam: cm por rotação, giro de 90°, parada na linha e pela distância", "pontos": "Não pontua sozinho: deixa os outros programas certos"},
  "medidas_cm": [16, 14.4, 10],
  "resumo": "Uma base simples que cabe em todas as provas, com os dois sensores e um botão. Serve para medir os números da sua arena e do seu robô antes de programar as missões.",
  "aprende": "Calibrar: medir de verdade em vez de chutar. Cada robô e cada piso são um pouco diferentes.",
  "pecas": [["Quadro 7x11", 1], ["Viga 11 furos", 2], ["Viga em L 3x5", 2], ["Pino com atrito", 16], ["Roda 57 x 14 com pneu", 2], ["Viga 3x5 com bola giratória", 1], ["Bola 19 mm", 1]],
  "eletronica": [["Hub grande SPIKE (6 portas)", 1], ["Motor médio SPIKE", 2], ["Sensor de cor SPIKE", 1], ["Sensor de distância SPIKE", 1], ["Sensor de força SPIKE", 1]],
  "portas": {"A": "Motor médio SPIKE", "B": "Motor médio SPIKE", "D": "Sensor de cor SPIKE", "E": "Sensor de distância SPIKE", "F": "Sensor de força SPIKE"},
  "passos": [
    "Base: quadro 7x11, motores médios A e B, rodas grandes, rodízio atrás.",
    "Sensor de cor (D) na frente, olhando o chão a 1 cm.",
    "Sensor de distância (E) na frente, olhando para frente.",
    "Sensor de força (F) em cima: é o botão para começar cada teste."
  ],
  "programa": ["Teste 1: cm por rotação e giro de 90°.", "Teste 2: parar na linha e parar pela distância."],
  "blocos": [
    {
      "estrategia": "Distância e giro",
      "descricao": "Anote os resultados numa tabela. Use os números nas missões.",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "movimento", "txt": "definir motores de movimento {A} e {B}"},
        {"t": "controle", "txt": "esperar até sensor de força {F} ser pressionado"},
        {"t": "movimento", "txt": "mover para frente 5 rotações a 40%"},
        {"t": "luz", "txt": "matriz do hub: escrever 'MEDIR' (meça com a trena e divida por 5 = cm por rotação)"},
        {"t": "controle", "txt": "esperar até sensor de força {F} ser pressionado"},
        {"t": "movimento", "txt": "mover direção 100 por 0,5 rotação a 30%"},
        {"t": "luz", "txt": "matriz do hub: escrever 'GIRO' (girou 90°? ajuste 0,5 para mais ou menos)"},
        {"t": "controle", "txt": "esperar até sensor de força {F} ser pressionado"},
        {"t": "controle", "txt": "repetir 4 vezes", "filhos": [
          {"t": "movimento", "txt": "mover direção 100 por 0,5 rotação a 30%"}
        ]},
        {"t": "luz", "txt": "matriz do hub: escrever 'VOLTA' (deu uma volta completa?)"}
      ],
      "ajustes": ["Anote: cm por rotação (≈ 17,6 cm).", "Anote: rotações para 90° (≈ 0,5).", "Repita em velocidades diferentes: 30%, 50%, 70%."]
    },
    {
      "estrategia": "Parar na linha e na distância",
      "descricao": "Descobre qual valor de cor/distância funciona na sua arena e quanto o robô 'passa do ponto'.",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "movimento", "txt": "definir motores de movimento {A} e {B}"},
        {"t": "controle", "txt": "esperar até sensor de força {F} ser pressionado"},
        {"t": "movimento", "txt": "iniciar mover para frente a 40%"},
        {"t": "controle", "txt": "esperar até sensor de cor {D} ver preto"},
        {"t": "movimento", "txt": "parar movimento"},
        {"t": "luz", "txt": "matriz do hub: escrever luz refletida do sensor de cor {D}"},
        {"t": "controle", "txt": "esperar até sensor de força {F} ser pressionado"},
        {"t": "movimento", "txt": "iniciar mover para frente a 40%"},
        {"t": "controle", "txt": "esperar até sensor de distância {E} mais perto que 10 cm"},
        {"t": "movimento", "txt": "parar movimento"},
        {"t": "luz", "txt": "matriz do hub: escrever distância do sensor de distância {E} em cm"}
      ],
      "ajustes": ["Quanto o robô passou da linha? Meça em 3 velocidades.", "Valor da luz refletida no preto e no branco: use a média como limite no seguidor de linha.", "Parou em 10 cm mesmo? Se parou em 7, o robô 'escorrega' 3 cm."]
    }
  ],
  "variacoes": ["Monte uma tabela no caderno e cole na parede do laboratório.", "Teste com a bateria cheia e quase vazia.", "Teste no piso da arena e no piso da sala."],
  "desafio": "Faça o robô andar exatamente 1 metro e parar com erro de até 1 cm.",
  "pergunta": "Por que o mesmo programa funciona num piso e não no outro?"
},
{
  "id": "fira-essential-treino",
  "kit": "essential",
  "titulo": "Robô de treino e calibração (Essential)",
  "nivel": 1,
  "tempo": 50,
  "tags": ["FIRA treino", "calibração", "todas as provas"],
  "missao": {"prova": "todas", "parte": "Medir cm por rotação e giro de 90° do Essential", "pontos": "Não pontua sozinho: deixa os outros programas certos"},
  "medidas_cm": [14.4, 12.8, 8],
  "resumo": "Base mínima com dois motores, para descobrir os números do Essential: quanto anda em uma rotação e quanto girar para virar 90°.",
  "aprende": "Calibrar, e entender por que medir rotações é melhor que medir tempo.",
  "pecas": [["Placa Technic 2x8", 2], ["Placa Technic 2x6", 2], ["Tijolo Technic 1x8", 2], ["Roda 43 x 14 com pneu", 2], ["Rodinha de skate", 1], ["Pino com atrito", 10]],
  "eletronica": [["Hub pequeno SPIKE (2 portas)", 1], ["Motor pequeno SPIKE", 2]],
  "portas": {"A": "Motor pequeno SPIKE", "B": "Motor pequeno SPIKE"},
  "passos": ["Base com placas Technic e um motor pequeno de cada lado (A e B).", "Rodinha de skate atrás.", "Faça uma marca na frente do robô (ponto de medida)."],
  "programa": ["Teste 1: cm por rotação.", "Teste 2: giro de 90° (no lugar e em curva aberta)."],
  "blocos": [
    {
      "estrategia": "Distância por rotação",
      "descricao": "Compare rotações e tempo: qual repete melhor?",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "movimento", "txt": "definir motores de movimento {A} e {B}"},
        {"t": "movimento", "txt": "mover para frente 5 rotações a 40%"},
        {"t": "controle", "txt": "esperar 5 segundos (meça e anote)"},
        {"t": "movimento", "txt": "mover para frente por 3 segundos a 40%"},
        {"t": "som", "txt": "tocar som Tada no tablet (meça de novo)"}
      ],
      "ajustes": ["Distância ÷ 5 = cm por rotação (≈ 13,5 cm).", "Rode 3 vezes: as rotações variam menos que o tempo?"]
    },
    {
      "estrategia": "Giro de 90°",
      "descricao": "Descobre o valor para virar exatamente um ângulo reto.",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "movimento", "txt": "definir motores de movimento {A} e {B}"},
        {"t": "movimento", "txt": "mover direção 100 por 0,6 rotação a 30% (giro no lugar)"},
        {"t": "controle", "txt": "esperar 3 segundos"},
        {"t": "controle", "txt": "repetir 4 vezes", "filhos": [
          {"t": "movimento", "txt": "mover direção 100 por 0,6 rotação a 30%"}
        ]},
        {"t": "controle", "txt": "esperar 3 segundos"},
        {"t": "movimento", "txt": "mover direção 50 por 1 rotação a 30% (curva aberta)"}
      ],
      "ajustes": ["0,6 rotação: ajuste até 4 giros darem uma volta completa.", "Curva aberta (direção 50): quanto o robô andou para o lado?"]
    }
  ],
  "variacoes": ["Para treinar parada na linha: troque o motor B pelo sensor de cor (o robô passa a andar só reto, com o motor A nas duas rodas).", "Teste com e sem peso em cima.", "Anote tudo numa tabela."],
  "desafio": "Faça um quadrado de 30 cm e volte ao ponto de partida.",
  "pergunta": "Por que o giro muda quando o piso escorrega mais?"
},
{
  "id": "fira-ev3-treino",
  "kit": "ev3",
  "titulo": "Robô de treino e calibração (EV3)",
  "nivel": 1,
  "tempo": 50,
  "tags": ["FIRA treino", "calibração", "giroscópio"],
  "missao": {"prova": "todas", "parte": "Medir cm por rotação, giro de 90° pelo giroscópio, parada na linha e pela distância", "pontos": "Não pontua sozinho: deixa os outros programas certos"},
  "medidas_cm": [20, 14.8, 14],
  "resumo": "Base EV3 compacta com cor, ultrassônico, giroscópio e um botão. Mede os números da arena para todas as missões.",
  "aprende": "Comparar giro por rotação da roda com giro medido pelo giroscópio.",
  "pecas": [["Viga 15 furos", 2], ["Viga 11 furos", 2], ["Viga em L 3x5", 2], ["Pino com atrito", 24], ["Pino longo com atrito", 6], ["Eixo 5", 2], ["Bucha", 2], ["Roda 43,2 x 26", 2], ["Pneu 56 x 28", 2], ["Bola de aço 18 mm (rodízio)", 1], ["Junta esférica de direção (encaixe)", 1]],
  "eletronica": [["Brick EV3", 1], ["Motor grande EV3", 2], ["Sensor de cor EV3", 1], ["Sensor giroscópio EV3", 1], ["Sensor ultrassônico EV3", 1], ["Sensor de toque EV3", 1], ["Cabo 25 cm EV3", 4], ["Cabo 35 cm EV3", 2]],
  "portas": {"B": "Motor grande EV3", "C": "Motor grande EV3", "1": "Sensor de toque EV3", "2": "Sensor giroscópio EV3", "3": "Sensor de cor EV3", "4": "Sensor ultrassônico EV3"},
  "passos": ["Base com motores grandes B e C bem juntos (cabe em meia A4: largura até 14,8 cm).", "Giroscópio (2) deitado e firme no meio.", "Sensor de cor (3) embaixo na frente; ultrassônico (4) olhando para frente.", "Sensor de toque (1) em cima: botão de começar."],
  "programa": ["Teste 1: distância e giro (rodas x giroscópio).", "Teste 2: parar na linha e pela distância."],
  "blocos": [
    {
      "estrategia": "Distância e giro",
      "descricao": "Compare o giro calculado pelas rodas com o giro medido pelo giroscópio.",
      "lista": [
        {"t": "evento", "txt": "quando o programa iniciar"},
        {"t": "controle", "txt": "esperar até sensor de toque {1} pressionado"},
        {"t": "movimento", "txt": "mover motores {B} e {C} 5 rotações a 40%"},
        {"t": "luz", "txt": "tela do Brick: escrever 'MEDIR' (distância ÷ 5)"},
        {"t": "controle", "txt": "esperar até sensor de toque {1} pressionado"},
        {"t": "sensor", "txt": "zerar ângulo do sensor giroscópio {2}"},
        {"t": "movimento", "txt": "ligar motores {B} e {C} girando no lugar a 20%"},
        {"t": "controle", "txt": "esperar até ângulo do sensor giroscópio {2} > 88"},
        {"t": "movimento", "txt": "parar motores {B} e {C}"},
        {"t": "luz", "txt": "tela do Brick: escrever ângulo do sensor giroscópio {2}"}
      ],
      "ajustes": ["Anote cm por rotação (≈ 17,6 cm).", "88 em vez de 90: o robô 'passa' um pouco ao parar. Ajuste até parar em 90.", "Velocidade do giro: mais devagar = mais preciso."]
    },
    {
      "estrategia": "Parar na linha e na distância",
      "descricao": "Descobre os limites de cor e de distância da arena.",
      "lista": [
        {"t": "evento", "txt": "quando o programa iniciar"},
        {"t": "controle", "txt": "esperar até sensor de toque {1} pressionado"},
        {"t": "movimento", "txt": "ligar motores {B} e {C} a 30%"},
        {"t": "controle", "txt": "esperar até luz refletida do sensor de cor {3} < 30"},
        {"t": "movimento", "txt": "parar motores {B} e {C}"},
        {"t": "luz", "txt": "tela do Brick: escrever luz refletida do sensor de cor {3}"},
        {"t": "controle", "txt": "esperar até sensor de toque {1} pressionado"},
        {"t": "movimento", "txt": "ligar motores {B} e {C} a 30%"},
        {"t": "controle", "txt": "esperar até sensor ultrassônico {4} < 10 cm"},
        {"t": "movimento", "txt": "parar motores {B} e {C}"},
        {"t": "luz", "txt": "tela do Brick: escrever distância do sensor ultrassônico {4}"}
      ],
      "ajustes": ["30: média entre a luz no preto e no branco da sua arena.", "Quantos cm o robô passou do ponto em cada velocidade?"]
    }
  ],
  "variacoes": ["Tabela de calibração na parede do laboratório.", "Compare 5 robôs EV3 diferentes: os números mudam?", "Teste com bateria cheia e fraca."],
  "desafio": "Faça um quadrado de 50 cm usando o giroscópio e volte ao ponto de partida.",
  "pergunta": "Por que o giroscópio acerta o giro melhor que contar rotações da roda?"
}
]);
