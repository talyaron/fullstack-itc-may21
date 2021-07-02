//--CONSTS--//
var rootHtml = document.querySelector('#root');
var searchName = document.querySelector("#search");
var genderNode = document.querySelectorAll(".gender");
filterGender();
var Contact = /** @class */ (function () {
    function Contact(name, fname, phone, email, gender) {
        this.name = name;
        this.fname = fname;
        this.phone = phone;
        this.email = email;
        this.gender = gender;
        this.id = this.id = "id" + Math.random().toString(16).slice(2);
    }
    return Contact;
}());
var List = /** @class */ (function () {
    function List() {
        this.contactList = [];
        this.filteredArray = [];
    }
    List.prototype.addToList = function (list) {
        try {
            this.contactList.push(list);
        }
        catch (e) {
            console.log("Error");
        }
    };
    List.prototype.renderList = function (filteredArray) {
        var arrayToRender = filteredArray ? filteredArray : this.contactList; //YS: Nice
        var html = "";
        arrayToRender.forEach(function (element) {
            if (element.gender == 'male') {
                html += "<div class = \"record-item\"><div class = \"record-el\">\n            <span>&#128113;&#127999;</span>\n        </div>";
            }
            if (element.gender == 'female') {
                html += "<div class = \"record-item\"><div class = \"record-el\">\n            <span>&#128105;</span>\n        </div>";
            }
            if (element.gender == 'unicorn') {
                html += "<div class = \"record-item\"><div class = \"record-el\">\n                <span>\uD83E\uDD84</span>\n            </div>";
            }
            if (element.gender == 'helicopter') {
                html += "<div class = \"record-item\"><div class = \"record-el\">\n                <span>\uD83D\uDE81</span>\n            </div>";
            }
            html += "<div class = \"record-item\">\n            <div class = \"record-el\">\n                <span>Name:" + element.name + " </span>\n            </div>\n            <div class = \"record-el\">\n                <span>Family Name:" + element.fname + " </span>\n            </div>\n            <div class = \"record-el\">\n                <span >Phone Number:" + element.phone + " </span>\n            </div>\n            <div class = \"record-el\">\n                <span>Email Address :" + element.email + " </span>\n            </div>\n            <button type = \"button\" id = \"delete-btn\" onclick='handelRemove(\"" + element.id + "\")'>\n                <span>\n                    <i class = \"fas fa-trash\"></i>\n                </span> Delete\n            </button>\n            <button type = \"button\" id = \"delete-btn\" onclick='editContact(\"" + element.id + "\")'>\n            <span>\n                <i class = \"fas fa-trash\"></i>\n            </span> Edit\n        </button>\n        </div>\n    </div>\n    </div>\n";
        });
        rootHtml.innerHTML = html;
    };
    List.prototype.deleteContact = function (id) {
        this.contactList = this.contactList.filter(function (ev) { return ev.id !== id; });
        this.renderList(null);
    };
    List.prototype.editContacts = function (id) {
        var contactEdit = this.contactList.find(function (contact) { return contact.id == id; });
        contactEdit.name = "DAN";
        console.log(contactEdit);
        this.renderList(this.contactList);
    };
    List.prototype.searchContact = function (name) {
        var regEx = "" + name; //YS: You dont need template literals here. 
        var searchName = new RegExp(regEx, 'i');
        this.filteredArray = this.contactList.filter(function (elem) { return searchName.test(elem.name); });
        this.renderList(this.filteredArray);
    };
    List.prototype.filterByGender = function (gender) {
        if (gender === "female" || gender === "male" || gender === "unicorn" || gender === "helicopter") {
            this.contactList = this.filteredArray.filter(function (elem) { return elem.gender === gender; });
        }
        else {
            this.contactList = this.filteredArray.filter(function (elem) { return elem.gender === 'male' || elem.gender === 'female' || gender === "unicorn" || gender === "helicopter"; });
        }
        this.renderList(this.filteredArray);
    };
    return List;
}());
var lists = new List();
//--SUBMIT FORM--//
var handelForm = function (ev) {
    ev.preventDefault();
    var name = ev.target.elements.firstName.value;
    var fname = ev.target.elements.lastName.value;
    var phone = ev.target.elements.phone.value;
    var email = ev.target.elements.email.value;
    var gender = ev.target.elements.gender.value;
    //--email and phone validation--//
    var validEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    var emailReg = new RegExp(validEmail, 'gmi');
    if (!emailReg.test(email)) {
        alert('Your Email seems to be wrong. Please correct it or use a different Email address');
        throw new Error('Wrong email address');
    }
    var validPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    var phoneReg = new RegExp(validPhone, 'gmi');
    if (!phoneReg.test(phone)) {
        alert('Please enter a valid phone number');
        throw new Error('Wrong phone number');
    }
    var contact = new Contact(name, fname, phone, email, gender);
    lists.addToList(contact);
    lists.renderList(null);
    console.log(lists);
    ev.target.reset();
};
//------------FUNCTIONS----------//
var handelRemove = function (id) {
    lists.deleteContact(id);
};
var editContact = function (id) {
    lists.editContacts(id);
    console.log("hey"); //YS: Dont leave console.logs 
};
searchName.addEventListener('keyup', handleKeyUp);
function handleKeyUp() {
    lists.searchContact(searchName.value);
}
var genderFilter = document.querySelector('#genderFilter');
genderFilter.addEventListener("click", filterGender);
function filterGender() {
    genderNode.forEach(function (node) {
        if (node.checked) {
            var filterGenderList = lists.contactList.filter(function (contact) { return contact.gender == node.value; });
            lists.renderList(filterGenderList); //YS: How do you go back to the original list after filtering? 
        }
    });
}
