// Galle Builder: app de página única, sem servidor e sem bibliotecas.
// Rotas: #/  ·  #/kit/<base>[/<extras,separados,por,virgula>]  ·  #/misturar  ·  #/professor

const tela = document.getElementById("tela");
const topoKit = document.getElementById("topo-kit");

// ---------- preferências (só neste iPad) ----------
function lerPref(chave, padrao) {
  try { return localStorage.getItem(chave) ?? padrao; } catch { return padrao; }
}
function gravarPref(chave, valor) {
  try { localStorage.setItem(chave, valor); } catch { /* sem armazenamento: segue sem lembrar */ }
}

// ---------- utilidades ----------
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

function pintarKit(id) {
  const k = KITS[id];
  const raiz = document.documentElement.style;
  raiz.setProperty("--kit", k ? k.cor : "#1d2330");
  raiz.setProperty("--kit-texto", k ? k.corTexto : "#ffffff");
  // Selo do topo = menu de troca rápida (mantém a aba atual: Peças, Ideias, FIRA...)
  topoKit.hidden = !k;
  topoKit.open = false;
  if (!k) return;
  topoKit.querySelector("summary").textContent = k.nome;
  const aba = new URLSearchParams(location.hash.split("?")[1] || "").get("aba");
  topoKit.querySelector("#menu-kits").innerHTML = Object.entries(KITS).map(([kid, kk]) =>
    `<a href="#/kit/${kid}${aba ? "?aba=" + aba : ""}" aria-current="${kid === id}">${esc(kk.nome)}</a>`).join("")
    + `<a href="#/misturar">Misturar peças</a>`;
}
// fecha o menu ao tocar fora dele
document.addEventListener("click", (e) => { if (topoKit.open && !topoKit.contains(e.target)) topoKit.open = false; });

// Cabos, baterias e tampas aparecem no catálogo, mas não contam como "componente" para ideias.
const ehComponente = (p) => p.grupo === "eletronica" && !/^(Cabo|Bateria|Tampa)/.test(p.nome);
// "Sensor de cor SPIKE" -> "Sensor de cor" ("Brick EV3" fica como está)
const curto = (nome) => (nome.startsWith("Brick") ? nome : nome.replace(/ (SPIKE|EV3)\b.*$/, ""));

// Soma itens de vários conjuntos (mesma peça + mesma cor = um item só).
function somar(conjuntos, filtro) {
  const mapa = new Map();
  for (const c of conjuntos) {
    for (const p of INVENTARIO[c] || []) {
      if (!filtro(p)) continue;
      const chave = p.id + "|" + p.cor;
      const atual = mapa.get(chave);
      if (atual) { atual.qtd += p.qtd; atual.origem.add(c); }
      else mapa.set(chave, { ...p, origem: new Set([c]) });
    }
  }
  return [...mapa.values()];
}

// Monta o "ambiente": eletrônica só do kit base; peças estruturais do base + extras + expansão.
function montarAmbiente(base, extras) {
  const kit = KITS[base];
  const expansao = lerPref("expansao", "");
  const exp = EXPANSOES[expansao];

  const eletronicos = [kit.conjunto];
  if (exp && exp.kit === base) eletronicos.push(expansao);
  const estruturais = [base, ...extras].map((id) => KITS[id].conjunto);
  if (exp) estruturais.push(expansao);

  const eletronica = somar(eletronicos, (p) => p.grupo === "eletronica");
  const pecas = somar(estruturais, (p) => p.grupo !== "eletronica");
  const nomesConj = estruturais.map((c) => {
    const k = Object.values(KITS).find((k) => k.conjunto === c);
    return `${k ? k.nome : EXPANSOES[c].nome} (${c})`;
  });
  return { base, extras, kit, eletronica, pecas, estruturais: nomesConj };
}

// ---------- telas ----------
function telaInicio() {
  pintarKit(null);
  const cards = Object.entries(KITS).map(([id, k]) => {
    const itens = INVENTARIO[k.conjunto] || [];
    const total = itens.reduce((s, p) => s + p.qtd, 0);
    const comps = itens.filter(ehComponente).slice(0, 4);
    return `
    <a class="card-kit" href="#/kit/${id}" style="--c:${k.cor}">
      <strong>${esc(k.nome)}</strong>
      <span class="num">Conjunto ${k.conjunto} · ${total} peças · ${k.maletas} maleta${k.maletas > 1 ? "s" : ""}</span>
      <span>${esc(k.publico)}</span>
      <span class="chips">${comps.map((e) => `<span class="chip">${esc(curto(e.nome))}</span>`).join("")}</span>
    </a>`;
  }).join("");
  tela.innerHTML = `
    <h1>Com qual kit vamos montar?</h1>
    <p class="sub">Escolha a maleta que está na sua mesa. Tudo aqui usa só as peças dela.</p>
    <div class="grade-kits">
      ${cards}
      <a class="card-kit" href="#/misturar" style="--c:#e3000b">
        <strong>Misturar peças</strong>
        <span class="num">Peças de montagem de mais de um kit</span>
        <span>Motores, sensores e hub continuam de um kit só.</span>
      </a>
    </div>`;
}

function telaMisturar() {
  pintarKit(null);
  const radios = Object.entries(KITS).map(([id, k], i) => `
    <label class="opcao"><input type="radio" name="base" value="${id}" ${i === 0 ? "checked" : ""}> ${esc(k.nome)}</label>`).join("");
  const checks = Object.entries(KITS).map(([id, k]) => `
    <label class="opcao"><input type="checkbox" name="extra" value="${id}"> ${esc(k.nome)}</label>`).join("");
  tela.innerHTML = `
    <h1>Misturar peças</h1>
    <p class="sub">A parte eletrônica vem de um kit só: o motor do EV3 não liga no hub SPIKE, e o do SPIKE não liga no Brick EV3.</p>
    <h2>1. De qual kit vêm o hub, os motores e os sensores?</h2>
    <div class="opcoes">${radios}</div>
    <h2>2. De quais outros kits vamos pegar peças de montagem?</h2>
    <div class="opcoes">${checks}</div>
    <div class="acoes"><button class="btn" id="ir">Montar com essa mistura</button></div>`;
  document.getElementById("ir").onclick = () => {
    const base = tela.querySelector("input[name=base]:checked").value;
    const extras = [...tela.querySelectorAll("input[name=extra]:checked")].map((c) => c.value).filter((v) => v !== base);
    location.hash = `#/kit/${base}${extras.length ? "/" + extras.join(",") : ""}`;
  };
}

