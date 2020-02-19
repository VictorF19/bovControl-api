const mongoose = require('mongoose');

module.exports = {
    initializeDatabase() {
        mongoose.connect('mongodb://localhost:27017/bovControl', { useNewUrlParser: true });
        require('./models/Animal');
    }
}