const express = require('express')
const router = express.Router()

import {usersRegister} from '../controllers/controllersUsers'
import {loginUser} from '../controllers/controllersUsers'
import {getCookie} from '../controllers/controllersUsers'

router.post('/usersRegister', usersRegister)
router.post('/userLogin', loginUser)
router.get('/getCookie', getCookie)


module.exports = router