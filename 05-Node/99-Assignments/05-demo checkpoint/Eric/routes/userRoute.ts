const express = require('express');

const router = express.Router();

import {addUser, getUsers, searchByFirstname} from '../controllers/userControllers'
import {isFirstNameExist} from '../middleware/validationModel'
import {validateUser} from '../middleware/validationSchemas'
import { schemaUser } from '../schemas/allSchemas';
import {writeCookie} from '../middleware/handleCookies'

router.post('/addUser', validateUser(schemaUser) ,isFirstNameExist,writeCookie, addUser);
router.get('/getUsers', getUsers)
router.put('/searchByFirstname', searchByFirstname)




module.exports = router