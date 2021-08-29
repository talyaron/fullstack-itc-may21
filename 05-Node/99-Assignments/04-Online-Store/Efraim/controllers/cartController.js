var _a = require('../models/classes'), products = _a.products, users = _a.users, Cart = _a.Cart;
var _b = require('../models/cartmodels'), addCart = _b.addCart, deleteCart = _b.deleteCart, updateCartItemValue = _b.updateCartItemValue;
exports.addToCart = function (req, res) {
    try {
        var body = req.body;
        var userID = req.decoded.userID;
        addCart(body.productID, userID);
        res.send(users);
    }
    catch (e) {
        console.log(e);
        res.status(400).send({
            error: e.message
        });
    }
};
exports.getUserCart = function (req, res) {
    try {
        var userID = req.decoded.userID;
        var userCart = users.findUser(userID);
        res.send(userCart.cart);
    }
    catch (e) {
        console.error(e);
    }
};
exports.deleteFromCart = function (req, res) {
    try {
        var productID = req.params.productID;
        var userID = req.decoded.userID;
        var userCart = deleteCart(userID, productID);
        res.send(userCart);
    }
    catch (e) {
        console.error(e);
    }
};
exports.updateAmountFromCart = function (req, res) {
    try {
        var body = req.body;
        var productID = req.query.id;
        var updatedValue = body.updatedValue;
        var userID = req.decoded.userID;
        updateCartItemValue(userID, productID, updatedValue);
        res.send("Success!");
    }
    catch (e) {
        console.log(e);
        res.status(400).send({
            error: e.message
        });
    }
};
