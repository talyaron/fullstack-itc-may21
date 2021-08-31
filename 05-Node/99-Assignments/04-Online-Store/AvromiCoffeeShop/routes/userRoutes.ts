const router = require('express').Router()
// const doesUserExist = require('../middleware/middleware')

const {
    addUser, getAllUsers
} = require('../models/userModels.js')
const schema = require("../schemas/allSchemas")
const { doesUserExist, validateBody } = require('../middleware/middleware')
const UsersController = require('../contollers/userControllers')

router.post('/register',
    // validateBody(schema.registerSchema),
    doesUserExist, UsersController.register)
// doPasswordsMatch, 
// sendCookie,


//  router.post('/login', UsersController.login)

// router.get('/', (req, res) => {
//     try {
//         const allUsers= getAllUsers()
//         res.send(
//             allUsers
//         )
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })



// router.delete('/delete', (req, res) => { 
//     try {

//         const id = req.query.id;


//         const allUsers = deleteUser(id)
//         res.send(
//             allUsers
//         )
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })



// router.put('/editTask', (req, res) => {
//     try {

//         const newTitle = req.body.newTitle;
//         const id = req.body.id; 
//         console.log(id);
//         const allTasks =  editTask(id, newTitle)
//         console.log("afetr edit task ");
//         res.send(
//             allTasks
//         )
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })

module.exports = router