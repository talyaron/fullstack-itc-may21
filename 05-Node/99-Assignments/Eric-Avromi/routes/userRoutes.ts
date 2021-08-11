const express = require('express')
const router = express.Router()


//const {addUsers} = require('./models/userModels.js')

import {addUsers} from '../controllers/usersControllers'

router.get('/users',addUsers)

module.exports = router