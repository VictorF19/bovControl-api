const express = require('express');
const routes = express.Router();

const AnimalController = require('./controllers/AnimalController');

routes.get('/animals', AnimalController.getAllAnimals);
routes.get('/animals/:id', AnimalController.getAnimalById);
routes.post('/animals', AnimalController.createAnimal);
routes.put('/animals/:id', AnimalController.editAnimal);

module.exports = routes;