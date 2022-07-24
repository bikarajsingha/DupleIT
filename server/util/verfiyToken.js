const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token) return res.status(401).json({message: "You are not authenticated"});

    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err) return res.status(403).json({message: "Token is not valid"});
        req.user = user;
        next();
    })
};

module.exports = verifyToken;