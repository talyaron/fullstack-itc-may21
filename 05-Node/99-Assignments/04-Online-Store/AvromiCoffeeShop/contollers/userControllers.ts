const {                                   
    addUser, getAllUsers
} = require('../models/userModels.js')

exports.register = (req, res) => { 
    try {
        const {fname,lname, company, email, password, repassword} = req.body
    
        const user = addUser(fname, lname, company, email, password)
        res.send(
           user
        )
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// exports.login = (req, res) => {
//     try {

//         const {email, password} = req.body;
//         // b- crypt


        
//     } catch (error) {
//         console.log(error);
        
//     }



// }