const mongoose = require('mongoose')

const animalSchema = mongoose.Schema({  // O Schema é o que diz que aas propriedades de animal
    nome: { type: String, required: true },
    raca: { type: String, required: true },
    peso: { type: Number, required: true }
})

const animal = mongoose.model('Animais', animalSchema)

module.exports = animal // Para exportar o arquivo animal para o arquvo server.js