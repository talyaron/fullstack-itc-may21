var Contact = /** @class */ (function () {
    function Contact(name, fname, phone, email) {
        this.name = name;
        this.fname = fname;
        this.phone = phone;
        this.email = email;
        this.id = this.id = "id" + Math.random().toString(16).slice(2);
    }
    return Contact;
}());
var List = /** @class */ (function () {
    function List() {
        this.contactList = [];
    }
    List.prototype.addToList = function (list) {
        try {
            this.contactList.push(list);
        }
        catch (e) {
            console.log("Error");
        }
    };
    List.prototype.emailValid = function (inputEmail) {
        var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (inputEmail.value.match(validEmail)) {
            alert("Valid email address!");
            return true;
        }
        else {
            alert("You have entered an invalid email address!");
            return false;
        }
    };
    List.prototype.phoneValid = function () { };
    List.prototype.renderList = function () { };
    List.prototype.deleteContact = function () { };
    List.prototype.editContact = function () { };
    List.prototype.searchContact = function () { };
    return List;
}());
var list = new List();
var handelForm = function (ev) {
    ev.preventDefault();
    var name = ev.target.elements.firstName.value;
    var fname = ev.target.elements.lastName.value;
    var phone = ev.target.elements.phone.value;
    var email = ev.target.elements.email.value;
    var contact = new Contact(name, fname, phone, email);
    list.addToList(contact);
    console.log(list);
    ev.target.reset();
};
