const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8050
const connectioString = "mongodb+srv://admin:admin123@appdatabase.1gyz3ot.mongodb.net/"
const Funcionario = require('./models/funcionario')
const Produto = require('./models/produto')

app.use(express.json())

app.get("/listar-produtos", async (req, res) => {
    try {
        let produtos = await Produto.find()
        return res.status(200).json(produtos)
        
    } catch (error) {
        return res.status(500).json(error)
    }  
})

app.post('/adicionar-produtos', async (req, res) => {
    let { nome, descricao, valor, emEstoque, publicadoEm } = req.body
    let produto = {
        nome,
        descricao,
        valor,
        emEstoque,
        publicadoEm
    }
    try {
        await Produto.create(produto)
        return res.status(201).json({message: "Produto cadastrado com sucesso!"})
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }

})

app.get("/listar-funcionarios", async (req, res) => {
    try {
        let funcionarios = await Funcionario.find()
        return res.status(200).json(funcionarios)
        
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.post('/adicionar-funcionario', async (req, res) => {
    let { nome, descricao, cargo, funcional, admitidoEm } = req.body
    let funcionario = {
        nome,
        descricao,
        cargo,
        funcional,
        admitidoEm
    }
    try {
        await Funcionario.create(funcionario)
        return res.status(201).json({message: "Funcionario cadastrado com sucesso!"})
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }

})  

mongoose.connect(connectioString, {
    dbName: "DevShopping"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})