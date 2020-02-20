const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = {
    generateToken(userId) {
        return jwt.sign(userId , authConfig.secret, {
            expiresIn: 86400
        });
    }
}