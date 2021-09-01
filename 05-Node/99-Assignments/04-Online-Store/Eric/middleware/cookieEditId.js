"use strict";
exports.__esModule = true;
exports.editProdCookie = void 0;
function editProdCookie(req, res, next) {
    var id = req.cookies.id;
    res.cookie("idEditProd", id, { maxAge: 300000000, httpOnly: true });
    next();
}
exports.editProdCookie = editProdCookie;
