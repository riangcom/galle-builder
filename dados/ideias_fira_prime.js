// Missões FIRA — SPIKE Prime (45678, sem expansão). Ideias novas, diferentes das 10 ideias base
// e dos modelos oficiais do app SPIKE. Medidas: 1 furo = 0,8 cm. Roda grande = 5,6 cm (17,6 cm por volta).
// Nomes dos blocos seguem o app SPIKE em português; podem variar um pouco conforme a versão do app.
// {X} = porta do hub. Validado por dados_kits/scripts/validar_ideias.py.
window.IDEIAS = (window.IDEIAS || []).concat([
{
  "id": "fira-prime-pneus",
  "kit": "prime",
  "titulo": "Trator de pneus com pá elevatória",
  "nivel": 3,
  "tempo": 100,
  "tags": ["FIRA M1", "cremalheira impressa", "pá"],
  "missao": {"prova": "M1", "parte": "Percurso até a linha vermelha + levar 3 pneus empilhados", "pontos": "Mira 50 (linha vermelha) + 25 por linha de progressão + 200 (3 pneus)"},
  "medidas_cm": [20.5, 14.4, 13],
  "resumo": "Robô baixo e estreito (cabe em meia folha A4) com uma pá na frente que sobe e desce numa cremalheira. A pá entra embaixo da pilha de pneus, levanta só a frente e leva tudo até a linha vermelha.",
  "aprende": "Cremalheira e pinhão: o giro do motor vira movimento reto (sobe e desce). E a regra da prova: no máximo metade do pneu pode ficar dentro do robô.",
  "pecas": [["Quadro 7x11", 1], ["Viga 15 furos", 2], ["Viga 9 furos", 2], ["Viga 7 furos", 2], ["Viga em L 3x5", 2], ["Painel 3x11", 2], ["Engrenagem 12 dentes dupla cônica", 2], ["Eixo 9", 1], ["Bucha", 4], ["Pino com atrito", 34], ["Pino longo com atrito", 6], ["Roda 57 x 14 com pneu", 2], ["Viga 3x5 com bola giratória", 1], ["Bola 19 mm", 1]],
  "pecas_impressas": [["Cremalheira LEGO impressa 3D (cópia da 64781)", 2, "testada e aprovada em 15/10/2026. Uma de cada lado da pá, presas em pé nas vigas de 9."]],
  "eletronica": [["Hub grande SPIKE (6 portas)", 1], ["Motor médio SPIKE", 2], ["Motor grande SPIKE", 1], ["Sensor de cor SPIKE", 1], ["Sensor de distância SPIKE", 1]],
  "portas": {"A": "Motor médio SPIKE", "B": "Motor médio SPIKE", "C": "Motor grande SPIKE", "D": "Sensor de cor SPIKE", "E": "Sensor de distância SPIKE"},
  "passos": [
    "Base: quadro 7x11 deitado, um motor médio de cada lado (portas A e B) com as rodas grandes. Largura máxima: 18 furos (14,4 cm).",
    "Rodízio atrás (viga com bola giratória + bola). O robô inteiro não pode passar de 26 furos de comprimento (21 cm) com a pá.",
    "Na frente, duas vigas de 9 em pé. Prenda uma cremalheira impressa em cada uma, com os dentes para dentro.",
    "Pá: dois painéis 3x11 presos numa viga de 15. Ela desliza entre as vigas em pé.",
    "Motor grande (porta C) gira um eixo de 9 com duas engrenagens de 12 dentes, uma em cada cremalheira: a pá sobe reto, sem entortar.",
    "Sensor de cor (D) embaixo, a 1 cm do chão, e sensor de distância (E) acima da pá, olhando para frente."
  ],
  "programa": [
    "Estratégia 1: segue a linha empurrando os pneus com a pá baixa e conta as linhas de progressão.",
    "Estratégia 2: desvia dos obstáculos com o sensor de distância e carrega os pneus com a pá um pouco levantada."
  ],
  "blocos": [
    {
      "estrategia": "Seguir a linha + empurrar",
      "descricao": "Mais rápida e simples. Funciona se a pista tiver uma linha para seguir e os obstáculos forem baixos.",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "movimento", "txt": "definir motores de movimento {A} e {B}"},
        {"t": "movimento", "txt": "definir 1 rotação de movimento = 17,6 cm"},
        {"t": "motor", "txt": "motor {C} ir para posição 0 (pá embaixo, encostando no chão)"},
        {"t": "variavel", "txt": "definir linhas = 0"},
        {"t": "luz", "txt": "matriz do hub: mostrar seta para frente"},
        {"t": "controle", "txt": "repetir até sensor de cor {D} ver vermelho", "filhos": [
          {"t": "controle", "txt": "se sensor de cor {D} ver azul (linha de progressão) então", "filhos": [
            {"t": "variavel", "txt": "mudar linhas em 1"},
            {"t": "som", "txt": "tocar bipe 72 por 0,1 segundo"},
            {"t": "movimento", "txt": "mover para frente 2 cm a 35% (para não contar a mesma linha de novo)"}
          ]},
          {"t": "controle", "txt": "se sensor de cor {D} ver preto então", "filhos": [
            {"t": "movimento", "txt": "iniciar mover com direção 30 a 35%"}
          ], "senao": [
            {"t": "movimento", "txt": "iniciar mover com direção -30 a 35%"}
          ]}
        ]},
        {"t": "movimento", "txt": "parar movimento"},
        {"t": "luz", "txt": "matriz do hub: escrever linhas"},
        {"t": "som", "txt": "tocar som Vitória até o fim"}
      ],
      "ajustes": ["Velocidade 35%: mais rápido escorrega a pilha de pneus.", "Direção 30: mais alto = curva mais fechada, porém mais zigue-zague.", "Cor das linhas de progressão (azul é um exemplo: confira na arena).", "17,6 cm por rotação: confira medindo 1 volta da roda."]
    },
    {
      "estrategia": "Desviar de obstáculos + carregar",
      "descricao": "Mais segura quando há obstáculos no caminho. A pá levanta a frente da pilha (no máximo metade do pneu dentro do robô).",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "movimento", "txt": "definir motores de movimento {A} e {B}"},
        {"t": "motor", "txt": "definir velocidade do motor {C} = 30%"},
        {"t": "motor", "txt": "motor {C} ir para posição 0 (pá embaixo)"},
        {"t": "movimento", "txt": "mover para frente 12 cm a 30% (pá entra embaixo da pilha)"},
        {"t": "motor", "txt": "ligar motor {C} por 120 graus (levanta só a frente dos pneus)"},
        {"t": "controle", "txt": "repetir até sensor de cor {D} ver vermelho", "filhos": [
          {"t": "controle", "txt": "se sensor de distância {E} mais perto que 12 cm então", "filhos": [
            {"t": "movimento", "txt": "parar movimento"},
            {"t": "movimento", "txt": "mover direção 100 por 0,35 rotação (vira à direita)"},
            {"t": "movimento", "txt": "mover para frente 15 cm a 35%"},
            {"t": "movimento", "txt": "mover direção -100 por 0,35 rotação (volta ao rumo)"}
          ], "senao": [
            {"t": "movimento", "txt": "iniciar mover para frente a 40%"}
          ]}
        ]},
        {"t": "movimento", "txt": "parar movimento"},
        {"t": "motor", "txt": "ligar motor {C} por -120 graus (abaixa e solta os pneus)"},
        {"t": "movimento", "txt": "mover para trás 3 cm"},
        {"t": "som", "txt": "tocar som Vitória até o fim"}
      ],
      "ajustes": ["120 graus de pá: teste com os 3 pneus; se cair, levante menos.", "12 cm até o obstáculo: depende da velocidade.", "0,35 rotação ≈ 45° de giro: calibre girando no lugar e medindo."]
    }
  ],
  "variacoes": ["Comece com 1 pneu, depois 2, depois 3: cada pneu a mais muda o equilíbrio.", "Troque a pá por uma gaiola de 3 vigas que segura a pilha pelos lados.", "Some as duas estratégias: siga a linha, mas pare e desvie se o sensor de distância vir algo."],
  "desafio": "Chegue à linha vermelha com os 3 pneus em menos de 60 segundos.",
  "pergunta": "Empurrar ou carregar: qual deixou cair menos pneus? E qual foi mais rápida?"
},
{
  "id": "fira-prime-coletor",
  "kit": "prime",
  "titulo": "Gaiola caçadora de cubo e esfera",
  "nivel": 3,
  "tempo": 100,
  "tags": ["FIRA M2", "coleta", "dupla de robôs"],
  "missao": {"prova": "M2", "parte": "Coletar 1 cubo + 1 esfera, depositar e estacionar no quadrado vermelho (robô parceiro: Essential 'Coletor varredor')", "pontos": "Mira 20+10 (coleta) + 20+30 (depósito) + 30 (bônus cubo+esfera) + 50 (os dois estacionados)"},
  "medidas_cm": [19.2, 16, 14],
  "resumo": "Robô com uma gaiola na frente que tem dois compartimentos: um para o cubo e outro para a esfera. Uma porta basculante fecha a gaiola e abre de novo no depósito.",
  "aprende": "Procurar um objeto girando e medindo distância, e organizar uma missão em etapas com variáveis.",
  "pecas": [["Quadro 11x15", 1], ["Viga 15 furos", 2], ["Viga 11 furos", 2], ["Viga 7 furos", 4], ["Viga em L 3x5", 4], ["Viga em T 3x3", 2], ["Engrenagem 12 dentes dupla cônica", 1], ["Engrenagem 36 dentes dupla cônica", 1], ["Eixo 7", 2], ["Bucha", 4], ["Pino com atrito", 40], ["Pino longo com atrito", 6], ["Roda 57 x 14 com pneu", 2], ["Viga 3x5 com bola giratória", 1], ["Bola 19 mm", 1]],
  "eletronica": [["Hub grande SPIKE (6 portas)", 1], ["Motor médio SPIKE", 2], ["Motor grande SPIKE", 1], ["Sensor de cor SPIKE", 1], ["Sensor de distância SPIKE", 1]],
  "portas": {"A": "Motor médio SPIKE", "B": "Motor médio SPIKE", "C": "Motor grande SPIKE", "D": "Sensor de cor SPIKE", "E": "Sensor de distância SPIKE"},
  "passos": [
    "Base com o quadro 11x15 deitado, motores médios A e B e rodízio atrás. Limite: 25 furos (20 cm) em cada direção, contando a gaiola.",
    "Gaiola: vigas de 7 em pé e vigas em L formam dois 'boxes' lado a lado na frente do robô (um do tamanho do cubo, outro da esfera).",
    "Porta: viga de 15 presa num eixo de 7 que atravessa a frente. Motor grande (C) gira a engrenagem de 12, que gira a de 36 no eixo da porta (3 vezes mais força).",
    "Sensor de distância (E) no meio, logo acima da porta. Sensor de cor (D) embaixo, para achar o quadrado vermelho."
  ],
  "programa": ["Estratégia 1: varre o labirinto em zigue-zague em caminho decorado.", "Estratégia 2: gira no lugar procurando o objeto mais perto e vai direto até ele."],
  "blocos": [
    {
      "estrategia": "Caminho decorado (varredura)",
      "descricao": "Previsível: o robô faz sempre o mesmo trajeto, medido antes na arena. Bom quando os itens ficam em lugares fixos.",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "movimento", "txt": "definir motores de movimento {A} e {B}"},
        {"t": "motor", "txt": "motor {C} ir para posição 0 (porta aberta, para cima)"},
        {"t": "movimento", "txt": "mover para frente 40 cm a 40%"},
        {"t": "movimento", "txt": "mover direção 100 por 0,5 rotação (vira 90° à direita)"},
        {"t": "movimento", "txt": "mover para frente 25 cm a 30% (entra o cubo)"},
        {"t": "movimento", "txt": "mover direção -100 por 0,5 rotação"},
        {"t": "movimento", "txt": "mover para frente 25 cm a 30% (entra a esfera)"},
        {"t": "motor", "txt": "ligar motor {C} por 100 graus (fecha a porta)"},
        {"t": "movimento", "txt": "mover para trás 25 cm a 40%"},
        {"t": "movimento", "txt": "mover direção 100 por 1 rotação (meia-volta)"},
        {"t": "controle", "txt": "repetir até sensor de cor {D} ver vermelho", "filhos": [
          {"t": "movimento", "txt": "iniciar mover para frente a 30%"}
        ]},
        {"t": "movimento", "txt": "parar movimento"},
        {"t": "motor", "txt": "ligar motor {C} por -100 graus (abre a porta: depósito)"},
        {"t": "luz", "txt": "matriz do hub: mostrar coração"}
      ],
      "ajustes": ["Todas as distâncias (40 e 25 cm) e giros: meça na arena de treino.", "0,5 rotação ≈ 90° no lugar: confira com transferidor.", "100 graus da porta: deve fechar sem esmagar a esfera."]
    },
    {
      "estrategia": "Caçador (procura com o sensor)",
      "descricao": "Mais esperta: funciona mesmo se os itens mudarem de lugar. Mais difícil de acertar no tempo.",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "movimento", "txt": "definir motores de movimento {A} e {B}"},
        {"t": "variavel", "txt": "definir pegos = 0"},
        {"t": "motor", "txt": "motor {C} ir para posição 0 (porta aberta)"},
        {"t": "controle", "txt": "repetir até pegos = 2", "filhos": [
          {"t": "movimento", "txt": "iniciar mover com direção 100 a 20% (gira devagar procurando)"},
          {"t": "controle", "txt": "esperar até sensor de distância {E} mais perto que 40 cm"},
          {"t": "movimento", "txt": "parar movimento"},
          {"t": "movimento", "txt": "iniciar mover para frente a 30%"},
          {"t": "controle", "txt": "esperar até sensor de distância {E} mais perto que 4 cm"},
          {"t": "movimento", "txt": "mover para frente 6 cm a 20% (item entra na gaiola)"},
          {"t": "movimento", "txt": "parar movimento"},
          {"t": "variavel", "txt": "mudar pegos em 1"},
          {"t": "som", "txt": "tocar bipe 60 por 0,2 segundo"}
        ]},
        {"t": "motor", "txt": "ligar motor {C} por 100 graus (fecha a porta)"},
        {"t": "controle", "txt": "repetir até sensor de cor {D} ver vermelho", "filhos": [
          {"t": "controle", "txt": "se sensor de distância {E} mais perto que 10 cm então", "filhos": [
            {"t": "movimento", "txt": "mover direção 100 por 0,5 rotação (desvia da parede)"}
          ], "senao": [
            {"t": "movimento", "txt": "iniciar mover para frente a 35%"}
          ]}
        ]},
        {"t": "movimento", "txt": "parar movimento"},
        {"t": "motor", "txt": "ligar motor {C} por -100 graus (depósito)"}
      ],
      "ajustes": ["40 cm de procura: maior acha mais longe, mas confunde com a parede.", "Velocidade do giro 20%: mais rápido 'passa' do objeto.", "4 cm: distância em que o item fica na boca da gaiola."]
    }
  ],
  "variacoes": ["Combine com o robô parceiro (Essential): cada um leva um cubo e uma esfera para ganhar o bônus.", "Use a cor do item (sensor de cor dentro da gaiola) para decidir em qual box guardar.", "Troque a porta por uma rampa que levanta e despeja (caçamba basculante)."],
  "desafio": "Faça os dois robôs terminarem estacionados nos quadrados vermelhos antes de 3 minutos.",
  "pergunta": "Por que a regra exige que os dois robôs peguem o mesmo tipo de item? Como vocês dividiram o trabalho?"
},
{
  "id": "fira-prime-argolas",
  "kit": "prime",
  "titulo": "Elevador de argolas com cremalheira",
  "nivel": 3,
  "tempo": 100,
  "tags": ["FIRA M3", "cremalheira impressa", "elevador"],
  "missao": {"prova": "M3", "parte": "Enfiar argola e clipe na haste das estações e voltar ao início", "pontos": "Mira 50 (argola) + 100 (clipe) + 100 (voltar à partida)"},
  "medidas_cm": [19.2, 15.2, 28],
  "resumo": "Um elevador vertical com a cremalheira impressa leva um gancho até a altura da haste. O robô encosta devagar, a haste entra na argola, o gancho desce e a argola fica pendurada. Tem montagem em 3D passo a passo.",
  "aprende": "Movimento linear preciso: cada volta da engrenagem de 12 dentes sobe 12 dentes da cremalheira (cerca de 3,8 cm).",
  "pecas": [["Quadro 11x15", 1], ["Quadro 5x7", 2], ["Viga 15 furos", 1], ["Viga 11 furos", 2], ["Viga 3 furos", 1], ["Viga em L 3x5", 2], ["Engrenagem 12 dentes dupla cônica", 1], ["Eixo 7", 1], ["Eixo 5", 2], ["Bucha", 1], ["Pino com atrito", 32], ["Pino longo com atrito", 2], ["Pino longo com atrito + eixo 2", 1], ["Roda 57 x 14 com pneu", 2], ["Viga 3x5 com bola giratória", 1], ["Bola 19 mm", 1]],
  "pecas_impressas": [["Cremalheira LEGO impressa 3D (cópia da 64781)", 1, "testada e aprovada em 15/10/2026. Uma dá cerca de 7 cm de curso (gancho de 11 a 18 cm do chão). Para mais altura, emende a segunda girada 180°."]],
  "eletronica": [["Hub grande SPIKE (6 portas)", 1], ["Motor médio SPIKE", 2], ["Motor grande SPIKE", 1], ["Sensor de cor SPIKE", 1], ["Sensor de distância SPIKE", 1]],
  "portas": {"A": "Motor médio SPIKE", "B": "Motor médio SPIKE", "C": "Motor grande SPIKE", "D": "Sensor de cor SPIKE", "E": "Sensor de distância SPIKE"},
  "passos": [
    "Base: quadro 11x15 deitado, motores médios A e B embaixo com as rodas na frente, rodízio atrás. Limite: 20 x 20 cm.",
    "Hub em cima de duas vigas de 11 atravessadas.",
    "Torre: duas vigas em L 3x5 deitadas saindo para frente e dois quadros 5x7 em pé em cima delas.",
    "Carrinho: a cremalheira impressa presa numa viga de 15, deslizando entre os quadros 5x7.",
    "Motor grande (C) de pé ao lado da torre: o eixo de 7 passa pelos dois quadros com a engrenagem de 12 dentes no meio, nos dentes da cremalheira.",
    "No alto do carrinho, um pino-eixo apontando para frente é o gancho da argola. Sensor de distância (E) na lateral da torre; sensor de cor (D) atrás."
  ],
  "programa": ["Estratégia 1: para em frente à estação pelo sensor de distância.", "Estratégia 2: para pela distância medida (rotações), sem sensor, e volta pelo mesmo caminho."],
  "blocos": [
    {
      "estrategia": "Parar pelo sensor de distância",
      "descricao": "Corrige sozinha se o robô sair um pouco torto. Precisa de calibração da distância da haste.",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "movimento", "txt": "definir motores de movimento {A} e {B}"},
        {"t": "motor", "txt": "definir velocidade do motor {C} = 40%"},
        {"t": "motor", "txt": "ligar motor {C} por 500 graus (sobe o gancho até a altura da haste)"},
        {"t": "movimento", "txt": "iniciar mover para frente a 25%"},
        {"t": "controle", "txt": "esperar até sensor de distância {E} mais perto que 9 cm"},
        {"t": "movimento", "txt": "mover para frente 4 cm a 10% (a haste entra na argola)"},
        {"t": "motor", "txt": "ligar motor {C} por -150 graus (gancho desce, argola fica na haste)"},
        {"t": "movimento", "txt": "mover para trás 8 cm a 20%"},
        {"t": "motor", "txt": "ligar motor {C} por -350 graus (gancho volta para baixo)"},
        {"t": "controle", "txt": "repetir até sensor de cor {D} ver verde (área de partida)", "filhos": [
          {"t": "movimento", "txt": "iniciar mover para trás a 35%"}
        ]},
        {"t": "movimento", "txt": "parar movimento"},
        {"t": "som", "txt": "tocar som Vitória até o fim"}
      ],
      "ajustes": ["500 graus: cada volta (360°) sobe cerca de 3,8 cm. Com 1 cremalheira o curso máximo é de cerca de 680 graus (gancho de 11 a 18 cm do chão).", "9 cm e 4 cm: dependem do comprimento do gancho.", "-150 graus: o suficiente para a argola soltar sem puxar a haste.", "Cor da área de partida (verde é um exemplo)."]
    },
    {
      "estrategia": "Caminho medido (odometria)",
      "descricao": "Sem sensor: o robô anda distâncias exatas e volta de ré pelo mesmo caminho. Simples, mas qualquer escorregão vira erro.",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "movimento", "txt": "definir motores de movimento {A} e {B}"},
        {"t": "movimento", "txt": "definir velocidade de movimento = 30%"},
        {"t": "motor", "txt": "ligar motor {C} por 500 graus"},
        {"t": "movimento", "txt": "mover para frente 52 cm"},
        {"t": "movimento", "txt": "mover para frente 4 cm a 10%"},
        {"t": "motor", "txt": "ligar motor {C} por -150 graus"},
        {"t": "movimento", "txt": "mover para trás 56 cm (volta à partida = +100)"},
        {"t": "motor", "txt": "ligar motor {C} por -350 graus"},
        {"t": "luz", "txt": "matriz do hub: mostrar coração"}
      ],
      "ajustes": ["52 cm: meça da área de partida até 8 cm antes da estação.", "Velocidade 30%: mais baixa = menos escorregão.", "Confira o alinhamento de saída com uma marca no chão."]
    }
  ],
  "variacoes": ["Gancho duplo: leve a argola e o clipe juntos e solte um de cada vez (desça 150 graus, recue, desça mais 150).", "Lançador: troque o gancho por uma colher com elástico, presa no topo do elevador.", "Use o sensor de força como botão de 'pronto' para largar na hora certa."],
  "desafio": "Coloque argola e clipe na mesma estação e volte à partida: 250 pontos.",
  "pergunta": "Por que o elevador com cremalheira é melhor que um braço que gira para colocar a argola reta na haste?"
},
{
  "id": "fira-prime-palito",
  "kit": "prime",
  "titulo": "Pinça de pregador para o palito",
  "nivel": 3,
  "tempo": 100,
  "tags": ["FIRA M4", "cremalheira impressa", "precisão"],
  "missao": {"prova": "M4", "parte": "Tirar o palito do copo A, levar ao copo B sem tocar no chão, soltar dentro e se afastar 15 cm", "pontos": "Mira a prova completa sem derrubar nem mover os copos (tempo só desempata)"},
  "medidas_cm": [22, 16, 24],
  "resumo": "Elevador com cremalheira impressa e uma pinça 'de pregador' que fecha sozinha com elástico: ela desce sobre o palito, abre ao encostar e se fecha em volta dele. No copo B, sobe até um batente que abre a pinça e o palito cai dentro.",
  "aprende": "Mecanismo passivo: menos motores, mais engenharia. E aproximação lenta e precisa para não mexer nos copos.",
  "pecas": [["Quadro 11x15", 1], ["Viga 15 furos", 2], ["Viga 13 furos", 2], ["Viga dobrada 7 furos", 2], ["Viga em T 3x3", 2], ["Viga 3 furos", 2], ["Elástico 33 mm", 2], ["Dente 1x3", 2], ["Engrenagem 12 dentes dupla cônica", 1], ["Eixo 5", 1], ["Bucha", 4], ["Pino com atrito", 34], ["Pino-eixo sem atrito", 4], ["Pino longo com atrito", 6], ["Roda 57 x 14 com pneu", 2], ["Viga 3x5 com bola giratória", 1], ["Bola 19 mm", 1]],
  "pecas_impressas": [["Cremalheira LEGO impressa 3D (cópia da 64781)", 1, "testada e aprovada em 15/10/2026. Uma basta: o elevador sobe cerca de 10 cm."]],
  "eletronica": [["Hub grande SPIKE (6 portas)", 1], ["Motor médio SPIKE", 2], ["Motor grande SPIKE", 1], ["Sensor de distância SPIKE", 1], ["Sensor de força SPIKE", 1]],
  "portas": {"A": "Motor médio SPIKE", "B": "Motor médio SPIKE", "C": "Motor grande SPIKE", "E": "Sensor de distância SPIKE", "F": "Sensor de força SPIKE"},
  "passos": [
    "Base com motores médios A e B e rodízio. Limite: cubo de 25 cm (31 furos), contando o elevador todo para cima.",
    "Elevador: viga de 13 com a cremalheira impressa, deslizando entre duas vigas de 15 em pé. Motor grande (C) com a engrenagem de 12 dentes.",
    "Pinça: duas vigas dobradas de 7 presas com pino sem atrito (giram livres), unidas embaixo por um elástico que as mantém fechadas. Pontas com os dentes 1x3 chanfrados para fora: ao descer sobre o palito, ele força a pinça a abrir e ela 'morde'.",
    "Batente: uma viga de 3 presa na torre, na altura máxima. Quando a pinça sobe até lá, as pontas de cima das vigas batem nela e a pinça abre.",
    "Sensor de distância (E) baixo, olhando para frente, para encostar nos copos sem bater. Sensor de força (F) atrás: é o botão de largada."
  ],
  "programa": ["Estratégia 1: aproximação pelo sensor de distância, devagar.", "Estratégia 2: trajeto medido (odometria) com calibração de ida."],
  "blocos": [
    {
      "estrategia": "Aproximação pelo sensor",
      "descricao": "Mais segura para os copos (parada pelo sensor). Use quando os copos podem estar um pouco fora do lugar marcado.",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "controle", "txt": "esperar até sensor de força {F} ser pressionado (largada)"},
        {"t": "movimento", "txt": "definir motores de movimento {A} e {B}"},
        {"t": "motor", "txt": "definir velocidade do motor {C} = 25%"},
        {"t": "motor", "txt": "ligar motor {C} por 900 graus (pinça na altura de passagem, acima do copo)"},
        {"t": "movimento", "txt": "iniciar mover para frente a 25%"},
        {"t": "controle", "txt": "esperar até sensor de distância {E} mais perto que 15 cm"},
        {"t": "movimento", "txt": "iniciar mover para frente a 8%"},
        {"t": "controle", "txt": "esperar até sensor de distância {E} mais perto que 5 cm"},
        {"t": "movimento", "txt": "parar movimento"},
        {"t": "motor", "txt": "ligar motor {C} por -500 graus (pinça desce e morde o palito)"},
        {"t": "motor", "txt": "ligar motor {C} por 250 graus (sobe só um pouco: segura, mas não chega no batente)"},
        {"t": "movimento", "txt": "mover para trás 10 cm a 15%"},
        {"t": "movimento", "txt": "mover direção 100 por 1 rotação (meia-volta)"},
        {"t": "movimento", "txt": "iniciar mover para frente a 30%"},
        {"t": "controle", "txt": "esperar até sensor de distância {E} mais perto que 15 cm (copo B)"},
        {"t": "movimento", "txt": "iniciar mover para frente a 8%"},
        {"t": "controle", "txt": "esperar até sensor de distância {E} mais perto que 5 cm"},
        {"t": "movimento", "txt": "parar movimento"},
        {"t": "motor", "txt": "ligar motor {C} por 400 graus (sobe até o batente: pinça abre, palito cai no copo)"},
        {"t": "controle", "txt": "esperar 1 segundo"},
        {"t": "movimento", "txt": "mover para trás 20 cm a 30% (afasta mais de 15 cm)"},
        {"t": "luz", "txt": "matriz do hub: mostrar carinha feliz"}
      ],
      "ajustes": ["900 / -500 / 250 / 400 graus: dependem da altura do copo. Cada volta sobe cerca de 3,8 cm.", "5 cm de parada: a pinça precisa ficar bem em cima do palito. Teste com o copo vazio.", "Velocidade final 8%: devagar para não empurrar o copo (mais de 5 cm = fim de prova).", "Meia-volta: troque por ir de ré se os copos estiverem em linha reta."]
    },
    {
      "estrategia": "Trajeto medido",
      "descricao": "Mais rápida se os copos estiverem sempre no mesmo lugar. Arriscada: um erro de 2 cm já pode derrubar o copo.",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "controle", "txt": "esperar até sensor de força {F} ser pressionado"},
        {"t": "movimento", "txt": "definir motores de movimento {A} e {B}"},
        {"t": "motor", "txt": "ligar motor {C} por 900 graus"},
        {"t": "movimento", "txt": "mover para frente 30 cm a 20%"},
        {"t": "motor", "txt": "ligar motor {C} por -500 graus"},
        {"t": "motor", "txt": "ligar motor {C} por 250 graus"},
        {"t": "movimento", "txt": "mover para trás 10 cm a 15%"},
        {"t": "movimento", "txt": "mover direção 100 por 1 rotação"},
        {"t": "movimento", "txt": "mover para frente 190 cm a 35%"},
        {"t": "motor", "txt": "ligar motor {C} por 400 graus"},
        {"t": "movimento", "txt": "mover para trás 20 cm a 30%"}
      ],
      "ajustes": ["30 cm e 190 cm: meça na arena (os copos ficam a 2 m).", "Faça 5 tentativas e anote onde o robô parou: se variar mais de 2 cm, use a estratégia 1."]
    }
  ],
  "variacoes": ["Troque a pinça de pregador por uma pinça com pinhão entre duas cremalheiras (precisa de mais um motor: tire o sensor de força e use a porta F).", "Ponta da pinça com mangueira flexível para não escorregar o palito.", "Desça a pinça em duas etapas: rápido até perto, devagar no final."],
  "desafio": "Complete a prova 3 vezes seguidas sem mexer nos copos.",
  "pergunta": "O que é mais difícil: pegar o palito ou soltar no copo? Por quê?"
}
]);
