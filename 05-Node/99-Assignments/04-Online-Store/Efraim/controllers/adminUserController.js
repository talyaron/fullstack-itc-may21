var _a = require('../models/classes'), Product = _a.Product, products = _a.products;
var updateProductsModel = require('../models/adminmodels').updateProductsModel;
var multer = require('multer');
var Ajv = require("ajv");
var ajv = new Ajv();
exports.updateProducts = function (req, res) {
    try {
        var body = req.body;
        var id = req.query.id;
        var description = body.description, price = body.price;
        updateProductsModel(id, description, price);
        res.send("Success!");
    }
    catch (e) {
        console.log(e);
        res.status(400).send({
            error: e.message
        });
    }
};
exports.deleteProduct = function (req, res) {
    try {
        var productID_1 = req.params.productID;
        var newProductList = products.products.filter(function (products) { return products.id != productID_1; });
        products.products = newProductList;
        res.send("deleted");
    }
    catch (e) {
        console.error(e);
    }
};
exports.addProduct = function (req, res) {
    try {
        var body = req.body;
        var filename = req.file.filename;
        var price = body.price, description = body.description;
        var parsePrice = JSON.parse(price);
        var intPrice = parseInt(parsePrice);
        products.addProduct(new Product("/images/" + filename, description, intPrice));
        res.send("Success!");
    }
    catch (e) {
        console.log(e);
        res.status(400).send({
            error: e.message
        });
    }
};
