const mongoose = require('mongoose');


const createFazendeiroSchema = mongoose.Schema({
    cpf: {
        type: String,
    },
    cnpj: {
        type: String,
    },
    nomeProdutor: {
        type: String,
        required: true
    },
    nomeFazenda: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
        enum: ['SP', 'MG', 'PR'],
    },
    areaTotal: {
        type: Number,
        required: true,
    },
    areaAgricultavel: {
        type: Number,
        required: true,
    },
    areaVegetacao: {
        type: Number,
        required: true,
    },
    culturasPlantadas: [{
        type: String,
        enum: ['Soja', 'Milho', 'Algodao', 'Cafe', 'Cana_de_Acucar'],
    }],
});


createFazendeiroSchema.pre('validate', function (next) {
    if (!this.cpf && !this.cnpj) {
        return next(new Error('É necessário fornecer um CPF ou CNPJ.'));
    }
    if (this.cpf && this.cnpj) {
      return next(new Error('Você não pode fornecer tanto CPF quanto CNPJ. Escolha apenas um.'));
    }
    next();
});

module.exports = mongoose.model('createFazendeiro', createFazendeiroSchema);