function telaKit(base, extras, aba, idIdeia) {
  if (!KITS[base]) return telaInicio();
  pintarKit(base);
  const amb = montarAmbiente(base, extras);
  const caminho = `#/kit/${base}${extras.length ? "/" + extras.join(",") : ""}`;
  const abas = [["pecas", "Peças"], ["ideias", "Ideias"], ["fira", "Missões FIRA"], ["desafio", "Desafio surpresa"]];
  const mistura = extras.length ? ` + peças de ${extras.map((e) => KITS[e].nome).join(" e ")}` : "";

  tela.innerHTML = `
    <h1>${esc(amb.kit.nome)}${esc(mistura)}</h1>
    <p class="sub">${esc(amb.kit.programacao)}</p>
    <div class="abas" role="tablist">
      ${abas.map(([id, rot]) => `<button class="aba" role="tab" aria-selected="${id === aba}" data-aba="${id}">${rot}</button>`).join("")}
    </div>
    <section id="conteudo"></section>`;
  tela.querySelectorAll(".aba").forEach((b) => {
    b.onclick = () => { location.hash = `${caminho}?aba=${b.dataset.aba}`; };
  });

  const conteudo = document.getElementById("conteudo");
  if (aba === "ideias") return abaIdeias(conteudo, amb, idIdeia, caminho, false);
  if (aba === "fira") return abaIdeias(conteudo, amb, idIdeia, caminho, true);
  if (aba === "desafio") return abaDesafio(conteudo, amb);
  return abaPecas(conteudo, amb);
}

function cartaoPeca(p, mostrarOrigem) {
  const origem = mostrarOrigem ? `<span class="origem">${[...p.origem].join(" + ")}</span>` : "";
  return `
    <div class="peca">
      <div class="foto" style="--rgb:${p.rgb}">
        ${p.img ? `<img src="${esc(p.img)}" alt="" loading="lazy" onerror="this.remove()">` : ""}
      </div>
      <span class="qtd">${p.qtd}×</span>
      <b>${esc(p.nome)}</b>
      <span class="cor"><i style="background:${p.rgb}"></i>${esc(p.cor)}</span>
      ${p.info ? `<p>${esc(p.info)}</p>` : ""}
      ${origem}
    </div>`;
}

function abaPecas(el, amb) {
  const todas = [...amb.eletronica, ...amb.pecas];
  const total = (l) => l.reduce((s, p) => s + p.qtd, 0);
  const presentes = Object.keys(GRUPOS).filter((g) => todas.some((p) => p.grupo === g));
  const misturado = amb.estruturais.length > 1;
  let grupo = "todos", busca = "";

  el.innerHTML = `
    <p class="sub">${total(todas)} peças de ${todas.length} tipos · ${amb.estruturais.map(esc).join(" + ")}
      ${[amb.base, ...amb.extras].includes("ev3") ? `<br>Peças do EV3: quantidade de 1 maleta (a escola tem ${KITS.ev3.maletas}).` : ""}</p>
    <input type="search" id="busca" placeholder="Procurar peça (ex.: engrenagem 24, eixo 8, viga)">
    <div class="filtros">
      <button class="filtro" data-g="todos" aria-pressed="true">Todas</button>
      ${presentes.map((g) => `<button class="filtro" data-g="${g}" aria-pressed="false">${esc(GRUPOS[g].nome)}</button>`).join("")}
    </div>
    <div id="lista-pecas"></div>`;

  const lista = el.querySelector("#lista-pecas");
  function desenhar() {
    const termo = busca.toLowerCase();
    const grupos = grupo === "todos" ? presentes : [grupo];
    lista.innerHTML = grupos.map((g) => {
      const itens = todas.filter((p) => p.grupo === g &&
        (!termo || (p.nome + " " + p.cor + " " + p.en).toLowerCase().includes(termo)));
      if (!itens.length) return "";
      return `
        <h2>${esc(GRUPOS[g].nome)} <small>${total(itens)}</small></h2>
        <p class="dica">${esc(GRUPOS[g].dica)}</p>
        <div class="grade-pecas">${itens.map((p) => cartaoPeca(p, misturado && g !== "eletronica")).join("")}</div>`;
    }).join("") || `<div class="aviso">Nenhuma peça encontrada.</div>`;
  }
  el.querySelector("#busca").oninput = (e) => { busca = e.target.value.trim(); desenhar(); };
  el.querySelectorAll(".filtro").forEach((b) => {
    b.onclick = () => {
      grupo = b.dataset.g;
      el.querySelectorAll(".filtro").forEach((x) => x.setAttribute("aria-pressed", x === b));
      desenhar();
    };
  });
  desenhar();
}

const NIVEIS = { 1: "Iniciante", 2: "Intermediário", 3: "Desafiador" };

// Provas FIRA (resumo de docs/missoes_fira.md)
const PROVAS_FIRA = {
  M1: { nome: "Percurso e pneus", limite: "meia folha A4 (21 x 14,8 cm)", tempo: "1min30" },
  M2: { nome: "Dois robôs: cubos e esferas", limite: "20 x 20 cm", tempo: "3 min" },
  M3: { nome: "Argolas e clipes na haste", limite: "20 x 20 cm", tempo: "2 min" },
  M4: { nome: "Palito entre copos", limite: "cubo de 25 cm", tempo: "2 min" },
  todas: { nome: "Treino para todas as provas", limite: "meia A4 e até 25 cm de altura (cabe em todas)", tempo: "-" }
};

