const splitCsv = require('../utils/splitCsv');
const PotenciaSchema = require('../models/Potencia');
const ListaSchema = require('../models/Lista');

module.exports = {
    index: async (req, res) => {
        const potencias = await PotenciaSchema.find();
        res.json(potencias);
    },

    store: async (req, res) => {
        const file = req.file;
        const nome = req.body.nome;

        const query = await PotenciaSchema.findOne({ nome: nome });

        if (query) {
            res.status(400).json({ message: 'the name already exists' });
            return;
        }

        const arraySplit = file.buffer.toString().split('\n');
        const dataCsv = splitCsv(arraySplit, ';');
        dataCsv.shift();

        const coordinates = [];
        dataCsv.map(e => {
            coordinates.push({ x: e[0], y: e[1] });
        });

        const potencia = await PotenciaSchema.create({
            nome: nome,
            potencia: coordinates
        });

        res.json(potencia).status(200);
    }
}