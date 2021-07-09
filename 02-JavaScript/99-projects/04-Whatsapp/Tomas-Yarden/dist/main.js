/*This is the main WhatsApp page.
Features:
Top modal to simulate the WhatsApp menu;
search area (for now, unfunctional) navbar;
bottom modal for adding contacts with form;
when clicking the image, the 2nd navbar pops up (cloned from WhatsApp) with the option to delete;
when clicking the info section of a message, user is redirected to the chat page
*/
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
var ContactList = /** @class */ (function () {
    function ContactList() {
        this.contacts = [];
    }
    //Adding a new contact
    ContactList.prototype.render = function () {
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
    //Removing a contact - works :)
    ContactList.prototype.remove = function (id) {
        try {
            var indexToRemove = this.contacts.findIndex(function (element) { return element.id === id; });
            this.contacts.splice(indexToRemove, 1);
            this.render();
            returnToMainNav(id); //Update local storage:
            var contactSerialized = JSON.stringify(whatsAppContacts);
            localStorage.setItem("whatsAppContacts", contactSerialized);
            var contactDeserialized = JSON.parse(localStorage.getItem("whatsAppContacts")); //YS: This is not being used.
        }
        catch (error) {
            console.error(error);
        }
    };
    //Editing a contact - does not work ):
    ContactList.prototype.edit = function (id) {
        try {
            var indexToEdit = this.contacts.findIndex(
            //YS: Use find
            function (element) { return element.id === id; });
            console.log(indexToEdit);
            this.render();
            returnToMainNav(id);
            var contactSerialized = JSON.stringify(whatsAppContacts);
            localStorage.setItem("whatsAppContacts", contactSerialized);
            var contactDeserialized = JSON.parse(localStorage.getItem("whatsAppContacts"));
        }
        catch (error) {
            console.error(error);
        }
    };
    return ContactList;
}());
var whatsAppContacts = new ContactList();
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
        whatsAppContacts.contacts.push(newContact); //YS: Why dont you have an addContact method in your ContactList?
        //Update local storage:
        var contactSerialized = JSON.stringify(whatsAppContacts);
        localStorage.setItem("whatsAppContacts", contactSerialized);
        var contactDeserialized = JSON.parse(localStorage.getItem("whatsAppContacts")); //YS: This is not being used
        //Refresh contacts list
        whatsAppContacts.render();
        event.target.reset(); //Now just close the modal:
        var bottomModal = document.querySelector(".add-contact");
        bottomModal.style.display = "none";
    }
    catch (error) {
        console.error(error);
    }
};
//Delete contact onclick:
var handleDelete = function (id) {
    try {
        if (whatsAppContacts === null) {
            //YS: if (!whatsAppContacts)
            throw new Error("Must have the contacts array!");
        }
        whatsAppContacts.remove(id);
    }
    catch (error) {
        console.error(error);
    }
};
var handleEdit = function (id) {
    try {
        if (whatsAppContacts === null) {
            throw new Error("Must have the contacts array!");
        }
        whatsAppContacts.edit(id);
    }
    catch (error) {
        console.error(error);
    }
};
/* Modal and helper functions */
//Top modal:
var openMenuModal = function (event) {
    //YS: You are not using the event, you dont need it
    try {
        var topModal = document.querySelector(".top-modal");
        topModal.style.display = "block";
    }
    catch (error) {
        console.error(error);
    }
};
var closeMenuModal = function (event) {
    //YS: You are not using the event, you dont need it
    try {
        var body = document.getElementsByName("body"); //YS: not being used
        var topModal = document.querySelector(".top-modal");
        topModal.style.display = "none";
    }
    catch (error) {
        console.error(error);
    }
};
//Add contact modal form:
var openBottomModal = function (event) {
    //YS: You are not using the event, you dont need it
    try {
        var bottomModal = document.querySelector(".add-contact");
        bottomModal.style.display = "flex";
    }
    catch (error) {
        console.error(error);
    }
};
var openSearch = function (event) {
    try {
        var menu = document.querySelector("nav");
        menu.hidden = true;
        var searchMenu = document.querySelector("#search-nav");
        searchMenu.attributes[1].value = "display: flex";
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
        editMenu.attributes[1].value = "display: block"; //YS: You can also do: editMenu.getAttribute('style')
    }
    catch (error) {
        console.error(error);
    }
};
//Close bottom modal after adding contact:
var returnToMainNav = function (event) {
    //YS: Good, no event needed
    try {
        var searchMenu = document.querySelector("#search-nav");
        var editMenu = document.querySelector("#editNav");
        searchMenu.attributes[1].value = "display: none";
        editMenu.attributes[1].value = "display: none";
        var menu = document.querySelector("nav");
        menu.hidden = false;
    }
    catch (error) {
        console.error(error);
    }
};
//Redirection to the chat when clicking the info section of a contact:
var goToChat = function (event) {
    try {
        window.location.href = "./index.html"; //YS: This is not taking you to the contacts chat, its always taking you to the same place. Should be: "./index.html?id=${contactId}"
    }
    catch (error) {
        console.error(error);
    }
};
