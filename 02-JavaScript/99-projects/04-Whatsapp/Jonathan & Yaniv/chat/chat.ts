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
    timeMsgSec: number;

    constructor(content: string, userPhone: string, dateMsg: string, groupID: string, lastMessageName: string, timeMsgSec: number) {
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
    messageList: Array<Message> = [];
    messageListFilter: Array<Message> = [];

    addMessage(message: Message) {
        try {
            this.messageList.push(message);
            this.messageListFilter.push(message);
            this.renderChat(message);
        } catch (er) {
            console.error(er);
        }
    }

    editMessage(messagePassId: string) {
        try {
            const myMessageToEdit = this.messageList.find(message=> messagePassId === message.msgID);

            myMessageToEdit.content = `<i class="fas fa-ban a"></i>you deleted this message`;

            this.renderAllMessage(this.messageList);
        } catch (er) {
            console.error(er);
        }
    }

    deleteMessage(messagePassId: string) {
        try {
            this.messageList = this.messageList.filter(message => messagePassId !== message.msgID);
            this.messageListFilter = this.messageListFilter.filter(message => messagePassId !== message.msgID);
            this.renderAllMessage(this.messageList);
        } catch (er) {
            console.error(er);
        }
    }

    filterByMessage(inputMessageFilter: string) {
        try {
            const regrExp: string = `^${inputMessageFilter}`;
            const searchTermReg: RegExp = new RegExp(regrExp, 'i');
            this.messageList = this.messageListFilter.filter(elem => searchTermReg.test(elem.content));
            this.renderChat();
        } catch (er) {
            console.error(er);
        }
    }

    renderAllMessage(arrayToRender:Array<any>){
        try {
            let html: string = '';

            // const arrayToRender = message ? message: this.messageList
            
            arrayToRender.forEach(message => {
                html = `<div class="container__chat-box__messages--user">
                <p class="container__chat-box__messages--user--content">${message.content}<p>
                <span class="container__chat-box__messages--user--datemsg">${message.dateMsg}</span>
                <i class="fas fa-check-double container__chat-box__messages--user--doubleclick"></i>
                <i class="fa fa-trash container__chat-box__messages--user--trash" onclick='handleEditDelete("${message.msgID}")' title="Delete Item"></i>
                </div>`;
            });
            
            containerChat.innerHTML = html;
        } catch (er) {
            console.error(er);
        }
    }

    renderChat(message?): Array<any> {
        try {
            let html: string = '';

        // const arrayToRender = message ? message: this.messageList
            
            html = `<div class="container__chat-box__messages--user">
                        <p class="container__chat-box__messages--user--content">${message.content}<p>
                        <span class="container__chat-box__messages--user--datemsg">${message.dateMsg}</span>
                        <i class="fas fa-check-double container__chat-box__messages--user--doubleclick"></i>
                        <i class="fa fa-trash container__chat-box__messages--user--trash" onclick='handleEditDelete("${message.msgID}")' title="Delete Item"></i>
                    </div>`;

            containerChat.insertAdjacentHTML('beforeend', html);
        
            return this.messageList;
        } catch (er) {
            console.error(er);
        }
    }
}

class Group {
    groupId: string; // userPhone or "group" + Math.random().toString(16).slice(2);
    groupImg: string;
    groupName: string;
    groupUsers: Array<string> // userPhone numbers
    groupMsgs: Array<Message> = []; // in User class - add a method to push new messages, like this: this.userGroups.groupMsgs.push(newMsg: Message). After calling this method - currentUser and contactList in the localStorage should be updated. When entering the Chat page, a new localStorage item should be set: currentGroup. The Group Class on the chat.ts file should include a renderMsgs() method to show all past group messages from localStorage.
    groupMyPhone: string;

    constructor(groupImg: string, groupName: string, groupUsers: Array<string>, groupMyPhone: string) {
        this.groupImg = groupImg;
        this.groupName = groupName;
        this.groupUsers = groupUsers
        this.groupMyPhone = groupMyPhone;
    }

