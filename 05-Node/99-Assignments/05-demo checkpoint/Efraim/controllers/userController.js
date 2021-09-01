var _a = require('../models/models'), User = _a.User, users = _a.users;
exports.registerUser = function (req, res) {
    try {
        var body = req.body;
        var name = body.name, imageURL = body.imageURL, color = body.color;
        var newUser = new User(name, imageURL, color);
        users.addUser(newUser);
        res.send("user added succesfully!");
    }
    catch (error) {
        console.log(error);
    }
};
exports.getAllUsers = function (req, res) {
    try {
        res.send(users);
    }
    catch (error) {
        console.log(error);
    }
};
