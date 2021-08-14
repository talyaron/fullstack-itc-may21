export { };
const express = require('express');
const router = express.Router();

import { addSurveys, getLogInUser, deleteSurvey } from '../controllers/surveyControllers'

router.post('/addSurvey', addSurveys)
router.get('/logUser', getLogInUser)
router.post('/deleteSurvey/:id', deleteSurvey)



module.exports = router;