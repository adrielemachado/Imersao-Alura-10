let dados = [];
//array vazia para os dados inseridos no arquivo .json
async function iniciarBusca() {
    let resposta = await fetch("../data.json");
    dados = await resposta.json();
    console.log(dados);
}