    renderGroupChat() {
        try {
            let html: string = ''

            const groupUser = this.groupUsers.filter(group=>!group.match(contactUser))
            let showGroupUser;
            if (groupUser.length === 2){
                showGroupUser = `You,${groupUser}`
            } else {
                showGroupUser = this.groupUsers.filter(group=>!group.match(contactUser))
            }

            html += `<i class="fas fa-arrow-left container__header__left--arrowleft" onclick='handleReturn()'"></i>
                    <img src="${this.groupImg}" alt="" srcset="">
                    <div class="container__header__left__text">
                    <span class="container__header__left__text--first">${this.groupName}</span>
                    <span class="container__header__left__text--second">${showGroupUser}</span>
                    </div>`

            containerContactUser.innerHTML = html;
        } catch (er) {
            console.error(er);
        }
    }
}

class User {
    userImg: string;
    userName: string;
    userPhone: string;
    userGroups: Array<Group>;

    constructor(userImg: string, userName: string, userPhone: string, userGroups: Array<Group>) {
        this.userImg = userImg;
        this.userName = userName;
        this.userPhone = userPhone;
        this.userGroups = userGroups;
    }

    addMessages(newMess: Message, groupId: string) {
        try {
            const groupIndex = this.userGroups.findIndex(group => group.groupId === groupId);
            this.userGroups[groupIndex].groupMsgs.push(newMess);
        } catch (er) {
            console.error(er);
        }
    }

    renderMsgs(groupid: string) {
        try {
            let html: string = '';

            const groupIndex = this.userGroups.findIndex(group => group.groupId === groupid)

            this.userGroups[groupIndex].groupMsgs.forEach(message => {

                html += `<div class="container__chat-box__messages--user">
                            <p class="container__chat-box__messages--user--content">${message.content}</p>
                            <p>
                                <span class="container__chat-box__messages--user--datemsg">${message.dateMsg}</span>
                                    <i class="fas fa-check-double container__chat-box__messages--user--doubleclick" aria-hidden="true"></i>
                            <i class="fa fa-trash container__chat-box__messages--user--trash"  onclick='handleEditDelete("${message.msgID}")' title="Delete Item" aria-hidden="true"></i><span class="sr-only">Delete Item</span>
                            </p>
                        </div>`

            });

            containerChat.innerHTML = html;
        } catch (er) {
            console.error(er);
        }
        }
}

class ContactList {
    allContacts: Array<User>;

    constructor(allContacts: Array<User>) {
        this.allContacts = allContacts;
    }

    findContactIndex(contactPhone) {
        try {
            const contactIndex = this.allContacts.findIndex(contactItem => contactItem.userPhone === contactPhone);
            return contactIndex;
        } catch (er) {
            console.error(er);
        }
    }
}

const loggedInUser: User = new User(JSON.parse(localStorage.getItem("currentUser")).userImg, JSON.parse(localStorage.getItem("currentUser")).userName, JSON.parse(localStorage.getItem("currentUser")).userPhone, JSON.parse(localStorage.getItem("currentUser")).userGroups)

const messageList = new MessageList();

const params = new URLSearchParams(window.location.search);
const groupId = params.get('groupid');

loggedInUser.renderMsgs(groupId);

btnMessage.addEventListener('click', sendMessage);

function sendMessage() {
    try {
        const inputMessage = elementMessage.value;

        let today = new Date();
        let timeHM = ((today.getHours() < 10 ? "0" : "") + today.getHours()) + ":" + ((today.getMinutes() < 10 ? "0" : "") + today.getMinutes());
        let timeHMS = (today.getTime());

        const message = new Message(inputMessage, contactUser, timeHM, '123', inputMessage, timeHMS);

        messageList.addMessage(message)

        loggedInUser.addMessages(message, groupId)

        localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
        contactList[contactList.findContactIndex(loggedInUser.userPhone)] = loggedInUser;
        localStorage.setItem('contactList', JSON.stringify(contactList));

        elementMessage.value = '';
    } catch (er) {
        console.error(er);
    }
}

