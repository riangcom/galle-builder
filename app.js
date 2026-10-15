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
  topoKit.textContent = k ? k.nome : "";
}

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
  const abas = [["pecas", "Peças"], ["ideias", "Ideias"], ["desafio", "Desafio surpresa"]];
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
  if (aba === "ideias") return abaIdeias(conteudo, amb, idIdeia, caminho);
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

function abaIdeias(el, amb, idIdeia, caminho) {
  const ideias = (window.IDEIAS || []).filter((i) => i.kit === amb.base);
  const ideia = ideias.find((i) => i.id === idIdeia);
  if (ideia) return detalheIdeia(el, ideia, caminho);
  if (!ideias.length) {
    el.innerHTML = `<div class="aviso">Ainda não há ideias para este kit. Experimente o <b>Desafio surpresa</b>.</div>`;
    return;
  }
  let nivel = 0;
  el.innerHTML = `
    <div class="filtros">
      <button class="filtro" data-n="0" aria-pressed="true">Todas</button>
      ${Object.entries(NIVEIS).map(([n, r]) => `<button class="filtro" data-n="${n}" aria-pressed="false">${"★".repeat(n)} ${r}</button>`).join("")}
    </div>
    <div class="grade-ideias" id="lista-ideias"></div>`;
  const lista = el.querySelector("#lista-ideias");
  function desenhar() {
    lista.innerHTML = ideias.filter((i) => !nivel || i.nivel === nivel).map((i) => `
      <a class="card-ideia" href="${caminho}?aba=ideias&ideia=${i.id}">
        <span class="nivel">${"★".repeat(i.nivel)}${"☆".repeat(3 - i.nivel)} ${NIVEIS[i.nivel]} · ${i.tempo} min</span>
        <strong>${esc(i.titulo)}</strong>
        <span>${esc(i.resumo)}</span>
        <span class="chips">${(i.tags || []).map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</span>
      </a>`).join("");
  }
  el.querySelectorAll(".filtro").forEach((b) => {
    b.onclick = () => {
      nivel = Number(b.dataset.n);
      el.querySelectorAll(".filtro").forEach((x) => x.setAttribute("aria-pressed", x === b));
      desenhar();
    };
  });
  desenhar();
}

function detalheIdeia(el, i, caminho) {
  const separar = (lista) => lista.map(([nome, q]) => `
    <label class="separar"><input type="checkbox"><span><b>${q}×</b> ${esc(nome)}</span></label>`).join("");
  const itens = (lista) => lista.map((t) => `<li>${esc(t)}</li>`).join("");
  el.innerHTML = `
    <a class="voltar" href="${caminho}?aba=ideias">‹ Todas as ideias</a>
    <article class="ideia">
      <span class="nivel">${"★".repeat(i.nivel)}${"☆".repeat(3 - i.nivel)} ${NIVEIS[i.nivel]} · ${i.tempo} min</span>
      <h2 class="titulo-ideia">${esc(i.titulo)}</h2>
      <p>${esc(i.resumo)}</p>
      <p class="aprende"><b>O que vamos aprender:</b> ${esc(i.aprende)}</p>

      <h3>1. Separe as peças</h3>
      <p class="dica">Marque cada peça quando tirar da maleta. São as principais: pode precisar de mais pinos e buchas.</p>
      <div class="lista-separar">${separar(i.eletronica)}${separar(i.pecas)}</div>

      <h3>2. Monte</h3>
      <ol>${itens(i.passos)}</ol>

      <h3>3. Programe</h3>
      <ol class="programa">${itens(i.programa)}</ol>

      <h3>4. Vá além do básico</h3>
      <ul>${itens(i.variacoes)}</ul>

      <div class="caixa-desafio"><b>Desafio extra:</b> ${esc(i.desafio)}</div>
      <div class="caixa-pergunta"><b>Para conversar:</b> ${esc(i.pergunta)}</div>
    </article>`;
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
      </select></label>`;

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
