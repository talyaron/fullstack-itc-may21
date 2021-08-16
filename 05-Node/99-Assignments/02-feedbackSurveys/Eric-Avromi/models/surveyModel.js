
const path = require('path')
const fs = require('fs');
const {v4: uuidv4} = require('uuid');   

//YS: Good 
function addSurvey(newSurvey) { 
    const allSurveys = getAllSurveys();
    allSurveys.push(newSurvey);
    fs.writeFileSync("./survey.json", JSON.stringify(allSurveys));
    return allSurveys
}

function getAllSurveys() { 
    const allSurveys = fs.readFileSync("./survey.json");
    const parsed = JSON.parse(allSurveys);
    return parsed
}

exports.addSurvey = addSurvey
exports.getAllSurveys = getAllSurveys   


