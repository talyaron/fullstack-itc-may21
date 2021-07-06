var savedContacts = JSON.parse(localStorage.getItem("contactsData"));
console.log(savedContacts);
var conversation = (document.querySelector(".envelope__typing--input-entry"));
console.log(window.location.href);
var currentUrl = window.location.href;
var idIndex = currentUrl.indexOf("id=");
var id = currentUrl.slice(idIndex + 3);
// Understand this bit
var currentUser = savedContacts.find(function (contact) { return contact.contactId === id; });
var chatContainer = document.querySelector(".envelope__chat");
var send = document.querySelector("#send");
send.addEventListener("click", sendMessage);
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
console.log(conversation);
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
var messageList = new MessageList();
// btnMessage.addEventListener("click", sendMessage);
function sendConversation() {
    var inputMessage = conversation.value;
    var message = new Message(inputMessage, "1234");
    messageList.addMessage(message);
    conversation.value = "";
}
function redirect2() {
    try {
        window.location.href = 'index.html';
        if (!window.location.href)
            throw new Error('The page where you want to redirect it doesn´t exist!');
    }
    catch (error) {
        console.error(error);
    }
}