function abaIdeias(el, amb, idIdeia, caminho, fira) {
  const aba = fira ? "fira" : "ideias";
  const ideias = (window.IDEIAS || []).filter((i) => i.kit === amb.base && !!i.missao === fira);
  const ideia = ideias.find((i) => i.id === idIdeia);
  if (ideia) return detalheIdeia(el, ideia, caminho, aba);
  if (!ideias.length) {
    el.innerHTML = fira
      ? `<div class="aviso">As ideias FIRA deste kit ainda estão sendo preparadas.</div>`
      : `<div class="aviso">Ainda não há ideias para este kit. Experimente o <b>Desafio surpresa</b>.</div>`;
    return;
  }
  let nivel = 0, so3d = false;
  el.innerHTML = `
    ${fira ? `<div class="provas">${Object.entries(PROVAS_FIRA).filter(([k]) => k !== "todas").map(([k, p]) =>
      `<div class="prova"><b>${k}</b> ${esc(p.nome)}<span>${esc(p.limite)} · ${esc(p.tempo)}</span></div>`).join("")}</div>
      <div class="aviso-calibrar">⚠ Distâncias, ângulos e cores dos programas são exemplos: <b>calibre na arena real</b> antes da prova. Comece pelo robô de treino.</div>` : ""}
    <div class="filtros">
      <button class="filtro" data-n="0" aria-pressed="true">Todas</button>
      ${Object.entries(NIVEIS).map(([n, r]) => `<button class="filtro" data-n="${n}" aria-pressed="false">${"★".repeat(n)} ${r}</button>`).join("")}
      <button class="filtro" id="so3d" aria-pressed="false">Só com 3D (${ideias.filter(tem3d).length})</button>
    </div>
    <p class="dica cobertura">${ideias.filter(tem3d).length} de ${ideias.length} ideias ${fira ? "FIRA " : ""}deste kit têm montagem 3D. As outras têm passos em texto.</p>
    <div class="grade-ideias" id="lista-ideias"></div>`;
  const lista = el.querySelector("#lista-ideias");
  function desenhar() {
    lista.innerHTML = ideias.filter((i) => (!nivel || i.nivel === nivel) && (!so3d || tem3d(i))).map((i) => `
      <a class="card-ideia" href="${caminho}?aba=${aba}&ideia=${i.id}">
        <span class="nivel">${i.missao ? `<b class="selo-prova">${i.missao.prova === "todas" ? "Treino" : provasDe(i).join(" + ")}</b> ` : ""}${"★".repeat(i.nivel)}${"☆".repeat(3 - i.nivel)} ${NIVEIS[i.nivel]} · ${i.tempo} min
          ${tem3d(i) ? `<b class="selo-3d" title="Montagem 3D passo a passo">3D</b>` : `<span class="selo-texto" title="Montagem com passos em texto">texto</span>`}</span>
        <strong>${esc(i.titulo)}</strong>
        <span>${esc(i.resumo)}</span>
        <span class="chips">${(i.tags || []).map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</span>
      </a>`).join("");
  }
  el.querySelectorAll(".filtro[data-n]").forEach((b) => {
    b.onclick = () => {
      nivel = Number(b.dataset.n);
      el.querySelectorAll(".filtro[data-n]").forEach((x) => x.setAttribute("aria-pressed", x === b));
      desenhar();
    };
  });
  const b3d = el.querySelector("#so3d");
  b3d.onclick = () => { so3d = !so3d; b3d.setAttribute("aria-pressed", so3d); desenhar(); };
  desenhar();
}

// A ideia tem montagem 3D? (pode usar o modelo de outra ideia: campo modelo3d)
const tem3d = (i) => !!(window.MODELOS3D || {})[i.modelo3d || i.id];

// Lista exata de peças de um modelo 3D: [código, cor LDraw, qtd] -> [nome, qtd]
function pecasDoModelo(mod, kit) {
  const inv = INVENTARIO[KITS[kit].conjunto] || [];
  return mod.pecas.map(([pid, cid, q]) => {
    const p = inv.find((x) => x.id === pid && x.cid === cid) || inv.find((x) => x.id === pid);
    return [p ? `${p.nome} (${p.cor.toLowerCase()})` : pid, q];
  });
}

// Blocos estilo app SPIKE: {X} vira um selo de porta; "filhos" e "senao" ficam indentados.
const NOMES_TIPO = { evento: "Eventos", controle: "Controle", movimento: "Movimento", motor: "Motores",
  sensor: "Sensores", luz: "Luz", som: "Som", operador: "Operadores", variavel: "Variáveis" };

function textoBloco(txt) {
  return esc(txt).replace(/\{(\w)\}/g, '<span class="porta">$1</span>');
}

function htmlBlocos(lista) {
  return lista.map((b) => `
    <div class="bloco-grupo">
      <div class="bloco b-${b.t}" title="${NOMES_TIPO[b.t] || ""}">${textoBloco(b.txt)}</div>
      ${b.filhos ? `<div class="bloco-dentro b-borda-${b.t}">${htmlBlocos(b.filhos)}</div>` : ""}
      ${b.senao ? `<div class="bloco b-${b.t} bloco-senao">senão</div>
                   <div class="bloco-dentro b-borda-${b.t}">${htmlBlocos(b.senao)}</div>` : ""}
    </div>`).join("");
}

