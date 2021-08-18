const express = require('express')
const router = express.Router()

import {usersRegister,loginUser,getCookie,getSurveys,endUserLogin,scoreAdd} from '../controllers/userControllers'

router.post('/user', usersRegister)
router.post('/userLogin', loginUser)
router.post('/endUserLogin', endUserLogin);
router.get('/getCookie', getCookie)
router.get('/show/:email',getSurveys)
router.post('/add/:id',scoreAdd)

module.exports = router