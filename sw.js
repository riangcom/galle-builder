// Service worker: guarda o app no iPad para funcionar sem internet.
// Ao mudar qualquer arquivo do app, aumente a VERSAO para os iPads baixarem de novo.
const VERSAO = "galle-builder-v8";
const ARQUIVOS = [
  "./", "index.html", "styles.css", "app.js", "manifest.webmanifest",
  "dados/kits.js", "dados/inventario.js", "dados/desafios.js",
  "dados/ideias_prime.js", "dados/ideias_essential.js", "dados/ideias_ev3.js", "dados/modelos3d.js",
  "dados/ideias_fira_prime.js", "dados/ideias_fira_essential.js", "dados/ideias_fira_ev3.js", "dados/ideias_fira_rodada2.js", "dados/ideias_fira_rodada3.js", "dados/ideias_fira_rodada4.js",
  "icones/apple-touch-icon.png", "icones/icone-192.png", "icones/icone-512.png"
];
// O 3D (three.js e modelos) é grande: fica guardado só depois da primeira vez que alguém abre.

self.addEventListener("install", (e) => {
  // cache: "reload" = baixa do servidor, nunca do cache do navegador (senão a versão nova podia guardar arquivo velho)
  e.waitUntil(caches.open(VERSAO).then((c) => c.addAll(ARQUIVOS.map((u) => new Request(u, { cache: "reload" }))))
    .then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((chaves) => Promise.all(chaves.filter((k) => !k.startsWith(VERSAO)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function guardarDepois(nomeCache, req) {
  return caches.open(nomeCache).then((c) =>
    c.match(req, { ignoreSearch: true }).then((r) => r || fetch(req.mode === "navigate" ? req : new Request(req, { cache: "no-cache" })).then((resp) => {
      if (resp.ok || resp.type === "opaque") c.put(req, resp.clone());
      return resp;
    }))
  );
}

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  // Fotos das peças (Rebrickable): guarda depois da primeira vez que aparecem.
  if (url.hostname === "cdn.rebrickable.com") {
    e.respondWith(guardarDepois(VERSAO + "-fotos", e.request));
    return;
  }
  if (url.origin !== location.origin) return;
  // App, three.js e modelos 3D: usa a cópia guardada; o que ainda não tem, baixa e guarda.
  e.respondWith(guardarDepois(VERSAO, e.request));
});
