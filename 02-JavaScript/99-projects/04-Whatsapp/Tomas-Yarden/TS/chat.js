// Create a Whatsapp application with two pages.
// 1st page: the chatGroups
// 2nd page: chat
// use classes, destructors, spread, typescript
// use BEM model
// make it look as similar as you can to the real Whatsapp
// Work in a group.
// start with the design of the classes, BEM
//Global Variables
var messageValue = document.getElementById("text-input");
var Chat = /** @class */ (function () {
    function Chat(message) {
        this.message = message;
        this.id = Math.random().toString(16).slice(2);
    }
    return Chat;
}());
// class Bot{
//   messageBot:string;
//   constructor(messageBot:string) {
//     this.messageBot = messageBot;
//   }
// }
var ChatProfile = /** @class */ (function () {
    function ChatProfile() {
        this.arrayChat = [];
    }
    // arrayBot:Array<Bot> =[];
    ChatProfile.prototype.add = function (add) {
        var currentLocal = JSON.parse(localStorage.getItem("chat"));
        currentLocal.push(add);
        this.arrayChat.push(add);
        localStorage.setItem("chat", JSON.stringify(currentLocal));
        this.renderUser();
        // this.respondBot();
    };
    // addBot(addBot:Array<Chat|RespondsInterface>){
    // addBot.forEach((element) => {
    //   const res = new Chat(element.message)
    //   this.arrayChat.push(res);
    // });
    // this.renderUser()
    // }
    ChatProfile.prototype.deleteText = function (id) {
        this.arrayChat = this.arrayChat.filter(function (element) { return element.id !== id; });
        this.renderUser();
    };
    ChatProfile.prototype.renderUser = function (arr) {
        var getLocal = JSON.parse(localStorage.getItem("chat"));
        // const arrayRender = arr ? arr : getLocal;
        var getUser = document.querySelector("#chat-box");
        // const respon = String(messageValue.value);
        var html = "";
        console.log(this.arrayChat);
        getLocal.forEach(function (element) {
            console.log(element.message);
            html += "\n      <p class=\"userText\" onclick='HanldeDelete(\"" + element.id + "\")'>\n      <span >" + element.message + "<i class=\"fas fa-chevron-down  arrow-down\" ></i></span>\n      </p>\n     \n     ";
            if (element.message.includes("Hi")) {
                html += "\n           <p class=\"botText\">\n            <span>Hello<i class=\"fas fa-chevron-down  arrow-down\"></i></span>\n             </p>\n             ";
            }
            else if (element.message.includes("How are you?")) {
                html += "\n                 <p class=\"botText\">\n                  <span>Preatty good <i class=\"fas fa-chevron-down arrow-down \"></i></span>\n                   </p>\n                   ";
            }
            else if (element.message.includes("Hello there")) {
                html += "\n                 <p class=\"botText\">\n                  <span>General Kenobi! <i class=\"fas fa-chevron-down arrow-down \"></i></span>\n                   </p>\n                   ";
            }
            else if (element.message.includes("How old are you?")) {
                html += "\n                 <p class=\"botText\">\n                  <span>I'm 20 <i class=\"fas fa-chevron-down arrow-down \"></i></span>\n                   </p>\n                   ";
            }
        });
        setTimeout(function () {
            getUser.innerHTML = html;
        }, 1000);
    };
    return ChatProfile;
}());
var chatProfile = new ChatProfile();
window.onload = function () {
    var saveLocal = JSON.parse(localStorage.getItem("chat"));
    console.log(saveLocal);
    // localStorage.setItem("chat", JSON.stringify(chatProfile.arrayChat));
    console.log(saveLocal.length);
    saveLocal.length > 0 ? chatProfile.renderUser() : null;
};
var sendBtn = function (event) {
    event.preventDefault();
    var message = event.target.elements.message.value;
    var generate = new Chat(message);
    console.log(generate);
    chatProfile.add(generate);
    event.target.reset();
};
var HanldeDelete = function (id) {
    chatProfile.deleteText(id);
};
