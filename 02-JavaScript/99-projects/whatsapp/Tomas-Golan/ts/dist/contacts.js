// VARIABLES GLOBALES
var allContacts = [];
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
        renderData();
    });
};
addLocalContacts(chats);
function renderData() {
    var containerData = document.querySelector(".contacts");
    var html = "";
    var render = JSON.parse(localStorage.getItem("contactos"));
    render.forEach(function (element) {
        html += "\n        <div class=\"contacts_chat\">\n            <img class=\"contacts_img\" src=\"" + element.profileImg + "\" alt=\"\">\n            <a href=\"\">\n                <div class=\"contacts_info\">\n                    <h3 class=\"contacts_name\">" + element.name + "</h3>\n                    <p>" + element.phone + "</p>\n                </div>\n            </a>\n            <i onclick='deleteChat(\"" + element.id + "\")' class=\"fas fa-trash fa-lg contacts_icon\"></i>\n        </div>";
    });
    containerData.innerHTML = html;
}
renderData();
var deleteChat = function (id) {
    var contactsDelete = JSON.parse(localStorage.getItem("contactos"));
    var deleteChats = contactsDelete.filter(function (chat) { return chat.id !== id; });
    allContacts = deleteChats;
    localStorage.setItem("contactos", JSON.stringify(allContacts));
    renderData();
};
var handleContact = function (ev) {
    ev.preventDefault();
    var name = ev.target.elements.nameContact.value;
    var phone = ev.target.elements.phoneContact.value;
    var profileImg = ev.target.elements.imgContact.value;
    var newContacto = new Contact(name, phone, profileImg);
    allContacts.unshift(newContacto);
    localStorage.setItem("contactos", JSON.stringify(allContacts));
    renderData();
};
