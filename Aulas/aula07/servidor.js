const express = require('express')  // Importando o framework
const app = express() // Inicializando o framework
const port = 8000

app.get("/", function (requisicao, resposta){   // Aqui para imprimir no localHost
    return resposta.send("Ola Mundo")
})

let produtos = [
    {
        id: 1,
        nome: "Bolo de Milho",
        descrição: "Puro suco de milho verde",
        valor: 25
    },
    {
        id: 2,
        nome: "Bolo de Morango",
        descrição: "Bolo top demais!!!",
        valor: 100
    }
]

app.get("/produtos", function (req, res){   // Aqui para imprimir no localHost
    return res.send(produtos)
})


//--------------------------Servidor--------------------------------

app. listen(port, function(){   // Aqui para mostar no terminal, é ele que da start na nossa API
    console.log(`Servidor rodando http:/localHost:${port}`)
})