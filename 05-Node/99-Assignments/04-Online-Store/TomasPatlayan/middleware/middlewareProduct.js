"use strict";
exports.__esModule = true;
exports.productExist = void 0;
var productsModel_1 = require("../models/productsModel");
exports.productExist = function (req, res, next) {
    var allProduct = productsModel_1.readProduct();
    var ifFound = allProduct.some(function (element) { return element.name === req.body.name; });
    if (ifFound) {
        res.status(505).send('The Producto Already Exist');
        return;
    }
    next();
};
