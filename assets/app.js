/* ============================================================
   SMOKES CS2 — motor do site
   ============================================================ */

/* transforma "T Spawn" em "t-spawn" para achar o nome do arquivo */
function apelido(texto) {
  return texto
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function caminhoDaFoto(mapa, lineup, base) {
  const nome = lineup.arquivo || mapa.slug + "-" + apelido(lineup.destino) + "-" + apelido(lineup.origem) + ".jpg";
  return base + "img/" + nome;
}

function plural(n, palavra) {
  return n + " " + palavra + (n === 1 ? "" : "s");
}

/* função para escolher "do" ou "da" */
function artigo(origem) {
  // Lista de palavras femininas
  const femininas = ["Base", "Porta", "Janela", "Ligação", "Cabecinha", "Market", "TV", "Van", "Varanda",];
  const primeira = origem.split(" ")[0];
  return femininas.includes(primeira) ? "da" : "do";
}

/* ============================================================
   HOME — cartões dos mapas e barra de status
   ============================================================ */
function montarHome() {
  const grade = document.getElementById("grade");
  if (grade) {
    grade.innerHTML = MAPAS.map(m => `
      <a class="mapa" href="mapas/${m.slug}.html">
        <span class="nuvem"></span>
        <span class="codigo">${m.codigo}</span>
        <h2>${m.nome}</h2>
        <span class="qtd">${plural(m.lineups.length, "lineup")}</span>
        <span class="seta">abrir &rarr;</span>
      </a>`).join("");
  }

  const total = MAPAS.reduce((soma, m) => soma + m.lineups.length, 0);
  const elMapas = document.getElementById("totalMapas");
  const elLineups = document.getElementById("totalLineups");
  if (elMapas) elMapas.textContent = MAPAS.length;
  if (elLineups) elLineups.textContent = total;
}

/* ============================================================
   PÁGINA DE MAPA — grade de fotos + tela cheia
   ============================================================ */
function montarMapa(slug) {
  const mapa = MAPAS.find(m => m.slug === slug);
  const fotos = document.getElementById("fotos");
  if (!mapa) {
    fotos.innerHTML = '<p class="vazio">Mapa "' + slug + '" não encontrado em assets/dados.js</p>';
    return;
  }

  document.title = "Smokes — " + mapa.nome;
  document.getElementById("codigo").textContent = mapa.codigo;
  document.getElementById("nome").textContent = mapa.nome;
  document.getElementById("contador").innerHTML =
    "<b>" + mapa.lineups.length + "</b> lineup" + (mapa.lineups.length === 1 ? "" : "s");

  const fontes = mapa.lineups.map(l => caminhoDaFoto(mapa, l, "../"));

  fotos.innerHTML = mapa.lineups.map((l, i) => `
    <figure class="foto">
      <div class="moldura">
        <img src="${fontes[i]}" alt="Lineup ${l.destino} ${artigo(l.origem)} ${l.origem}" data-i="${i}" loading="lazy"
             onerror="this.closest('.moldura').classList.add('sem-foto'); this.remove();">
      </div>
      <figcaption>
        <span class="lado ${l.lado.toLowerCase()}">${l.lado === "T" ? "TR" : "CT"}</span>
        <b>${l.destino}</b> <span class="origem">${artigo(l.origem)} ${l.origem}</span>
        ${l.nota ? '<span class="nota">' + l.nota + "</span>" : ""}
      </figcaption>
    </figure>`).join("");

  /* ---------- foto em tela cheia, com setas ---------- */
  const lupa = document.getElementById("lupa");
  const lupaImg = document.getElementById("lupaImg");
  const lupaLegenda = document.getElementById("lupaLegenda");
  let atual = 0;

  function mostrar(i) {
    atual = (i + mapa.lineups.length) % mapa.lineups.length;
    const l = mapa.lineups[atual];
    lupaImg.src = fontes[atual];
    lupaImg.alt = "Lineup " + l.destino + " " + artigo(l.origem) + " " + l.origem;
    lupaLegenda.textContent = l.destino + " — " + artigo(l.origem) + " " + l.origem
      + (l.nota ? " · " + l.nota : "")
      + "   (" + (atual + 1) + "/" + mapa.lineups.length + ")";
    lupa.hidden = false;
  }

  function fechar() { lupa.hidden = true; lupaImg.src = ""; }

  fotos.addEventListener("click", e => {
    const img = e.target.closest(".moldura img");
    if (img) mostrar(Number(img.dataset.i));
  });

  lupa.addEventListener("click", e => { if (e.target === lupa || e.target === lupaImg) fechar(); });
  document.getElementById("lupaFechar").addEventListener("click", fechar);
  document.getElementById("lupaAnterior").addEventListener("click", () => mostrar(atual - 1));
  document.getElementById("lupaProxima").addEventListener("click", () => mostrar(atual + 1));

  document.addEventListener("keydown", e => {
    if (lupa.hidden) return;
    if (e.key === "Escape") fechar();
    if (e.key === "ArrowLeft") mostrar(atual - 1);
    if (e.key === "ArrowRight") mostrar(atual + 1);
  });
}