// Tempo de cada prova (segundos) para o "modo prova"
const TEMPO_PROVA = { M1: 90, M2: 180, M3: 120, M4: 120 };
// Uma ideia pode servir a mais de uma prova (missao.provas); cada estratégia pode dizer a sua (bloco.prova)
const provasDe = (i) => (i.missao.provas || [i.missao.prova]);
const fmtTempo = (s) => (s >= 60 ? `${Math.floor(s / 60)}min${s % 60 ? String(s % 60).padStart(2, "0") : ""}` : `${s} s`);

function htmlPortas(portas) {
  return Object.entries(portas || {}).map(([p, d]) =>
    `<span class="porta-item"><span class="porta">${p}</span> ${esc(curto(d))}</span>`).join("");
}

// Modo prova: zera o cronômetro na largada e acrescenta uma 2ª pilha que para tudo no fim do tempo.
function comModoProva(lista, portas, prova) {
  const t = TEMPO_PROVA[prova];
  const motores = Object.entries(portas || {}).filter(([, d]) => d.startsWith("Motor")).map(([p]) => p);
  const principal = [lista[0], { t: "sensor", txt: "zerar cronômetro" }, ...lista.slice(1)];
  const fim = [
    { t: "evento", txt: `quando cronômetro for maior que ${t} segundos (fim da prova ${prova}: ${fmtTempo(t)})` },
    ...motores.map((p) => ({ t: "motor", txt: `parar motor {${p}}` })),
    { t: "luz", txt: "mostrar FIM nas luzes / tela do hub" },
    { t: "controle", txt: "parar e sair do programa" }
  ];
  return { principal, fim };
}

function htmlPilhas(lista, portas, prova, modo) {
  if (!modo) return `<div class="blocos">${htmlBlocos(lista)}</div>`;
  const { principal, fim } = comModoProva(lista, portas, prova);
  return `<div class="blocos">${htmlBlocos(principal)}</div>
    <p class="dica">E, separada, esta pilha (ela roda ao mesmo tempo):</p>
    <div class="blocos pilha-fim">${htmlBlocos(fim)}</div>`;
}

function htmlProgramacao(i) {
  const tempo = i.missao && TEMPO_PROVA[i.missao.prova];
  const varias = i.missao && provasDe(i).length > 1;
  return `
    ${i.missao ? `<div class="aviso-calibrar">⚠ Os números dos blocos são exemplos: <b>calibre na arena real</b>.</div>` : ""}
    ${i.robo2 ? "" : `<div class="portas-lista"><b>Ligue assim:</b> ${htmlPortas(i.portas)}</div>`}
    <div class="filtros" role="tablist">
      ${i.blocos.map((s, k) => `<button class="filtro" data-estr="${k}" aria-pressed="${k === 0}">${esc(s.estrategia)}</button>`).join("")}
    </div>
    ${tempo ? `<label class="opcao modo-prova"><input type="checkbox" id="modo-prova">
      ${varias ? "Modo prova: cronômetro com o tempo da prova de cada estratégia, que para o robô no fim"
        : `Modo prova: cronômetro de ${fmtTempo(tempo)} que para o robô no fim do tempo`}</label>` : ""}
    <div id="estrategia"></div>
    <p class="dica">Os nomes dos blocos podem mudar um pouco conforme a versão do app SPIKE / EV3 Classroom.</p>`;
}

