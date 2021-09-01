"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var productControllers_1 = require("../controllers/productControllers");
var cookieEditId_1 = require("../middleware/cookieEditId");
router.get('/getAllProducts', productControllers_1.getAll);
router.post('/productos', productControllers_1.addProduct);
router.post('/deleteProduct', productControllers_1.deleteProduct); //YS: Why is this not router.delete if you are deleting? Also you shhould provide the ID in the params: /deleteProduct/:id
router.get('/bring/:id', cookieEditId_1.editProdCookie, productControllers_1.bringProduct);
router.get('/getProductById/:id', productControllers_1.bringselectedById);
router.put('/edit', productControllers_1.editProduct); //YS: Should be: /edit/:id
module.exports = router;
