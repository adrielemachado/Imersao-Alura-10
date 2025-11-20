const cardContainer = document.querySelector('.cardContainer'); //local que a base de dados (data.json) será inserida.

let dados = [];
//array vazia para os dados inseridos no arquivo .json
async function iniciarBusca() {
    // Carrega os dados apenas uma vez para otimizar
    if (dados.length === 0) {
        try {
            let resposta = await fetch("../data.json");
            dados = await resposta.json();
        } catch (error) {
            console.error("Erro ao buscar os dados:", error);
            return;
        }
    }

    const termoBusca = document.getElementById('campo-busca').value.toLowerCase();
    const resultados = dados.filter(dado =>
        dado.nome.toLowerCase().includes(termoBusca) ||
        dado.descrição.toLowerCase().includes(termoBusca)
    );

    renderizarCard(resultados);
}

function renderizarCard(dados) {
    //usar o laço de repetição for: definir a lista de dados (array) que está sendo trabalhada, qual a und de dados que está sendo trabalhada; para cada dado obtido do array .json, o for deve executar uma ação.
    cardContainer.innerHTML = ''; // Limpa os cards existentes antes de renderizar os novos
    for (let dado of dados) {
        let article = document.createElement('article');
        article.classList.add('card');
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <hr>
        <p>${dado.ano}</p>
        <p>${dado.descrição}</p>
        <a href="${dado.link} "target="_blank">Saiba mais</a>
        `

        cardContainer.appendChild(article);
    }
}