function ligarEstrategias(el, i) {
  const caixa = el.querySelector("#estrategia");
  const chk = el.querySelector("#modo-prova");
  let atual = 0;
  const mostrar = (k) => {
    atual = k;
    el.dataset.estr = k;   // a ficha impressa usa a estratégia escolhida
    const s = i.blocos[k];
    const prova = s.prova || (i.missao && i.missao.prova);
    const modo = !!(chk && chk.checked);
    const robo = (titulo, portas, lista) => `
      <div class="robo-bloco">
        <h4>${esc(titulo)}</h4>
        <div class="portas-lista"><b>Ligue assim:</b> ${htmlPortas(portas)}</div>
        ${htmlPilhas(lista, portas, prova, modo)}
      </div>`;
    caixa.innerHTML = `
      <p class="estr-desc">${esc(s.descricao)}</p>
      ${i.robo2
        ? `<div class="dois-robos">${robo(i.robo1_titulo || "Robô 1", i.portas, s.lista)}${robo(i.robo2.titulo, i.robo2.portas, s.lista2)}</div>`
        : htmlPilhas(s.lista, i.portas, prova, modo)}
      ${modo ? `<p class="dica">Dica: se o juiz para o tempo exatamente no fim, use 1 ou 2 segundos a menos no cronômetro.</p>` : ""}
      <div class="ajustes"><b>O que ajustar e calibrar:</b><ul>${s.ajustes.map((a) => `<li>${esc(a)}</li>`).join("")}</ul></div>`;
    el.querySelectorAll("[data-estr]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.estr === String(k)));
  };
  el.querySelectorAll("[data-estr]").forEach((b) => { b.onclick = () => mostrar(Number(b.dataset.estr)); });
  if (chk) chk.onchange = () => mostrar(atual);
  mostrar(0);
}

function detalheIdeia(el, i, caminho, aba = "ideias") {
  const mod = (window.MODELOS3D || {})[i.modelo3d || i.id];
  const separar = (lista) => lista.map(([nome, q]) => `
    <label class="separar"><input type="checkbox"><span><b>${q}×</b> ${esc(nome)}</span></label>`).join("");
  const itens = (lista) => lista.map((t) => `<li>${esc(t)}</li>`).join("");
  const listaPecas = mod
    ? `<p class="dica">Lista exata do modelo 3D (com a bateria no hub). Os cabos não estão na lista nem no 3D: use os do kit e ligue nas portas indicadas. Marque cada peça quando tirar da maleta.</p>
       <div class="lista-separar">${separar(pecasDoModelo(mod, i.kit))}${(mod.extras || []).map(([nome, q, motivo]) => `
         <label class="separar"><input type="checkbox"><span><b>${q}×</b> ${esc(nome)}<small>Não aparece no 3D: ${esc(motivo)}</small></span></label>`).join("")}</div>`
    : `<p class="dica">Marque cada peça quando tirar da maleta. São as principais: pode precisar de mais pinos e buchas.</p>
       <div class="lista-separar">${separar(i.eletronica)}${separar(i.pecas)}</div>`;
  const robo2Pecas = i.robo2
    ? `<h4 class="sub-impressas">${esc(i.robo2.titulo)}</h4>
       <div class="lista-separar">${separar(i.robo2.eletronica)}${separar(i.robo2.pecas)}</div>` : "";
  const impressas = (i.pecas_impressas || []).length
    ? `<h4 class="sub-impressas">Peças impressas em 3D (fora da maleta)</h4>
       <div class="lista-separar">${i.pecas_impressas.map(([nome, q, obs]) => `
         <label class="separar impressa"><input type="checkbox"><span><b>${q}×</b> ${esc(nome)}<small>${esc(obs)}</small></span></label>`).join("")}</div>`
    : "";
  const missao = i.missao
    ? `<div class="caixa-missao">
         <b>${i.missao.prova === "todas" ? "Robô de treino" : (provasDe(i).length > 1 ? "Provas " : "Prova ") + provasDe(i).join(" + ")} · ${esc(provasDe(i).map((p) => (PROVAS_FIRA[p] || {}).nome || "").join(" / "))}</b>
         <span>${esc(i.missao.parte)}</span>
         <span><b>Pontos:</b> ${esc(i.missao.pontos)}</span>
         ${i.medidas_cm ? `<span><b>Tamanho estimado:</b> ${i.medidas_cm.map((n) => String(n).replace(".", ",")).join(" x ")} cm
           (limite: ${esc(provasDe(i).map((p) => (provasDe(i).length > 1 ? p + " " : "") + ((PROVAS_FIRA[p] || {}).limite || "")).join("; "))}). Meça o robô pronto!</span>` : ""}
       </div>`
    : "";
  const montar = mod
    ? `<div class="visor3d">
         <div class="visor3d-tela" id="visor3d"><button class="btn" id="abrir3d">▶ Ver montagem em 3D</button></div>
         <div class="visor3d-controles" hidden id="controles3d">
           <button class="btn secundario" id="ant3d" aria-label="Passo anterior">◀</button>
           <div class="visor3d-passo"><b id="num3d"></b><span id="leg3d"></span></div>
           <button class="btn" id="prox3d" aria-label="Próximo passo">▶</button>
         </div>
         <div class="acoes" hidden id="extras3d">
           <button class="btn secundario" id="pronto3d">Ver robô pronto</button>
           <button class="btn secundario" id="girar3d">Girar sozinho</button>
         </div>
         <p class="dica">Gire com um dedo, aproxime com dois. Cabos não aparecem no modelo.</p>
         ${i.robo2 ? `<div class="aviso">O 3D mostra só o ${esc(i.robo1_titulo || "robô 1")}. ${esc(i.robo2.titulo)}: siga os passos em texto (abertos abaixo).</div>` : ""}
         <details class="passos-texto" id="passos-texto"${i.robo2 ? " open" : ""}>
           <summary>Ver os passos em texto</summary>
           <ol>${itens(mod.passos)}</ol>
           ${i.robo2 || mod.passos.length === 0 ? `<h4>Passos da ideia (os dois robôs)</h4><ol>${itens(i.passos)}</ol>` : ""}
         </details>
       </div>`
    : `<ol>${itens(i.passos)}</ol>`;
  el.innerHTML = `
    <a class="voltar" href="${caminho}?aba=${aba}">‹ ${aba === "fira" ? "Todas as missões FIRA" : "Todas as ideias"}</a>
    <article class="ideia">
      <span class="nivel">${"★".repeat(i.nivel)}${"☆".repeat(3 - i.nivel)} ${NIVEIS[i.nivel]} · ${i.tempo} min${mod ? " · <b>3D</b>" : ""}</span>
      <h2 class="titulo-ideia">${esc(i.titulo)}</h2>
      ${missao}
      ${i.missao ? `<div class="acoes nao-imprime"><button class="btn secundario" id="imprimir">🖨 Imprimir ficha (A4)</button></div>` : ""}
      <p>${esc(i.resumo)}</p>
      <p class="aprende"><b>O que vamos aprender:</b> ${esc(i.aprende)}</p>

      <h3>1. Separe as peças</h3>
      <div class="progresso-separar" id="prog-sep" aria-live="polite">
        <span id="prog-txt"></span><div class="barra"><span id="prog-barra"></span></div>
        <button class="btn secundario" id="prog-limpar">Desmarcar tudo</button>
      </div>
      ${listaPecas}
      ${robo2Pecas}
      ${impressas}

      <h3>2. Monte</h3>
      ${montar}

      <h3>3. Programe</h3>
      ${i.blocos ? htmlProgramacao(i) : `<ol class="programa">${itens(i.programa)}</ol>`}

      <h3>4. Vá além do básico</h3>
      <ul>${itens(i.variacoes)}</ul>

      <div class="caixa-desafio"><b>Desafio extra:</b> ${esc(i.desafio)}</div>
      <div class="caixa-pergunta"><b>Para conversar:</b> ${esc(i.pergunta)}</div>
    </article>`;
  ligarSeparar(el, i.id);
  const bImp = el.querySelector("#imprimir");
  if (bImp) bImp.onclick = () => imprimirFicha(i, mod, Number(el.dataset.estr || 0));
  if (mod) ligarVisor3d(el, mod);
  if (i.blocos) ligarEstrategias(el, i);
}

// ---------- ficha impressa (1 página A4, preto e branco) ----------
const ROTULO_TIPO = { evento: "Evento", controle: "Controle", movimento: "Movimento", motor: "Motor",
  sensor: "Sensor", luz: "Luz", som: "Som", operador: "Operador", variavel: "Variável" };

function blocosImpressos(lista) {
  return lista.map((b) => `
    <div class="fi-bloco"><span class="fi-tipo">${ROTULO_TIPO[b.t] || ""}</span> ${esc(b.txt).replace(/\{(\w)\}/g, "[$1]")}</div>
    ${b.filhos ? `<div class="fi-dentro">${blocosImpressos(b.filhos)}</div>` : ""}
    ${b.senao ? `<div class="fi-bloco"><span class="fi-tipo">senão</span></div><div class="fi-dentro">${blocosImpressos(b.senao)}</div>` : ""}`).join("");
}

function imprimirFicha(i, mod, k) {
  const s = i.blocos ? i.blocos[k] || i.blocos[0] : null;
  const provas = provasDe(i);
  const pecas = mod ? pecasDoModelo(mod, i.kit).concat((mod.extras || []).map(([n, q]) => [n, q])) : i.eletronica.concat(i.pecas);
  const impressas = (i.pecas_impressas || []).map(([n, q]) => [n + " (impressa 3D)", q]);
  const robo2 = i.robo2 ? i.robo2.eletronica.concat(i.robo2.pecas).map(([n, q]) => [n + " (robô 2)", q]) : [];
  const passos = mod ? mod.passos : i.passos;
  const portas = (titulo, pt) => `<p><b>${titulo}</b> ${Object.entries(pt || {}).map(([p, d]) => `[${p}] ${esc(curto(d))}`).join(" · ")}</p>`;
  const linhas = Array.from({ length: 5 }, (_, n) => `<tr><td>${n + 1}</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`).join("");
  let ficha = document.getElementById("ficha");
  if (!ficha) { ficha = document.createElement("section"); ficha.id = "ficha"; document.body.appendChild(ficha); }
  ficha.innerHTML = `
    <header class="fi-topo">
      <div><b class="fi-titulo">${esc(i.titulo)}</b><br>${esc(KITS[i.kit] ? KITS[i.kit].nome : i.kit)} · ${i.missao.prova === "todas" ? "Robô de treino (todas as provas)"
        : "Prova " + provas.join(" + ") + " · " + esc(provas.map((p) => (PROVAS_FIRA[p] || {}).nome || "").join(" / "))}</div>
      <div class="fi-nome">Equipe: ____________________<br>Data: ____/____</div>
    </header>
    <p><b>Missão:</b> ${esc(i.missao.parte)}</p>
    <p><b>Pontos:</b> ${esc(i.missao.pontos)}</p>
    <p><b>Limite de tamanho:</b> ${esc(provas.map((p) => (PROVAS_FIRA[p] || {}).limite || "").join("; "))}${provas.map((p) => TEMPO_PROVA[p]).some(Boolean) ? " · <b>Tempo:</b> " + provas.filter((p) => TEMPO_PROVA[p]).map((p) => fmtTempo(TEMPO_PROVA[p])).join(" / ") : ""}
      ${i.medidas_cm ? ` · <b>Nosso robô:</b> ${i.medidas_cm.map((n) => String(n).replace(".", ",")).join(" x ")} cm` : ""}</p>
    <h4>1. Peças</h4>
    <div class="fi-pecas">${pecas.concat(impressas, robo2).map(([n, q]) => `<span>☐ ${q}× ${esc(n)}</span>`).join("")}</div>
    <h4>2. Montagem</h4>
    <ol class="fi-passos">${passos.map((p) => `<li>${esc(p)}</li>`).join("")}</ol>
    ${s ? `<h4>3. Programa: ${esc(s.estrategia)}</h4>
      ${i.robo2 ? portas((i.robo1_titulo || "Robô 1") + ":", i.portas) + portas(i.robo2.titulo + ":", i.robo2.portas) : portas("Ligue assim:", i.portas)}
      <div class="fi-programa${i.robo2 ? " fi-dois" : ""}">
        <div>${i.robo2 ? `<b>${esc(i.robo1_titulo || "Robô 1")}</b>` : ""}${blocosImpressos(s.lista)}</div>
        ${i.robo2 ? `<div><b>${esc(i.robo2.titulo)}</b>${blocosImpressos(s.lista2 || [])}</div>` : ""}
      </div>
      <p class="fi-obs">Os números são exemplos: calibre na arena. Ajuste: ${esc(s.ajustes.join(" "))}</p>` : ""}
    <h4>4. Calibração na arena</h4>
    <table class="fi-tabela">
      <thead><tr><th>#</th><th>cm por rotação</th><th>giro de 90° (graus ou rotações)</th><th>velocidade (%)</th><th>tempo da tentativa (s)</th><th>pontos</th><th>o que mudamos</th></tr></thead>
      <tbody>${linhas}</tbody>
    </table>`;
  window.print();
}

// WebGL existe? (sem ele, o 3D não abre: mostra os passos em texto)
function temWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl")));
  } catch { return false; }
}

