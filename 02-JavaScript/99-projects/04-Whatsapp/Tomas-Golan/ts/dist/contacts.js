// VARIABLES GLOBALES
var allContacts = [];
var allContactsForSearch = [];
// render(chats);
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
        render();
    });
};
addLocalContacts(contacts);
function render() {
    var containerData = document.querySelector(".contacts");
    var html = "";
    var renderContact = JSON.parse(localStorage.getItem("contactos"));
    console.log(renderContact);
    renderContact.forEach(function (element) {
        html += "\n        <div class=\"contacts_chat\">\n            <img class=\"contacts_img\" src=\"" + element.profileImg + "\" alt=\"\">\n            <a href=\"\">\n                <div class=\"contacts_info\">\n                    <h3 class=\"contacts_name\">" + element.name + "</h3>\n                    <p>" + element.phone + "</p>\n                </div>\n            </a>\n            <i onclick='deleteChat(\"" + element.id + "\")' class=\"fas fa-trash fa-lg contacts_icon\"></i>\n        </div>";
    });
    var renderGroup = JSON.parse(localStorage.getItem("groups"));
    console.log(renderGroup);
    if (!renderGroup)
        return;
    renderGroup.forEach(function (element) {
        html += "\n        <div class=\"contacts_chat\">\n            <img class=\"contacts_img\" src=\"" + element.groupIMG + "\" alt=\"\">\n            <a href=\"\">\n                <div class=\"contacts_info\">\n                    <h3 class=\"contacts_name\">" + element.groupName + "</h3>\n                    <p>" + (element.contactsOfGroup + " ") + "</p>\n                </div>\n            </a>\n            <i onclick='deleteGroup(\"" + element.id + "\")' class=\"fas fa-trash fa-lg contacts_icon\"></i>\n        </div>";
    });
    containerData.innerHTML = html;
}
var deleteChat = function (id) {
    var contactsDelete = JSON.parse(localStorage.getItem("contactos"));
    var deleteChats = contactsDelete.filter(function (chat) { return chat.id !== id; });
    allContacts = deleteChats;
    allContactsForSearch = deleteChats;
    localStorage.setItem("contactos", JSON.stringify(allContacts));
    render();
};
var handleContact = function (ev) {
    ev.preventDefault();
    var name = ev.target.elements.nameContact.value;
    var phone = ev.target.elements.phoneContact.value;
    var profileImg = ev.target.elements.imgContact.value;
    var newContacto = new Contact(name, phone, profileImg);
    allContacts.push(newContacto);
    localStorage.setItem("contactos", JSON.stringify(allContacts));
    allContactsForSearch.push(newContacto);
    render();
};
var searchContact = function (searchBar) {
    var regExp = "^" + searchBar;
    var searchTermReg = new RegExp(regExp, 'i');
    allContacts = allContactsForSearch.filter(function (elem) { return searchTermReg.test(elem.name); });
    render();
};
var filters = function (ev) {
    ev.preventDefault();
    var searchBar = ev.target.parentElement.elements.searchBar.value;
    searchContact(searchBar);
};
// EVENTLISTENERS
formSearchBar.addEventListener('keyup', filters);
