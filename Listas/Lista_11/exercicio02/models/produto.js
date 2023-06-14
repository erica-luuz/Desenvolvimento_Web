const mongoose = require('mongoose')

const produtoSchema = mongoose.Schema({
    nome: { type: String, required: true },
    descricao: {type: String, required: true},
    valor: { type: Number, required: true},
    emEstoque: { type: Boolean, required: true},
    publicadoEm: { type: Date, required: true}
});

const produto = mongoose.model('produto', produtoSchema)

module.exports = produto