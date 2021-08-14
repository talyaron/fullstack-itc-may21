
const path = require('path')
// const filePath = path.resolve(__dirname, './survey.json')
const fs = require('fs');
const {
    v4: uuidv4
} = require('uuid');



function addSurvey(newSurvey) { 

    console.log("hello surbey ");
    const allSurveys = getAllSurveys();
    console.log("hello surbey 3 ");
  
   
    allSurveys.push(newSurvey);
    
    fs.writeFileSync("./survey.json", JSON.stringify(allSurveys));
    return allSurveys
}

function getAllSurveys() { 
    console.log('indie get all survey ');
    const allSurveys = fs.readFileSync("./survey.json");
    const parsed = JSON.parse(allSurveys);
    console.log('indie get after read y ');
    return parsed
}

exports.addSurvey = addSurvey


