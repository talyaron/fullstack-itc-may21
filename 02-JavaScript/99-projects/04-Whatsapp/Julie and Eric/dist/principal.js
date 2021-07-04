//render in the first page
var render = document.querySelector(".wrapper__container--chats");
//search-regrex first page, take id from the input search
var inputFilter = document.querySelector("#filterN");
var ContactGenerator = /** @class */ (function () {
    function ContactGenerator(contactName, image, phone) {
        this.contactName = contactName;
        this.image = image;
        this.phone = phone;
        this.contactId = Math.random().toString(16).slice(2);
    }
    return ContactGenerator;
}());
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.contacts = [];
        this.contactsFilter = [];
    }
    Contacts.prototype.add = function (add) {
        this.contacts.push(add);
        this.renderContacts();
        this.contactsFilter.push(add);
    };
    Contacts.prototype.addList = function (addlist) {
        var _this = this;
        addlist.forEach(function (element) {
            var contac = new ContactGenerator(element.contactName, element.image, element.phone);
            _this.contacts.push(contac);
            _this.contactsFilter.push(contac);
        });
        this.renderContacts();
    };
    Contacts.prototype.renderContacts = function () {
        var html = "";
        this.contacts.forEach(function (element) {
            html += "<div>\n      <div class=\"chat1\" onclick=\"redirect()\">\n\n      <img src=\"" + element.image + "\" alt=\"\" class=\"photo2\"> \n\n      <h4 class=\"nameContact\">" + element.contactName + "</h4>\n      </div>\n      <div>\n      <i onclick='handleDelete(\"" + element.contactId + "\")' class=\"far fa-trash-alt\" id=\"delete\" > </i>\n      </div>\n      </div>";
        });
        render.innerHTML = html;
    };
    Contacts.prototype.searchContact = function (inputFilter) {
        var regrExp = inputFilter;
        var searchTermReg = new RegExp(regrExp, "i");
        this.contacts = this.contactsFilter.filter(function (elem) {
            return searchTermReg.test(elem.contactName);
        });
        this.renderContacts();
    };
    return Contacts;
}());
function handleDelete(contactId) {
    this.conta;
    var reducedContacts = contacts.contacts.filter(function (contact) { return contactId !== contact.contactId; });
    console.log(reducedContacts);
    contacts.contacts = reducedContacts;
    contacts.renderContacts();
}
var contacts = new Contacts();
contacts.renderContacts();
contacts.addList(contactsData);
inputFilter.addEventListener("keyup", handleKeyUp);
function handleKeyUp() {
    try {
        contacts.searchContact(inputFilter.value);
    }
    catch (e) {
        console.log(e);
    }
}
function redirect() {
    try {
        window.location.href = "chat.html";
        if (!window.location.href)
            throw new Error("The page where you want to redirect it doesn´t exist!");
    }
    catch (error) {
        console.error(error);
    }
}
