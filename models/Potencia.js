const mongoose = require('mongoose');

const PotenciaSchema = new mongoose.Schema({
    nome: String,
    potencia: [{
        x: String,
        y: String
    }]
});

module.exports = mongoose.model('Potencia', PotenciaSchema);