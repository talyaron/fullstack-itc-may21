var rootHtml = document.querySelector('#root');
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
        this.contactList.forEach(function (email) {
            if (email.email.match(validEmail)) {
                alert("Valid email address!");
                return true;
            }
            else {
                alert("You have entered an invalid email address!");
                return false;
            }
        });
    };
    List.prototype.phoneValid = function (phone) {
        var validphone = /^\+?([0-10]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-10]{4})$/;
        this.contactList.forEach(function (phone) {
            if (phone.phone.match(validphone)) {
                alert("Valid phone number!");
                return true;
            }
            else {
                alert("You have entered an invalid phone number!");
                return false;
            }
        });
    };
    List.prototype.renderList = function () {
        var html = "";
        this.contactList.forEach(function (element) {
            html += "<div class = \"record-item\">\n            <div class = \"record-el\">\n                <span>Name:" + element.name + " </span>\n            </div>\n            <div class = \"record-el\">\n                <span>Family Name:" + element.fname + " </span>\n            </div>\n            <div class = \"record-el\">\n                <span >Phone Number:" + element.phone + " </span>\n            </div>\n            <div class = \"record-el\">\n                <span>Email Address :" + element.email + " </span>\n            </div>\n            <button type = \"button\" id = \"delete-btn\" onclick='handelRemove(\"" + element.id + "\")'>\n                <span>\n                    <i class = \"fas fa-trash\"></i>\n                </span> Delete\n            </button>\n            <button type = \"button\" id = \"delete-btn\" onclick='handelRemove(\"" + element.id + "\")'>\n                <span>\n                <i class=\"fas fa-edit\"></i>\n                </span> Edit\n            </button>\n        </div>\n    \n    </div>\n";
        });
        rootHtml.innerHTML = html;
    };
    List.prototype.deleteContact = function (id) {
        this.contactList = this.contactList.filter(function (ev) { return ev.id !== id; });
        this.renderList();
    };
    List.prototype.editContact = function () { };
    List.prototype.searchContact = function () { };
    return List;
}());
var lists = new List();
var handelForm = function (ev) {
    ev.preventDefault();
    var name = ev.target.elements.firstName.value;
    var fname = ev.target.elements.lastName.value;
    var phone = ev.target.elements.phone.value;
    var email = ev.target.elements.email.value;
    var contact = new Contact(name, fname, phone, email);
    lists.addToList(contact);
    lists.emailValid(email);
    lists.phoneValid(phone);
    lists.renderList();
    console.log(lists);
    ev.target.reset();
};
var handelRemove = function (id) {
    lists.deleteContact(id);
};
