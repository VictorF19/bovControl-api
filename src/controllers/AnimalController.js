const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');
const selectString = '-_id -__v';

module.exports = {
    
    async getAllAnimals(req, res) {
        const { page = 1 } = req.query;

        const animals = await Animal.paginate({}, { page, limit: 10, select: selectString });
        
        return res.json(animals);
    },
    async getAnimalById(req, res) {
        const animal = await Animal.find({ id: req.params.id }).select(selectString);

        return res.json(animal);
    },
    async createAnimal(req, res) {
        let animal = await Animal.create(req.body);
        animal = await Animal.find({ id: animal.id }).select(selectString);

        return res.json(animal);
    },
    async editAnimal(req, res) {
        let animal = await Animal.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        animal = await Animal.find({ id: animal.id }).select(selectString);
        
        return res.json(animal);
    }
};