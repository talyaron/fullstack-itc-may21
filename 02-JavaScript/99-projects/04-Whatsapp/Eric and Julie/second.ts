const conversation = <HTMLInputElement>(
  document.querySelector(".envelope__typing--input-entry")
);  

class Message {
  content: string;
  phone: number;
  msgID: string;

  constructor(content: string, phone: number) {
    this.content = content;
    this.phone = phone;
    this.msgID = "id" + Math.random().toString(16).slice(2);
  }
}

class MessageList {
  messageList: Array<Message> = [];

  addMessage(message: Message) {
    this.messageList.push(message);
    this.renderChat();
  }

  renderChat() {
    let html: string = "";

    this.messageList.forEach((message) => {
      html += `<div class="container__chat-box__messages">
                             <p class="container__chat-box__messages--content">${message.content}<p>
                             <span class="container__chat-box__messages--datemsg">${message.dateMsg}</span>
                             <i class="fas fa-check-double container__chat-box__messages--doubleclick"></i>
                             <i class="fa fa-trash container__chat-box__messages--trash" onclick='handleEditDelete("${message.msgID}")' title="Delete Item"></i>
                    </div>`;
    });

    containerChat.innerHTML = html;
  }
}

const messageList = new MessageList();

btnMessage.addEventListener("click", sendMessage);

function sendConversation() {
  const inputMessage = conversation.value;

  const message = new Message(inputMessage, "1234");

  messageList.addMessage(message);

  conversation.value = "";
}
