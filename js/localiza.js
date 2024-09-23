document.addEventListener('DOMContentLoaded', function() {
    const endereco = document.getElementById('endereco');

    // Mudar a cor do texto ao passar o mouse por cima
    endereco.addEventListener('mouseover', function() {
        endereco.style.color = '#008CBA'; // Azul suave
        endereco.style.transform = 'scale(1.1)'; // Aumenta levemente o tamanho
    });

    // Voltar à cor original ao tirar o mouse de cima
    endereco.addEventListener('mouseout', function() {
        endereco.style.color = '#333'; // Cor original
        endereco.style.transform = 'scale(1)'; // Volta ao tamanho normal
    });
});


var btn = document.querySelector(".button");

btn.onmousemove = function(e){
    var x = e.pageX - btn.offsetLeft;
    var y = e.pageY - btn.offsetTop;

    btn.style.setPropeerty('--eixoX', x + 'px')
    btn.style.setPropeerty('--eixoY', y + 'px')

}