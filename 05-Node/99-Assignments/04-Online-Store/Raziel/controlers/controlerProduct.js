"use strict";
exports.__esModule = true;
exports.editProduct = exports.removeProduct = exports.getAllProducts = exports.newProduct = void 0;
var products_1 = require("../models/products");
function newProduct(req, res) {
    try {
        var _a = req.body, picture = _a.picture, name = _a.name, description = _a.description, price = _a.price, stock = _a.stock;
        var newProduct_1 = new products_1.Product(picture, name, description, price, stock);
        var allProducts = new products_1.Products();
        allProducts.createProducts(newProduct_1);
        res.send({ message: "A new Product was added", allProducts: allProducts });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.newProduct = newProduct;
function getAllProducts(req, res) {
    try {
        var allProducts = new products_1.Products();
        res.send({ allProducts: allProducts });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.getAllProducts = getAllProducts;
function removeProduct(req, res) {
    try {
        var id = req.params.id;
        var allProducts = new products_1.Products();
        var productDelete = allProducts.deleteProduct(id);
        res.send({ message: "Poof! Your product has been deleted!", productDelete: productDelete });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.removeProduct = removeProduct;
function editProduct(req, res) {
    try {
        var id = req.params.id;
        var allProducts = new products_1.Products();
        var productToUpdate = allProducts.detailsProduct(id);
        productToUpdate.name = req.body.product;
        productToUpdate.description = req.body.description;
        productToUpdate.picture = req.file.filename;
        productToUpdate.price = req.body.price;
        productToUpdate.stock = req.body.stock;
        allProducts.updateProductsJson();
        res.send({ message: "The product was edited", allProducts: allProducts });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.editProduct = editProduct;
