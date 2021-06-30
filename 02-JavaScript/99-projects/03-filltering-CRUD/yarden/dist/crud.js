//I am creating a simple contact form with Responsive SCSS
var Contact = /** @class */ (function () {
    function Contact(phoneNumber, contactName, email, address, onWhatsapp, photo) {
        this.phoneNumber = phoneNumber;
        this.contactName = contactName;
        this.email = email;
        this.address = address;
        this.onWhatsapp = onWhatsapp;
        this.photo = photo;
        this.id = Math.random().toString(16).slice(2);
    }
    return Contact;
}());
var phoneNumber = document.querySelector("#phone-number");
var contactName = document.querySelector("#name");
var email = document.querySelector("#email");
var address = document.querySelector("#address");
var onWhatsapp = document.querySelector("#on-Whatsapp");
var photo = document.querySelector("#photo");
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.contacts = [];
    }
    Contacts.prototype.render = function () {
        try {
            var rootDiv = document.querySelector(".saved-contacts-root");
            var htmlPattern_1 = "";
            this.contacts.forEach(function (contact) {
                htmlPattern_1 += "<div class=\"contact\">\n        <i class=\"fa fa-bars fa-lg\" aria-hidden=\"true\"></i>\n        <img class=\"contact__img\" src=\"" + contact.photo + "\" alt=\"Contact image\">\n        <div class=\"contact__inner-wrapper\">\n            <h3 contenteditable=\"true\" class=\"contact__inner-wrapper__name\">" + contact.contactName + "</h3>\n            <div class=\"contact__inner-wrapper__phone-wrapper\">\n                <p class=\"contact__number\" contenteditable=\"true\">" + contact.phoneNumber + "</p>\n                <i class=\"fa fa-whatsapp fa\" aria-hidden=\"true\"></i>\n            </div>\n        </div>\n        <p class=\"contact__address\">" + contact.address + "</p>\n        <p class=\"contact__email\">" + contact.email + "</p>\n        <i class=\"fas fa-edit fa-lg\" style=\"cursor:pointer;\" onclick=\"handleEdit('" + contact.id + "')\"></i>\n        <i class=\"far fa-trash-alt fa-lg\" style=\"cursor:pointer;\" onclick=\"handleDelete('" + contact.id + "')\"></i>\n        </div>";
            });
            rootDiv.innerHTML = htmlPattern_1;
        }
        catch (error) { }
    };
    //Update method
    Contacts.prototype.update = function (id) {
        try {
            var indexToEdit = this.contacts.findIndex(function (element) { return element.id === id; });
            this.contacts[indexToEdit].contactName;
            console.log(this.contacts[indexToEdit]);
        }
        catch (error) { }
    };
    //Remove method
    Contacts.prototype.remove = function (id) {
        try {
            var indexToRemove = this.contacts.findIndex(function (element) { return element.id === id; });
            this.contacts.splice(indexToRemove, 1);
            this.render();
        }
        catch (error) { }
    };
    //search method
    Contacts.prototype.search = function (params) { };
    return Contacts;
}());
var savedContacts = new Contacts();
//Click the edit button should make the name and phone number contenteditable="true", show it visually
function handleEdit(id) {
    try {
        var handleEdit_1 = function (id) {
            savedContacts.update(id);
        };
    }
    catch (error) { }
}
var handleDelete = function (id) {
    try {
        savedContacts.remove(id);
    }
    catch (error) { }
};
//Adding a contact:
var handleSubmit = function (event) {
    try {
        event.preventDefault();
        var phoneNumber_1 = event.target[0].value;
        var contactName_1 = event.target[1].value;
        var email_1 = event.target[2].value;
        var address_1 = event.target[3].value;
        var onWhatsapp_1 = event.target[4].checked;
        var photo_1 = event.target[5].value;
        var newContact = new Contact(phoneNumber_1, contactName_1, email_1, address_1, onWhatsapp_1, photo_1);
        savedContacts.contacts.push(newContact);
        savedContacts.render();
        event.target.reset();
    }
    catch (error) {
        console.error(error);
    }
};
