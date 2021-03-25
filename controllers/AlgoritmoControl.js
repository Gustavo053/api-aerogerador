const ListaSchema = require('../models/Lista');

module.exports = {
    index: async (req, res) => {
        const numeros = await ListaSchema.find();

        res.json(numeros).status(200);
    },

    store: async (req, res) => {
        const numero = req.body.numero;

        const numCreated = await ListaSchema.create({
            numero: numero
        });

        res.json(numCreated).status(200);
    }
}