var uuid = require('uuidv4').uuid;
var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, 'products.json');
var Product = /** @class */ (function () {
    function Product(name, description, price, imgSrc) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgSrc = imgSrc;
        this.id = uuid();
    }
    return Product;
}());
function getAllProducts() {
    var allProducts = fs.readFileSync(filePath);
    var parsedProducts = JSON.parse(allProducts);
    // let arr = parsedProducts;
    // let i = 0, ln = arr.length;
    // for (i; i < ln; i++) {
    //     arr[i].price = "$0.99"
    // }
    // const write = fs.writeFileSync(filePath, JSON.stringify(arr))
    return parsedProducts;
}
function addProduct(name, description, price, imgSrc) {
    var allProducts = getAllProducts();
    var product = new Product(name, description, price, imgSrc);
    allProducts.unshift(product);
    fs.writeFileSync(filePath, JSON.stringify(allProducts));
    return allProducts;
}
function deleteProduct(id) {
    var allProducts = getAllProducts();
    var filteredProducts = allProducts.filter(function (product) { return product.id !== id; });
    fs.writeFileSync(filePath, JSON.stringify(filteredProducts));
    return filteredProducts;
}
function editProducts(id, newName, newDescription, newPrice, newImgSrc) {
    console.log("inside model");
    var allProducts = getAllProducts();
    var productToEdit = allProducts.find(function (product) { return product.id === id; });
    productToEdit.name = newName;
    productToEdit.description = newDescription;
    productToEdit.price = newPrice;
    productToEdit.imgSrc = newImgSrc;
    console.log(productToEdit);
    fs.writeFileSync(filePath, JSON.stringify(allProducts));
    return allProducts;
}
exports.getAllProducts = getAllProducts;
exports.addProduct = addProduct;
exports.deleteProduct = deleteProduct;
exports.editProducts = editProducts;
