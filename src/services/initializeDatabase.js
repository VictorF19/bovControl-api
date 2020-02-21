const mongoose = require('mongoose');

module.exports = {
    initializeDatabase() {

        try {

            mongoose.connect('mongodb://mongodb:27017/bovControl', { useNewUrlParser: true });
            require('../models/Animal');
            require('../models/User');
        } catch (err) {
            console.log(err)
        }
    }
}