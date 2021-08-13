
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const surveys = require('../survey.json');




function getAllSurveys(req, res) {
    console.log('getAllSurveys');
    console.log(req.user)
    const {user} = req;
    if(user){
        const userSurveys = surveys.filter(survey=>survey.admin === user.email);
        res.send({ surveys:userSurveys });
    } else {
        res.send({ surveys:[], error:"No user was found" })
    }


   
}

exports.getAllSurveys = getAllSurveys;