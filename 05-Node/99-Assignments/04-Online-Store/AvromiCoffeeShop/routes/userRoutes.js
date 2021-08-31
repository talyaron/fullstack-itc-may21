var router = require('express').Router();
// const doesUserExist = require('../middleware/middleware')
var _a = require('../models/userModels.js'), addUser = _a.addUser, getAllUsers = _a.getAllUsers;
var schema = require("../schemas/allSchemas");
var _b = require('../middleware/middleware'), doesUserExist = _b.doesUserExist, validateBody = _b.validateBody;
var UsersController = require('../contollers/userControllers');
router.post('/register', 
// validateBody(schema.registerSchema),
doesUserExist, UsersController.register);
// doPasswordsMatch, 
// sendCookie,
router.post('/login', UsersController.login);
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
module.exports = router;
