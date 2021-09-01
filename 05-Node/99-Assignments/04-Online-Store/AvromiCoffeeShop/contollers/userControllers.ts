const {
    addUser, getAllUsers
} = require('../models/userModels.js')

exports.register = (req, res) => {
    try {
        const { fname, lname, company, email, password, repassword } = req.body

        const user = addUser(fname, lname, company, email, password)
        res.send(
            user
        )
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.login = (req, res) => {
    try {

        const { email, password } = req.body;
        // b- crypt
        const allUsers = getAllUsers();
        const user = allUsers.find(user => user.email === email);
        if (user) {
            if (user.password === password) {
                console.log(user)
                res.send({name: user.fname, role: user.role })
                return;
            }
            else {
                throw new Error("password does not match")
            }
        }
        else {
            throw new Error("User Not Found")
        }


    } catch (error) {
        console.log(error);
        res.send("hi");
    }

}