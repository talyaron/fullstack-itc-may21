/*This is the main WhatsApp page,
with modals and the option to add contact*/
//Top modal:
var openMenuModal = function (event) {
    try {
        var topModal = document.querySelector('.top-modal');
        topModal.style.display = "block";
    }
    catch (error) {
        console.error(error);
    }
};
var closeMenuModal = function (event) {
    try {
        var body = document.getElementsByName('body');
        var topModal = document.querySelector('.top-modal');
        topModal.style.display = "none";
    }
    catch (error) {
        console.error(error);
    }
};
//Add contact modal form:
var openBottomModal = function (event) {
    try {
        var bottomModal = document.querySelector('.add-contact');
        bottomModal.style.display = "flex";
    }
    catch (error) {
        console.error(error);
    }
};
var Contact = /** @class */ (function () {
    function Contact(image, name, message, time) {
        this.image = image;
        this.name = name;
        this.message = message;
        this.id = Math.random().toString(16).slice(2);
        this.time = time;
    }
    return Contact;
}());
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.contacts = [];
    }
    //Adding a new contact
    Contacts.prototype.render = function () {
        try {
            var rootDiv = document.querySelector(".saved-contacts-root");
            var htmlPattern_1 = "";
            this.contacts.forEach(function (contact) {
                htmlPattern_1 += "<div class=\"contact-container\">\n        <img class=\"contact-container__contact-image\" onclick=\"showEditNav(event)\" src=\"" + contact.image + "\">\n        <div class=\"contact-container__info-container\" onclick=\"goToChat(event)\">\n             <div class=\"contact-container__info-container__inner-container\">\n                 <div class=\"contact-name\">" + contact.name + "</div>\n                 <div class=\"time\">" + contact.time + "</div>\n             </div>\n             <p class=\"last-message\"><span class=\"tick\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\" id=\"msg-dblcheck-ack\" x=\"2063\" y=\"2076\"><path d=\"M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z\" fill=\"#4fc3f7\"/></svg></span>" + contact.message + "</p>\n         </div>\n        </div>\n    </div>";
            });
            rootDiv.innerHTML = htmlPattern_1;
        }
        catch (error) {
            console.error(error);
        }
    };
    Contacts.prototype.remove = function (id) {
        try {
            var indexToRemove = this.contacts.findIndex(function (element) { return element.id === id; });
            this.contacts.splice(indexToRemove, 1);
            this.render();
            returnToMainNav(id); //Update local storage:
            var contactSerialized = JSON.stringify(whatsAppContacts);
            localStorage.setItem("whatsAppContacts", contactSerialized);
            var contactDeserialized = JSON.parse(localStorage.getItem("whatsAppContacts"));
        }
        catch (error) {
            console.error(error);
        }
    };
    return Contacts;
}());
var whatsAppContacts = new Contacts();
//Adding a new contact:
var handleSubmit = function (event) {
    try {
        if (whatsAppContacts === null) {
            throw new Error("Must have the contacts array!");
        }
        event.preventDefault();
        var img = event.target[0].value;
        var name = event.target[1].value;
        var message = event.target[2].value;
        var time = event.target[3].value;
        var newContact = new Contact(img, name, message, time);
        whatsAppContacts.contacts.push(newContact);
        //Update local storage:
        var contactSerialized = JSON.stringify(whatsAppContacts);
        localStorage.setItem("whatsAppContacts", contactSerialized);
        var contactDeserialized = JSON.parse(localStorage.getItem("whatsAppContacts"));
        //Refresh contacts list
        whatsAppContacts.render();
        event.target.reset(); //Now just close the modal:
        var bottomModal = document.querySelector('.add-contact');
        bottomModal.style.display = "none";
    }
    catch (error) {
        console.error(error);
    }
};
//Alternate between the main and edit navbars:
var showEditNav = function (event) {
    try {
        var menu = document.querySelector("nav");
        menu.hidden = true;
        var editMenu = document.querySelector("#editNav");
        editMenu.attributes[1].value = "display: block";
    }
    catch (error) {
        console.error(error);
    }
};
//Close bottom modal after adding contact:
var returnToMainNav = function (event) {
    try {
        var editMenu = document.querySelector("#editNav");
        editMenu.attributes[1].value = "display: none";
        var menu = document.querySelector("nav");
        menu.hidden = false;
    }
    catch (error) {
        console.error(error);
    }
};
//Delete contact onclick:
var handleDelete = function (id) {
    try {
        if (whatsAppContacts === null) {
            throw new Error("Must have the contacts array!");
        }
        whatsAppContacts.remove(id);
    }
    catch (error) {
        console.error(error);
    }
};
var goToChat = function (event) {
    window.location.href = "/02-JavaScript/99-projects/04-Whatsapp/Tomas-Yarden/index.html";
};
