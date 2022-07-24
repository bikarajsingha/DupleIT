const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const userService = require('../services/userService');

exports.postCreateUser = async (req, res) => {
    try{
        const { name, email, password } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        
        await userService.createUser({name, email, password: hash})

        return res.status(200).json({message: 'User successfully created'})
    }catch(err) {
        return res.status(500).json({message: err.message});
    }
};

exports.postCreateUser = async (req, res) => {
    try{
        const { name, email, password } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        
        await userService.createUser({name, email, password: hash})

        return res.status(200).json({message: 'User successfully created'})
    }catch(err) {
        return res.status(500).json({message: err.message});
    }
};

exports.postLogIn = async (req, res) => {
    try{
        const user = await userService.findUser(req.body.name);
        if(!user) return res.status(404).json({message: "User not found"});

        const isCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isCorrect) return res.status(400).json({message: 'Wrong credentials'})

        const token = jwt.sign({id: user._id}, process.env.JWT);
        return res.status(200).json({message: 'Log-in successful', token})
    }catch(err) {
        return res.status(500).json({message: err.message});
    }
};