const express = require('express');
const app = express();
const port = 7000;


let usuarios = [
    {
        nomeUsuario: "Felomena",
        criadoEm: 16 / 03 / 2022,
        idade: 67,
        email: "felomena@email.com",
        isAdmin: false,
        telefone: [11987654321, 11123456789],
        endereco: ["Rua da lua,56", "Rua do sol, 20"]
    },
    {
        nomeUsuario: "Kuriri",
        criadoEm: 20 / 01 / 2022,
        idade: 24,
        email: "Kuriri@email.com",
        isAdmin: true,
        telefone: [11987654741, 11123458589],
        endereco: ["Rua da vila,89", "Rua do porto, 200"]
    },
    {
        nomeUsuario: "Naruto",
        criadoEm: 27 / 01 / 2023,
        idade: 18,
        email: "felomena@email.com",
        isAdmin: false,
        telefone: [11987647321, 11123456239],
        endereco: ["Rua da marmota,689", "Rua do gol, 123"]
    },
    {
        nomeUsuario: "Gafanhoto",
        criadoEm: 25 / 12 / 2022,
        idade: 30,
        email: "gafanhoto@email.com",
        isAdmin: false,
        telefone: [11897654321, 11172456789],
        endereco: ["Rua da folha,560", "Rua do vaso, 85"]
    },
    {
        nomeUsuario: "Paul",
        criadoEm: 05 / 08 / 2020,
        idade: 27,
        email: "felomena@email.com",
        isAdmin: false,
        telefone: [11987654321, 11123456789],
        endereco: ["Rua da Abelha,540", "Rua do casarão, 789"]
    }
]


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
    console.log(`Servidor rodando http:/localHost:${port}`)
})