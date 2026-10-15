// Dados dos kits. As peças vêm de dados/inventario.js (gerado do Rebrickable).
// Eletrônica NUNCA mistura entre kits; peças estruturais podem misturar.
window.KITS = {
  prime: {
    nome: "SPIKE Prime",
    conjunto: "45678",
    expansao: "45681",
    cor: "#f5c400",
    corTexto: "#1a1a1a",
    maletas: 1,
    programacao: "App SPIKE (blocos Scratch ou Python)",
    publico: "Mais indicado do 6º ano em diante"
  },
  essential: {
    nome: "SPIKE Essential",
    conjunto: "45345",
    cor: "#2a9df4",
    corTexto: "#ffffff",
    maletas: 1,
    programacao: "App SPIKE (blocos com ícones ou palavras)",
    publico: "Pensado para o Fundamental I, serve para todos"
  },
  ev3: {
    nome: "EV3 Normal",
    conjunto: "45544",
    expansao: "45560",
    cor: "#5b6670",
    corTexto: "#ffffff",
    maletas: 5,
    programacao: "EV3 Classroom (blocos Scratch) ou EV3 Lab",
    publico: "Todas as séries"
  }
};

// Caixas de expansão: as peças estruturais podem entrar em qualquer mistura;
// a eletrônica da 45681 (motor grande + sensor de cor) só vale no SPIKE Prime.
window.EXPANSOES = {
  "45681": { nome: "Expansão SPIKE Prime", kit: "prime" },
  "45560": { nome: "Expansão EV3", kit: "ev3" }
};

window.GRUPOS = {
  eletronica:  { nome: "Eletrônica",           dica: "Hub, motores e sensores. Nunca misture com outro kit." },
  vigas:       { nome: "Vigas e quadros",      dica: "O esqueleto do robô. Conte os furos para saber o tamanho." },
  pinos:       { nome: "Pinos",                dica: "Prendem uma viga na outra. Com atrito trava; sem atrito deixa girar." },
  eixos:       { nome: "Eixos",                dica: "Passam o giro do motor. O número é o comprimento em furos." },
  conectores:  { nome: "Conectores e buchas",  dica: "Mudam a direção da montagem e seguram eixos no lugar." },
  engrenagens: { nome: "Engrenagens",          dica: "Pequena girando a grande: mais força. Grande girando a pequena: mais velocidade." },
  rodas:       { nome: "Rodas e polias",       dica: "Para andar, rolar ou passar movimento com elástico." },
  especiais:   { nome: "Articulações e especiais", dica: "Juntas, esteiras, elásticos e peças de mecanismo." },
  acabamento:  { nome: "Painéis e decoração",  dica: "Deixam o projeto bonito e protegido." }
};
