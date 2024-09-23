// Função para rolar para a esquerda
function scrollCarouselLeft() {
    const carousel = document.querySelector('.carousel');
    carousel.scrollBy({
        left: -300, // A quantidade de pixels para rolar para a esquerda
        behavior: 'smooth'
    });
}

// Função para rolar para a direita
function scrollCarouselRight() {
    const carousel = document.querySelector('.carousel');
    carousel.scrollBy({
        left: 300, // A quantidade de pixels para rolar para a direita
        behavior: 'smooth'
    });
}
