const btnSearch = <HTMLElement>document.querySelector('.container__header__right__search--gray-color')
const inputSearch = <HTMLInputElement>document.querySelector('#filtermsg')
const btnMessage = <HTMLElement>document.querySelector('.container__chat-footer--entermsg')
const elementMessage = <HTMLInputElement>document.querySelector('#writemsg')
const containerChat = <HTMLElement>document.querySelector('.container__chat-box')


class Message {
    content: string;
    personID: string;
    dateMsg: string; /* es asi el tipo*/
    groupID: string;
    msgID: string;

    constructor(content: string, personID: string, dateMsg: string, groupID: string) {
        this.content = content;
        this.personID = personID;
        this.dateMsg = dateMsg;
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

    deleteMessage(messagePassId:string){

        this.messageList = this.messageList.filter(message=>messagePassId !== message.msgID)
        this.renderChat()
    }

    renderChat() {
        let html:string = ''
        containerChat.innerHTML = html;


        this.messageList.forEach(message => { /*por que se me va dezplazando*/
            html+=`<div class="container__chat-box__messages">
                             <p class="container__chat-box__messages--content">${message.content}<p>
                             <span class="container__chat-box__messages--datemsg">${message.dateMsg}</span>
                            <i class="fas fa-check-double container__chat-box__messages--doubleclick"></i>
                            <i class="fa fa-trash container__chat-box__messages--doubleclick" onclick='handleDelete("${message.msgID}")' title="Delete Item"></i>
                   <div>`
        });

        containerChat.innerHTML = html;
    }
}

const messageList = new MessageList();

btnMessage.addEventListener('click', sendMessage)

function sendMessage(){
    const inputMessage = elementMessage.value;
    
    //current date
    let today = new Date();
    let time = (today.getHours() < 10?"0":"" + today.getHours()) + ":" + (today.getMinutes() < 10?"0":"" + today.getMinutes())
    
    const message = new Message(inputMessage,'1234',time,'123')

    messageList.addMessage(message)
    
}


//const d: Date = new Date();




//display inputSearch with search icon 
btnSearch.addEventListener('click', displayInput) //why the first one does not appear

function displayInput() {
    if (inputSearch.style.display === 'none') {
        inputSearch.style.display = 'inline-block';
        inputSearch.style.outline = "none";
        inputSearch.style.textIndent = "0.2rem"
    } else {
        inputSearch.style.display = 'none';
        inputSearch.value = "";
    }
}


function handleDelete(messageId:string){
    messageList.deleteMessage(messageId)
}