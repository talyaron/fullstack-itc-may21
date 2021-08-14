const express = require('express')
const router = express.Router()

import {addSurveys,deleteSurveys,getUniqueId,getPreviousSurvey,getUniqueIdQuestions} from '../controllers/controllersSurvey'
// import {deleteSurveys} from '../controllers/controllersSurvey'
// import {getUniqueId} from '../controllers/controllersSurvey'
// import {getPreviousSurvey} from '../controllers/controllersSurvey'


router.post('/add', addSurveys)
router.get('/surveys', getUniqueId)
router.get('/questions', getUniqueIdQuestions)
router.get('/s/:id',getPreviousSurvey)
router.delete('/user/:id/:email', deleteSurveys)



module.exports = router