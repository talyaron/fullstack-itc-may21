"use strict";
exports.__esModule = true;
exports.Products = exports.Product = void 0;
var fs = require("fs");
var path = require("path");
var uuidv4 = require('uuid').v4;
var productsJsonPath = path.resolve(__dirname, "./products.json");
var readProductsJson = function () {
    try {
        var productsList = fs.readdirSync(productsJsonPath);
        return JSON.parse(productsList);
    }
    catch (error) {
        console.error(error);
    }
};
var Product = /** @class */ (function () {
    function Product(picture, name, description, price, stock) {
        this.uuid = uuidv4();
        this.picture = picture;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }
    return Product;
}());
exports.Product = Product;
//Methods
var Products = /** @class */ (function () {
    function Products() {
        this.products = readProductsJson();
    }
    Products.prototype.updateProductsJson = function () {
        try {
            fs.writeFileSync(productsJsonPath, JSON.stringify(this.products));
        }
        catch (error) {
            console.error(error);
        }
    };
    Products.prototype.createProducts = function (product) {
        try {
            this.products.push(product);
            this.updateProductsJson();
        }
        catch (error) {
            console.error(error);
        }
    };
    Products.prototype.deleteProduct = function (id) {
        try {
            this.products = this.products.filter(function (product) { return product.uuid !== id; });
            this.updateProductsJson();
        }
        catch (error) {
            console.error(error);
        }
    };
    Products.prototype.detailsProduct = function (id) {
        try {
            var productInfo = this.products.find(function (product) { return product.uuid === id; });
            return productInfo;
        }
        catch (error) {
            console.error(error);
        }
    };
    return Products;
}());
exports.Products = Products;
