"use strict";
exports.__esModule = true;
exports.editProduct = exports.productDetail = exports.removeProduct = exports.getAllProducts = exports.newProduct = void 0;
//I import the classes (with Methods) of the Models that Im going to use here
var productModel_1 = require("../models/productModel");
//Function to create a new Product
function newProduct(req, res) {
    try {
        //Get the information from the body
        var _a = req.body, product = _a.product, description = _a.description, price = _a.price, stock = _a.stock;
        var filename = req.file.filename;
        //Initialice a new instance of the User
        var productInfo = new productModel_1.Product(filename, product, description, price, stock);
        //Initialice a new instance of Products (the initialization will read the JSON of Products)
        var allProducts = new productModel_1.Products();
        allProducts.createProducts(productInfo);
        res.send({ message: "A new Product was added", allProducts: allProducts });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.newProduct = newProduct;
// //Function to get all the created products
function getAllProducts(req, res) {
    try {
        var allProducts = new productModel_1.Products();
        res.send({ allProducts: allProducts });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.getAllProducts = getAllProducts;
// //Function to remove a product
function removeProduct(req, res) {
    try {
        var id = req.params.id;
        var allProducts = new productModel_1.Products();
        var productDelete = allProducts.deleteProduct(id);
        res.send({ message: "Poof! Your product has been deleted!", productDelete: productDelete });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.removeProduct = removeProduct;
//Function to get the information of a specific product
function productDetail(req, res) {
    try {
        var id = req.params.id;
        var allProducts = new productModel_1.Products();
        var productInfo = allProducts.detailsProduct(id);
        res.send({ message: "Details of the product founded", productInfo: productInfo });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.productDetail = productDetail;
//Function to edit a product
function editProduct(req, res) {
    try {
        var id = req.params.id;
        var allProducts = new productModel_1.Products();
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
