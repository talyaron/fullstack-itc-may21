const { products } = require('../models/classes')
const multer = require('multer');
const path = require('path')

function updateProductsModel(id, description, price) {
    try{
        const productToUpdate = products.findProduct(id)
        const productToUpdateIndex: number = products.findIndexOfProduct(id)
        productToUpdate.description = description
        productToUpdate.price = price
        products.products[productToUpdateIndex] = productToUpdate
    }catch (e) {
        console.error(e)
    }
}
const storage = multer.diskStorage({ //YS: Nice
    destination: "./public/images",
    filename: (req, file, cb) => {
        cb(
            null,
            `${file.originalname}-${Date.now()}${path.extname(file.originalname)}`
        )
    }
})

module.exports = { updateProductsModel, storage }