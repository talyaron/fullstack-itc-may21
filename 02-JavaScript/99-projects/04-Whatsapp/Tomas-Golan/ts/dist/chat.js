var getContactSelected = [];
//method to add individual msg
var Mensaje = /** @class */ (function () {
    function Mensaje(text) {
        this.textId = "id" + Math.random().toString(16).slice(2);
        this.text = text;
    }
    return Mensaje;
}());
//class to provide an array of all texts to local storage
var TodosLosMensajes = /** @class */ (function () {
    function TodosLosMensajes() {
        this.msgs = JSON.parse(localStorage.getItem('TodosLosMensajes')) ? JSON.parse(localStorage.getItem('TodosLosMensajes')) : [];
    }
    //method to push new msg to the array
    TodosLosMensajes.prototype.addNewMsg = function (msg) {
        this.msgs.push(msg);
        localStorage.setItem("TodosLosMensajes", JSON.stringify(this.msgs));
    };
    return TodosLosMensajes;
}());
var allOfMsgs = new TodosLosMensajes();
//function for collecting text input 
//options: maybe try arrow function later + make it work by icon click
function handleSubmit(ev) {
    try {
        ev.preventDefault();
        var text = ev.target.elements.text.value;
        var msg = new Mensaje(text);
        allOfMsgs.addNewMsg(msg);
        window.location.reload();
    }
    catch (e) {
        console.error(e);
    }
}
// render on DOM
function renderOnDOM() {
    try {
        var data_1 = document.querySelector(".data");
        allOfMsgs.msgs.forEach(function (msg) {
            data_1.insertAdjacentHTML('beforeend', "<div class=\"allmsgs chat_wrapper--user1\"><p>" + msg.text + "</p></div>");
        });
        var contactForChat = JSON.parse(localStorage.getItem("contactForChat"));
        var groupForChat = JSON.parse(localStorage.getItem("groupForChat"));
        console.log(contactForChat);
        var headerContact = document.querySelector(".header_chat");
        if (contactForChat && !groupForChat) {
            headerContact.insertAdjacentHTML('afterbegin', "<div class=\"info_chat\"><img class=\"header_img_profile\"\n      src=\"" + contactForChat.profileImg + "\"\n      alt=\"\"><h1 class=\"title_chat\">" + contactForChat.name + "</h1><a href=\"index.html\"><i class=\"far fa-arrow-alt-circle-left fa-4x arrow_icon\"></i></a></div>");
        }
        if (groupForChat && !contactForChat) {
            headerContact.insertAdjacentHTML('afterbegin', "<div class=\"info_chat\"><img class=\"header_img_profile\"\n      src=\"" + groupForChat.groupIMG + "\"\n      alt=\"\"><h1 class=\"title_chat\">" + groupForChat.groupName + "</h1><a href=\"index.html\"><i class=\"far fa-arrow-alt-circle-left fa-4x arrow_icon\"></i></a></div>");
        }
    }
    catch (e) {
        console.error(e);
    }
}
renderOnDOM();
function idContactForChat(id) {
    try {
        var getContactChat = JSON.parse(localStorage.getItem("contactos"));
        var idContact = getContactChat.find(function (contact) { return contact.id === id; });
        localStorage.setItem("contactForChat", JSON.stringify(idContact));
    }
    catch (e) {
        console.error(e);
    }
}
function idGroupForChat(id) {
    try {
        var getGroupChat = JSON.parse(localStorage.getItem("grups"));
        var idGroup = getGroupChat.find(function (group) { return group.id === id; });
        localStorage.setItem("groupForChat", JSON.stringify(idGroup));
    }
    catch (e) {
        console.error(e);
    }
}
