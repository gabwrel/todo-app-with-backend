const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWTSECRET;

async function registerUser(req, res) {
    console.log('Handling registerUser');
    const { firstName, lastName, username, password } = req.body;
    try {
        const duplicate = await User.find({ username });
        if (duplicate && duplicate.length > 0) {
            return res.status(400).send({ message: 'User already registered with this username' });
        }
        const user = new User({ firstName, lastName, username, password });
        const result = await user.save();
        console.log(result);
        res.status(201).send({ message: 'User registered successfully!' });
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
}

async function loginUser(req, res) {
    console.log('Handling loginUser');
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).send({ message: "Authentication Failed" });
        }
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(404).send({ message: "Incorrect Password." });
        }
        const token = jwt.sign({ userId: user?._id }, secretKey, { expiresIn: '1h' });
        const finalData = {
            userId: user?._id,
            username: user?.username,
            firstname: user?.lastname,
            token
        };
        res.send(finalData);
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
}

const AuthController = {
    registerUser,
    loginUser
};

module.exports = AuthController;
