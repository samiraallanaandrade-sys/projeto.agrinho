// Aguarda o documento carregar completamente
document.addEventListener('DOMContentLoaded', () => {

    // Funcionalidade 1: Interceptar o envio do formulário
    const form = document.getElementById('form-contato');
    
    form.addEventListener('submit', function(evento) {
        // Previne que a página recarregue ao enviar o formulário
        evento.preventDefault();
        
        // Pega o nome digitado pelo usuário
        const nome = document.getElementById('nome').value;
        
        // Exibe uma mensagem de agradecimento customizada
        alert(`Obrigado pela sua ideia, ${nome}! Juntos construímos um agro mais forte e sustentável para o projeto Agrinho.`);
        
        // Limpa o formulário após o envio
        form.reset();
    });

    // Funcionalidade 2: Rolagem suave (Smooth Scroll) para os links do menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
