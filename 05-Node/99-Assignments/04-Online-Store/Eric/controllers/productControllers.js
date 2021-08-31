"use strict";
exports.__esModule = true;
exports.bringselectedById = exports.editProduct = exports.bringProduct = exports.deleteProduct = exports.addProduct = exports.getAll = void 0;
var fs = require("fs");
var uuidv4 = require("uuid").v4;
var products_1 = require("../models/products");
function getAll(req, res) {
    var allproducts = products_1.readAllProducts();
    res.send(allproducts);
}
exports.getAll = getAll;
function addProduct(req, res) {
    try {
        var productClass = new products_1.Products();
        var _a = req.body.newProduct, id = _a.id, name = _a.name, image = _a.image, price = _a.price, quantity = _a.quantity, description = _a.description;
        console.log(id, name, image, price, quantity, description);
        var product = new products_1.Product(id, name, image, price, quantity, description);
        res.cookie('cookieName', "id: " + id, { maxAge: 30000000, httpOnly: true });
        productClass.addItem(product);
        res.send({ products: productClass.productList });
    }
    catch (e) {
        res.status(500).send({ error: "" + e });
    }
}
exports.addProduct = addProduct;
function deleteProduct(req, res) {
    var productId = req.body.productId;
    var allProducts = new products_1.Products();
    allProducts.deleteProduct(productId);
    res.send({ deleteProduct: true, allProducts: allProducts });
}
exports.deleteProduct = deleteProduct;
function bringProduct(req, res) {
    var allProducts = products_1.readAllProducts();
    var idEditProd = req.cookies.idEditProd;
    var product = allProducts.find(function (prod) { return prod.id === idEditProd; });
    res.send({ "ok": 'success edit', product: product });
}
exports.bringProduct = bringProduct;
function editProduct(req, res) {
    var allProducts = products_1.readAllProducts();
    var idEditProd = req.cookies.idEditProd;
    var product = allProducts.find(function (prod) { return prod.id === idEditProd; });
    var _a = req.body, name = _a.name, image = _a.image, price = _a.price, quantity = _a.quantity, description = _a.description;
    product.name = name;
    product.image = image;
    product.price = price;
    product.quantity = quantity;
    product.description = description;
    fs.writeFileSync("models/data/products.json", JSON.stringify(allProducts));
    res.send({ products: allProducts });
}
exports.editProduct = editProduct;
function bringselectedById(req, res) {
    var allProducts = products_1.readAllProducts();
    var productSelectedById = req.params;
    console.log(req.params);
    var product = allProducts.find(function (prod) { return prod.id === productSelectedById; });
    console.log(product);
    res.send(product);
}
exports.bringselectedById = bringselectedById;
