"use strict";
exports.__esModule = true;
exports.editProduct = exports.bringInfo = exports.deleteProduct = exports.getProduct = exports.postProduct = void 0;
var productsModel_1 = require("../models/productsModel");
var fs = require("fs");
exports.postProduct = function (req, res) {
    var product = new productsModel_1.Product(req.body.id, req.body.name, req.body.description, req.body.pokeType, req.body.price, req.body.image);
    var addProducts = productsModel_1.addProduct(product);
    res.send({ pokeProduct: addProducts });
};
exports.getProduct = function (req, res) {
    var allProduct = productsModel_1.readProduct();
    res.send({ pokeProduct: allProduct });
};
exports.deleteProduct = function (req, res) {
    var id = req.params.id;
    var allProduct = productsModel_1.readProduct();
    var deltePoke = allProduct.filter(function (element) { return element.id !== id; });
    fs.writeFileSync("./db/products.json", JSON.stringify(deltePoke));
    res.send(deltePoke);
};
exports.bringInfo = function (req, res, next) {
    var id = req.params.id;
    var allProduct = productsModel_1.readProduct();
    var editPoke = allProduct.find(function (element) { return element.id === id; });
    res.send(editPoke);
    next();
};
exports.editProduct = function (req, res) {
    var _a = req.body, name = _a.name, description = _a.description, pokeType = _a.pokeType, price = _a.price, image = _a.image;
    // const name = req.body.name;
    // const description = req.body.description;
    // const pokeType = req.body.pokeType;
    // const price = req.body.price;
    // const image = req.body.image;
    var allProduct = productsModel_1.readProduct();
    var editPoke = allProduct.find(function (e) { return e.id === req.params.idProduct; });
    editPoke.name = name;
    editPoke.description = description;
    editPoke.pokeType = pokeType;
    editPoke.price = price;
    editPoke.image = image;
    fs.writeFileSync("./db/products.json", JSON.stringify(allProduct));
    res.send({ products: allProduct });
};
