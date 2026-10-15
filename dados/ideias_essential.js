// Banco de ideias: SPIKE Essential (45345). Hub pequeno = só 2 portas. O kit não tem engrenagens:
// os mecanismos usam polias, elásticos e o motor girando direto.
window.IDEIAS = (window.IDEIAS || []).concat([
{
  "id": "essential-corrida",
  "kit": "essential",
  "titulo": "Carrinho de corrida",
  "nivel": 1,
  "tempo": 50,
  "tags": ["veículo", "velocidade"],
  "resumo": "Um carrinho com dois motores, um em cada roda, que corre e faz curvas.",
  "aprende": "Para virar, uma roda gira mais rápido que a outra.",
  "pecas": [["Placa Technic 2x8", 2], ["Placa Technic 2x6", 2], ["Tijolo Technic 1x8", 2], ["Roda 43 x 14 com pneu", 2], ["Rodinha de skate", 1], ["Pino com atrito", 8], ["Tijolo 2x2", 2], ["Placa lisa 2x4", 4]],
  "eletronica": [["Hub pequeno SPIKE (2 portas)", 1], ["Motor pequeno SPIKE", 2]],
  "passos": [
    "Monte a base com as placas Technic 2x8 e 2x6.",
    "Prenda um motor pequeno de cada lado, com o eixo para fora, e encaixe uma roda grande em cada.",
    "Na frente, prenda a rodinha de skate para o carro não arrastar.",
    "Encaixe o hub em cima e decore com as placas lisas."
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
  "pergunta": "Por que um carro de verdade precisa fazer as rodas girarem diferente na curva?"
},
{
  "id": "essential-carrossel",
  "kit": "essential",
  "titulo": "Carrossel com luzes",
  "nivel": 1,
  "tempo": 50,
  "tags": ["parque", "luz", "giro"],
  "resumo": "Um carrossel que gira com bichinhos e acende luzes coloridas.",
  "aprende": "Motor girando um eixo central e luzes avisando o que está acontecendo.",
  "pecas": [["Placa 16x16", 1], ["Placa 8x8", 1], ["Tijolo Technic 1x4", 4], ["Eixo 6", 1], ["Bucha", 2], ["Assento", 4], ["Sapo", 2], ["Cachorro", 1], ["Caranguejo", 1], ["Cone", 4], ["Tijolo redondo", 4]],
  "eletronica": [["Hub pequeno SPIKE (2 portas)", 1], ["Motor pequeno SPIKE", 1], ["Matriz de luz 3x3 SPIKE", 1]],
  "passos": [
    "Use a placa 16x16 como chão do parque.",
    "Prenda o motor em pé no meio, com o eixo para cima.",
    "Encaixe o eixo 6 no motor e a placa 8x8 em cima: ela é o disco que gira.",
    "Coloque os assentos e os bichinhos no disco.",
    "Prenda a matriz de luz numa torre ao lado (tijolos redondos e cones)."
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
  "tags": ["trânsito", "luz", "sequência"],
  "resumo": "Um semáforo que troca de cor e uma cancela que só abre no verde.",
  "aprende": "Sequência e tempo: cada passo do programa acontece na ordem certa.",
  "pecas": [["Placa 8x16", 1], ["Tijolo Technic 1x8", 2], ["Tijolo 1x4", 2], ["Tijolo Technic 1x12", 1], ["Pino com atrito", 4], ["Placa lisa 1x8", 2], ["Torre treliça", 1]],
  "eletronica": [["Hub pequeno SPIKE (2 portas)", 1], ["Matriz de luz 3x3 SPIKE", 1], ["Motor pequeno SPIKE", 1]],
  "passos": [
    "Monte um poste com a torre treliça e prenda a matriz de luz no alto.",
    "Na base (placa 8x16), prenda o motor deitado ao lado da rua.",
    "A cancela é o tijolo Technic 1x12 preso no eixo do motor."
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
  "tags": ["educação financeira", "sensor de cor", "segurança"],
  "resumo": "Um portão que só abre com o cartão da cor certa, como um cartão de acesso ou de pagamento.",
  "aprende": "Usar o sensor de cor para conferir uma 'senha' de cor.",
  "pecas": [["Placa 8x16", 1], ["Tijolo Technic 1x8", 2], ["Tijolo Technic 1x16", 1], ["Tijolo 1x4", 4], ["Tijolo 1x2", 4], ["Placa lisa 2x4", 4], ["Pino com atrito", 6]],
  "eletronica": [["Hub pequeno SPIKE (2 portas)", 1], ["Sensor de cor SPIKE", 1], ["Motor pequeno SPIKE", 1]],
  "passos": [
    "Monte um muro com tijolos dos dois lados do portão.",
    "O portão é o tijolo Technic 1x16 preso no eixo do motor.",
    "Prenda o sensor de cor no muro, olhando para fora: ali a gente encosta o cartão.",
    "Cartões: placas lisas 2x4 de cores diferentes."
  ],
  "programa": [
    "Espere o sensor ver uma cor.",
    "Se for azul (o cartão certo): abra o portão, espere 3 segundos e feche.",
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
  "tags": ["polia", "elástico", "ventilador"],
  "resumo": "O motor fica embaixo e um elástico leva o movimento até a hélice lá em cima.",
  "aprende": "Polia e elástico passam o giro de um eixo para outro, longe dele.",
  "pecas": [["Tijolo Technic 1x12", 2], ["Tijolo Technic 1x4", 2], ["Placa 8x8", 1], ["Polia", 2], ["Elástico 33 mm", 1], ["Eixo 7", 1], ["Eixo 4", 1], ["Bucha", 2], ["Viga 11 furos", 2], ["Conector de eixo (emenda)", 1]],
  "eletronica": [["Hub pequeno SPIKE (2 portas)", 1], ["Motor pequeno SPIKE", 1]],
  "passos": [
    "Monte uma torre com dois tijolos Technic 1x12 em pé sobre a placa 8x8.",
    "Prenda o motor na base com uma polia no eixo.",
    "No alto da torre, passe um eixo com outra polia.",
    "Ligue as duas polias com o elástico.",
    "Faça a hélice com as duas vigas de 11 furos no eixo de cima."
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
  "tags": ["animal robô", "alavanca", "movimento"],
  "resumo": "Um sapo que levanta o corpo e dá um pulinho para frente.",
  "aprende": "O motor girando uma alavanca pode empurrar o corpo para cima.",
  "pecas": [["Placa Technic 2x8", 2], ["Viga 7 furos", 2], ["Viga dobrada 9 furos", 2], ["Pino com atrito", 8], ["Tijolo curvo", 6], ["Placa lisa redonda com desenho (olho)", 2], ["Sapo", 1]],
  "eletronica": [["Hub pequeno SPIKE (2 portas)", 1], ["Motor pequeno SPIKE", 2]],
  "passos": [
    "O corpo do sapo é o hub, preso entre as placas Technic.",
    "Prenda um motor de cada lado, atrás, com uma viga de 7 furos: são as pernas que empurram o chão.",
    "Na frente, as vigas dobradas fazem as patas da frente, paradas.",
    "Decore com tijolos curvos e os olhos."
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
  "tags": ["educação financeira", "sensor de cor", "contagem"],
  "resumo": "Cada peça colorida é uma moeda. O cofrinho lê a cor, soma o valor e mostra na luz se chegou na meta.",
  "aprende": "Somar valores com variável e acompanhar uma meta de poupança.",
  "pecas": [["Placa 8x8", 1], ["Tijolo 2x2", 4], ["Tijolo 1x4", 4], ["Tijolo 1x2", 4], ["Placa lisa 2x4", 4], ["Telhado (tijolo inclinado)", 4], ["Tijolo redondo", 6]],
  "eletronica": [["Hub pequeno SPIKE (2 portas)", 1], ["Sensor de cor SPIKE", 1], ["Matriz de luz 3x3 SPIKE", 1]],
  "passos": [
    "Monte uma caixa (o cofrinho) com tijolos sobre a placa 8x8 e o telhado em cima.",
    "Deixe uma abertura no topo e prenda o sensor de cor logo abaixo dela, olhando para cima.",
    "Prenda a matriz de luz na frente do cofrinho.",
    "Use os tijolos redondos coloridos como moedas."
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
  "tags": ["guindaste", "torre", "giro"],
  "resumo": "Uma torre alta com braço que gira e levanta uma carga leve.",
  "aprende": "Estrutura firme (treliça) e contrapeso para a torre não cair.",
  "pecas": [["Placa 16x16", 1], ["Torre treliça", 3], ["Tijolo Technic 1x16", 1], ["Tijolo Technic 1x8", 2], ["Tijolo 2x2", 4], ["Eixo 4", 1], ["Pino com atrito", 8], ["Pino longo sem atrito + eixo 2", 2], ["Bola / esfera", 1]],
  "eletronica": [["Hub pequeno SPIKE (2 portas)", 1], ["Motor pequeno SPIKE", 2]],
  "passos": [
    "Empilhe as torres treliça sobre a placa 16x16.",
    "No alto, prenda um motor em pé: ele gira o braço.",
    "O braço é o tijolo Technic 1x16. Numa ponta, coloque tijolos 2x2 como contrapeso.",
    "Na outra ponta, o segundo motor levanta uma pequena alavanca (tijolo Technic 1x8) que segura a carga.",
    "A carga é a esfera."
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
  "tags": ["carro", "vai e vem", "posição"],
  "resumo": "Uma palheta que vai e volta, limpando a 'chuva' do vidro.",
  "aprende": "O motor sabe em que ângulo está: dá para mandar ele ir até uma posição e voltar.",
  "pecas": [["Placa 8x16", 1], ["Tijolo Technic 1x8", 2], ["Viga 7 furos", 1], ["Tijolo 1x4", 4], ["Placa lisa 1x8", 2], ["Pino com atrito", 4]],
  "eletronica": [["Hub pequeno SPIKE (2 portas)", 1], ["Motor pequeno SPIKE", 1], ["Sensor de cor SPIKE", 1]],
  "passos": [
    "Monte um 'vidro' em pé com os tijolos e a placa 8x16.",
    "Prenda o motor embaixo, no meio, com o eixo virado para o vidro.",
    "A palheta é a viga de 7 furos presa no motor.",
    "O sensor de cor fica ao lado: ele 'sente a chuva'."
  ],
  "programa": [
    "Quando o sensor ver azul (chuva): mova o motor para 60 graus e depois para -60 graus, 5 vezes.",
    "Quando ver branco (sem chuva): pare a palheta no meio."
  ],
  "variacoes": [
    "Chuva forte (azul escuro) = limpador rápido; chuva fraca = devagar.",
    "Coloque duas palhetas com a mesma viga e um pino sem atrito.",
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
  "tags": ["veículo", "sensor de cor", "trânsito"],
  "resumo": "Um carro com um motor só que anda pela rua e para sozinho na faixa vermelha.",
  "aprende": "Um motor movendo duas rodas pelo mesmo eixo e o sensor de cor lendo o chão.",
  "pecas": [["Placa Technic 2x8", 2], ["Tijolo Technic 1x8", 2], ["Tijolo Technic 1x2 com furo de eixo e pino", 2], ["Eixo 8", 1], ["Eixo 6", 1], ["Roda 43 x 14 com pneu", 2], ["Roda de cadeira de rodas", 2], ["Bucha", 4], ["Polia", 2], ["Elástico 33 mm", 1], ["Pino com atrito", 8]],
  "eletronica": [["Hub pequeno SPIKE (2 portas)", 1], ["Motor pequeno SPIKE", 1], ["Sensor de cor SPIKE", 1]],
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
