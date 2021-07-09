// VARIABLES GLOBALES
var allContacts = [];
var allContactsForSearch = [];
// QUERIES
var searchBar = document.getElementById("searchbar");
var formSearchBar = document.querySelector("#form_searchBar");
var Contact = /** @class */ (function () {
    function Contact(name, phone, profileImg) {
        this.name = name;
        this.phone = phone;
        this.profileImg = profileImg;
        this.id = Math.random().toString(16).slice(2);
    }
    return Contact;
}());
// FUNCTIONS
var addLocalContacts = function (localChat) {
    localChat.forEach(function (contact) {
        var add = new Contact(contact.name, contact.phone, contact.profileImg);
        allContacts.push(add);
        allContactsForSearch.push(add);
        localStorage.setItem("contactos", JSON.stringify(allContacts));
        render(allContacts);
    });
};
addLocalContacts(contacts);
function render(arr) {
    try {
        var containerData = document.querySelector(".contacts");
        var html_1 = "";
        arr.forEach(function (element) {
            html_1 += "\n        <div class=\"contacts_chat\">\n            <img class=\"contacts_img\" src=\"" + element.profileImg + "\" alt=\"\">\n            <a href=\"chat.html\" onclick='idContactForChat(\"" + element.id + "\")'>\n                <div class=\"contacts_info\">\n                    <h3 class=\"contacts_name\">" + element.name + "</h3>\n                    <p>" + element.phone + "</p>\n                </div>\n            </a>\n            <i onclick='deleteChat(\"" + element.id + "\")' class=\"fas fa-trash fa-lg contacts_icon\"></i>\n        </div>";
        });
        var renderGroup = JSON.parse(localStorage.getItem("groups"));
        if (!renderGroup)
            return;
        renderGroup.forEach(function (element) {
            html_1 += "\n        <div class=\"contacts_chat\">\n            <img class=\"contacts_img\" src=\"" + element.groupIMG + "\" alt=\"\">\n            <a href=\"chat.html\" onclick='idGroupForChat(\"" + element.id + "\")'>\n                <div class=\"contacts_info\">\n                    <h3 class=\"contacts_name\">" + element.groupName + "</h3>\n                    <p>" + (element.contactsOfGroup + " ") + "</p>\n                </div>\n            </a>\n            <i onclick='deleteGroup(\"" + element.id + "\")' class=\"fas fa-trash fa-lg contacts_icon\"></i>\n        </div>";
        });
        containerData.innerHTML = html_1;
    }
    catch (e) {
        console.error(e);
    }
}
var deleteChat = function (id) {
    try {
        var getContact = JSON.parse(localStorage.getItem("contactos"));
        var deleteChats = getContact.filter(function (chat) { return chat.id !== id; });
        allContacts = deleteChats;
        allContactsForSearch = deleteChats;
        localStorage.setItem("contactos", JSON.stringify(allContacts));
        render(allContacts);
    }
    catch (e) {
        console.error(e);
    }
};
var handleContact = function (ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.nameContact.value;
        var phone = ev.target.elements.phoneContact.value;
        var profileImg = ev.target.elements.imgContact.value;
        var newContacto = new Contact(name, phone, profileImg);
        allContacts.push(newContacto);
        localStorage.setItem("contactos", JSON.stringify(allContacts));
        render(allContacts);
        allContactsForSearch.push(newContacto);
    }
    catch (e) {
        console.error(e);
    }
};
var searchContact = function (searchBar) {
    try {
        var regExp = "^" + searchBar;
        var searchTermReg_1 = new RegExp(regExp, 'i');
        allContacts = allContactsForSearch.filter(function (elem) { return searchTermReg_1.test(elem.name); });
        localStorage.setItem("contactos", JSON.stringify(allContacts));
        render(allContacts);
    }
    catch (e) {
        console.error(e);
    }
};
var filters = function (ev) {
    try {
        ev.preventDefault();
        var searchBar_1 = ev.target.parentElement.elements.searchBar.value;
        searchContact(searchBar_1);
    }
    catch (e) {
        console.error(e);
    }
};
// EVENTLISTENERS
formSearchBar.addEventListener('keyup', filters);
