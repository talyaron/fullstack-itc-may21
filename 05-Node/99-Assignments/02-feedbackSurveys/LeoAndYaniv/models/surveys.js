"use strict";
exports.__esModule = true;
exports.Survey = exports.Question = exports.Rating = void 0;
var uuidv4 = require("uuid").v4;
var Rating = /** @class */ (function () {
    function Rating() {
        this.filler = null;
        this.rating = null;
    }
    return Rating;
}());
exports.Rating = Rating;
var Question = /** @class */ (function () {
    function Question(content) {
        this.uuid = uuidv4();
        this.content = content;
        this.ratings = []; //when user raiting update
    }
    return Question;
}());
exports.Question = Question;
var Survey = /** @class */ (function () {
    function Survey(admin) {
        this.uuid = uuidv4();
        this.title = '';
        this.admin = admin;
        this.questions = []; //when the user push add here
        /* createSurvey()
    addQuestion()
    removeQuestion()
    editQuestion{}
     */
    }
    return Survey;
}());
exports.Survey = Survey;
