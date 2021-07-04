//render in the first page
var render = document.querySelector(".chats");
//search-regrex first page, take id from the input search
var inputFilter = document.querySelector("#filterN");
var ContactGenerator = /** @class */ (function () {
    function ContactGenerator(contactName, image, phone) {
        this.contactName = contactName;
        this.image = image;
        this.phone = phone;
        this.contactId = Math.random().toString(16).slice(2);
        ;
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
            html += "<div class=\"chat1\"> <img src=\"" + element.image + "\" alt=\"\" class=\"photo2\"> <h4 class=\"nameContact\">" + element.contactName + "</h4> </div>";
        });
        render.innerHTML = html;
        console.log(html);
    };
    Contacts.prototype.searchContact = function (inputFilter) {
        var regrExp = inputFilter;
        var searchTermReg = new RegExp(regrExp, 'i');
        this.contacts = this.contactsFilter.filter(function (elem) { return searchTermReg.test(elem.contactName); });
        this.renderContacts();
    };
    return Contacts;
}());
var contacts = new Contacts();
contacts.renderContacts();
contacts.addList(contactsData);
inputFilter.addEventListener('keyup', handleKeyUp);
function handleKeyUp() {
    try {
        contacts.searchContact(inputFilter.value);
    }
    catch (e) {
        console.log(e);
    }
}
