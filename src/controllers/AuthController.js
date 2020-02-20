const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {

    async createUser(req, res) {

        try {
            const { email } = req.body;

            if (await User.findOne({ email }))
                return res.status(400).send({ 'error': 'User already exists!' })

            const user = await User.create(req.body);

            user.password = undefined;

            return res.send({ user });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Registration failed!' })
        }

    },

    async authenticate(req, res) {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

    }
};