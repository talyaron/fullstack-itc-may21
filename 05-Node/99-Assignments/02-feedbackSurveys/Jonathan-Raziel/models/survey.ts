export { };

interface Question {
    title: string;
    questionId: string;
    voters: Array<Voter>;
}
interface Voter {
    voterID: string;
    score: number;
}

class Survey {
    title: string;
    admin: string;
    question: Array<Question>;

    constructor(title: string, admin: string, question: Array<Question>) {
        this.title = title;
        this.admin = admin;
        this.question = question;
    }

}

class SurveysList {
    SurveryArray: Array<Survey> = [];

    addSurvey(survey: Survey) {
        try {
            this.SurveryArray.push(survey);
        } catch (error) {
            console.log(error);
        }
    }
}