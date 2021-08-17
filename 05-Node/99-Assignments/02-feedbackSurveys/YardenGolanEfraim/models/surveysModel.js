class Survey {
    constructor(title, admin) {  
        this.surveyID = Math.random().toString(16).slice(2);
        this.title = title;
        this.admin = admin;
        this.questions = []
    }
}
class Surveys {
    constructor(){
        this.surveys = [];
    }
    newSurvey(survey){
        this.surveys.push(survey)
    }  
}

module.exports = { Survey, Surveys }