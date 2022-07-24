const User = require('../models/User');

exports.createUser = (userObj) => {
    const user = new User(userObj);
    return user.save();
}

exports.findUser = (name) => {
    return User.findOne({name});
}