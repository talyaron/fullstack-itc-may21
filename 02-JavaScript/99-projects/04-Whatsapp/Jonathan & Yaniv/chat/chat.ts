const btnSearch = <HTMLElement>document.querySelector('.container__header__right__search--gray-color')
const inputSearch = <HTMLInputElement>document.querySelector('#filtermsg')
const btnMessage = <HTMLElement>document.querySelector('.container__chat-footer--entermsg')
const elementMessage = <HTMLInputElement>document.querySelector('#writemsg')
const containerChat = <HTMLElement>document.querySelector('.container__chat-box')




//modal
const btnModal = <HTMLElement>document.querySelector('.container__chat-footer--smile')
const bgModal = document.querySelector('.modal-bg')
const modalClose = document.querySelector('.modal-close')

//Ratio
let emojiList = <any>document.querySelectorAll('.emoji')




class Message {
    content: string;
    personID: string;
    dateMsg: string; 
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
    messageListFilter: Array<Message> = []

    addMessage(message: Message) {
        this.messageList.push(message)
        this.messageListFilter.push(message)
        this.renderChat()
    }


    deleteMessage(messagePassId: string) {

       
        this.messageList = this.messageList.filter(message => messagePassId !== message.msgID)
        this.messageListFilter = this.messageListFilter.filter(message => messagePassId !== message.msgID)
        this.renderChat()
    }

    filterByMessage(inputMessageFilter: string) {

        const regrExp: string = `^${inputMessageFilter}`
        const searchTermReg: RegExp = new RegExp(regrExp, 'i');
        this.messageList = this.messageListFilter.filter(elem => searchTermReg.test(elem.content))
        this.renderChat()

    }

    renderChat() {
        let html: string = '';


        /* 
        
        var messageIndex = 0;
        heartbeatInterval = setInterval(function() {
        if (messageIndex < sampleMessages.length) {
        alert(sampleMessages[messageIndex]);
     window.eval(eoWebBrowser.extInvoke("applicationHeartbeat", data));
     messageIndex++;
        } else {
     clearInterval(heartbeatInterval);
        }
        }, 5000)
        
        */

        this.messageList.forEach(message => { 
            html += `<div class="container__chat-box__messages" id="historieta">
                             <p class="container__chat-box__messages--content">${message.content}<p>
                             <span class="container__chat-box__messages--datemsg">${message.dateMsg}</span>
                            <i class="fas fa-check-double container__chat-box__messages--doubleclick"></i>
                            <i class="fa fa-trash container__chat-box__messages--trash" onclick='handleDelete("${message.msgID}")' title="Delete Item"></i>
                    </div>`
        });
        
        
        
        containerChat.innerHTML = html;
    }
}

const messageList = new MessageList();

btnMessage.addEventListener('click', sendMessage)

function sendMessage() {
    const inputMessage = elementMessage.value;

    //current date
    let today = new Date();
    let time = ((today.getHours() < 10 ? "0" : "") + today.getHours()) + ":" + ((today.getMinutes() < 10 ? "0" : "") + today.getMinutes())

    const message = new Message(inputMessage, '1234', time, '123')

    messageList.addMessage(message)

    elementMessage.value = '';

}


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


function handleDelete(messageId: string) {
    messageList.deleteMessage(messageId)
}

inputSearch.addEventListener('keyup', handleKeyUp) 


function handleKeyUp() {
    try {
        messageList.filterByMessage(inputSearch.value)
    } catch (e) {
        console.log(e)
    }
}



btnModal.addEventListener('click', openModal)

function openModal(ev) {

    ev.preventDefault()
    bgModal.classList.add('bg-active')


    emojiList.forEach((emoji, index) => {
        emojiList[index].addEventListener('click', function (ev) {
            ev.preventDefault()
            console.log(emoji.value)
            if (emoji.checked) {
                elementMessage.value += emoji.value
                
            }   
            bgModal.classList.remove('bg-active');
            ev.target.reset
        });
      
    });
    emojiList = [];
}

modalClose.addEventListener('click', closeModal)

function closeModal(ev) {
    ev.preventDefault()
    bgModal.classList.remove('bg-active')

}




