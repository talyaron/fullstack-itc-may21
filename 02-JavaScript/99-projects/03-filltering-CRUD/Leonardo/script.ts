/* create one page with data constructed of an array of objects (of your preferred subject)
show all objects on the DOM (responsively)

CREATE: the user can create a new item

FILTER: filter it with a select-option button
    SEARCH: there will be a free search input text, to search within the items (RegEx)

UPDATE: The user can also edit the item name

DELETE: each item can be deleted using a button on the bottom of the item. */
///////////////////////////////////////////////////////////////////////////////////////////////

//Create an enum for the status of a subject:
enum Status {
    approved = 'approved',
    disapproved = 'disapproved',
    inProcess = 'inProcess'
}

//Create a class for the student:
class Student {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    date: Date;
    subject: Subject;

    constructor(firstname: string, lastname: string, email: string, subject: Subject) {
        this.id = "id" + Math.random().toString(16).slice(2);
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.date = new Date();
        this.subject = subject
    }
}

//Create a class for the subject:
class Subject {
    id: string;
    name: string;
    status: Status;

    constructor(name: string) {
        this.id = "id" + Math.random().toString(16).slice(2);
        this.name = name;
        this.status = Status.inProcess;
    }
}

//Create the subjects, I just want this 4 subjects:
const math = new Subject('Match');
const science = new Subject('Science');
const literacy = new Subject('Literacy');
const music = new Subject('Music');




