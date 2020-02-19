const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const mongooseAutoIncrement = require('mongoose-auto-increment');

mongooseAutoIncrement.initialize(mongoose.connection);

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
AnimalSchema.plugin(mongooseAutoIncrement.plugin, { model: 'Animal', field: 'id', startAt: 1, incrementBy: 1 });

mongoose.model('Animal', AnimalSchema);