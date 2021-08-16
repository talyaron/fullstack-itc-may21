const express = require('express')
const router = express.Router()

import {register,loginUser,getCookie,getSurveys} from '../controllers/userControllers'



router.post('/user', register)
router.post('/userLogin', loginUser)
router.get('/getCookie', getCookie)
router.get('/show/:email',getSurveys)

module.exports = router