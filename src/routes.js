const express = require('express');
const routes = express.Router();
const authMiddleware = require('../src/middlewares/auth');

const AnimalController = require('./controllers/AnimalController');
const AuthController = require('./controllers/AuthController');

routes.post('/registration', AuthController.createUser);
routes.post('/authenticate', AuthController.authenticate);

routes.use(authMiddleware);

routes.get('/animals', AnimalController.getAllAnimals);
routes.get('/animals/:id', AnimalController.getAnimalById);
routes.post('/animals', AnimalController.createAnimal);
routes.put('/animals/:id', AnimalController.editAnimal);

module.exports = routes;