// Separar as peças: contador, barra e marcações guardadas neste iPad (por ideia)
function ligarSeparar(el, id) {
  const caixas = [...el.querySelectorAll(".separar input")];
  const chave = "separar:" + id;
  let salvo = [];
  try { salvo = JSON.parse(lerPref(chave, "[]")); } catch { salvo = []; }
  caixas.forEach((c, k) => { c.checked = salvo.includes(k); });
  const prog = el.querySelector("#prog-sep");
  const atualizar = () => {
    const feitas = caixas.filter((c) => c.checked).length;
    const pct = caixas.length ? Math.round((feitas / caixas.length) * 100) : 0;
    el.querySelector("#prog-txt").textContent = feitas === caixas.length && feitas
      ? `Tudo separado! ${feitas} de ${caixas.length}` : `${feitas} de ${caixas.length} separadas · ${pct}%`;
    el.querySelector("#prog-barra").style.width = pct + "%";
    prog.classList.toggle("completo", feitas === caixas.length && feitas > 0);
    gravarPref(chave, JSON.stringify(caixas.map((c, k) => (c.checked ? k : -1)).filter((k) => k >= 0)));
  };
  caixas.forEach((c) => { c.onchange = atualizar; });
  el.querySelector("#prog-limpar").onclick = () => { caixas.forEach((c) => { c.checked = false; }); atualizar(); };
  atualizar();
}

