const express = require('express')
const router = express.Router()

import {addSurveys} from '../controllers/controllersSurvey'
//import {deleteSurveys} from '../controllers/controllersSurvey'

router.post('/add', addSurveys)
//router.delete('/user/:id/:email', deleteSurveys)



module.exports = router