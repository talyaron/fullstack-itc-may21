var messageValue = document.getElementById("text-input");
var Chat = /** @class */ (function () {
    function Chat(message) {
        this.message = message;
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
        this.arrayChat.push(add);
        this.renderUser();
        this.respondBot();
    };
    ChatProfile.prototype.renderUser = function () {
        var getUser = document.querySelector(".userText");
        var html = "";
        console.log(this.arrayChat);
        this.arrayChat.forEach(function (element) {
            html += "\n      <div class=\"userText\">\n      <span>" + element.message + "</span>\n      </div>\n     \n     ";
        });
        getUser.innerHTML = html;
    };
    ChatProfile.prototype.respondBot = function () {
        var respon = String(messageValue.value);
        var getBot = document.querySelector(".botText");
        var htmlBot = "";
        this.arrayChat.forEach(function () {
            if (respon === "Hola") {
                htmlBot += "\n        <div class=\"botText\">\n        <span>Hola</span>\n        </div>\n        ";
            }
        });
        setTimeout(function () {
            getBot.innerHTML = htmlBot;
        }, 1000);
    };
    return ChatProfile;
}());
var chatProfile = new ChatProfile();
var sendBtn = function (event) {
    event.preventDefault();
    var message = event.target.elements.message.value;
    var generate = new Chat(message);
    console.log(generate);
    chatProfile.add(generate);
    event.target.reset();
};
