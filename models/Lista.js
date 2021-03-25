const mongoose = require('mongoose');

const ListaSchema = new mongoose.Schema({
    numero: Number
});

module.exports = mongoose.model('Lista', ListaSchema);