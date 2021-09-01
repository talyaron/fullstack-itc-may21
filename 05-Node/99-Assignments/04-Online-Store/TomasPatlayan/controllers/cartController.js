"use strict";
exports.__esModule = true;
exports.getCart = exports.addToCart = void 0;
var productsModel_1 = require("../models/productsModel");
var userModel_1 = require("../models/userModel");
var fs = require("fs");
exports.addToCart = function (req, res) {
    // let {id}= req.params;
    var id = req.params.id;
    var allProduct = productsModel_1.readProduct();
    var allUser = userModel_1.readUsers();
    var findP = allProduct.find(function (element) { return element.id === id; });
    var cart = new userModel_1.Cart(findP.ident, findP.name, findP.price, findP.image);
    var getCookie = JSON.parse(req.cookies.cookieName);
    var currentUserId = getCookie.id;
    var finCurrentUser = allUser.find(function (el) { return el.id === currentUserId; });
    finCurrentUser.cart.push(cart);
    fs.writeFileSync("./db/users.json", JSON.stringify(allUser));
    res.send({ cart: allUser });
    // console.log(finCurrentUser);
};
exports.getCart = function (req, res) {
    var allUser = userModel_1.readUsers();
    var getCookie = JSON.parse(req.cookies.cookieName);
    var currentUserId = getCookie.id;
    var finCurrentUser = allUser.find(function (el) { return el.id === currentUserId; });
    console.log(finCurrentUser);
    res.send(finCurrentUser);
};
