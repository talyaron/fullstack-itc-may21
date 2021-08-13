const express = require('express')
const router = express.Router()

import {usersRegister,loginUser,getCookie,getSurveys,endUserLogin} from '../controllers/controllersUsers'
// import {loginUser} from '../controllers/controllersUsers'
// import {getCookie} from '../controllers/controllersUsers'

// import {getSurveys} from '../controllers/controllersUsers'

router.post('/usersRegister', usersRegister)
router.post('/userLogin', loginUser)
router.post('/endUserLogin', endUserLogin);
router.get('/getCookie', getCookie)
router.get('/show/:email',getSurveys)

module.exports = router