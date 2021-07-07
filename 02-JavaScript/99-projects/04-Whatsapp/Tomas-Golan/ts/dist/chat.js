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
    ev.preventDefault();
    var text = ev.target.elements.text.value;
    var msg = new Mensaje(text);
    allOfMsgs.addNewMsg(msg);
    window.location.reload();
}
// render on DOM
function renderOnDOM() {
    var data = document.querySelector(".data");
    allOfMsgs.msgs.forEach(function (msg) {
        data.insertAdjacentHTML('beforeend', "<div class=\"allmsgs chat_wrapper--user1\"><p>" + msg.text + "</p></div>");
    });
    var contactForChat = JSON.parse(localStorage.getItem("contactForChat"));
    console.log(contactForChat);
    // const titleContact = document.querySelector(".title_contact");
    var headerContact = document.querySelector(".header_profile");
    headerContact.insertAdjacentHTML('beforeend', "<div class=\"headrestyle\"><img style=\"width: 6.5rem; height: 6rem; position: relative; left: 3rem;\" class=\"header_img_profile\"\n    src=\"" + contactForChat.profileImg + "\"\n    alt=\"\"><h1>" + contactForChat.name + "</h1></div>");
    // imgContact.insertAdjacentHTML('beforeend',`<img class="header_img_profile"
    // src="${contactForChat.profileImg}"
    // alt="">`);
}
// function showPersonaOnDOM() {
//     const allPpl = JSON.parse(localStorage.getItem('contactos'));
//     // const lastPersonaIndex = allPpl.length - 1;
//     const lastPersona = allPpl[personClicked];
//     const data = document.querySelector(".data");
//     data.insertAdjacentHTML('beforeend',`<div class="allmsgs chat_wrapper--user1"><p>${msg.text}</p></div>`);
// }
renderOnDOM();
// showPersonaOnDOM();
function idContactForChat(id) {
    var getContactChat = JSON.parse(localStorage.getItem("contactos"));
    var idContact = getContactChat.find(function (contact) { return contact.id === id; });
    // renderContactInChat(getContactSelected);
    console.log(idContact);
    console.log(idContact.name);
    localStorage.setItem("contactForChat", JSON.stringify(idContact));
}
// function renderContactInChat() {
//     // const containerChat: HTMLElement = document.querySelector(".header_profile");
//     let contactForChat = JSON.parse(localStorage.getItem("contactForChat"));
//     console.log(contactForChat);
//     // containerChat.appendChild(div)
//     // let htmlChat= "";
//     //     htmlChat += `
//     //     <img class="header_img_profile"
//     //     src="${contactForChat.profileImg}"
//     //     alt="">
//     //   <h1>${contactForChat.name}</h1>
//     //   <div class="header_icon">
//     //     <a class="btn_icons" href=""><i
//     //         class="fa fa-search fa fa-2x search_icon"></i></a>
//     //     <a class="btn_icons" href=""><i class="fas fa-ellipsis-v fa-2x"></i></a>
//     //   </div>`
//       const titleContact = document.querySelector(".title_contact");
//       const imgContact = document.querySelector(".header_profile");
//       titleContact.insertAdjacentHTML('beforeend',`<h1>${contactForChat.name}</h1>`);
//       imgContact.insertAdjacentHTML('beforeend',`<img class="header_img_profile"
//       src="${contactForChat.profileImg}"
//       alt="">`);
//       console.log(contactForChat.name)
//     //   containerChat.innerHTML = htmlChat;
// }
