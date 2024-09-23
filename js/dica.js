// Animação simples no título quando a página é carregada
window.onload = function() {
    const titulo = document.querySelector('.titulo h1');
    titulo.style.transform = 'scale(1.1)';
    titulo.style.transition = 'transform 0.5s ease';

    // Reverter a animação após um curto período
    setTimeout(() => {
        titulo.style.transform = 'scale(1)';
    }, 500);
}

// Alteração de cor do endereço ao passar o mouse
const endereco = document.getElementById('endereco');
if (endereco) {
    endereco.addEventListener('mouseover', () => {
        endereco.style.color = '#4F4F4F';
        endereco.style.transform = 'scale(1.1)';
    });

    endereco.addEventListener('mouseout', () => {
        endereco.style.color = '#333';
        endereco.style.transform = 'scale(1)';
    });
}

var btn = document.querySelector(".button");

btn.onmousemove = function(e){
    var x = e.pageX - btn.offsetLeft;
    var y = e.pageY - btn.offsetTop;

    btn.style.setPropeerty('--eixoX', x + 'px')
    btn.style.setPropeerty('--eixoY', y + 'px')

}