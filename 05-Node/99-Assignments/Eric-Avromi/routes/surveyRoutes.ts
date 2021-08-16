const express = require('express')
const router = express.Router()

import {addSurveys,deleteSurveys,getId, previousSurvey , getIdQuestions} from '../controllers/surveyControllers'


router.post('/add', addSurveys)
router.get('/surveys', getId)
router.get('/questions', getIdQuestions)
router.get('/getSurvey/:id',previousSurvey)
router.delete('/user/:id/:email', deleteSurveys)

module.exports = router