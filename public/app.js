// Dados das experiências/pontos turísticos de Belo Horizonte
const dados = [
  {
    "id": 1,
    "titulo": "Igreja São Francisco de Assis (Igrejinha da Pampulha)",
    "descricao": "Obra-prima de Oscar Niemeyer, com painéis de Cândido Portinari. Um ícone da arquitetura moderna mundial.",
    "conteudo": "A Igreja São Francisco de Assis, popularmente conhecida como Igrejinha da Pampulha, é um dos cartões-postais de Belo Horizonte. Projetada por Oscar Niemeyer e inaugurada em 1943, faz parte do Conjunto Arquitetônico da Pampulha, que é Patrimônio Mundial da UNESCO. Seus painéis externos e internos são de Cândido Portinari, e os jardins foram projetados por Burle Marx. A forma arrojada e as curvas da igreja romperam com os padrões arquitetônicos da época e continuam a encantar visitantes do mundo todo.",
    "imagem": "img/igreja.jpg"
  },
  {
    "id": 2,
    "titulo": "Museu de Arte da Pampulha (MAP)",
    "descricao": "O antigo cassino da Pampulha, hoje abriga um acervo de arte contemporânea brasileira.",
    "conteudo": "O Museu de Arte da Pampulha (MAP) foi o primeiro prédio do Conjunto Arquitetônico a ser construído. Originalmente, funcionava como o Cassino da Pampulha, um dos mais luxuosos da época. Após a proibição dos jogos de azar no Brasil em 1946, o espaço foi adaptado e reinaugurado como museu em 1957. Hoje, seu acervo conta com importantes obras de arte contemporânea brasileira, e o próprio edifício é uma atração, com seus jardins de Burle Marx e arquitetura de Niemeyer.",
    "imagem": "img/museu.jpg"
  },
  {
    "id": 3,
    "titulo": "Estádio Mineirão",
    "descricao": "Palco de grandes jogos e shows, o Gigante da Pampulha é um ícone do futebol brasileiro.",
    "conteudo": "Inaugurado em 1965, o Estádio Governador Magalhães Pinto, o Mineirão, é um dos maiores e mais importantes templos do futebol mundial. Foi palco de jogos históricos, incluindo partidas da Copa do Mundo de 2014. Além das partidas de futebol, o estádio recebe grandes shows e eventos. Os visitantes podem conhecer o Museu Brasileiro do Futebol, que fica em seu interior, e fazer um tour para ver de perto os bastidores do Gigante da Pampulha.",
    "imagem": "img/mineirao.jpg"
  }
];

function carregarCards() {
  const container = document.getElementById('cards-container');

  if (!container) return;

  container.innerHTML = '';

  dados.forEach(item => {
    const cardHTML = `
      <div class="col-md-6 col-lg-4">
        <div class="card shadow-sm h-100">
          <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${item.titulo}</h5>
            <p class="card-text">${item.descricao}</p>
            <a href="detalhes.html?id=${item.id}" class="btn btn-primary mt-auto">Ver Mais</a>
          </div>
        </div>
      </div>
    `;

    container.innerHTML += cardHTML;
  });
}

carregarCards();


function carregarDetalhes() {
  const container = document.getElementById('detalhes-container');
  if (!container) return;
  const urlParams = new URLSearchParams(window.location.search);
  const itemId = parseInt(urlParams.get('id'));
  const item = dados.find(dado => dado.id === itemId);
  if (item) {
    container.innerHTML = `
      <div class="col-md-8 offset-md-2">
        <img src="${item.imagem}" class="img-fluid rounded mb-4" alt="${item.titulo}">
        <h1 class="mb-3">${item.titulo}</h1>
        <p class="lead">${item.conteudo}</p>
        <a href="index.html" class="btn btn-secondary mt-4">Voltar para a Home</a>
      </div>
    `;
  } else {
    container.innerHTML = "<p>Item não encontrado.</p>";
  }
}

carregarDetalhes();