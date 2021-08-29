const { Product, products } = require('../models/classes')
const { updateProductsModel } = require('../models/adminmodels')
const multer = require('multer');
const Ajv = require("ajv");
const ajv = new Ajv()



exports.updateProducts = (req, res) => {
    try {
        const { body } = req;
        const { id } = req.query
        const { description, price } = body
        updateProductsModel(id, description, price)
        res.send("Success!")
    } catch (e) {
        console.log(e)
        res.status(400).send({
            error: e.message
        });
    }
}


exports.deleteProduct = (req, res) => {
    try {
        const { productID } = req.params
        const newProductList = products.products.filter(products => products.id != productID)
        products.products = newProductList
        res.send("deleted")
    } catch (e) {
        console.error(e)
    }
}

exports.addProduct = (req, res) => {
    try {
        const { body } = req;
        const { filename } = req.file
        const { price, description } = body
        const parsePrice = JSON.parse(price)
        const intPrice = parseInt(parsePrice)
        products.addProduct(new Product(`/images/${filename}`, description, intPrice))
        res.send("Success!")
    } catch (e) {
        console.log(e)
        res.status(400).send({
            error: e.message
        });
    }
}



