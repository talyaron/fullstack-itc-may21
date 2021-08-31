const { products, users, Cart } = require('../models/classes')
const { addCart, deleteCart, updateCartItemValue} = require('../models/cartmodels')

exports.addToCart = (req, res) => {
    try {
        const {body} = req;
        const {userID} = req.decoded
        addCart(body.productID, userID)
        res.send(users)
    } catch (e) {
        console.log(e)
        res.status(400).send({
            error: e.message
        });
    }
}

exports.getUserCart = (req, res) => {
    try {
        const {userID} = req.decoded
        const userCart = users.findUser(userID)
        res.send(userCart.cart)
    } catch (e) {
        console.error(e)
    }
}


exports.deleteFromCart = (req, res) => {
    try {
        const { productID } = req.params
        const {userID} = req.decoded
        const userCart = deleteCart(userID, productID)
        res.send(userCart)
    } catch (e) {
        console.error(e)
    }
}

exports.updateAmountFromCart = (req, res) => {
    try {
        const {body} = req;
        const productID = req.query.id
        const { updatedValue } = body
        const {userID} = req.decoded
        updateCartItemValue(userID, productID, updatedValue)
        res.send("Success!")
    } catch (e) {
        console.log(e)
        res.status(400).send({
            error: e.message
        });
    }
}