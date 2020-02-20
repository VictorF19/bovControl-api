const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const generateToken = require('../services/generateToken').generateToken;

module.exports = {

    async createUser(req, res) {

        try {
            const { email } = req.body;

            if (await User.findOne({ email }))
                return res.status(400).send({ 'error': 'User already exists!' })

            const user = await User.create(req.body);

            user.password = undefined;

            return res.send({
                user,
                token: generateToken({ id: user.id })
            });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Registration failed!' })
        }

    },

    async authenticate(req, res) {

        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');

        if (!user)
            return res.status(400).send({ error: 'User not found!' })

        if (!await bcrypt.compare(password, user.password))
            return res.status(400).send({ error: 'Password incorrect!' })

        user.password = undefined;

        res.send({
            user,
            token: generateToken({ id: user.id })
        });
    }
};