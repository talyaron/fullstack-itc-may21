export { };
const express = require('express');
const router = express.Router();

import { addSurveys } from '../controllers/surveyControllers'

router.post('/addSurvey', addSurveys)



module.exports = router;