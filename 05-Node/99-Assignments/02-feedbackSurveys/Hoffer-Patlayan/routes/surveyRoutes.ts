export { };
const express = require('express');
const router = express.Router();

import { addSurveys, getLogInUser } from '../controllers/surveyControllers'

router.post('/addSurvey', addSurveys)
router.get('/logUser', getLogInUser)



module.exports = router;