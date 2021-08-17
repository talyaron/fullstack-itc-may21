class Question {

    constructor(title){
        this.title = title,
        this.questionID = Math.random().toString(16).slice(2);
        this.voters = {voterID: [], score: []}
    }
} 
class Questions{
    constructor(){
        this.questions = [];
    }
    newQuestion(question){
        this.questions.push(question)
    }    
}

module.exports = { Question, Questions }