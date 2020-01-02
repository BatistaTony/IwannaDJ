const mongoose  = require('mongoose')


const DJ = mongoose.Schema({
    nome: {
        type: String,
        required:true
    },
    telefone: {
        type: Number,
        required:true
    },
    endereco: {
        type: String,
        required:true
    },
    festa: {
        type: String,
        required:true
    },
    preco: {
        type: Number,
        required:true
    },
    aparelho: {
        type: Boolean,
        required:true
    },
    nivel: {
        type: String,
        required:true
    },
    senha: {
        type: String,
        required:true
    },
    data: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('dj', DJ)