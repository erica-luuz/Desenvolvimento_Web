const express = require('express')  // Importando o framework
const app = express() // Inicializando o framework
const port = 8001

let bandas =[
    {
        nomeDaBanda: "Familia e Cia",
        principaisMusicas: ["aeiou", "aaaaaa", "eeeee"],
        integrates: [
            {
                nomeIntegrante: "Fulano",
                paisOndeNasceu: "Brasil",
                idade: 20
            },
            {
                nomeIntegrante: "Ciclano",
                paisOndeNasceu: "Austrália",
                idade: 18
            }
        ],
    },
    {
        nomeDaBanda: "Calipso",
        principaisMusicas: ["vira pra lá", "alguma coisa dançante"],
        integrates: [
            {
                nomeIntegrante: "Joelma",
                paisOndeNasceu: "Brasil",
                idade: 50
            },
            {
                nomeIntegrante: "João",
                paisOndeNasceu: "EUA",
                idade: 45
            }
        ],
    }
]

app.get("/bandas", function (req, res){   // Aqui para imprimir no localHost
    return res.send(bandas)
})


//--------------------------Servidor--------------------------------

app. listen(port, function(){   // Aqui para mostar no terminal, é ele que da start na nossa API
    console.log(`Servidor rodando http:/localHost:${port}`)
})