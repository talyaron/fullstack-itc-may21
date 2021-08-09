"use strict";
exports.__esModule = true;
var Survey = /** @class */ (function () {
    function Survey(title, admin, question) {
        this.title = title;
        this.admin = admin;
        this.question = question;
    }
    return Survey;
}());
var SurveysList = /** @class */ (function () {
    function SurveysList() {
        this.SurveryArray = [];
    }
    SurveysList.prototype.addSurvey = function (survey) {
        try {
            this.SurveryArray.push(survey);
        }
        catch (error) {
            console.log(error);
        }
    };
    return SurveysList;
}());
