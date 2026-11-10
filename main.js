
const viagens = [
    {
        destino: "Paris",
        pais: "França",
        duracao: 7,
        preco: 6500.00
    },
    {
        destino: "Orlando",
        pais: "Estados Unidos",
        duracao: 10,
        preco: 8500.00
    },
    {
        destino: "Buenos Aires",
        pais: "Argentina",
        duracao: 5,
        preco: 3200.00
    },
    {
        destino: "Rio de Janeiro",
        pais: "Brasil",
        duracao: 4,
        preco: 1800.00
    },
    {
        destino: "Tóquio",
        pais: "Japão",
        duracao: 12,
        preco: 12000.00
    }
];

const corpoTabela = document.getElementById("corpoTabela");

for (let viagem of viagens) {
    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${viagem.destino}</td>
        <td>${viagem.pais}</td>
        <td>${viagem.duracao}</td>
        <td class="preco">${viagem.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })}</td>
    `;

    corpoTabela.appendChild(linha);
}
