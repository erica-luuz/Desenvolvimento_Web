const mongoose = require('mongoose')

const produtoSchema = mongoose.Schema({
    nome: {type: String, required: true},
    descricao: {type: String, required: true},
    valor: {type: Number, required: true}
})

const Produto = mongoose.model('produto', produtoSchema)

module.exports = Produto