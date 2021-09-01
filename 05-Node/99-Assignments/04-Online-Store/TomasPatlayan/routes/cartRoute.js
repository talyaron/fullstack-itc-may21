"use strict";
exports.__esModule = true;
var cartController_1 = require("../controllers/cartController");
var express = require('express');
var router = express.Router();
router.post('/addToCart/:id', cartController_1.addToCart).get('/getCart', cartController_1.getCart);
module.exports = router;
