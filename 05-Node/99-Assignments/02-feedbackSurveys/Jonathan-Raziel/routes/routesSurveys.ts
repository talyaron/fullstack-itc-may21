const express = require('express')
const router = express.Router()

import {addSurveys,deleteSurveys,getUniqueId,getPreviousSurvey,getUniqueIdQuestions,getAnswer} from '../controllers/controllersSurvey'


router.post('/add', addSurveys)
router.get('/surveys', getUniqueId)
router.get('/questions', getUniqueIdQuestions)
router.get('/getSurvey/:id',getPreviousSurvey)
router.delete('/user/:id/:email', deleteSurveys)
router.get('/getAsnwer/:id/:email',getAnswer)



module.exports = router