const express = require('express')
const router = express.Router()


const {
    getAllProducts, deleteProduct, editProducts, addProduct
} = require('../models/productModels.js')

router.get('/', (req, res) => {
    try {
        const allProducts = getAllProducts()
        res.send(
            allProducts
        )
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.delete('/delete', (req, res) => {
    try {
        const id = req.query.id;
        const allProducts = deleteProduct(id)
        res.send(
            allProducts
        )
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.post('/addProduct', (req, res) => { 
    try {
        const {name, description, price, imgSrc} = req.body;
        const allProducts = addProduct(name, description, price, imgSrc)
        res.send(
            allProducts
        )
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.put('/editProduct', (req, res) => {
    try {
        const id = req.query.id;
        const {name, description, price, imgSrc} = req.body;

        const allProducts = editProducts(id, name, description, price, imgSrc)
        res.send(
            allProducts
        )
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router