"use strict";
exports.__esModule = true;
exports.Products = exports.Product = exports.readAllProducts = void 0;
var uuidv4 = require("uuid").v4;
var fs = require("fs");
exports.readAllProducts = function () {
    var allUProducts = fs.readFileSync("models/data/products.json");
    return JSON.parse(allUProducts);
};
var Product = /** @class */ (function () {
    function Product(id, name, image, price, quantity, description) {
        console.log(id, name, image, price, quantity, description);
        this.id = id || uuidv4();
        this.name = name;
        this.image = image;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
    return Product;
}());
exports.Product = Product;
var Products = /** @class */ (function () {
    function Products() {
        this.productList = exports.readAllProducts();
    }
    Products.prototype.addItem = function (product) {
        this.productList.push(product);
        this.updateProducts();
    };
    Products.prototype.deleteProduct = function (productId) {
        try {
            this.productList = this.productList.filter(function (product) { return product.id !== productId; });
            this.updateProducts();
        }
        catch (e) {
            console.log(e);
        }
    };
    Products.prototype.updateProducts = function () {
        fs.writeFileSync("models/data/products.json", JSON.stringify(this.productList));
    };
    return Products;
}());
exports.Products = Products;
