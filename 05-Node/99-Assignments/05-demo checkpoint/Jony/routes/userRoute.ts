const express = require('express');
const router = express.Router();

import {addUser, getUsers,deleteUser} from '../controllers/userControllers'

import {validateUser} from '../middleware/validationSchema'
import {writeCookie} from '../middleware/handleCookies'

import {schemaUser} from '../schema/allSchemas'

router.post('/addUser', validateUser(schemaUser) , writeCookie, addUser)
      .get('/getUsers', getUsers)
      .delete('/deleteUser/:id', deleteUser)


module.exports = router