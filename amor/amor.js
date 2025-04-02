// Aguarda o carregamento do DOM antes de rodar o script
document.addEventListener("DOMContentLoaded", function () {
    // Captura os elementos necessários

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const inicioContainer = document.querySelector(".container-inicio");
    const buttonsContainer = document.querySelector(".botoes-container");
    const heartLoader = document.getElementById("heartLoader");
    const resultContainer = document.getElementById("resultContainer");
    const gifResult = document.getElementById("gifResult"); // Captura o GIF/Vídeo

    noBtn.addEventListener("mouseover", () => {
        const containerWidth = inicioContainer.offsetWidth;
        const containerHeight = inicioContainer.offsetHeight;

        const newX = Math.floor(Math.random() * (containerWidth - noBtn.offsetWidth)); // Use offsetWidth para largura
        const newY = Math.floor(Math.random() * (containerHeight - noBtn.offsetHeight)); // Use offsetHeight para altura

        noBtn.style.position = "absolute"; // Necessário para alterar as posições
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    });

    // Verifica se os elementos foram encontrados
    if (!yesBtn || !inicioContainer || !heartLoader || !resultContainer) {
        console.error("Erro: Alguns elementos não foram encontrados!");
        return;
    }

    // Evento de clique no botão "SIM"
    yesBtn.addEventListener("click", () => {
        console.log("Botão SIM clicado!");

        // Esconder a pergunta e os botões
        inicioContainer.style.display = "none";

        // Exibir o carregador de coração
        heartLoader.style.display = "flex";

        // Simular um pequeno delay antes de mostrar o resultado
        setTimeout(() => {
            heartLoader.style.display = "none"; // Esconde o carregador
            resultContainer.style.display = "flex"; // Mostra a resposta

            // Toca o GIF (se existir)
            if (gifResult) {
                gifResult.play();
            }
        }, 7000); // Tempo de espera de 3 segundos
    });
});































