/* create one page with data constructed of an array of objects (of your preferred subject)
show all objects on the DOM (responsively)

CREATE: the user can create a new item

FILTER: filter it with a select-option button
    SEARCH: there will be a free search input text, to search within the items (RegEx)

UPDATE: The user can also edit the item name

DELETE: each item can be deleted using a button on the bottom of the item. */
///////////////////////////////////////////////////////////////////////////////////////////////
//Create an enum for the status of a subject:
var Status;
(function (Status) {
    Status["approved"] = "approved";
    Status["disapproved"] = "disapproved";
    Status["inProcess"] = "inProcess";
})(Status || (Status = {}));
//Create a class for the student:
var Student = /** @class */ (function () {
    function Student(firstname, lastname, email, subject) {
        this.id = "id" + Math.random().toString(16).slice(2);
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.date = new Date();
        this.subject = subject;
    }
    return Student;
}());
//Create a class for the subject:
var Subject = /** @class */ (function () {
    function Subject(name) {
        this.id = "id" + Math.random().toString(16).slice(2);
        this.name = name;
        this.status = Status.inProcess;
    }
    return Subject;
}());
//Create the subjects, I just want this 4 subjects:
var math = new Subject('Match');
var science = new Subject('Science');
var literacy = new Subject('Literacy');
var music = new Subject('Music');
