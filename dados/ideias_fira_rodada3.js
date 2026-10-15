// Missões FIRA — 3ª rodada (15/10/2026): ideia de 2 robôs que dependem de sincronização.
// Robô 1 = SPIKE Prime com a gaiola (mesma montagem 3D da "Gaiola caçadora"); robô 2 = SPIKE Essential.
// {X} = porta do hub de cada robô. Validado por dados_kits/scripts/validar_ideias.py (inclusive o robô 2).
window.IDEIAS = (window.IDEIAS || []).concat([
{
  "id": "fira-prime-sincronia",
  "kit": "prime",
  "titulo": "Dupla sincronizada: sinal amarelo",
  "nivel": 3,
  "tempo": 100,
  "tags": ["FIRA M2", "2 robôs", "sincronização"],
  "modelo3d": "fira-prime-coletor",
  "missao": {"prova": "M2", "parte": "Os dois robôs se esperam: o Prime coleta e dá o sinal; o Essential só sai quando vê o sinal; o Prime só estaciona depois que o Essential passa", "pontos": "Mira o bônus de cada robô com cubo+esfera (+30) e os dois estacionados (+50), sem os robôs baterem um no outro"},
  "medidas_cm": [18.4, 17.6, 9.6],
  "resumo": "Dois robôs que conversam sem fio nenhum. O Prime levanta a porta amarela da gaiola na frente do sensor de cor do Essential: é o sinal de 'pode ir'. O Essential sai, e quando ele passa na frente do sensor de distância do Prime, o Prime sabe que pode estacionar.",
  "aprende": "Sincronização: um robô espera um sinal do outro (por cor ou por distância) em vez de confiar só no tempo. É o mesmo problema de semáforos e de robôs de fábrica que dividem espaço.",
  "robo1_titulo": "Robô 1 – SPIKE Prime (gaiola)",
  "pecas": [["Quadro 11x15", 1], ["Viga conectora 3x3", 2], ["Viga em L 3x5", 2], ["Viga em L 2x4", 2], ["Viga 11 furos", 2], ["Viga 3 furos", 1], ["Eixo 11", 2], ["Eixo 5", 2], ["Bucha", 2], ["Pino com atrito", 25], ["Pino longo com atrito", 4], ["Roda 57 x 14 com pneu", 2], ["Viga 3x5 com bola giratória", 1], ["Bola 19 mm", 1]],
  "eletronica": [["Hub grande SPIKE (6 portas)", 1], ["Motor médio SPIKE", 2], ["Motor grande SPIKE", 1], ["Sensor de cor SPIKE", 1], ["Sensor de distância SPIKE", 1]],
  "portas": {"A": "Motor médio SPIKE", "B": "Motor médio SPIKE", "C": "Motor grande SPIKE", "D": "Sensor de cor SPIKE", "E": "Sensor de distância SPIKE"},
  "robo2": {
    "kit": "essential",
    "titulo": "Robô 2 – SPIKE Essential (anda reto)",
    "pecas": [["Placa Technic 2x8", 2], ["Tijolo Technic 1x8", 2], ["Eixo 8", 1], ["Eixo 6", 1], ["Bucha", 4], ["Roda 43 x 14 com pneu", 2], ["Roda de cadeira de rodas", 2], ["Placa lisa 2x4", 2], ["Pino com atrito", 10]],
    "eletronica": [["Hub pequeno SPIKE (2 portas)", 1], ["Motor pequeno SPIKE", 1], ["Sensor de cor SPIKE", 1]],
    "portas": {"A": "Motor pequeno SPIKE", "B": "Sensor de cor SPIKE"}
  },
  "passos": [
    "Robô 1: monte a 'Gaiola caçadora' (veja a montagem 3D abaixo). A porta é feita de vigas em L 2x4 AMARELAS: elas são o sinal.",
    "Robô 2: chassi do Essential com o motor A no eixo de trás (anda reto) e o sensor de cor (B) virado para o LADO, na altura da porta do Prime levantada.",
    "Na arena, marque o ponto de encontro: o Essential para ali, de lado para o caminho do Prime.",
    "Teste o sinal antes: levante a porta do Prime a 1 ou 2 cm do sensor do Essential e veja se ele lê 'amarelo'."
  ],
  "programa": ["Estratégia 1: sinal por cor (Prime → Essential) e por distância (Essential → Prime).", "Estratégia 2: só por tempo calibrado. Compare qual falha menos."],
  "blocos": [
    {
      "estrategia": "Sinal por cor e distância",
      "descricao": "Os robôs se esperam de verdade: se um atrasar, o outro espera. Mais confiável, mas o sinal precisa ser testado na luz da arena.",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "movimento", "txt": "definir motores de movimento {A} e {B}"},
        {"t": "motor", "txt": "motor {C} ir para posição 0 (porta aberta, para cima)"},
        {"t": "movimento", "txt": "mover para frente 40 cm a 40% (coleta cubo e esfera)"},
        {"t": "motor", "txt": "ligar motor {C} por 100 graus (fecha a porta: itens presos)"},
        {"t": "movimento", "txt": "mover para frente 30 cm a 35% (até o ponto de encontro, ao lado do Essential)"},
        {"t": "motor", "txt": "ligar motor {C} por -100 graus (SINAL: porta amarela sobe na frente do sensor do Essential)"},
        {"t": "luz", "txt": "matriz do hub: mostrar seta (esperando o parceiro)"},
        {"t": "controle", "txt": "esperar até sensor de distância {E} mais perto que 15 cm (o Essential passou na frente)"},
        {"t": "controle", "txt": "esperar até sensor de distância {E} mais longe que 30 cm (ele já foi embora)"},
        {"t": "controle", "txt": "repetir até sensor de cor {D} ver vermelho", "filhos": [
          {"t": "movimento", "txt": "iniciar mover para frente a 30%"}
        ]},
        {"t": "movimento", "txt": "parar movimento (estacionado: depósito e bônus)"},
        {"t": "som", "txt": "tocar som Vitória"}
      ],
      "lista2": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "motor", "txt": "ligar motor {A} por 2 rotações a 40% (vai até o ponto de encontro)"},
        {"t": "luz", "txt": "luz do hub: laranja (esperando o sinal)"},
        {"t": "controle", "txt": "esperar até sensor de cor {B} ver amarelo (a porta do Prime subiu)"},
        {"t": "luz", "txt": "luz do hub: verde"},
        {"t": "motor", "txt": "ligar motor {A} por 4 rotações a 40% (passa na frente do Prime e vai ao depósito)"},
        {"t": "motor", "txt": "ligar motor {A} por 1,5 rotação a 30% (estaciona no quadrado vermelho)"},
        {"t": "som", "txt": "tocar som Tada no tablet"}
      ],
      "ajustes": ["Distâncias (40, 30 cm; 2, 4 e 1,5 rotações): meça a arena.", "Sinal: o sensor do Essential lê amarelo só de perto (1 a 2 cm). Se ler errado, cole um papel amarelo na porta.", "15 e 30 cm: o Prime precisa 'ver' o Essential passar; ajuste a altura do sensor de distância.", "Se o Essential esperar para sempre, ponha um limite: 'esperar até amarelo OU cronômetro > 60 s'."]
    },
    {
      "estrategia": "Tempo calibrado",
      "descricao": "Os dois começam juntos (dois alunos apertam ao mesmo tempo) e cada um espera um tempo medido antes. Simples, mas se um robô atrasar 2 segundos, os dois podem bater.",
      "lista": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "movimento", "txt": "definir motores de movimento {A} e {B}"},
        {"t": "sensor", "txt": "zerar cronômetro"},
        {"t": "motor", "txt": "motor {C} ir para posição 0"},
        {"t": "movimento", "txt": "mover para frente 40 cm a 40%"},
        {"t": "motor", "txt": "ligar motor {C} por 100 graus"},
        {"t": "movimento", "txt": "mover para frente 30 cm a 35%"},
        {"t": "controle", "txt": "esperar até cronômetro maior que 40 segundos (janela do Essential passar)"},
        {"t": "controle", "txt": "repetir até sensor de cor {D} ver vermelho", "filhos": [
          {"t": "movimento", "txt": "iniciar mover para frente a 30%"}
        ]},
        {"t": "movimento", "txt": "parar movimento"}
      ],
      "lista2": [
        {"t": "evento", "txt": "quando o programa começar"},
        {"t": "sensor", "txt": "zerar cronômetro"},
        {"t": "motor", "txt": "ligar motor {A} por 2 rotações a 40%"},
        {"t": "controle", "txt": "esperar até cronômetro maior que 25 segundos (o Prime já chegou e parou)"},
        {"t": "motor", "txt": "ligar motor {A} por 5,5 rotações a 40%"}
      ],
      "ajustes": ["Cronometre o Prime 5 vezes: use o tempo MAIS LONGO + 3 s para o Essential esperar.", "40 s do Prime: tempo do Essential sair + passar + margem.", "Compare com a estratégia 1: quantas vezes cada uma deu certo em 10 tentativas?"]
    }
  ],
  "variacoes": ["Troque o sinal amarelo por luz: o Essential acende a matriz de luz e o Prime lê com o sensor de cor (troque o motor B do Essential pela matriz).", "Sinal duplo: o Essential só sai depois de ver amarelo E passar 3 segundos.", "Faça os dois robôs trocarem de papel na volta."],
  "desafio": "Rode 5 vezes seguidas sem os robôs se tocarem e com os dois estacionados.",
  "pergunta": "Por que esperar um sinal é mais seguro que combinar um tempo? Onde a gente vê isso fora da escola?"
}
]);
