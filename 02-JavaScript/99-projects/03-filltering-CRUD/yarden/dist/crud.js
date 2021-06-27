//I am creating a simple contact form with Responsive SCSS
var Contact = /** @class */ (function () {
    function Contact(phoneNumber, name, email, address, onWhatsapp, photo) {
        this.phoneNumber = phoneNumber;
        this.name = name;
        this.email = email;
        this.address = address;
        this.onWhatsapp = onWhatsapp;
        this.photo = photo;
    }
    return Contact;
}());
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.contacts = [];
    }
    Contacts.prototype.create = function (params) {
    };
    Contacts.prototype.update = function (params) {
    };
    Contacts.prototype.remove = function (params) {
    };
    return Contacts;
}());
