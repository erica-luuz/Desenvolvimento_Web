const express = require('express');
const app = express();
const port = 7000;

app.get("/usuarios.js", function (req, res) {
    return res.send(usuarios)
})

app.get("/produtos.js", function (req, res) {
    return res.send(produtos)
})

app.listen(port, function () {
    console.log(`Servidor rodando http:/localHost:${port}`)
})