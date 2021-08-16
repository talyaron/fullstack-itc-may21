const express = require('express')
const router = express.Router()

import {addSurveys,deleteSurveys,getUniqueId,getPreviousSurvey,getUniqueIdQuestions} from '../controllers/controllersSurvey'

/*YS: Ok, but what comes before? According to your server.ts:
    app.use('/register', userModel);  
    app.use('/loginUser', userModel);
    app.use('/login', userModel);
    app.use('/cookie', userModel);
    app.use('/surveys', userModel);
    app.use('/score',userModel)
*/

router.post('/add', addSurveys)
router.get('/surveys', getUniqueId)
router.get('/questions', getUniqueIdQuestions)
router.get('/getSurvey/:id',getPreviousSurvey)
router.delete('/user/:id/:email', deleteSurveys)




module.exports = router