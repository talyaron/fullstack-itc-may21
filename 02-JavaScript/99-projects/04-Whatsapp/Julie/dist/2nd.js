var savedContacts = JSON.parse(localStorage.getItem("contactsData"));
var getID = localStorage.getItem("contactID");
var userFilter = savedContacts.filter(function (el) { return el.contactId === getID; });
var conversation = (document.querySelector(".envelope__typing--input-entry"));
var envelope__contact = document.querySelector('.renderFirst');
function renderChats() {
    var html = "";
    userFilter.forEach(function (element) {
        html += "<div class=\"renderSecond\">\n                \n                 <img src=\"" + element.image + "\" alt=\"\" class=\"chat1__photo\">              \n                 <h4 class=\"chat1__name\">" + element.contactName + "</h4>\n\n                    \n              </div> ";
    });
    try {
        envelope__contact.innerHTML = html;
        if (!html)
            throw new Error('An error occurs when you want to render..');
    }
    catch (error) {
        console.error(error);
    }
}
var currentUrl = window.location.href;
var idIndex = currentUrl.indexOf("id=");
var id = currentUrl.slice(idIndex + 3);
renderChats();
// Understand this bit
var currentUser = savedContacts.find(function (contact) { return contact.contactId === id; });
var chatContainer = document.querySelector(".envelope__chat");
var send = document.querySelector("#send");
var input = document.querySelector(".envelope__typing--input-entry");
send.addEventListener("click", sendMessage);
//press enter and send a msg
input.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        sendMessage();
    }
});
function sendMessage() {
    var messagesArray = [];
    var message = conversation.value;
    messagesArray.push(message);
    messagesArray.forEach(function (msg) {
        var messageElement = "<div>" + msg + "</div> ";
        chatContainer.insertAdjacentHTML("beforeend", messageElement);
    });
    conversation.value = ""; //serves for refresh and delete what you typed before in the input bar
}
function redirect2() {
    try {
        window.location.href = 'first.html';
        if (!window.location.href)
            throw new Error('The page where you want to redirect it doesn´t exist!');
    }
    catch (error) {
        console.error(error);
    }
}
function abrir() {
    var file = document.getElementById("file").click();
}
var input2 = document.querySelector('input[type="file"]');
input2.addEventListener('change', function (e) {
    console.log(input.files);
}, false);
// class Message {
//   content: string;
//   msgID: string;
//   constructor(content: string, phone: number) {
//     this.content = content;
//     this.msgID = "id" + Math.random().toString(16).slice(2);
//   }
// }
// class MessageList {
//   messageList: Array<Message> = [];
//   addMessage(message: Message) {
//     this.messageList.push(message);
// this.renderChat();
// }
// renderChat() {
//   let html: string = "";
//   this.messageList.forEach((message) => {
//     html +=
//   });
//   containerChat.innerHTML = html;
// }
// }
/*const messageList = new MessageList();

// btnMessage.addEventListener("click", sendMessage);

function sendConversation() {
  const inputMessage = conversation.value;

  const message = new Message(inputMessage, "1234");

  messageList.addMessage(message);

  conversation.value = "";
}*/
