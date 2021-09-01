"use strict";

exports.__esModule = true;

var productController_1 = require("../controllers/productController");

var express = require('express');

var router = express.Router();
router.post('/postProduct' // productExist
, productController_1.postProduct).get('/getProduct', productController_1.getProduct).post('/deleteProduct/:id', productController_1.deleteProduct).get('/bringInfo/:id', productController_1.bringInfo);
module.exports = router;