// O three.js (1,3 MB) só é carregado quando a pessoa toca em "Ver montagem em 3D".
let visorAtual = null;
function fecharVisor() {
  if (visorAtual) { visorAtual.fechar(); visorAtual = null; }
}

function ligarVisor3d(el, mod) {
  const tela = el.querySelector("#visor3d");
  const botao = el.querySelector("#abrir3d");
  const planoB = (motivo) => {
    tela.innerHTML = `<div class="aviso aviso-3d"><b>O 3D não abriu neste aparelho</b> (${esc(motivo)}).<br>
      Siga os passos em texto logo abaixo. No iPad do laboratório o 3D funciona; se falhar, feche outras abas e tente de novo.</div>`;
    el.querySelector("#controles3d").hidden = true;
    el.querySelector("#extras3d").hidden = true;
    el.querySelector("#passos-texto").open = true;
  };
  botao.onclick = async () => {
    if (!temWebGL()) return planoB("sem WebGL");
    botao.disabled = true;
    botao.textContent = "Carregando peças…";
    try {
      const { abrirVisor } = await import("./visor3d.js");
      tela.innerHTML = "";
      const num = el.querySelector("#num3d"), leg = el.querySelector("#leg3d");
      visorAtual = await abrirVisor(tela, mod.mpd, {
        aoMudarPasso: (p, t) => {
          num.textContent = `Passo ${p} de ${t}`;
          leg.textContent = mod.passos[p - 1] || "";
        }
      });
      visorAtual.irPara(1);
      el.querySelector("#controles3d").hidden = false;
      el.querySelector("#extras3d").hidden = false;
      el.querySelector("#ant3d").onclick = () => visorAtual.anterior();
      el.querySelector("#prox3d").onclick = () => visorAtual.proximo();
      el.querySelector("#pronto3d").onclick = () => visorAtual.irPara(visorAtual.total);
      let girando = false;
      el.querySelector("#girar3d").onclick = (e) => {
        girando = !girando;
        visorAtual.girar(girando);
        e.target.textContent = girando ? "Parar de girar" : "Girar sozinho";
      };
    } catch (erro) {
      fecharVisor();
      planoB(erro.message);
    }
  };
}

function abaDesafio(el, amb) {
  const sensores = amb.eletronica.filter((e) => e.nome.startsWith("Sensor")).map((e) => curto(e.nome).toLowerCase());
  const motores = amb.eletronica.filter((e) => e.nome.startsWith("Motor")).map((e) => curto(e.nome).toLowerCase());
  const trocar = (t) => t.replace("{sensor}", sortear(sensores)).replace("{motor}", sortear(motores));

  function novo() {
    const d = DESAFIOS;
    el.innerHTML = `
      <div class="desafio">
        <p class="tema">${esc(sortear(d.temas))}</p>
        <dl>
          <dt>Mecanismo</dt><dd>Use ${esc(sortear(d.mecanismos))}.</dd>
          <dt>Regra</dt><dd>${esc(trocar(sortear(d.restricoes)))}</dd>
          <dt>Desafio extra</dt><dd>${esc(trocar(sortear(d.extras)))}</dd>
        </dl>
      </div>
      <div class="acoes"><button class="btn" id="outro">🎲 Outro desafio</button></div>`;
    document.getElementById("outro").onclick = novo;
  }
  novo();
}

