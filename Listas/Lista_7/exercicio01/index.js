const express = require('express');
const app = express();
const port = 7000;

let produtos = [
    {
        nomeProduto: "Pipoqueira Elétrica",
        descricao: "Se você está procurando um aparelho pequeno e compacto, a pipoqueira elétrica Mickey Mouse da Mallory é a sua melhor opção!",
        valor: 168.54,
        criadoEm: 04 / 01 / 2023,
        emEstoque: true
    },
    {
        nomeProduto: "Panela de Pressão Elétrica",
        descricao: "Com display digital possui, muitas vezes, painel touch com diversas receitas pré-programadas e muitas outras funções extras",
        valor: 563.00,
        criadoEm: 04 / 01 / 2023,
        emEstoque: false
    },
    {
        nomeProduto: "Liquidificador",
        descricao: "O liquidificador portátil é um eletroportátil fabricado para otimizar o dia a dia, possibilitando o preparo de diversas bebidas, como vitaminas, por exemplo",
        valor: 142.00,
        criadoEm: 05 / 01 / 2023,
        emEstoque: true
    },
    {
        nomeProduto: "Batedeira Planetária",
        descricao: "Realiza tanto a movimentação rotacional dos batedores quanto a movimentação circular sobre a tigela. É indicado para uso profissional e apresenta boa potência para o preparo de massas pesadas.",
        valor: 700.00,
        criadoEm: 10 / 12 / 2022,
        emEstoque: false
    },
    {
        nomeProduto: "Sanduicheira",
        descricao: "Atinge temperaturas mais baixas e é ideal para preparar sanduíches quentes, derreter levemente o presunto e queijo e tostar o pão como torrada, por exemplo. Além disso, não é indicada para grelhar alimentos.",
        valor: 89.99,
        criadoEm: 10 / 12 / 2022,
        emEstoque: true
    }
]

app.get("/usuarios.js", function (req, res) {
    return res.send(usuarios)
})

app.get("/produtos.js", function (req, res) {
    return res.send(produtos)
})

app.listen(port, function () {
    console.log(`Servidor rodando http:/localhost:${port}`)
})