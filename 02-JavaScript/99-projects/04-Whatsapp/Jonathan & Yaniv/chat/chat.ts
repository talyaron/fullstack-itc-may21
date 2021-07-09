const btnSearch = <HTMLElement>document.querySelector('.container__header__right__search--gray-color')
const inputSearch = <HTMLInputElement>document.querySelector('#filtermsg')
const btnMessage = <HTMLElement>document.querySelector('.container__chat-footer--entermsg')
const elementMessage = <HTMLInputElement>document.querySelector('#writemsg')
const containerChat = <HTMLElement>document.querySelector('.container__chat-box')
const containerContactUser = <HTMLElement>document.querySelector('.container__header__left')


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
    userPhone: string; 
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


class Group {
    groupId: string; // userPhone or "group" + Math.random().toString(16).slice(2);
    groupImg: string;
    groupName: string;
    groupUsers: Array<string> 
    groupMsgs: Array<Message> = []; 
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

            if(!containerContactUser) throw new Error('It cant show it')
            

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
    userGroupNew:Array<Group>;
    

    constructor(userImg: string, userName: string, userPhone: string, userGroups: Array<Group>, userGroupNew : Array<Group>) {
        this.userImg = userImg;
        this.userName = userName;
        this.userPhone = userPhone;
        this.userGroups = userGroups;
        this.userGroupNew = userGroupNew;
    }

    addMessages(newMess: Message, groupId: string) {
        try {
            const groupIndex = this.userGroups.findIndex(group => group.groupId === groupId); //YS: You should use find instead of findIndex
            this.userGroups[groupIndex].groupMsgs.push(newMess);
            this.userGroupNew[groupIndex].groupMsgs.push(newMess);
            this.renderMsgs(groupId)
        } catch (er) {
            console.error(er);
        }
    }

     filterByMessage(inputMessageFilter: string, groupid:string) {
        try {


            const groupIndex = this.userGroupNew.findIndex(group => group.groupId === groupid);
            const regrExp: string = `^${inputMessageFilter}`;
            const searchTermReg: RegExp = new RegExp(regrExp, 'i');

            this.userGroups[groupIndex].groupMsgs = this.userGroupNew[groupIndex].groupMsgs.filter(elem => searchTermReg.test(elem.content));
            this.renderMsgs(groupid);
        } catch (er) {
            console.error(er);
        }
    }

    editMessage(messageId: string, groupid:string) {
        try {

            const groupIndex = this.userGroups.findIndex(group => group.groupId === groupid);

            const myMessageToEdit = this.userGroups[groupIndex].groupMsgs.filter(message => messageId === message.msgID);

            myMessageToEdit[0].content = `you deleted this message`;

            const myMessageToEditNew = this.userGroupNew[groupIndex].groupMsgs.filter(message => messageId === message.msgID);

            myMessageToEditNew[0].content = `you deleted this message`;

           this.renderMsgs(groupId);
        } catch (er) {
            console.error(er);
        }
    }

    handleDelete(messageId:string,groupid: string){
        
        const groupIndex = this.userGroups.findIndex(group => group.groupId === groupId);
        this.userGroups[groupIndex].groupMsgs = this.userGroups[groupIndex].groupMsgs.filter(message => message.content !== "you deleted this message");
        this.userGroupNew[groupIndex].groupMsgs = this.userGroupNew[groupIndex].groupMsgs.filter(message => message.content !== "you deleted this message");
        localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
        this.renderMsgs(groupid)
    }
 
    renderMsgs(groupid: string) {
        try {
            let html: string = '';

            if(!containerChat) throw new Error('It cant show it')
            const groupIndex = this.userGroups.findIndex(group => group.groupId === groupid)

            this.userGroups[groupIndex].groupMsgs.forEach(message => {

                html += `<div class="container__chat-box__messages--user">
                            <p class="container__chat-box__messages--user--content">${message.content}</p>
                            <p>
                                <span class="container__chat-box__messages--user--datemsg">${message.dateMsg}</span>
                                    <i class="fas fa-check-double container__chat-box__messages--user--doubleclick" aria-hidden="true"></i>
                            <i class="fa fa-trash container__chat-box__messages--user--trash"  onclick='handleEditDelete("${message.msgID}")' title="Delete Item" aria-hidden="true"></i><span class="sr-only">Delete Item</span>
                            </p>
                        </div>
                        `

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

const loggedInUser: User = new User(JSON.parse(localStorage.getItem("currentUser")).userImg, JSON.parse(localStorage.getItem("currentUser")).userName, JSON.parse(localStorage.getItem("currentUser")).userPhone, JSON.parse(localStorage.getItem("currentUser")).userGroups,JSON.parse(localStorage.getItem("currentUser")).userGroups) //YS: Separate this into more readable code


const params = new URLSearchParams(window.location.search);
const groupId = params.get('groupid');

loggedInUser.renderMsgs(groupId);

btnMessage.addEventListener('click', sendMessage);

function sendMessage() { //YS: What if the user only presses send without typing anything? 
    try {
        const inputMessage = elementMessage.value;

        let today = new Date();
        let timeHM = ((today.getHours() < 10 ? "0" : "") + today.getHours()) + ":" + ((today.getMinutes() < 10 ? "0" : "") + today.getMinutes());
        let timeHMS = (today.getTime());

        const message = new Message(inputMessage, contactUser, timeHM, '123', inputMessage, timeHMS);

        loggedInUser.addMessages(message, groupId)
        

        elementMessage.value = '';
        
        localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
        contactList[contactList.findContactIndex(loggedInUser.userPhone)] = loggedInUser;
        localStorage.setItem('contactList', JSON.stringify(contactList));

        
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
            loggedInUser.editMessage(messageId,groupId)
            isClicked = true;
        } else {
            loggedInUser.handleDelete(messageId,groupId)
            isClicked = false;
        }
    } catch (er) {
        console.error(er);
    }
}

inputSearch.addEventListener('keyup', handleKeyUp);

function handleKeyUp() {
    try {
        loggedInUser.filterByMessage(inputSearch.value,groupId)
    } catch (er) {
        console.error(er)
    }
}

function handleReturn() {
    try {

        localStorage.setItem('contactId', JSON.stringify(null));
        localStorage.setItem('IsChatOrGroup', JSON.stringify(null));
        localStorage.setItem('currentGroup', JSON.stringify(null));

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
        
        if (!bgModal) throw new Error("Something is not working");
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
        if (!bgModal) throw new Error("Something is not working");
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
            if(!containerContactUser) throw new Error('The container is not working')

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
const contactUser = JSON.parse(localStorage.getItem("currentUser")).userPhone;

if (isChatOrGroup === 0) {

    let chatUser = Object.values(Object.values(contactChat)[1]);

    chatUser.find(function (chat) { //YS: Incorrect use of find, this should be a variable: const chatUser = chatUser.find(...)
        if (contactList === chat.userPhone) {
            const contactUser = new ContactMessage(chat.userImg, chat.userName, chat.userPhone, chat.userGroups);
            contactUser.renderUserChat();
        }
    });

} else {

    const currentGroup = JSON.parse(localStorage.getItem("currentGroup"));
    
    const groupChat = new Group(currentGroup.groupImg, currentGroup.groupName, currentGroup.groupUsers, contactUser); //YS: This is how it should be done. 

    groupChat.renderGroupChat();
}