//Sessão abaixo contem a construção do rolamento de imagem
window.onload = function() {
  var container = document.getElementById('container');
  var scrollAmount = 1; // Quantidade de pixels para rolar
  var delay = 30; // Delay em milissegundos entre cada movimento
  //Define o intervalo de tempo em milissegundos entre cada movimento de rolagem. Neste caso, é 50 milissegundos (0,05 segundos).

  function scrollHorizontally() {  //será responsável por mover a rolagem horizontalmente.
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollLeft = 0;  //Se o contêiner estiver no final do conteúdo, a rolagem é reiniciada para o início (posição 0)
      } else {
          container.scrollLeft += scrollAmount;
      }
  }

  var scrollInterval = setInterval(scrollHorizontally, delay);
}

document.addEventListener('DOMContentLoaded', () => {
    const dashboardLinksContainer = document.getElementById('dashboard-links');

    // Aqui você pode adicionar, remover ou editar seus dashboards.
    // Basta seguir o mesmo padrão: { name: '...', description: '...', url: '...' }
    const dashboards = [
        { 
            name: 'Dashboard - Power Bi', 
            description: 'Desenvolvimento e análise de Dashboards com Power Bi, com melhor aproveitamento em organização e gerenciamento de dados para melhores tomadas de descisão.', 
            url: 'https://wa.me/p/9520280431384449/557191273857' 
        },
        { 
            name: 'Desenvolvimento Web Site', 
            description: 'Desenvolvimento de Web Site para divulgar e organizar de forma profissional o que melhor se destaca na sua escolha.', 
            url: 'https://wa.me/p/8664205976979849/557191273857' 
        },
        
        {
            name: 'Tratamento de Dados',
            description: 'Tratando os dados de forma profissional para uma melhor compreensão de conjunto de informações.', 
            url: ''
        },

        {
            name: 'Convite Digital Interativo',
            description: 'Com o convite digital, você poderá compartilhar para quem e quantas pessoas quizer o seu convite digital.',
            url: 'https://wa.me/p/7869481383171358/557191273857'
        },

        {
            name: 'Currículo Web',
            description: 'Sendo um modelo web currículo, pode-se gerar um link do seu currículo podendo ser compartilhado facilmente com qualquer pessoa ou empresa.',
            url: 'https://wa.me/p/7869481383171358/557191273857'
        },

        {
            name: 'Edição de PDF',
            description: 'Aqui você pode editar seu arquivo PDF tranquilamente, click e saíba mas.',
            url: 'https://wa.me/p/9470641586284891/557191273857'
        },

        {
            name: 'Criação de Flayer/Logo',
            description: 'Crie aqui suas divulgações em modelos de Flayer e também construa aqui sua logotipo da sua loja ou empresa.',
            url: ''
        },

        {
            name: 'Montagem Organizacional de Computadores',
            description: 'Organizando profissionalmente peças hardware e fios do seu computador.',
            url: ''
        },

        {
            name: 'Remoção de Vírus Mobile',
            description: 'Focando na segurança de software de seu smartphone eliminando vírus.',
            url: ''
        },

        {
            name: 'Revelação de Fotos',
            description: 'Revele suas fotos em alta qualidade de forma profissional.',
            url: ''
        }
    ];

    // Função para criar o HTML de um único cartão de link
    function createLinkCard(dashboard) {
        const card = document.createElement('div');
        card.className = 'link-card';
        card.innerHTML = `
            <h3>${dashboard.name}</h3>
            <p>${dashboard.description}</p>
            <a href="${dashboard.url}" target="_blank">Acessar Serviço</a>
        `;
        return card;
    }

    // Renderiza todos os dashboards na página
    dashboards.forEach(dashboard => {
        const card = createLinkCard(dashboard);
        dashboardLinksContainer.appendChild(card);
    });
});