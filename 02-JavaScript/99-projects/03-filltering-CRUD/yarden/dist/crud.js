//I am creating a simple contact form with Responsive SCSS
var Contact = /** @class */ (function () {
    function Contact(phoneNumber, contactName, email, address, onWhatsapp, photo) {
        this.phoneNumber = phoneNumber;
        this.contactName = contactName;
        this.email = email;
        this.address = address;
        this.onWhatsapp = onWhatsapp;
        this.photo = photo;
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
            var rootDiv_1 = document.querySelector(".saved-contacts-root");
            var htmlPattern_1 = '';
            this.contacts.forEach(function (contact) {
                htmlPattern_1 += "<div class=\"contact\">\n        <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n        <img class=\"contact__img\" src=\"" + contact.photo + "\" alt=\"Contact image\">\n        <div class=\"contact__inner-wrapper\">\n            <h3 class=\"contact__inner-wrapper__name\">" + contact.contactName + "</h3>\n            <div class=\"contact__inner-wrapper__phone-wrapper\">\n                <p class=\"contact__number\">" + contact.phoneNumber + "</p>\n                <i class=\"fa fa-whatsapp fa\" aria-hidden=\"true\"></i>\n            </div>\n        </div>\n        <p class=\"contact__address\">" + contact.address + "</p>\n        <p class=\"contact__email\">" + contact.email + "</p>\n        <i class=\"fas fa-edit\"></i>\n        <i class=\"far fa-trash-alt\"></i>\n        </div>";
                rootDiv_1.innerHTML = htmlPattern_1;
            });
        }
        catch (error) { }
    };
    //Update method
    Contacts.prototype.update = function (params) { };
    //Remove method
    Contacts.prototype.remove = function (params) { };
    //search method
    Contacts.prototype.search = function (params) { };
    return Contacts;
}());
var savedContacts = new Contacts();
//Adding a contact:
var handleSubmit = function (event) {
    try {
        event.preventDefault();
        console.dir(event.target);
        var phoneNumber_1 = event.target[0].value;
        var contactName_1 = event.target[1].value;
        var email_1 = event.target[2].value;
        var address_1 = event.target[3].value;
        var onWhatsapp_1 = event.target[4].checked;
        var photo_1 = event.target[5].value;
        var newContact = new Contact(phoneNumber_1, contactName_1, email_1, address_1, onWhatsapp_1, photo_1);
        savedContacts.contacts.push(newContact);
        savedContacts.render();
        console.log();
        //Add contact to the contacts array:
        // contacts.push(new Contact(phoneNumber, contactName, email, address, onWhatsapp, photo));
        // event.target.reset()
    }
    catch (error) {
        console.error(error);
    }
};
