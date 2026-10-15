// Service worker: guarda o app no iPad para funcionar sem internet.
// Ao mudar qualquer arquivo do app, aumente a VERSAO para os iPads baixarem de novo.
const VERSAO = "galle-builder-v1";
const ARQUIVOS = [
  "./", "index.html", "styles.css", "app.js", "manifest.webmanifest",
  "dados/kits.js", "dados/inventario.js", "dados/desafios.js",
  "dados/ideias_prime.js", "dados/ideias_essential.js", "dados/ideias_ev3.js",
  "icones/apple-touch-icon.png", "icones/icone-192.png", "icones/icone-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSAO).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((chaves) => Promise.all(chaves.filter((k) => k !== VERSAO).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  // Fotos das peças (Rebrickable): guarda depois da primeira vez que aparecem.
  if (url.hostname === "cdn.rebrickable.com") {
    e.respondWith(
      caches.open(VERSAO + "-fotos").then((c) =>
        c.match(e.request).then((r) => r || fetch(e.request).then((resp) => { c.put(e.request, resp.clone()); return resp; }))
      )
    );
    return;
  }
  if (url.origin !== location.origin) return;
  // App: usa a cópia guardada (a atualização vem quando a VERSAO muda).
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((r) => r || fetch(e.request))
  );
});