// ---------- área do professor ----------
function telaProfessor() {
  pintarKit(null);
  const opKits = Object.entries(KITS).map(([id, k]) => `<option value="${id}">${esc(k.nome)}</option>`).join("");
  const checks = Object.entries(KITS).map(([id, k]) => `
    <label class="opcao"><input type="checkbox" name="extra" value="${id}"> ${esc(k.nome)}</label>`).join("");
  const exp = lerPref("expansao", "");

  tela.innerHTML = `
    <h1>Área do professor</h1>
    <p class="sub">Monta um pedido pronto para colar no Claude da sua conta. Nada é enviado daqui.</p>

    <div class="duas-col">
      <label class="campo"><span>Kit (eletrônica)</span><select id="p-kit">${opKits}</select></label>
      <label class="campo"><span>Tema ou problema</span><input type="text" id="p-tema" placeholder="ex.: guindaste que levanta um estojo"></label>
      <label class="campo"><span>Série</span><input type="text" id="p-serie" placeholder="ex.: 5º ano"></label>
      <label class="campo"><span>Tempo de aula (min)</span><input type="text" id="p-tempo" inputmode="numeric" value="50"></label>
      <label class="campo"><span>Foco</span>
        <select id="p-foco">
          <option value="montagem e programação">Montagem e programação</option>
          <option value="montagem">Só montagem</option>
          <option value="programação">Só programação</option>
        </select></label>
      <label class="campo"><span>Número de equipes</span><input type="text" id="p-equipes" inputmode="numeric" value="5"></label>
    </div>
    <span class="campo"><span>Peças de montagem de outros kits</span></span>
    <div class="opcoes">${checks}</div>

    <div class="acoes"><button class="btn" id="gerar">Gerar pedido</button></div>
    <label class="campo" style="margin-top:18px"><span>Pedido</span><textarea id="p-saida" readonly></textarea></label>
    <div class="acoes">
      <button class="btn" id="copiar">Copiar</button>
      <a class="btn secundario" href="https://claude.ai/new" target="_blank" rel="noopener">Abrir o Claude</a>
    </div>

    <h2>Configuração deste laboratório</h2>
    <label class="campo"><span>Caixa de expansão</span>
      <select id="p-exp">
        <option value="">Nenhuma / não sei</option>
        <option value="45681">45681 · Expansão SPIKE Prime</option>
        <option value="45560">45560 · Expansão EV3</option>
      </select></label>

    <h2>Usar sem internet</h2>
    <p class="sub">Baixa de uma vez o visor 3D e todas as montagens para este iPad (cerca de 10 MB). Faça uma vez em cada iPad, com Wi-Fi, e de novo quando o app avisar versão nova.</p>
    <div class="acoes"><button class="btn" id="offline">Preparar este iPad para usar sem internet</button></div>
    <p class="dica" id="offline-st" aria-live="polite"></p>`;

  document.getElementById("offline").onclick = async (e) => {
    const st = document.getElementById("offline-st");
    if (!("serviceWorker" in navigator) || !navigator.serviceWorker.controller) {
      st.textContent = "Abra o app pelo link (https) e recarregue a página uma vez antes de preparar.";
      return;
    }
    e.target.disabled = true;
    // pede ao iPad para não apagar o que foi guardado (o Safari pode ignorar)
    try { await navigator.storage?.persist?.(); } catch { /* sem suporte */ }
    const lista = ["visor3d.js", "vendor/three/three.module.js", "vendor/three/LDrawLoader.js", "vendor/three/OrbitControls.js",
      ...Object.values(window.MODELOS3D || {}).map((m) => m.mpd)];
    let ok = 0, falhas = 0;
    for (const url of lista) {
      try { (await fetch(url)).ok ? ok++ : falhas++; } catch { falhas++; }
      st.textContent = `Baixando ${ok + falhas} de ${lista.length}…`;
    }
    st.textContent = falhas ? `${ok} de ${lista.length} baixados; ${falhas} falharam: tente de novo com Wi-Fi.`
      : `Pronto: ${ok} arquivos guardados. O 3D funciona sem internet neste iPad.`;
    e.target.disabled = false;
  };

  const sel = document.getElementById("p-exp");
  sel.value = exp;
  sel.onchange = () => gravarPref("expansao", sel.value);

  document.getElementById("gerar").onclick = () => {
    const base = document.getElementById("p-kit").value;
    const extras = [...tela.querySelectorAll("input[name=extra]:checked")].map((c) => c.value).filter((v) => v !== base);
    document.getElementById("p-saida").value = montarPrompt(montarAmbiente(base, extras), {
      tema: document.getElementById("p-tema").value.trim() || "tema livre",
      serie: document.getElementById("p-serie").value.trim() || "não informada",
      tempo: document.getElementById("p-tempo").value.trim() || "50",
      foco: document.getElementById("p-foco").value,
      equipes: document.getElementById("p-equipes").value.trim() || "5"
    });
  };
  document.getElementById("copiar").onclick = async (ev) => {
    const txt = document.getElementById("p-saida");
    try { await navigator.clipboard.writeText(txt.value); }
    catch { txt.select(); document.execCommand("copy"); }
    ev.target.textContent = "Copiado ✓";
    setTimeout(() => { ev.target.textContent = "Copiar"; }, 1500);
  };
}

function montarPrompt(amb, o) {
  const eletronica = amb.eletronica.filter(ehComponente)
    .map((e) => `- ${e.qtd}x ${e.nome}${e.info ? ` (${e.info})` : ""}`).join("\n");
  // Lista enxuta de peças (nome + quantidade, cores somadas) para a IA não inventar peças
  const porNome = new Map();
  for (const p of amb.pecas) porNome.set(p.nome, (porNome.get(p.nome) || 0) + p.qtd);
  const pecas = [...porNome].map(([n, q]) => `${q}x ${n}`).join("; ");
  return `Você é um professor de robótica educacional ajudando a planejar uma aula com LEGO.

KIT DA AULA
- Eletrônica (use SOMENTE estes componentes, de um único kit): ${amb.kit.nome} ${amb.kit.conjunto}
${eletronica}
- Peças de montagem disponíveis (${amb.estruturais.join(" + ")}, quantidade por maleta):
${pecas}
- Programação: ${amb.kit.programacao}

TURMA
- Série: ${o.serie}
- Tempo: ${o.tempo} minutos
- Equipes: ${o.equipes}

TEMA
${o.tema}

O QUE EU PRECISO (foco: ${o.foco})
1. Três variações criativas do projeto, da mais simples para a mais desafiadora, que fujam do modelo básico do manual.
2. Para cada variação: mecanismo principal, lista de peças com quantidade aproximada e passo a passo curto de montagem.
3. Ideia de programação em blocos para cada variação (descreva os blocos em ordem).
4. Um desafio extra para equipes que terminarem antes.
5. Uma pergunta para discutir com a turma no fim da aula.

REGRAS
- Use apenas peças da lista acima, sem passar das quantidades. Se precisar de algo que não está na lista, diga isso e ofereça uma alternativa da lista.
- Nunca combine eletrônica de kits diferentes.
- Linguagem adequada para a série informada.`;
}

// ---------- roteador ----------
function rotear() {
  const [rota, query] = location.hash.replace(/^#/, "").split("?");
  const partes = rota.split("/").filter(Boolean);
  const params = new URLSearchParams(query || "");
  const aba = params.get("aba") || "pecas";
  window.scrollTo(0, 0);
  fecharVisor();
  if (partes[0] === "kit") {
    const extras = (partes[2] || "").split(",").filter((e) => KITS[e] && e !== partes[1]);
    return telaKit(partes[1], extras, aba, params.get("ideia"));
  }
  if (partes[0] === "misturar") return telaMisturar();
  if (partes[0] === "professor") return telaProfessor();
  telaInicio();
}
window.addEventListener("hashchange", rotear);
rotear();
