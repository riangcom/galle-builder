// Ingredientes do "Desafio surpresa" (gerador combinatório, sem internet e sem custo).
// {sensor} e {motor} são trocados por componentes do kit escolhido.
window.DESAFIOS = {
  temas: [
    "Guindaste", "Veículo com garra", "Robô que desvia de obstáculos", "Portão automático",
    "Catapulta", "Esteira de fábrica", "Ventilador", "Elevador", "Robô seguidor de linha",
    "Braço mecânico", "Carrinho de corrida", "Animal robô", "Semáforo", "Balança",
    "Máquina de separar cores", "Ponte levadiça", "Robô dançarino", "Cofre com trava",
    "Lançador de bolinha", "Limpador de para-brisa"
  ],
  mecanismos: [
    "engrenagens que reduzem a velocidade e aumentam a força",
    "engrenagens que aumentam a velocidade",
    "um eixo que muda a direção do movimento em 90°",
    "uma alavanca",
    "uma manivela que transforma giro em vai-e-vem",
    "uma polia com elástico",
    "uma rosca sem-fim",
    "uma estrutura em triângulo para ficar firme",
    "um diferencial ou duas rodas independentes",
    "um contrapeso"
  ],
  restricoes: [
    "use no máximo 40 peças",
    "use só um motor",
    "nenhuma peça vermelha",
    "a base precisa caber numa folha A4",
    "precisa funcionar com o {sensor}",
    "monte em 20 minutos",
    "precisa ser simétrico",
    "não pode usar rodas"
  ],
  extras: [
    "Faça ele levantar um estojo.",
    "Faça ele parar sozinho quando o {sensor} detectar algo.",
    "Mostre um sinal na tela ou nas luzes quando terminar a tarefa.",
    "Deixe ele 2x mais rápido sem trocar o {motor}.",
    "Faça ele voltar ao ponto de partida.",
    "Conte quantas vezes ele repetiu o movimento.",
    "Faça ele tocar um som diferente para cada cor."
  ]
};
