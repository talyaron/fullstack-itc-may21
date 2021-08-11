const express = require('express')
const router = express.Router()

const {
    v4: uuidv4 
} = require('uuid');  // do  the same to questions?
const {
    addUsers
} = require('../models/userModels.js')


class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = uuidv4();
        this.createdSurvey = [];  //this will get survey Id..
    }
}


router.post('/register', (req, res) => {

    //class info from the form, create a new user like an instance
    const {name, email, password} = req.body
    const newUser = new User (name, email, password)
    addUsers(newUser);

    // const {name, email} = newUser;
  
    
    res.cookie('cookie', newUser,  {
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