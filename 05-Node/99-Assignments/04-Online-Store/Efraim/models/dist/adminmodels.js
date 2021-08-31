var products = require('../models/classes').products;
var multer = require('multer');
var path = require('path');
function updateProductsModel(id, description, price) {
    try {
        var productToUpdate = products.findProduct(id);
        var productToUpdateIndex = products.findIndexOfProduct(id);
        productToUpdate.description = description;
        productToUpdate.price = price;
        products.products[productToUpdateIndex] = productToUpdate;
    }
    catch (e) {
        console.error(e);
    }
}
var storage = multer.diskStorage({
    destination: "./public/images",
    filename: function (req, file, cb) {
        cb(null, file.originalname + "-" + Date.now() + path.extname(file.originalname));
    }
});
module.exports = { updateProductsModel: updateProductsModel, storage: storage };
