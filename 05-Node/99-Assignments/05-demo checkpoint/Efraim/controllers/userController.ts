const { User, users } = require('../models/models')


exports.registerUser = (req, res) =>{
    try {
        const {body} = req
        const {name, imageURL, color} = body
        const newUser:User = new User(name, imageURL, color)
        users.addUser(newUser)
        res.send("user added succesfully!")

    } catch (error) {
        console.log(error)
    }
}
exports.getAllUsers = (req, res) =>{
    try {
        res.send(users)
    } catch (error) {
        console.log(error)
    }
}

