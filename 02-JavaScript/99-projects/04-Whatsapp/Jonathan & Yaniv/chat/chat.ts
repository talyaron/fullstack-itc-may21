const btnSearch = <HTMLElement>document.querySelector('.container__header__right__search--gray-color')
const inputSearch = <HTMLInputElement>document.querySelector('#filtermsg')
const btnMessage = <HTMLElement>document.querySelector('.container__chat-footer--entermsg')
const elementMessage = <HTMLInputElement>document.querySelector('#writemsg')
const containerChat = <HTMLElement>document.querySelector('.container__chat-box')
const containerContactUser = <HTMLElement>document.querySelector('.container__header__left')
//const btnReturn = <HTMLElement>document.querySelector('.container__header__left--arrowleft')




//modal
const btnModal = <HTMLElement>document.querySelector('.container__chat-footer--smile')
const bgModal = document.querySelector('.modal-bg')
const modalClose = document.querySelector('.modal-close')

//Ratio
let emojiList = <any>document.querySelectorAll('.emoji')

//clicked
let isClicked: boolean = false;



class Message {
    content: string;
    userPhone: string; // this is the phone number // localstorage tiene los dos celulares, ver como se conectan con css
    //para un lado y el otro para el otro lado con este id
    dateMsg: string;
    groupID: string;
    msgID: string;
    lastMessageName: string;
    timeMsgSec : number;

    constructor(content: string, userPhone: string, dateMsg: string, groupID: string, lastMessageName: string, timeMsgSec:number) {
        this.content = content;
        this.userPhone = userPhone;
        this.dateMsg = dateMsg;
        this.groupID = groupID;
        this.lastMessageName = lastMessageName;
        this.timeMsgSec = timeMsgSec;
        this.msgID = "id" + Math.random().toString(16).slice(2);
    }
}


class MessageList {
    messageList: Array<Message> = [] //maybe we can took from this array the last message
    messageListFilter: Array<Message> = []

    addMessage(message: Message) {
        this.messageList.push(message)
        this.messageListFilter.push(message)
        this.renderChat()
    }


    editMessage(messagePassId: string) {

        this.messageList.find(function (message) {
            if (messagePassId === message.msgID) {
                message.content = `<i class="fas fa-ban a"></i>you deleted this message`;
            }
        });

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

    renderChat():Array<any> {
        let html: string = '';
        const random: number = (Math.random() < 0.5) ? contactList : contactUser;


        this.messageList.forEach(message => {



            html += `<div class="container__chat-box__messages--user">
                        <p class="container__chat-box__messages--user--content">${message.content}<p>
                        <span class="container__chat-box__messages--user--datemsg">${message.dateMsg}</span>
                        <i class="fas fa-check-double container__chat-box__messages--user--doubleclick"></i>
                        <i class="fa fa-trash container__chat-box__messages--user--trash" onclick='handleEditDelete("${message.msgID}")' title="Delete Item"></i>
                        </div>`
            
        });
        
        containerChat.innerHTML = html;

        return this.messageList
    }

    
}

const messageList = new MessageList();


btnMessage.addEventListener('click', sendMessage)

function sendMessage() {
    const inputMessage = elementMessage.value;

    //current date
    let today = new Date();
    let timeHM = ((today.getHours() < 10 ? "0" : "") + today.getHours()) + ":" + ((today.getMinutes() < 10 ? "0" : "") + today.getMinutes())
    let timeHMS = (today.getTime())
   

    const message = new Message(inputMessage, contactUser, timeHM, '123', inputMessage,timeHMS) //last one is the lastmessagename

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



function handleEditDelete(messageId: string) {

    if (isClicked === false) {
        messageList.editMessage(messageId)
        isClicked = true
    } else {
        messageList.deleteMessage(messageId)
        isClicked = false
    }



}

inputSearch.addEventListener('keyup', handleKeyUp)

function handleKeyUp() {
    try {
        messageList.filterByMessage(inputSearch.value)
    } catch (e) {
        console.log(e)
    }
}


function handleReturn() {

    localStorage.setItem("messageChat", JSON.stringify(messageList.renderChat()))
    const pickedUser = JSON.parse(localStorage.getItem("currentUser"))
    window.location.href = `../groups/groups.html?${pickedUser.userPhone}`;
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


//User

class ContactMessage {
    userImg: string;
    userName: string;
    userPhone: string;
    //userGroups: Array<string>; //list of groups

    constructor(userImg: string, userName: string, userPhone: string) {
        this.userImg = userImg;
        this.userName = userName;
        this.userPhone = userPhone;
        //  this.userGroups = userGroups;
    }

    renderUserChat() {
        let html: string = ''

        html += `<i class="fas fa-arrow-left container__header__left--arrowleft" onclick='handleReturn()'"></i>
                <img src="${this.userImg}" alt="" srcset="">
                <div class="container__header__left__text">
                <span class="container__header__left__text--first">${this.userName}</span>
                <span class="container__header__left__text--second">${this.userPhone}</span>
                </div>`

        containerContactUser.innerHTML = html;
    }
}

const contactChat = JSON.parse(localStorage.getItem("contactListUser"))
const contactList = JSON.parse(localStorage.getItem("contactId"))
const contactUser = JSON.parse(localStorage.getItem("currentUser")).userPhone

let chatUser = Object.values(Object.values(contactChat)[1])

//let chatUser = Object.values(Object.values(Object.values(contactChat))[0])

chatUser.find(function (chat) {
    if (contactList === chat.userPhone) {
        const contactUser = new ContactMessage(chat.userImg, chat.userName, chat.userPhone)
        contactUser.renderUserChat()
    }
});







