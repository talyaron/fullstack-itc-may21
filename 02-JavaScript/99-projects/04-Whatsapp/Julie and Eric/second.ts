

//input render (take input class from the input inside the form in the second page)
const convers = <HTMLInputElement>document.querySelector(".inputTyping")

//render contacts 
const contactZone = <HTMLInputElement>document.querySelector(".contactZone")

//render what you type inside the input to the conversation space

const conversation = <HTMLInputElement>document.querySelector('#write')



class Message {
    content: string;
    phone: string; 
    groupID: string;
    msgID: string;

    constructor(content: string, phone: string, groupID: string) {
        this.content = content;
        this.phone = phone;
        this.groupID = groupID;
        this.msgID = "id" + Math.random().toString(16).slice(2);
    }
}

class MessageList {
    messageList: Array<Message> = []

    addMessage(message: Message) {
        this.messageList.push(message)
        this.renderChat()
    }

    renderChat() {
        let html: string = '';

        this.messageList.forEach(message => {


            html += `<div class="container__chat-box__messages">
                             <p class="container__chat-box__messages--content">${message.content}<p>
                             <span class="container__chat-box__messages--datemsg">${message.dateMsg}</span>
                             <i class="fas fa-check-double container__chat-box__messages--doubleclick"></i>
                             <i class="fa fa-trash container__chat-box__messages--trash" onclick='handleEditDelete("${message.msgID}")' title="Delete Item"></i>
                    </div>`
        });

        containerChat.innerHTML = html;
    }
}

const messageList = new MessageList();


btnMessage.addEventListener('click', sendMessage)

function sendConversation() {
    const inputMessage = conversation.value;

    const message = new Message(inputMessage, '1234', time, '123')

    messageList.addMessage(message)

    conversation.value = '';

}