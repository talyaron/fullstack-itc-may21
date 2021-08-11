const express = require('express')
const router = express.Router()


const {
    addUsers
} = require('../models/userModels.js')


router.post('/register', (req, res) => {

    //class info from the form, create a new user like an instance
    const {name, email, password} = req.body
    const newUser = new User (name, email, password)
    addUsers(newUser);
    
    
  
    
    res.cookie('cookie',  {
        maxAge: 30000000,
        httpOnly: true
    }).send({
        ok: true
    });
});

// router.post('/login', (req, res) => {

//     //class info from the form, create a new user like an instance
//     const {
//         name,
//         email,
//         password
//     } = req.body
//     const user = new User(name, email, password)
//     addUsers(user);

//     res.cookie('cookie', {
//         maxAge: 30000000,
//         httpOnly: true
//     }).send({
//         ok: true
//     });
// });



module.exports = router