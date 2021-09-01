var express = require('express');
var router = express.Router();
var _a = require('../models/productModels.js'), getAllProducts = _a.getAllProducts, deleteProduct = _a.deleteProduct, editProducts = _a.editProducts, addProduct = _a.addProduct;
router.get('/', function (req, res) {
    try {
        var allProducts = getAllProducts();
        res.send(allProducts);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
router["delete"]('/delete', function (req, res) {
    try {
        var id = req.query.id;
        var allProducts = deleteProduct(id);
        res.send(allProducts);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
router.post('/addProduct', function (req, res) {
    try {
        var _a = req.body, name = _a.name, description = _a.description, price = _a.price, imgSrc = _a.imgSrc;
        var allProducts = addProduct(name, description, price, imgSrc);
        res.send(allProducts);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
router.put('/editProduct', function (req, res) {
    try {
        var id = req.query.id;
        var _a = req.body, name = _a.name, description = _a.description, price = _a.price, imgSrc = _a.imgSrc;
        var allProducts = editProducts(id, name, description, price, imgSrc);
        res.send(allProducts);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
module.exports = router;
