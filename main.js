const botoes = document.querySelectorAll(".botao");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        // Remove a classe "ativo" de todos os botões
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
        }
        
        // Adiciona a classe "ativo" apenas no botão que foi clicado
        botoes[i].classList.add("ativo");
    };
}
