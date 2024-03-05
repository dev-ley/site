// Função para criar os cards com base nos dados fornecidos
function criarCards(produtos) {
  // Seleciona o elemento onde os cards serão adicionados
  const container = document.querySelector('.conteiner_cards');

  // Limpa o container antes de adicionar os novos cards
  container.innerHTML = '';

  // Loop sobre os produtos e criar um card para cada objeto na lista
  produtos.forEach((item) => {
    // Criar o elemento div principal com a classe "cards"
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('cards');

    // Criar o elemento h2 para exibir o código (key) do produto
    const codigoTitulo = document.createElement('h2');
    codigoTitulo.classList.add('textocodigo')
    codigoTitulo.textContent = `Cód ${item.key}`;

    // Criar o elemento div para a imagem e descrição com a classe "imagem_descricao"
    const imagemDescricaoDiv = document.createElement('div');
    imagemDescricaoDiv.classList.add('imagem_descricao');

    // Criar o elemento de link com o href do objeto
    const link = document.createElement('a');
    link.href = item.link;

    // Criar o elemento de container para a foto com a classe "conteiner_foto"
    const fotoContainer = document.createElement('div');
    fotoContainer.classList.add('conteiner_foto');

    // Criar o elemento de imagem com o src e alt do objeto
    const imagem = document.createElement('img');
    imagem.src = item.imagem;
    imagem.alt = 'Imagem do produto';

    // Criar o elemento de título com o texto do objeto
    const titulo = document.createElement('h2');
    titulo.textContent = item.titulo;

    // Adicionar a imagem dentro do container de foto
    fotoContainer.appendChild(imagem);

    // Adicionar o container de foto e o título dentro do elemento de link
    link.appendChild(fotoContainer);
    imagemDescricaoDiv.appendChild(link);
    imagemDescricaoDiv.appendChild(titulo);

    // Adicionar o elemento de imagem e descrição dentro do elemento principal "cards"
    cardDiv.appendChild(codigoTitulo); // Adiciona o código (key) acima da imagem
    cardDiv.appendChild(imagemDescricaoDiv);

    // Adicionar o card criado ao container
    container.appendChild(cardDiv);
  });
}

// Carrega os dados do arquivo JSON
fetch('../dados.json')
  .then(response => response.json())
  .then(data => {
    // Chama a função para criar os cards com base nos dados carregados
    criarCards(data);

    // Seleciona o campo de filtro
    const filtroInput = document.getElementById('filtro');

    // Adiciona um evento de escuta para o campo de filtro
    filtroInput.addEventListener('input', () => {
      // Obtém o valor do campo de filtro e converte para minúsculas
      const termoBusca = filtroInput.value.toLowerCase();

      // Filtra os produtos com base no termo de busca
      const produtosFiltrados = data.filter((produto) => {
        // Verifica se o termo de busca corresponde ao título ou à chave (key) do produto
        return produto.titulo.toLowerCase().includes(termoBusca) || produto.key == termoBusca;
      });

      // Chama a função para criar os cards com base nos produtos filtrados
      criarCards(produtosFiltrados);
    });
  })
  .catch(error => console.error('Erro ao carregar os dados:', error));
