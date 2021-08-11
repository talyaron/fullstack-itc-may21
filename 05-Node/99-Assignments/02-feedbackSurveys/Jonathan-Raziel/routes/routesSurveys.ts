const express = require('express')
const router = express.Router()

import {addSurveys} from '../controllers/controllersSurvey'

router.post('/add', addSurveys)



module.exports = router