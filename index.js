// Lista de objetos com link, imagem e título
const dados = [
    {
      link: 'https://shopee.com.br/product/328666563/20844263416',
      imagem: 'Cabide.jpeg',
      titulo: 'Cabide Mágico Organizador 9 Furos MultiDobrável Guarda-Roupa'
    },
    {
      link: 'https://shopee.com.br/product/383034422/23197288293',
      imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqdhqvpm3ugzd5',
      titulo: 'Passadeira Emborrachada Para Cozinha com 2 Peças'
    },
    {
      link: 'https://shopee.com.br/product/799501072/21877237155',
      imagem: 'https://down-br.img.susercontent.com/file/sg-11134201-7qve9-lgax3jleyudyf1',
      titulo: 'Garrafa A Vácuo De Café Chá Térmica 1L Cabo De Madeira'
    },
    {
      link: 'https://shopee.com.br/product/455645032/6297233943',
      imagem: 'https://down-br.img.susercontent.com/file/2ea743a9280bcd5305ba509887c47f99',
      titulo: 'Veda Porta Ajustável Rolinho Protetor de Porta Contra Insetos Impermeável'
    },
    {
      link: 'https://shopee.com.br/product/593088966/12751906279',
      imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7qukw-li2kh2mr7t3xbe',
      titulo: '10 Pcs Mop Suporte Gancho Adesivo Vassoura Utensílios Multiuso Suporte Organizadores De Vassouras E Rodos Mop Não Precisar Furar A Parede'
    },
    {
      link: 'https://shopee.com.br/product/334794813/23197284291',
      imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lq4uw8trgt8j57',
      titulo: 'Esfregão de Limpeza Triangulo Ou Retangular Com REFIL De Limpeza Mop Ajustável Giratória 360°'
    },
    {
      link: 'https://shopee.com.br/product/461633669/19528551004',
      imagem: 'https://down-br.img.susercontent.com/file/a0879a09127ab6a459981cb8e9031d8a',
      titulo: 'Bomba Elétrica De Galão Universal Com Carregamento USB Para Galão Garrafão De Água'
    },
    {
      link: 'https://shopee.com.br/product/800373155/22192455320',
      imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7r98q-lm0kx13avl1358',
      titulo: 'Escova Limpa Sapato Com Dispenser Reservatório'
    },
    {
      link: 'https://shopee.com.br/product/299222557/23091931754',
      imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7qukw-ljt7x2f5896y80',
      titulo: 'Papa Bolinhas Eletrico Tira Pelos de Roupas Removedor Aparador Sem Fio Recarregável'
    },
    {
      link: 'https://shopee.com.br/product/378597608/14447777357',
      imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqo8n8bldden81',
      titulo: 'Aspirador De Pó Usb Portátil Completo Linha Premium Carro E Casa 2000mAh'
    },

    {
      link: 'https://shopee.com.br/product/328666563/17932371232',
      imagem: 'Processador eletrico.jpeg',
      titulo: 'Mini Processador Elétrico de Alimentos Portátil com 3 lâminas de aço inox USB 250 ml Bivolt'
    }

    // Adicione mais objetos conforme necessário
  ];








































  
  // Função para criar os cards com base nos dados fornecidos
  function criarCards() {
    // Seleciona o elemento onde os cards serão adicionados
    const container = document.querySelector('.conteiner_cards');
  
    // Loop sobre os dados e criar um card para cada objeto na lista
    dados.forEach((item) => {
      // Criar o elemento div principal com a classe "cards"
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('cards');
  
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
      cardDiv.appendChild(imagemDescricaoDiv);
  
      // Adicionar o card criado ao container
      container.appendChild(cardDiv);
    });
  }
  
  // Chama a função para criar os cards
  criarCards();
  