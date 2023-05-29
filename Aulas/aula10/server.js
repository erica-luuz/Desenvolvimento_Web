const express = require('express')   // chamando express
const mongoose = require('mongoose')  // chamando moongose
const app = express()
const port = 8050
const connectionString = "mongodb+srv://admin:123@appdatabase.aa7jsp7.mongodb.net/" //string de conexão
const Animal = require('./models/animal') // chamando (conectando) o modulo animal

app.use(express.json()) // para o postman conseguir executar
// Rota get foi criado depois de eu criar o models/animal e exportar ele para essa pasta
//endpoint
app.get("/listar-animais", async (req, res) => { // async: trabalha junto com o await
    try {
        let animais = await Animal.find() // await: para esperar enquanto executa essa linha ate o fim, para depois descer que terminar descer para a próxima linha.
        return res.status(200).json(animais) 
    } catch (error) {
        return res.status(500).json(error)
    }
})
//endpoint
app.post('/adicionar-animais', async (req, res) => {
    let { nome, raca, peso } = req.body

    let animal = {
        nome,
        raca,
        peso
    }

    try {
        await Animal.create(animal)
        return res.status(201).json({message: "Animal cadastrado com sucesso"})
    } catch (error) {
        return res.status(500).json({Message: error.message})
    }
})



mongoose.connect(connectionString, {
    dbName: "PETSHOP"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})
// O then e o catch funciona como um contrato, execute o then, senão mostre o erro
// dentro do then ja esta o app.listen ( onde conectamos nossa API para ser executavel)


