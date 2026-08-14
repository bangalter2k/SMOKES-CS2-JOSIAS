/* ============================================================
   SMOKES CS2 — TODOS OS DADOS DO SITE FICAM AQUI
   ============================================================

   É o único arquivo que você precisa editar no dia a dia.
   Os cartões da home, as contagens e as páginas de mapa
   são montados a partir daqui.

   COMO ADICIONAR UMA LINEUP
   -------------------------
   Copie uma linha e mude os campos:

     { destino: "Window", origem: "Base TR", lado: "T" }

     destino → onde a fumaça cai
     origem  → de onde você joga
     lado    → "T" (ataque) ou "CT" (defesa)
     nota    → opcional, ex.: nota: "jump throw"

   O NOME DA IMAGEM
   ----------------
   O site procura sozinho, dentro da pasta img/, o arquivo:

     mapa-destino-origem.png   (tudo minúsculo, espaço vira hífen)

   O exemplo acima procura por:  img/mirage-window-t-spawn.png

   Se o seu arquivo tiver outro nome ou for .png, avise assim:

     { destino: "Window", origem: "Base TR", lado: "T", arquivo: "minha-foto.png" }

   Enquanto a imagem não existir, o card mostra "sem captura" —
   nada quebra.

   PARA ADICIONAR UM MAPA NOVO
   ---------------------------
   1. Copie um bloco de mapa inteiro aqui embaixo e mude slug/nome/codigo
   2. Duplique um arquivo de mapas/ com o nome do slug (ex.: mapas/train.html)
      e troque só a linha  montarMapa("...")  no fim do arquivo
   ============================================================ */

