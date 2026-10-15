// Visor 3D passo a passo (three.js + LDraw). Gira com o dedo, avança passo a passo,
// e anima as peças novas de cada passo "caindo" no lugar.
import * as THREE from "three";
import { OrbitControls } from "./vendor/three/OrbitControls.js";
import { LDrawLoader } from "./vendor/three/LDrawLoader.js";

export async function abrirVisor(caixa, urlModelo, { bibliotecaLDraw = null, aoMudarPasso = () => {} } = {}) {
  const largura = () => caixa.clientWidth || 600;
  const altura = () => caixa.clientHeight || 450;

  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(largura(), altura());
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  caixa.appendChild(renderer.domElement);

  const cena = new THREE.Scene();
  cena.background = new THREE.Color(0xf2f4f7);
  cena.add(new THREE.HemisphereLight(0xffffff, 0x8899aa, 2.2));
  const sol = new THREE.DirectionalLight(0xffffff, 2.0);
  sol.position.set(1, 2, 1.5);
  cena.add(sol);

  const camera = new THREE.PerspectiveCamera(40, largura() / altura(), 1, 20000);
  const controles = new OrbitControls(camera, renderer.domElement);
  controles.enableDamping = true;

  const loader = new LDrawLoader();
  loader.smoothNormals = true;
  if (bibliotecaLDraw) {
    loader.setPartsLibraryPath(bibliotecaLDraw);
    await loader.preloadMaterials(bibliotecaLDraw + "LDConfig.ldr");
  }
  const modelo = await loader.loadAsync(urlModelo);
  // LDraw usa Y para baixo: gira 180° em X para ficar em pé
  modelo.rotation.x = Math.PI;
  cena.add(modelo);

  // Peças = grupos filhos com número de passo
  const pecas = [];
  modelo.traverse((o) => {
    if (o.isGroup && o !== modelo && o.parent === modelo) pecas.push(o);
  });
  const total = modelo.userData.numBuildingSteps || 1;
  for (const p of pecas) p.userData.posFinal = p.position.clone();

  // Enquadra a câmera no modelo completo
  const caixaModelo = new THREE.Box3().setFromObject(modelo);
  const centro = caixaModelo.getCenter(new THREE.Vector3());
  const tamanho = caixaModelo.getSize(new THREE.Vector3()).length();
  controles.target.copy(centro);
  camera.position.copy(centro).add(new THREE.Vector3(0.7, 0.55, 0.9).normalize().multiplyScalar(tamanho * 1.15));
  camera.near = tamanho / 100;
  camera.far = tamanho * 20;
  camera.updateProjectionMatrix();

  let passo = total - 1;
  let animando = [];
  function mostrar(n, animar = true) {
    passo = Math.max(0, Math.min(total - 1, n));
    animando = [];
    for (const p of pecas) {
      const s = p.userData.buildingStep || 0;
      p.visible = s <= passo;
      p.position.copy(p.userData.posFinal);
      if (animar && s === passo && passo < total) {
        // LDraw invertido: "cair de cima" é Y negativo no espaço do modelo
        p.position.y -= tamanho * 0.25;
        animando.push(p);
      }
    }
    inicioAnim = performance.now();
    aoMudarPasso(passo + 1, total);
  }
  let inicioAnim = 0;

  let girarSozinho = false;
  function quadro(t) {
    if (animando.length) {
      const k = Math.min(1, (t - inicioAnim) / 450);
      const e = 1 - Math.pow(1 - k, 3);
      for (const p of animando) {
        p.position.y = p.userData.posFinal.y - tamanho * 0.25 * (1 - e);
      }
      if (k >= 1) animando = [];
    }
    controles.autoRotate = girarSozinho;
    controles.update();
    renderer.render(cena, camera);
    pedido = requestAnimationFrame(quadro);
  }
  let pedido = requestAnimationFrame(quadro);

  const aoRedimensionar = () => {
    camera.aspect = largura() / altura();
    camera.updateProjectionMatrix();
    renderer.setSize(largura(), altura());
  };
  window.addEventListener("resize", aoRedimensionar);

  mostrar(total - 1, false);

  return {
    total,
    get passo() { return passo + 1; },
    irPara: (n) => mostrar(n - 1),
    proximo: () => mostrar(passo + 1),
    anterior: () => mostrar(passo - 1),
    girar: (sim) => { girarSozinho = sim; },
    vista: (x, y, z) => {
      camera.position.copy(centro).add(new THREE.Vector3(x, y, z).normalize().multiplyScalar(tamanho * 1.15));
    },
    fechar: () => {
      cancelAnimationFrame(pedido);
      window.removeEventListener("resize", aoRedimensionar);
      renderer.dispose();
      caixa.innerHTML = "";
    }
  };
}
