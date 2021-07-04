var render = document.querySelector(".chats");
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
    }
    Contacts.prototype.add = function (add) {
        this.contacts.push(add);
        this.renderContacts();
    };
    Contacts.prototype.addList = function (addlist) {
        var _this = this;
        addlist.forEach(function (element) {
            var contac = new ContactGenerator(element.contactName, element.image, element.phone);
            _this.contacts.push(contac);
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
    return Contacts;
}());
var contacts = new Contacts();
contacts.renderContacts();
contacts.addList(contactsData);