const MAPAS = [
  {
    slug: "mirage",
    nome: "Mirage",
    codigo: "de_mirage",
    lineups: [
    { destino: "Janela", origem: "Base TR", lado: "T", arquivo: "mirage-meio-janela.png", nota: "(Jumpthrow)" },
    { destino: "Ligação", origem: "Base TR", lado: "T", arquivo: "mirage-meio-liga.png", nota: "(Jumpthrow)" },
    { destino: "CT", origem: "Porta A", lado: "T", arquivo: "mirage-a-ct.png", nota: "(Jumpthrow)" },
    { destino: "Jungle", origem: "Porta A", lado: "T", arquivo: "mirage-a-liga.png", nota: "(Jumpthrow)" },
    { destino: "Cabecinha", origem: "Porta A", lado: "T", arquivo: "mirage-a-cabecinha.png", nota: "(Jumpthrow)" },
    { destino: "L", origem: "TV", lado: "T", arquivo: "mirage-b-L.png", nota: "(Jumpthrow)" },
    { destino: "Janela do Mercado", origem: "TV", lado: "T", arquivo: "mirage-b-janela.png", nota: "(Jumpthrow)" },
    { destino: "Porta do Mercado", origem: "TV", lado: "T", arquivo: "mirage-b-porta.png", nota: "(Jumpthrow)" },
    { destino: "Tapete", origem: "Van", lado: "CT", arquivo: "mirage-dominio-tpt.png", nota: "(Um passo + Jumpthrow)" },
    { destino: "Palacio", origem: "Mercado", lado: "CT", arquivo: "mirage-ct-palacio.jpg", nota: "(Jumpthrow)" }
]

  },
  {
    slug: "dust2",
    nome: "Dust 2",
    codigo: "de_dust2",
    lineups: [
      { destino: "Xbox", origem: "Base TR", lado: "T", arquivo: "d2-meio-varanda.png", nota: "(Jumpthrow)" },
      { destino: "Porta Meio", origem: "Base TR", lado: "T", arquivo: "d2-tr-porta-meio-b.png", nota: "(Jumpthrow)" },
      { destino: "Buraco do b", origem: "Base TR", lado: "T", arquivo: "d2-tr-buraco-b.png", nota: "(Jumpthrow)" },
      { destino: "porta do B", origem: "Base TR", lado: "T", arquivo: "d2-tr-porta-b.png", nota: "(Jumpthrow)" },
      { destino: "CAixa bomb a", origem: "Base TR", lado: "T", arquivo: "d2-meio-caixa-bomb-a.png", nota: "(Mirar agachado ficar em pé + Jumpthrow)" },,
      { destino: "Newba", origem: "Base TR", lado: "T", arquivo: "d2-meio-escanteio-bomb-a.png", nota: "(Mirar agachado ficar em pé e puxa um pouco pra esquerda + Jumpthrow)" },
      { destino: "Casinha Fundo", origem: "Base ct", lado: "CT", arquivo: "d2-ct-fundo.jpg", nota: "(Jumpthrow)" },
      { destino: "Fundo", origem: "Base ct", lado: "CT", arquivo: "d2-ct-fundo-rush.jpg", nota: "(Apenas soltar)" },
      { destino: "Caminho de Rato", origem: "Varanda", lado: "CT", arquivo: "d2-varanda-caminho-de-rato.jpg", nota: "(Jumpthrow)" },
      { destino: "Coqueiro", origem: "Varanda", lado: "CT", arquivo: "d2-varanda-coqueiro.jpg", nota: "(Jumpthrow)" },
    ]
  },
  {
    slug: "overpass",
    nome: "Overpass",
    codigo: "de_overpass",
    lineups: [
      { destino: "Heaven", origem: "A Long", lado: "T" },
      { destino: "Bank", origem: "A Long", lado: "T" },
      { destino: "Barrels", origem: "A Long", lado: "T" },
      { destino: "Monster", origem: "B Short", lado: "T" },
      { destino: "CT", origem: "Water", lado: "T" },
      { destino: "Bathrooms", origem: "Water", lado: "T" },
      { destino: "Connector", origem: "CBase TR", lado: "CT" }
    ]
  },
  {
    slug: "ancient",
    nome: "Ancient",
    codigo: "de_ancient",
    lineups: [
      { destino: "Temple", origem: "A Main", lado: "T" },
      { destino: "CT", origem: "A Main", lado: "T" },
      { destino: "Donut", origem: "Mid", lado: "T" },
      { destino: "Cave", origem: "B Main", lado: "T" },
      { destino: "Ramp", origem: "B Main", lado: "T" },
      { destino: "Heaven", origem: "B Main", lado: "T" },
      { destino: "Top Mid", origem: "CBase TR", lado: "CT" }
    ]
  },
  {
    slug: "inferno",
    nome: "Inferno",
    codigo: "de_inferno",
    lineups: [
      { destino: "CT Banana", origem: "Base TR", lado: "T" },
      { destino: "Coffins", origem: "Second Mid", lado: "T" },
      { destino: "Library", origem: "Apps", lado: "T" },
      { destino: "Moto", origem: "Apps", lado: "T" },
      { destino: "Arch", origem: "Second Mid", lado: "T" },
      { destino: "Car", origem: "Banana", lado: "T" },
      { destino: "Fountain", origem: "CBase TR", lado: "CT" },
      { destino: "Bottom Mid", origem: "CBase TR", lado: "CT" }
    ]
  },
  {
    slug: "anubis",
    nome: "Anubis",
    codigo: "de_anubis",
    lineups: [
      { destino: "rato", origem: "Base TR", lado: "T", arquivo: "anubis-tr-rato.jpg", nota: "(Jumpthrow)" },
      { destino: "Meio", origem: "Base TR", lado: "T", arquivo: "anubis-tr-meio.jpg", nota: "(Jumpthrow)" },
      { destino: "Boca do rato", origem: "fundo", lado: "T", arquivo: "anubis-fundo-rato.jpg", nota: "(Jumpthrow)" },
      { destino: "ninja", origem: "fundo", lado: "T", arquivo: "anubis-fundo-insani.jpg", nota: "(Jumpthrow)" },
      { destino: "CT", origem: "fundo", lado: "T", arquivo: "anubis-fundo-ct.jpg", nota: "(Jumpthrow)" },
      { destino: "Passagem", origem: "corredor", lado: "T", arquivo: "anubis-agua-passagem.jpg", nota: "(Jumpthrow)" },
      { destino: "Ceu", origem: "corredor", lado: "T", arquivo: "anubis-agua-ceu.jpg", nota: "(Mirar agachado ficar em pé e puxa um pouco pra esquerda + Jumpthrow)" },
      { destino: "Caixa", origem: "corredor", lado: "T", arquivo: "anubis-agua-caixa.jpg", nota: "(Apenas soltar)" },
      { destino: "escada", origem: "Base ct", lado: "CT", arquivo: "anubis-ct-escada.jpg", nota: "(Jumpthrow)" },
      { destino: "mercado", origem: "Base ct", lado: "CT", arquivo: "anubis-ct-mercado.jpg", nota: "(Jumpthrow)" },
    ]
  },
  {
    slug: "nuke",
    nome: "Nuke",
    codigo: "de_nuke",
    lineups: [
      { destino: "Heaven", origem: "Outside", lado: "T" },
      { destino: "Hut", origem: "Outside", lado: "T" },
      { destino: "Squeaky", origem: "Outside", lado: "T" },
      { destino: "Ramp", origem: "Outside", lado: "T" },
      { destino: "Vents", origem: "Ramp", lado: "T" },
      { destino: "Red", origem: "Outside", lado: "T" },
      { destino: "Silo", origem: "CBase TR", lado: "CT" }
    ]
  },
  {
    slug: "cache",
    nome: "Cache",
    codigo: "de_cache",
    lineups: [
      { destino: "Highway", origem: "A Main", lado: "T" },
      { destino: "CT", origem: "A Main", lado: "T" },
      { destino: "Squeaky", origem: "A Main", lado: "T" },
      { destino: "Checkers", origem: "B Main", lado: "T" },
      { destino: "Heaven", origem: "B Main", lado: "T" },
      { destino: "Garage", origem: "CBase TR", lado: "CT" }
    ]
  }
];
