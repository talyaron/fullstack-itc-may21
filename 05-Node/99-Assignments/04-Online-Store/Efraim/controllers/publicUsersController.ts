const { User, products, users } = require('../models/classes')


exports.getAllUsers = (req, res) => {
    try {
        res.send(users)
    } catch (e) {
        console.error(e)
    }
}

exports.addUser = (req, res) => {
    try {
        const {body} = req;
        users.addUser(new User(body.email, body.password, body.role))
        res.send("Register Succesful!")
    } catch (e) {
        console.log(e)
        res.status(400).send({
            error: e.message
        });
    }
}

exports.productID = (req, res) => {
    try {
        const { id } = req.query
        const productToView = products.findProduct(id)
        res.send(productToView)
    } catch (e) {
        console.error(e)
    }
}

exports.getAllProducts = (req, res) => {
    try {
        res.send(products)
    } catch (e) {
        console.error(e)
    }
}

