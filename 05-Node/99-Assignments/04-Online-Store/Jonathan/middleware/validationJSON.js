"use strict";
exports.__esModule = true;
exports.isProductExistAdd = exports.isThereStock = exports.isThereSamProductOnCart = exports.isThereProductOnDB = exports.isProductExistEdit = exports.isUserExist = exports.isUser = void 0;
var user_1 = require("../models/user");
var products_1 = require("../models/products");
function isUser(req, res, next) {
    try {
        var _a = req.body, email_1 = _a.email, password_1 = _a.password;
        var allUsers = user_1.readAllUsers();
        var findUser = allUsers.find(function (user) { return user.email === email_1; });
        if (!findUser)
            throw new Error("You're not in our database, go to register page");
        var checkEmailAndPassword = allUsers.some(function (user) { return (user.email === email_1) && (user.password === password_1); });
        if (!checkEmailAndPassword)
            throw new Error("Check your email or password");
        next();
    }
    catch (e) {
        res.status(400).send({ error: "" + e.message }); //cliente error
    }
}
exports.isUser = isUser;
function isUserExist(req, res, next) {
    try {
        var email_2 = req.body.email;
        var allUsers = user_1.readAllUsers();
        var userExist = allUsers.find(function (user) { return user.email === email_2; });
        if (userExist)
            throw new Error('User already exists');
        next();
    }
    catch (e) {
        res.status(400).send({ error: "" + e.message }); //cliente error
    }
}
exports.isUserExist = isUserExist;
function isProductExistEdit(req, res, next) {
    try {
        var image = req.body.image;
        var _a = req.params, store = _a.store, idProduct_1 = _a.idProduct;
        var imagePath_1 = "../images/" + store + "/" + image.split('\\')[2];
        var allProducts = products_1.readAllProducts();
        var oldImage = allProducts.find(function (product) { return product.id === idProduct_1; }).image;
        if (imagePath_1 !== oldImage) {
            var productExist = allProducts.find(function (product) { return product.image === imagePath_1; });
            if (productExist)
                throw new Error('Product already exists');
        }
        next();
    }
    catch (e) {
        res.status(400).send({ error: "" + e.message }); //cliente error
    }
}
exports.isProductExistEdit = isProductExistEdit;
function isThereProductOnDB(req, res, next) {
    try {
        var allProducts = products_1.readAllProducts();
        var allProductsStore = allProducts.find(function (products) { return products.store === req.params.store; });
        if (allProductsStore.length === 0)
            throw new Error('No database of that store found');
        next();
    }
    catch (e) {
        res.status(400).send({ error: "" + e.message }); //cliente error
    }
}
exports.isThereProductOnDB = isThereProductOnDB;
function isThereSamProductOnCart(req, res, next) {
    try {
        var allUsers = user_1.readAllUsers();
        var getCart = allUsers.find(function (user) { return user.id === req.id; }).cart;
        var findProduct = getCart.some(function (product) { return product.id === req.body.id; });
        if (findProduct)
            throw new Error('Product already picked');
        next();
    }
    catch (e) {
        res.status(400).send({ error: "" + e.message }); //cliente error
    }
}
exports.isThereSamProductOnCart = isThereSamProductOnCart;
function isThereStock(req, res, next) {
    try {
        var allProducts = products_1.readAllProducts();
        var idProduct_2 = req.params.idProduct;
        var getProduct = allProducts.find(function (product) { return product.id === idProduct_2; });
        if (req.body.number > getProduct.quantity)
            throw new Error('We dont have enough stock');
        next();
    }
    catch (e) {
        res.status(400).send({ error: "" + e.message }); //cliente error
    }
}
exports.isThereStock = isThereStock;
function isProductExistAdd(req, res, next) {
    try {
        var image = req.body.image;
        var store = req.params.store;
        var imagePath_2 = (image.includes(store)) ? image : "../images/" + store + "/" + image.split('\\')[2];
        var allProducts = products_1.readAllProducts();
        var oldImage = allProducts.find(function (product) { return product.image === imagePath_2; });
        if (oldImage === undefined) {
            next();
        }
        else {
            if (imagePath_2 === oldImage.image)
                throw new Error('Product already exists');
        }
        next();
    }
    catch (e) {
        res.status(400).send({ error: "" + e.message });
    }
}
exports.isProductExistAdd = isProductExistAdd;
