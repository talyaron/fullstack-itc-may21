"use strict";
exports.__esModule = true;
exports.Products = exports.Product = exports.addProduct = exports.readProduct = void 0;
//!FIJARME SI CON PONER PRIVATE ES LO MISMO
var fs = require("fs");
var uuidv4 = require("uuid").v4;
var path = require("path");
var pasthtoProductJson = path.resolve(__dirname, "../db/products.json");
exports.readProduct = function () {
    var product = fs.readFileSync(pasthtoProductJson);
    return JSON.parse(product);
};
// export const wirteProduct= (data)=> {
// const product =fs.writeFileSync(pasthtoProductJson);
// return JSON.stringify(product)
// }
exports.addProduct = function (product) {
    var allProduct = exports.readProduct();
    allProduct.push(product);
    fs.writeFileSync(pasthtoProductJson, JSON.stringify(allProduct));
    return allProduct;
};
var Product = /** @class */ (function () {
    function Product(id, name, description, pokeType, price, image) {
        this.id = uuidv4();
        this.name = name;
        this.description = description;
        this.pokeType = pokeType;
        this.price = price;
        this.image = image;
    }
    return Product;
}());
exports.Product = Product;
var Products = /** @class */ (function () {
    function Products() {
        this.product = [];
    }
    return Products;
}());
exports.Products = Products;
