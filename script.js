document.addEventListener('DOMContentLoaded', () => {

    // --- LOGICA DO SIMULADOR ---
    const btnCalcular = document.getElementById('btn-calcular');
    const inputHectares = document.getElementById('hectares');
    const resultadoBox = document.getElementById('resultado');
    
    const txtAgua = document.getElementById('agua-salva');
    const txtCo2 = document.getElementById('co2-reduzido');

    btnCalcular.addEventListener('click', () => {
        const hectares = parseFloat(inputHectares.value);

        if (isNaN(hectares) || hectares <= 0) {
            alert('Por favor, insira um número válido de hectares.');
            return;
        }

        // Variáveis baseadas em médias de economia por agricultura de precisão/manejo sustentável
        // Economia estimada: 45.000 litros de água por hectare/ano
        // Redução CO2 estimada: 120kg de CO2 por hectare/ano
        const aguaSalva = hectares * 45000;
        const co2Reduzido = hectares * 120;

        // Atualiza a tela formatando o número para o padrão brasileiro (ex: 1.500)
        txtAgua.textContent = aguaSalva.toLocaleString('pt-BR');
        txtCo2.textContent = co2Reduzido.toLocaleString('pt-BR');

        // Mostra a caixa de resultados tirando a classe oculta
        resultadoBox.classList.remove('hidden');
    });

    // --- VALIDACAO DO FORMULÁRIO ---
    const form = document.getElementById('form-contato');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        
        alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso para a nossa equipe do Agro Sustentável.`);
        form.reset();
    });
});