btnSearch.addEventListener('click', displayInput);

function displayInput() {
    try {
        if (inputSearch.style.display === 'none') {
            inputSearch.style.display = 'inline-block';
            inputSearch.style.outline = "none";
            inputSearch.style.textIndent = "0.2rem";
        } else {
            inputSearch.style.display = 'none';
            inputSearch.value = "";
        }
    } catch (er) {
        console.error(er);
    }
}

function handleEditDelete(messageId: string) {
    try {
        if (isClicked === false) {
            messageList.editMessage(messageId);
            isClicked = true;
        } else {
            messageList.deleteMessage(messageId);
            isClicked = false;
        }
    } catch (er) {
        console.error(er);
    }
}

inputSearch.addEventListener('keyup', handleKeyUp);

function handleKeyUp() {
    try {
        messageList.filterByMessage(inputSearch.value)
    } catch (er) {
        console.error(er)
    }
}

function handleReturn() {
    try {
        let pickedUser = JSON.parse(localStorage.getItem("currentUser"));

        window.location.href = `../groups/groups.html?userid=${pickedUser.userPhone}`;
    } catch (er) {
        console.error(er);
    }
}

btnModal.addEventListener('click', openModal)

function openModal(ev) {
    try {
        ev.preventDefault()
        bgModal.classList.add('bg-active')


        emojiList.forEach((emoji, index) => {
            emojiList[index].addEventListener('click', function (ev) {
                ev.preventDefault();
                if (emoji.checked) {
                    elementMessage.value += emoji.value;
                }
                bgModal.classList.remove('bg-active');
                ev.target.reset;
            });

        });
        emojiList = [];
    } catch (er) {
        console.error(er);
    }
}

modalClose.addEventListener('click', closeModal);

function closeModal(ev) {
    try{
        ev.preventDefault();
        bgModal.classList.remove('bg-active');
    } catch (er) {
        console.error(er);
    }

}

class ContactMessage {
    userImg: string;
    userName: string;
    userPhone: string;
    userGroups: Array<string>; //list of groups

    constructor(userImg: string, userName: string, userPhone: string, userGroups: Array<string>) {
        this.userImg = userImg;
        this.userName = userName;
        this.userPhone = userPhone;
        this.userGroups = userGroups;
    }

    renderUserChat() {
        try {
            let html: string = '';

            html += `<i class="fas fa-arrow-left container__header__left--arrowleft" onclick='handleReturn()'"></i>
                    <img src="${this.userImg}" alt="" srcset="">
                    <div class="container__header__left__text">
                    <span class="container__header__left__text--first">${this.userName}</span>
                    <span class="container__header__left__text--second">${this.userPhone}</span>
                    </div>`

            containerContactUser.innerHTML = html;
        }
        catch (er) {
            console.error(er);
        }
    }
}

const contactChat = JSON.parse(localStorage.getItem("contactList"));
const contactList: ContactList = JSON.parse(localStorage.getItem("contactId"));
const isChatOrGroup = JSON.parse(localStorage.getItem("IsChatOrGroup"));
console.log(localStorage.getItem("IsChatOrGroup"));
const contactUser = JSON.parse(localStorage.getItem("currentUser")).userPhone;

if (isChatOrGroup === 0) {

    let chatUser = Object.values(Object.values(contactChat)[1]);

    chatUser.find(function (chat) {
        if (contactList === chat.userPhone) {
            const contactUser = new ContactMessage(chat.userImg, chat.userName, chat.userPhone, chat.userGroups);
            contactUser.renderUserChat();
        }
    });

} else {

    const currentGroup = JSON.parse(localStorage.getItem("currentGroup"));
    
    const groupChat = new Group(currentGroup.groupImg, currentGroup.groupName, currentGroup.groupUsers, contactUser);

    groupChat.renderGroupChat();
}