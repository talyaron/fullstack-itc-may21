const express = require('express')
const router = express.Router()

import {addSurveys, sendSurvey} from '../controllers/controllersSurvey'

router.post('/add', addSurveys)
router.get('/sendSurvey',sendSurvey)


module.exports = router