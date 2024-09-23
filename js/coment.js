document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('comment-form');
    const commentsContainer = document.getElementById('comments-container');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário padrão

        // Pega os valores dos campos
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const commentText = document.getElementById('comment').value;

        // Cria um novo elemento de comentário
        const newComment = document.createElement('div');
        newComment.classList.add('comment');

        newComment.innerHTML = `
            <h4>${name} <small>(${email})</small></h4>
            <p>${commentText}</p>
        `;

        // Adiciona o novo comentário ao container de comentários
        commentsContainer.appendChild(newComment);

        // Limpa o formulário
        commentForm.reset();
    });
});