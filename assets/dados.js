

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
      { destino: "Heaven", origem: "A Long", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "Bank", origem: "A Long", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "Barrels", origem: "A Long", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "Monster", origem: "B Short", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "CT", origem: "Water", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "Bathrooms", origem: "Water", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "Connector", origem: "CBase TR", lado: "CT", arquivo: "", nota: "(Jumpthrow)" },
    ]
  },
  {
    slug: "ancient",
    nome: "Ancient",
    codigo: "de_ancient",
    lineups: [
      { destino: "Temple", origem: "A Main", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "CT", origem: "A Main", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "Donut", origem: "Mid", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "Cave", origem: "B Main", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "Ramp", origem: "B Main", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "Heaven", origem: "B Main", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "Top Mid", origem: "CBase TR", lado: "CT", arquivo: "", nota: "(Jumpthrow)" },
    ]
  },
  {
    slug: "inferno",
    nome: "Inferno",
    codigo: "de_inferno",
    lineups: [
      { destino: "Caixao", origem: "Banana", lado: "T", arquivo: "inferno-banana-caixao.png", nota: "(Jumpthrow)" },
      { destino: "CT", origem: "Banana", lado: "T", arquivo: "inferno-banana-ct.png", nota: "(Jumpthrow)" },
      { destino: "Banana", origem: "(A) Areia 2", lado: "T", arquivo: "inferno-a-retake-b.jpg", nota: "(Jumpthrow)" },
      { destino: "Caminhao", origem: "Tapete", lado: "T", arquivo: "inferno-tpt-areia.png", nota: "(Jumpthrow)" },
      { destino: "Xuxa", origem: "Areia", lado: "T", arquivo: "inferno-areia-xuxa.jpg", nota: "(Jumpthrow)" },
      { destino: "Meio", origem: "Areia", lado: "T", arquivo: "inferno-areia-meio.jpg", nota: "(Jumpthrow)" },
      { destino: "Areia", origem: "Meio", lado: "T", arquivo: "inferno-meio-areia.png", nota: "(Jumpthrow)" },
      { destino: "Rato", origem: "Base CT", lado: "CT", arquivo: "inferno-ct-rato.jpg", nota: "(Jumpthrow)" },
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
      { destino: "Heaven", origem: "Outside", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "Hut", origem: "Outside", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "Squeaky", origem: "Outside", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "Ramp", origem: "Outside", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "Vents", origem: "Ramp", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "Red", origem: "Outside", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "Silo", origem: "CBase TR", lado: "CT", arquivo: "", nota: "(Jumpthrow)" },
    ]
  },
  {
    slug: "cache",
    nome: "Cache",
    codigo: "de_cache",
    lineups: [
      { destino: "Highway", origem: "A Main", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "CT", origem: "A Main", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "Squeaky", origem: "A Main", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "Checkers", origem: "B Main", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "Heaven", origem: "B Main", lado: "T", arquivo: "", nota: "(Jumpthrow)" },
      { destino: "Garage", origem: "CBase TR", lado: "CT", arquivo: "", nota: "(Jumpthrow)" },
    ]
  }
];
