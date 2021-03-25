const { Router } = require('express');
const multer = require('multer');
const PotenciaControl = require('./controllers/PotenciaControl');
const AlgoritmoControl = require('./controllers/AlgoritmoControl');

const routes = Router();
const upload = multer();

routes.get('/', PotenciaControl.index);

routes.post('/', upload.single('csv'), PotenciaControl.store);

routes.get('/algoritmo', AlgoritmoControl.index);

routes.post('/algoritmo', AlgoritmoControl.store);

module.exports = routes;