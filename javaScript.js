// ---------------- MENU HAMBURGER --------------------
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.getElementById("hamburger-menu");

  hamburger.addEventListener("click", () => {
    
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });
});


//------------------FUNCAO FAVORITOS------------------------
const favoritosBtn = document.querySelector('#favoritar');
const iconePath = document.querySelector('#icone path');

const toggleFavorito = () => {
    let dadosImovel = obtervalores();
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    let index = favoritos.findIndex(item => item.titulo === dadosImovel.titulo); // Procura o índice do item na lista de favoritos

    if (index !== -1) {
        favoritos.splice(index, 1); // Remove o item se ele estiver na lista
        console.log('Imóvel removido dos favoritos:', dadosImovel);
        
    } else {
        favoritos.push(dadosImovel); // Adiciona o item se ele não estiver na lista
    }

    // Adiciona a classe se o favorito já estiver na lista
    if (index !== -1) {
        iconePath.classList.add('favorited');
    } else {
        iconePath.classList.remove('favorited');
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos)); // Salva a lista atualizada no localStorage
};

favoritosBtn.addEventListener('click', toggleFavorito);

const obtervalores = () => {
    const titulo = document.querySelector("#titulo").textContent;
    const avaliacao = document.querySelector("#avaliacao").textContent;
    const qtdComodos = document.querySelector("#comodos").textContent;
    const preco = document.querySelector("#preco").textContent;
    return { titulo, avaliacao, qtdComodos, preco };
};

// Adiciona a classe inicial se o favorito já estiver na lista
let dadosImovel = obtervalores();
let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
let index = favoritos.findIndex(item => item.titulo === dadosImovel.titulo);

if (index !== -1) {
    iconePath.classList.add('favorited');
}
//-----------------------EFEITO SLIDER--------------------------


