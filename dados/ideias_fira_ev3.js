// Missões FIRA — EV3 (45544, sem expansão). Prioridade baixa (foco no SPIKE): 2 ideias.
// Brick EV3: motores nas portas A-D, sensores nas portas 1-4. Roda 5,6 cm = 17,6 cm por volta.
// Blocos no estilo do EV3 Classroom (Scratch). {X} = porta. Validado por validar_ideias.py.
window.IDEIAS = (window.IDEIAS || []).concat([
{
  "id": "fira-ev3-argolas",
  "kit": "ev3",
  "titulo": "Torre de argolas com giroscópio",
  "nivel": 3,
  "tempo": 100,
  "tags": ["FIRA M3", "cremalheira impressa", "giroscópio"],
  "missao": {"prova": "M3", "parte": "Ir reto até a estação, enfiar argola e clipe na haste e voltar à partida", "pontos": "Mira 50 + 100 + 100 (voltar)"},
  "medidas_cm": [20, 16, 30],
  "resumo": "Base EV3 compacta que anda reto 'travada' no giroscópio. Um elevador com duas cremalheiras impressas emendadas leva o gancho até a haste.",
  "aprende": "Andar reto de verdade: o giroscópio mede quanto o robô desviou e o programa corrige a direção o tempo todo.",
  "pecas": [["Viga 15 furos", 4], ["Viga 13 furos", 2], ["Viga 9 furos", 2], ["Viga em T 3x3", 2], ["Viga em L 3x5", 2], ["Engrenagem 12 dentes dupla cônica", 1], ["Eixo 5", 3], ["Bucha", 4], ["Dente 1x3", 2], ["Pino com atrito", 40], ["Pino longo com atrito", 10], ["Roda 43,2 x 26", 2], ["Pneu 56 x 28", 2], ["Bola de aço 18 mm (rodízio)", 1], ["Junta esférica de direção (encaixe)", 1]],
  "pecas_impressas": [["Cremalheira LEGO impressa 3D (cópia da 64781)", 2, "testada e aprovada em 15/10/2026. Emendadas pela ponta (a segunda girada 180°)."]],
  "eletronica": [["Brick EV3", 1], ["Motor grande EV3", 2], ["Motor médio EV3", 1], ["Sensor giroscópio EV3", 1], ["Sensor ultrassônico EV3", 1], ["Sensor de toque EV3", 1], ["Cabo 25 cm EV3", 4], ["Cabo 35 cm EV3", 2]],
  "portas": {"B": "Motor grande EV3", "C": "Motor grande EV3", "A": "Motor médio EV3", "2": "Sensor giroscópio EV3", "4": "Sensor ultrassônico EV3", "1": "Sensor de toque EV3"},
  "passos": [
    "Base com os 2 motores grandes (B e C) bem juntos e o Brick em cima, para caber em 20 x 20 cm (25 furos). Rodízio atrás.",
    "Giroscópio (porta 2) deitado e firme no meio do robô: se ele balançar, a leitura erra.",
    "Torre com vigas de 15 em pé na frente. As duas cremalheiras impressas emendadas numa viga de 13 que desliza na torre.",
    "Motor médio (A) com a engrenagem de 12 dentes empurra a cremalheira. Gancho com os dentes 1x3 no alto.",
    "Ultrassônico (porta 4) na frente; sensor de toque (porta 1) atrás como botão de largada."
  ],
  "programa": ["Estratégia 1: anda reto corrigindo pelo giroscópio e para pelo ultrassônico.", "Estratégia 2: anda por rotações sem correção. Compare o desvio."],
  "blocos": [
    {
      "estrategia": "Reto pelo giroscópio",
      "descricao": "Corrige o desvio enquanto anda: chega bem alinhado com a haste.",
      "lista": [
        {"t": "evento", "txt": "quando o programa iniciar"},
        {"t": "controle", "txt": "esperar até sensor de toque {1} pressionado"},
        {"t": "sensor", "txt": "zerar ângulo do sensor giroscópio {2}"},
        {"t": "motor", "txt": "motor {A} girar 1440 graus a 40% (sobe o gancho)"},
        {"t": "controle", "txt": "repetir até sensor ultrassônico {4} < 9 cm", "filhos": [
          {"t": "movimento", "txt": "mover com motores {B} e {C}: direção = 0 - (ângulo do sensor giroscópio {2}) x 2, velocidade 30%"}
        ]},
        {"t": "movimento", "txt": "parar motores {B} e {C}"},
        {"t": "movimento", "txt": "mover motores {B} e {C} 0,25 rotação a 10% (a haste entra na argola)"},
        {"t": "motor", "txt": "motor {A} girar -150 graus (solta a argola)"},
        {"t": "movimento", "txt": "mover motores {B} e {C} -0,25 rotação a 10%"},
        {"t": "controle", "txt": "repetir até sensor ultrassônico {4} > 60 cm", "filhos": [
          {"t": "movimento", "txt": "mover com motores {B} e {C}: direção = 0 - (ângulo do sensor giroscópio {2}) x 2, velocidade -35%"}
        ]},
        {"t": "movimento", "txt": "parar motores {B} e {C}"},
        {"t": "som", "txt": "tocar som Cheering"}
      ],
      "ajustes": ["Fator 2 da correção: maior corrige mais forte, mas pode balançar.", "1440 graus (4 voltas ≈ 15 cm de subida): ajuste à altura da haste.", "60 cm na volta: distância da estação até a partida."]
    },
    {
      "estrategia": "Reto por rotações",
      "descricao": "Sem correção: mais simples, mas qualquer diferença entre as rodas faz o robô chegar torto.",
      "lista": [
        {"t": "evento", "txt": "quando o programa iniciar"},
        {"t": "controle", "txt": "esperar até sensor de toque {1} pressionado"},
        {"t": "motor", "txt": "motor {A} girar 1440 graus a 40%"},
        {"t": "movimento", "txt": "mover motores {B} e {C} 3 rotações a 30%"},
        {"t": "movimento", "txt": "mover motores {B} e {C} 0,25 rotação a 10%"},
        {"t": "motor", "txt": "motor {A} girar -150 graus"},
        {"t": "movimento", "txt": "mover motores {B} e {C} -3,25 rotações a 35%"},
        {"t": "som", "txt": "tocar som Cheering"}
      ],
      "ajustes": ["3 rotações ≈ 53 cm: troque pela distância da arena.", "Marque onde o robô chega em 5 tentativas e compare com a estratégia 1."]
    }
  ],
  "variacoes": ["Gancho duplo para levar argola e clipe.", "Volte usando a linha de partida: troque o toque pelo sensor de cor.", "Faça o giroscópio também conferir se o robô voltou de frente."],
  "desafio": "Chegue à haste 5 vezes seguidas sem encostar na caixa de leite.",
  "pergunta": "Por que dois motores iguais não andam exatamente igual?"
},
{
  "id": "fira-ev3-coletor",
  "kit": "ev3",
  "titulo": "Caçamba com empurrador linear",
  "nivel": 3,
  "tempo": 100,
  "tags": ["FIRA M2", "cremalheira impressa", "empurrador"],
  "missao": {"prova": "M2", "parte": "Coletar cubo e esfera e depositá-los empurrando para fora (um dos dois robôs da dupla)", "pontos": "Mira 20+10 (coleta) + 20+30 (depósito) + 50 (estacionar)"},
  "medidas_cm": [20, 17, 15],
  "resumo": "Caçamba aberta na frente: os itens entram quando o robô avança. No depósito, uma cremalheira impressa empurra tudo para fora em linha reta, sem o robô precisar girar.",
  "aprende": "Empurrador linear: cremalheira e pinhão transformam giro em empurrão reto e controlado.",
  "pecas": [["Viga 15 furos", 2], ["Viga 11 furos", 2], ["Viga 7 furos", 2], ["Viga em L 3x5", 4], ["Painel curvo (carenagem)", 2], ["Engrenagem 12 dentes dupla cônica", 1], ["Eixo 5", 3], ["Bucha", 4], ["Pino com atrito", 36], ["Pino longo com atrito", 8], ["Roda 43,2 x 26", 2], ["Pneu 56 x 28", 2], ["Bola de aço 18 mm (rodízio)", 1], ["Junta esférica de direção (encaixe)", 1]],
  "pecas_impressas": [["Cremalheira LEGO impressa 3D (cópia da 64781)", 1, "testada e aprovada em 15/10/2026. Deitada no fundo da caçamba, com uma viga de 7 de pé na ponta (o empurrador)."]],
  "eletronica": [["Brick EV3", 1], ["Motor grande EV3", 2], ["Motor médio EV3", 1], ["Sensor de cor EV3", 1], ["Sensor ultrassônico EV3", 1], ["Cabo 25 cm EV3", 3], ["Cabo 35 cm EV3", 2]],
  "portas": {"B": "Motor grande EV3", "C": "Motor grande EV3", "A": "Motor médio EV3", "3": "Sensor de cor EV3", "4": "Sensor ultrassônico EV3"},
  "passos": [
    "Base compacta com motores grandes B e C e rodízio. Limite: 20 x 20 cm.",
    "Caçamba na frente: vigas em L e painéis curvos formam um U aberto para frente.",
    "No fundo da caçamba, a cremalheira impressa deitada, com uma viga de 7 em pé na ponta: é a parede que empurra.",
    "Motor médio (A) embaixo da caçamba com a engrenagem de 12 dentes na cremalheira.",
    "Ultrassônico (4) em cima da caçamba; sensor de cor (3) embaixo para o quadrado vermelho."
  ],
  "programa": ["Estratégia 1: caminho decorado.", "Estratégia 2: procura girando com o ultrassônico."],
  "blocos": [
    {
      "estrategia": "Caminho decorado",
      "descricao": "Para itens em lugares fixos: rápido e previsível.",
      "lista": [
        {"t": "evento", "txt": "quando o programa iniciar"},
        {"t": "motor", "txt": "motor {A} girar -720 graus (empurrador todo para trás)"},
        {"t": "movimento", "txt": "mover motores {B} e {C} 2 rotações a 40%"},
        {"t": "movimento", "txt": "girar com motores {B} e {C} direção 100 por 0,5 rotação"},
        {"t": "movimento", "txt": "mover motores {B} e {C} 1,5 rotação a 30% (itens entram na caçamba)"},
        {"t": "controle", "txt": "repetir até sensor de cor {3} = vermelho", "filhos": [
          {"t": "movimento", "txt": "ligar motores {B} e {C} a 30%"}
        ]},
        {"t": "movimento", "txt": "parar motores {B} e {C}"},
        {"t": "motor", "txt": "motor {A} girar 720 graus a 50% (empurra os itens para o depósito)"},
        {"t": "motor", "txt": "motor {A} girar -720 graus"},
        {"t": "som", "txt": "tocar som Cheering"}
      ],
      "ajustes": ["720 graus = 2 voltas ≈ 7,5 cm de empurrão: não passe do fim da cremalheira.", "Rotações do trajeto: meça na arena (1 rotação ≈ 17,6 cm)."]
    },
    {
      "estrategia": "Procurar girando",
      "descricao": "Encontra os itens onde estiverem, mas gasta mais tempo.",
      "lista": [
        {"t": "evento", "txt": "quando o programa iniciar"},
        {"t": "variavel", "txt": "definir pegos = 0"},
        {"t": "controle", "txt": "repetir até pegos = 2", "filhos": [
          {"t": "movimento", "txt": "ligar motores {B} e {C} girando no lugar a 15%"},
          {"t": "controle", "txt": "esperar até sensor ultrassônico {4} < 40 cm"},
          {"t": "movimento", "txt": "ligar motores {B} e {C} para frente a 25%"},
          {"t": "controle", "txt": "esperar até sensor ultrassônico {4} < 5 cm"},
          {"t": "movimento", "txt": "mover motores {B} e {C} 0,4 rotação a 15%"},
          {"t": "variavel", "txt": "mudar pegos em 1"}
        ]},
        {"t": "controle", "txt": "repetir até sensor de cor {3} = vermelho", "filhos": [
          {"t": "movimento", "txt": "ligar motores {B} e {C} a 30%"}
        ]},
        {"t": "movimento", "txt": "parar motores {B} e {C}"},
        {"t": "motor", "txt": "motor {A} girar 720 graus a 50%"}
      ],
      "ajustes": ["40 cm de procura e 15% de giro: teste para não confundir item com parede.", "0,4 rotação: o quanto avançar para o item entrar todo."]
    }
  ],
  "variacoes": ["Dois andares de caçamba: cubo embaixo, esfera em cima.", "Empurrador com elástico (lançador): solta a cremalheira de repente.", "Volte ao quadrado vermelho de ré para o empurrador ficar virado para o depósito."],
  "desafio": "Deposite cubo e esfera e estacione em menos de 2 minutos.",
  "pergunta": "Empurrar com uma cremalheira ou virar a caçamba (basculante): qual derruba menos itens?"
}
]);
