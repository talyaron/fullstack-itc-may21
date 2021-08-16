const express = require('express')
const router = express.Router()

import {usersRegister,loginUser,getCookie,getSurveys,endUserLogin,scoreAdd} from '../controllers/controllersUsers'

/*YS: Ok, but what comes before? According to your server.ts:
    app.use('/surveys',surveyModel)
    app.use('/id',surveyModel)
    app.use('/id',surveyModel)
    app.use('/previous',surveyModel)
    // app.use('/c', surveyModel)
    app.use('/delete',surveyModel)
*/


router.post('/user', usersRegister)
router.post('/userLogin', loginUser)
router.post('/endUserLogin', endUserLogin);
router.get('/getCookie', getCookie)
router.get('/show/:email',getSurveys)
router.post('/add/:id',scoreAdd)

module.exports = router