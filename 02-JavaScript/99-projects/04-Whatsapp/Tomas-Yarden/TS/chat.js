var messageValue = document.getElementById("text-input");
// interface RespondsInterface {
//   message:string;
// }
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
        // renderBot(){
        //   const respon = String(messageValue.value);
        //   if(respon === 'Hola') {
        // this.arrayChat = this.arrayChat.filter((element) => element.message ===respon)
        // this.renderUser()
        //   }
        // }
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
    // addBot(addBot:Array<Chat|RespondsInterface>){
    // addBot.forEach((element) => {
    //   const res = new Chat(element.message)
    //   this.arrayChat.push(res);
    // });
    // this.renderUser()
    // }
    ChatProfile.prototype.renderUser = function () {
        var getUser = document.querySelector("#chat-box");
        var respon = String(messageValue.value);
        var html = "";
        console.log(this.arrayChat);
        this.arrayChat.forEach(function (element) {
            html += "\n      <p class=\"userText\">\n      <span>" + element.message + "</span>\n      </p>\n     \n     ";
            if (respon.includes("Hola")) {
                html += "\n           <p class=\"botText\">\n            <span>Hola</span>\n             </p>\n             ";
            }
            else if (respon.includes("Como Estas?")) {
                html += "\n               <p class=\"botText\">\n                <span>Bien</span>\n                 </p>\n                 ";
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
