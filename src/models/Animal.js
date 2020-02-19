const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const AnimalSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    peso: {
        type: Number,
        required: true
    },
    idade: {
        type: Number,
        required: true
    }
});

AnimalSchema.plugin(mongoosePaginate);

mongoose.model('Animal', AnimalSchema);