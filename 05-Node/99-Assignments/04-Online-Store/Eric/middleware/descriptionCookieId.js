"use strict";
exports.__esModule = true;
exports.productIdCookie = void 0;
function productIdCookie(req, res, next) {
    var idProduct = req.params;
    res.cookie("productSelected", idProduct, { maxAge: 300000000, httpOnly: true });
    next();
}
exports.productIdCookie = productIdCookie;
