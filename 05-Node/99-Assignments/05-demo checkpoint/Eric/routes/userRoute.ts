const express = require('express');

const router = express.Router();

import {addUser, getUsers} from '../controllers/userControllers'
import {isFirstNameExist} from '../middleware/validationModel'
import {validateUser} from '../middleware/validationSchemas'
import { schemaUser } from '../schemas/allSchemas';


router.post('/addUser', validateUser(schemaUser) ,isFirstNameExist, addUser);
router.get('/getUsers', getUsers)




module.exports = router