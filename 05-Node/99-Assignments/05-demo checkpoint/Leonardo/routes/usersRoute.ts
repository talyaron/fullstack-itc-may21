export { };
const express = require('express');
const router = express.Router();

//I import the function of the Controlers that Im going to use here
import { addNewUser, getAllUsers, setCookie, deleteUser, editUser } from '../controllers/usersController';
import { validateBody } from '../middleware/validateBody';
const Schemas = require('../schemas/allSchemas');

router.get('/allUsers', getAllUsers);
router.post('/newUser', validateBody(Schemas.registerSchemaFJS), addNewUser);
router.post('/setCookie/:userId', setCookie);
router.delete('/deleteUser/:userId', deleteUser)
router.put('/updateUser/:userId', validateBody(Schemas.registerSchemaFJS), editUser)

module.exports = router;