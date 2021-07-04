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
        // respondBot() {
        //   const respon = String(messageValue.value);
        //   // const arrLength = this.arrayChat.length
        //   const getBot: HTMLElement = document.querySelector(".botText");
        //   let htmlBot = "";
        //   this.arrayChat.forEach(() => {
        //     if (respon.includes("Hola")) {
        //       htmlBot += `
        //       <div class="botText">
        //       <span>Hola</span>
        //       </div>
        //       `;
        //     }
        //   });
        //   setTimeout(() => {
        //     getBot.innerHTML = htmlBot;
        //   }, 1000);
        // }
    }
    // arrayBot:Array<Bot> =[];
    ChatProfile.prototype.add = function (add) {
        this.arrayChat.push(add);
        this.renderUser();
        // this.respondBot();
    };
    ChatProfile.prototype.renderUser = function () {
        var getUser = document.querySelector("#chat-box");
        var respon = String(messageValue.value);
        var html = "";
        console.log(this.arrayChat);
        this.arrayChat.forEach(function (element) {
            html += "\n      <p class=\"userText\">\n      <span>" + element.message + "</span>\n      </p>\n     \n     ";
            if (respon.includes("Hola")) {
                return html += "\n           <p class=\"botText\">\n            <span>Hola</span>\n             </p>\n             ";
            }
            else if (respon.includes("pepe")) {
                html += "\n               <p class=\"botText\">\n                <span>pepe</span>\n                 </p>\n                 ";
            }
        });
        setTimeout(function () {
            getUser.innerHTML = html;
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
