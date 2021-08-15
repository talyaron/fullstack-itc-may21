const express = require("express")
const router = express.Router()
const surveysController = require("../controllers/surveysController")

router.get('/sendSurvey', surveysController.send_survey)
router.post('/addSurvey', surveysController.add_survey)
router.get('/getSurvey', surveysController.get_survey)
router.get('/surveyToAnswer', surveysController.survey_to_answer)
router.delete('/deleteSurvey/:ID', surveysController.delete_survey)



module.exports = router