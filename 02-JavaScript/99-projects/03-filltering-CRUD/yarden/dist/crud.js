//This is a simple contacts list with possibility to add and remove contacts
//The class for input from user, to add to an array later:
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
//Selecting the relevant elements on the DOM:
var phoneNumber = document.querySelector("#phone-number");
var contactName = document.querySelector("#name");
var email = document.querySelector("#email");
var address = document.querySelector("#address");
var onWhatsapp = document.querySelector("#on-Whatsapp");
var photo = document.querySelector("#photo");
//Contacts class for methods and storage of the instances on an array:
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.contacts = [];
    }
    //Function for rendering an instance to the DOM:
    Contacts.prototype.render = function () {
        try {
            var rootDiv = document.querySelector(".saved-contacts-root");
            var htmlPattern_1 = "";
            this.contacts.forEach(function (contact) {
                htmlPattern_1 += "<div class=\"contact\">\n        <i class=\"fa fa-bars fa-lg\" aria-hidden=\"true\"></i>\n        <img class=\"contact__img\" src=\"" + contact.photo + "\" alt=\"Contact image\">\n        <div class=\"contact__inner-wrapper\">\n            <h3 contenteditable=\"false\" id=\"" + contact.id + "\" class=\"contact__inner-wrapper__name\" onkeyup=\"handleEditName(event)\">" + contact.contactName + "</h3>\n            <div class=\"contact__inner-wrapper__phone-wrapper\">\n                <p class=\"contact__number\">" + contact.phoneNumber + "</p>\n                <i class=\"fa fa-whatsapp fa\" aria-hidden=\"true\"></i>\n            </div>\n        </div>\n        <p class=\"contact__address\">" + contact.address + "</p>\n        <p class=\"contact__email\">" + contact.email + "</p>\n        <i class=\"fas fa-edit fa-lg\" style=\"cursor:pointer;\" onclick=\"handleEdit('" + contact.id + "')\"></i>\n        <i class=\"far fa-trash-alt fa-lg\" style=\"cursor:pointer;\" onclick=\"handleDelete('" + contact.id + "')\"></i>\n        </div>";
            });
            rootDiv.innerHTML = htmlPattern_1;
        }
        catch (error) { } //YS: And? Wheres the error handling? 
    };
    //Update method - did not manage to finish it:
    Contacts.prototype.update = function (id) {
        try {
            var indexToEdit = this.contacts.findIndex(
            /*YS: Ok you were close. Here you had to make the this.contacts[indexToEdit].contactName = something */
            function (element) { return element.id === id; });
            var changeEditable = document.getElementById("" + id);
            changeEditable.setAttribute("contenteditable", "true");
            document.getElementById('contactName').style.border = "1px solid black";
            console.log(changeEditable);
            this.contacts[indexToEdit].contactName = changeEditable.textContent;
            console.log(this.contacts[indexToEdit]);
            this.render();
        }
        catch (error) { }
    };
    //Remove method that works with handle-delete function:
    Contacts.prototype.remove = function (id) {
        try {
            var indexToRemove = this.contacts.findIndex(function (element) { return element.id === id; });
            this.contacts.splice(indexToRemove, 1);
            /*YS: Notice that with splice you are changing the original array
            while with other methods like filter you create a new array. Always be aware of what the method returns
            and if it modifies the original array or not.*/
            this.render();
        }
        catch (error) { } //YS: Error handling? You cant just leave it empty. At least console.log(error)
    };
    //search method - had to skip it! Did not have time ):
    Contacts.prototype.search = function (params) { };
    return Contacts;
}());
//The array instance of Contacts class for this page:
var savedContacts = new Contacts();
//Clicking on the edit button -should have- made the name and phone number contenteditable="true"; and show it visually for editing; could not finish this on time
function handleEdit(id) {
    try {
        savedContacts.update(id);
    }
    catch (error) { } //YS: Error handling
}
var handleDelete = function (id) {
    try {
        savedContacts.remove(id);
    }
    catch (error) { } //YS: Error handling
};
//Adding a contact after form submission:
var handleSubmit = function (event) {
    try {
        event.preventDefault();
        var phoneNumber_1 = event.target[0].value; //YS: ev.target.elements.phone-number.value;
        var contactName_1 = event.target[1].value; //YS: ev.target.elements.name.value;
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
        console.error(error); //YS: Mazal Tov!!!  
    }
};
function handleEditName(ev) {
    //get the id
    console.log(ev);
    var id = ev.target.id;
    var name = ev.target.innerText;
    console.log(id, name);
    //get the new name
}
