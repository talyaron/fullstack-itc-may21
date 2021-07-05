const savedContacts = JSON.parse(localStorage.getItem("contactsData"));
console.log(savedContacts);
const conversation = <HTMLInputElement>(
  document.querySelector(".envelope__typing--input-entry")
);

console.log(window.location.href);
const currentUrl = window.location.href;
const idIndex = currentUrl.indexOf("id=");
const id = currentUrl.slice(idIndex + 3);

// Understand this bit

const currentUser = savedContacts.find((contact) => contact.contactId === id);

const chatContainer: any = document.querySelector(".envelope__chat");

const send = <HTMLInputElement>document.querySelector("#send");

send.addEventListener("click", sendMessage);

function sendMessage() {
  const messagesArray = [];
  const message = conversation.value;
  messagesArray.push(message);
  messagesArray.forEach((msg) => {
    const messageElement = `<div>${msg}</div> `;
    chatContainer.insertAdjacentHTML("beforeend", messageElement);
  });
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

const messageList = new MessageList();

// btnMessage.addEventListener("click", sendMessage);

function sendConversation() {
  const inputMessage = conversation.value;

  const message = new Message(inputMessage, "1234");

  messageList.addMessage(message);

  conversation.value = "";
}
