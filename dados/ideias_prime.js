// Banco de ideias: SPIKE Prime (45678). Peças conferidas por dados_kits/scripts/validar_ideias.py
window.IDEIAS = (window.IDEIAS || []).concat([
{
  "id": "prime-explorador",
  "kit": "prime",
  "titulo": "Explorador que desvia de obstáculos",
  "nivel": 1,
  "tempo": 50,
  "tags": ["veículo", "sensor de distância"],
  "resumo": "Um carrinho que anda sozinho e muda de caminho quando encontra uma parede ou uma caixa.",
  "aprende": "Usar um sensor para tomar decisões: SE estiver perto, ENTÃO vire.",
  "pecas": [["Quadro 7x11", 1], ["Viga 15 furos", 2], ["Viga 7 furos", 2], ["Pino com atrito", 20], ["Roda 57 x 14 com pneu", 2], ["Viga 3x5 com bola giratória", 1], ["Bola 19 mm", 1], ["Viga em L 3x5", 2]],
  "eletronica": [["Hub grande SPIKE (6 portas)", 1], ["Motor médio SPIKE", 2], ["Sensor de distância SPIKE", 1]],
  "passos": [
    "Prenda os dois motores médios lado a lado no quadro 7x11, com os eixos virados para fora.",
    "Encaixe uma roda grande em cada motor.",
    "Na parte de trás, monte o rodízio (viga com bola giratória + bola) para o carro não arrastar.",
    "Prenda o hub em cima do quadro com as vigas de 15 furos.",
    "Na frente, use as vigas em L para segurar o sensor de distância olhando para frente, um pouco acima do chão."
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
  "tags": ["guindaste", "engrenagens", "redução"],
  "resumo": "Uma torre que gira e um braço que levanta peças leves usando engrenagens para ganhar força.",
  "aprende": "Redução: engrenagem pequena (12 dentes) girando a grande (36 dentes) deixa o movimento 3 vezes mais lento e mais forte.",
  "pecas": [["Quadro 11x15", 1], ["Viga 15 furos", 4], ["Viga 11 furos", 2], ["Viga 9 furos", 2], ["Engrenagem 12 dentes dupla cônica", 2], ["Engrenagem 36 dentes dupla cônica", 2], ["Eixo 5", 2], ["Eixo 7", 2], ["Bucha", 4], ["Pino com atrito", 30], ["Pino longo com atrito", 6], ["Dente 1x3", 2], ["Viga em T 3x3", 2]],
  "eletronica": [["Hub grande SPIKE (6 portas)", 1], ["Motor grande SPIKE", 1], ["Motor médio SPIKE", 1], ["Sensor de força SPIKE", 1]],
  "passos": [
    "Use o quadro 11x15 como base pesada. O hub pode ficar nela para servir de contrapeso.",
    "Monte uma torre com duas vigas de 15 furos em pé, travadas com vigas em T.",
    "Coloque o motor grande na base: ele gira a torre pela engrenagem de 12 dentes empurrando a de 36.",
    "No alto da torre, prenda o braço (vigas de 11 e 9 furos) em um eixo que passa por uma engrenagem de 36.",
    "O motor médio, com a engrenagem de 12, levanta e abaixa o braço. Na ponta, use os dentes 1x3 como gancho.",
    "Prenda o sensor de força na base: ele vira o botão de comando."
  ],
  "programa": [
    "Quando o sensor de força for pressionado: o motor médio levanta o braço 90 graus.",
    "Quando o sensor de força for pressionado de novo: o motor grande gira a torre 180 graus.",
    "Depois: o motor médio abaixa o braço e a torre volta para a posição inicial.",
    "Dica: use velocidade baixa (30%) para o braço não balançar."
  ],
  "variacoes": [
    "Troque a ordem das engrenagens (36 girando a 12) e compare: o braço fica rápido, mas consegue levantar o mesmo peso?",
    "Use a força do aperto: aperto leve gira devagar, aperto forte gira rápido.",
    "Adicione o sensor de distância para o guindaste parar se alguém chegar perto."
  ],
  "desafio": "Transporte 3 peças de um lado da mesa para uma caixa sem derrubar nenhuma.",
  "pergunta": "Por que os guindastes de obra têm um contrapeso do outro lado do braço?"
},
{
  "id": "prime-garra",
  "kit": "prime",
  "titulo": "Veículo com garra que busca objetos",
  "nivel": 3,
  "tempo": 100,
  "tags": ["veículo", "garra", "sensor de cor"],
  "resumo": "Um carro que encontra um objeto, fecha a garra, leva até a base e solta.",
  "aprende": "Dividir um problema grande em partes: andar, achar, pegar, voltar.",
  "pecas": [["Quadro 7x11", 1], ["Quadro 5x7", 1], ["Viga 15 furos", 2], ["Viga 9 furos", 2], ["Viga dobrada 9 furos", 2], ["Engrenagem 20 dentes dupla cônica", 2], ["Eixo 5", 2], ["Pino com atrito", 30], ["Pino-eixo sem atrito", 4], ["Roda 57 x 14 com pneu", 2], ["Viga 3x5 com bola giratória", 1], ["Bola 19 mm", 1], ["Bucha", 4]],
  "eletronica": [["Hub grande SPIKE (6 portas)", 1], ["Motor médio SPIKE", 2], ["Motor grande SPIKE", 1], ["Sensor de distância SPIKE", 1], ["Sensor de cor SPIKE", 1]],
  "passos": [
    "Monte a base de tração: dois motores médios com rodas grandes e rodízio atrás.",
    "Na frente, prenda o quadro 5x7 em pé: ele segura a garra.",
    "Garra: duas vigas dobradas de 9 furos, cada uma presa a uma engrenagem de 20 dentes. As duas engrenagens se tocam, então giram em sentidos opostos e a garra fecha.",
    "O motor grande gira uma das engrenagens da garra.",
    "Prenda o sensor de distância entre os dedos da garra e o sensor de cor apontado para o chão."
  ],
  "programa": [
    "Abra a garra (motor grande para a posição inicial).",
    "Ande para frente até o sensor de distância medir menos de 5 cm.",
    "Feche a garra (motor grande gira até travar, com potência baixa para não forçar).",
    "Gire 180 graus e ande até o sensor de cor ver a fita da base (ex.: azul).",
    "Abra a garra, dê ré e comemore com um som."
  ],
  "variacoes": [
    "Só pegue objetos de uma cor: se o objeto não for vermelho, desvie e procure outro.",
    "Conte quantos objetos já levou e mostre o número na matriz do hub.",
    "Troque a garra de pinça por uma pá que empurra."
  ],
  "desafio": "Leve 3 objetos para a base em menos de 2 minutos.",
  "pergunta": "Onde existem robôs que pegam e levam coisas? (fábricas, armazéns, hospitais)"
},
{
  "id": "prime-seguidor",
  "kit": "prime",
  "titulo": "Robô seguidor de linha",
  "nivel": 2,
  "tempo": 50,
  "tags": ["veículo", "sensor de cor", "linha"],
  "resumo": "Um robô que segue uma fita preta no chão, como os carrinhos de fábrica.",
  "aprende": "Corrigir o caminho o tempo todo: se saiu da linha, volta.",
  "pecas": [["Quadro 7x11", 1], ["Viga 11 furos", 2], ["Viga em L 3x5", 2], ["Pino com atrito", 16], ["Roda 57 x 14 com pneu", 2], ["Viga 3x5 com bola giratória", 1], ["Bola 19 mm", 1]],
  "eletronica": [["Hub grande SPIKE (6 portas)", 1], ["Motor médio SPIKE", 2], ["Sensor de cor SPIKE", 1]],
  "passos": [
    "Monte a base com os dois motores médios, rodas grandes e rodízio.",
    "Prenda o sensor de cor na frente, apontando para o chão, a cerca de 1 cm de altura.",
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
  "tags": ["educação financeira", "sensor de cor", "contagem"],
  "resumo": "Peças coloridas fazem o papel de moedas. O robô lê a cor, separa para o lado certo e soma o valor guardado.",
  "aprende": "Classificar com sensor e usar variáveis para somar dinheiro.",
  "pecas": [["Quadro 11x15", 1], ["Viga 13 furos", 2], ["Viga 9 furos", 2], ["Painel 3x11", 2], ["Viga em L 2x4", 2], ["Pino com atrito", 20], ["Eixo 5", 1], ["Bucha", 2], ["Placa redonda", 6]],
  "eletronica": [["Hub grande SPIKE (6 portas)", 1], ["Motor médio SPIKE", 1], ["Sensor de cor SPIKE", 1]],
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
  "tags": ["catapulta", "alavanca", "sensor de força"],
  "resumo": "Um braço que lança uma bolinha quando o botão de força é apertado.",
  "aprende": "Alavanca: quanto mais longo o braço, mais longe vai a bolinha.",
  "pecas": [["Quadro 11x15", 1], ["Viga 15 furos", 1], ["Viga 7 furos", 2], ["Viga em T 3x3", 2], ["Engrenagem 12 dentes dupla cônica", 1], ["Engrenagem 36 dentes dupla cônica", 1], ["Eixo 7", 2], ["Bucha", 4], ["Pino com atrito", 16], ["Prato (antena)", 1], ["Bola 19 mm", 1]],
  "eletronica": [["Hub grande SPIKE (6 portas)", 1], ["Motor grande SPIKE", 1], ["Sensor de força SPIKE", 1]],
  "passos": [
    "Fixe o motor grande na base (quadro 11x15).",
    "Monte dois apoios com vigas de 7 furos e vigas em T.",
    "Passe um eixo pelos apoios com a engrenagem de 36 dentes. O motor gira a engrenagem de 12, que empurra a de 36.",
    "Prenda a viga de 15 furos no eixo como braço e o prato na ponta, para segurar a bola.",
    "O sensor de força fica ao lado, como botão de disparo."
  ],
  "programa": [
    "Quando o sensor de força for pressionado:",
    "  Gire o motor grande rápido (100%) por meia volta para lançar.",
    "  Espere 1 segundo e volte devagar (20%) para a posição inicial."
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
  "tags": ["ventilador", "engrenagens", "velocidade"],
  "resumo": "Um ventilador que liga quando alguém chega perto e desliga quando a pessoa sai.",
  "aprende": "Multiplicação de velocidade: a engrenagem grande girando a pequena faz a hélice girar 3 vezes mais rápido.",
  "pecas": [["Quadro 5x7", 1], ["Viga 9 furos", 2], ["Viga 15 furos", 2], ["Engrenagem 36 dentes dupla cônica", 1], ["Engrenagem 12 dentes dupla cônica", 1], ["Eixo 5", 2], ["Conector com 4 pinos", 1], ["Bucha", 4], ["Pino com atrito", 12]],
  "eletronica": [["Hub grande SPIKE (6 portas)", 1], ["Motor médio SPIKE", 1], ["Sensor de distância SPIKE", 1]],
  "passos": [
    "Monte uma torre com o quadro 5x7 e as vigas de 9 furos.",
    "O motor médio gira a engrenagem de 36 dentes, que gira a de 12 no eixo da hélice.",
    "A hélice: duas vigas de 15 furos cruzadas, presas no conector com 4 pinos.",
    "O sensor de distância fica na base, olhando para frente."
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
  "tags": ["educação financeira", "cancela", "sensor de distância"],
  "resumo": "A cancela abre quando um carro chega e cobra o estacionamento pelo tempo que ele ficou.",
  "aprende": "Medir tempo com o cronômetro do hub e transformar tempo em preço.",
  "pecas": [["Quadro 7x11", 1], ["Viga 15 furos", 1], ["Viga 7 furos", 2], ["Viga em L 3x5", 2], ["Pino com atrito", 12], ["Eixo 3", 1]],
  "eletronica": [["Hub grande SPIKE (6 portas)", 1], ["Motor médio SPIKE", 1], ["Sensor de distância SPIKE", 1]],
  "passos": [
    "Fixe o motor médio em pé na base (quadro 7x11).",
    "Prenda a viga de 15 furos no motor: ela é a cancela.",
    "Coloque o sensor de distância na altura de um carrinho, olhando para a pista."
  ],
  "programa": [
    "Quando o sensor ver um carro a menos de 10 cm: zere o cronômetro e levante a cancela 90 graus.",
    "Espere o carro passar e abaixe a cancela.",
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
  "tags": ["animal robô", "manivela", "mecanismo"],
  "resumo": "Um robô sem rodas que anda com pernas movidas por manivelas.",
  "aprende": "Manivela: transformar o giro do motor em um movimento de passo.",
  "pecas": [["Quadro 11x15", 1], ["Viga 11 furos", 4], ["Viga em L 3x5", 4], ["Haste de ligação 6", 2], ["Viga 5 furos", 4], ["Pino com atrito", 30], ["Pino-eixo sem atrito", 8], ["Pino longo com atrito", 6], ["Placa lisa redonda com desenho (olho)", 2]],
  "eletronica": [["Hub grande SPIKE (6 portas)", 1], ["Motor médio SPIKE", 2], ["Sensor de distância SPIKE", 1]],
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
  "tags": ["educação financeira", "sensor de força", "medida"],
  "resumo": "Uma balança que mede o quanto um produto aperta o sensor e calcula o preço.",
  "aprende": "Medir força, calibrar e transformar medida em dinheiro.",
  "pecas": [["Quadro 11x15", 1], ["Quadro 5x7", 1], ["Viga 9 furos", 2], ["Viga 15 furos", 1], ["Pino com atrito", 16], ["Pino-eixo sem atrito", 2], ["Eixo 3", 1]],
  "eletronica": [["Hub grande SPIKE (6 portas)", 1], ["Sensor de força SPIKE", 1], ["Motor médio SPIKE", 1]],
  "passos": [
    "Prenda o sensor de força em pé na base, com o botão para cima.",
    "Faça um prato com o quadro 5x7 apoiado em uma alavanca (viga de 9 furos) que pressiona o botão.",
    "O motor médio segura um ponteiro (viga de 15 furos), como numa balança antiga."
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
