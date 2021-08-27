const express = require('express')
const router = express.Router()

import {addSurveys,deleteSurveys,getUniqueId,getPreviousSurvey,getUniqueIdQuestions} from '../controllers/surveyControllers'


router.post('/add', addSurveys)
router.get('/surveys', getUniqueId)
router.get('/questions', getUniqueIdQuestions)
router.get('/getSurvey/:id',getPreviousSurvey)
router.delete('/user/:id/:email', deleteSurveys)




module.exports = router