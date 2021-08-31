var _a = require('../models/classes'), User = _a.User, products = _a.products, users = _a.users;
exports.getAllUsers = function (req, res) {
    try {
        res.send(users);
    }
    catch (e) {
        console.error(e);
    }
};
exports.addUser = function (req, res) {
    try {
        var body = req.body;
        users.addUser(new User(body.email, body.password, body.role)); //YS: Make the instance of the class into a varbiable: const newUser = new User(body.email, body.password, body.role)
        res.send("Register Succesful!");
    }
    catch (e) {
        console.log(e);
        res.status(400).send({
            error: e.message
        });
    }
};
exports.productID = function (req, res) {
    try {
        var id = req.query.id;
        var productToView = products.findProduct(id);
        res.send(productToView);
    }
    catch (e) {
        console.error(e);
    }
};
exports.getAllProducts = function (req, res) {
    try {
        res.send(products);
    }
    catch (e) {
        console.error(e);
    }
};
