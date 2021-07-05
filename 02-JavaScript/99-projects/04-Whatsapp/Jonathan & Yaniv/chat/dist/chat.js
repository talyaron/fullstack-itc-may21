var btnSearch = document.querySelector('.container__header__right__search--gray-color');
var inputSearch = document.querySelector('#filtermsg');
var btnMessage = document.querySelector('.container__chat-footer--entermsg');
var elementMessage = document.querySelector('#writemsg');
var containerChat = document.querySelector('.container__chat-box');
var containerContactUser = document.querySelector('.container__header__left');
//const btnReturn = <HTMLElement>document.querySelector('.container__header__left--arrowleft')
//modal
var btnModal = document.querySelector('.container__chat-footer--smile');
var bgModal = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');
//Ratio
var emojiList = document.querySelectorAll('.emoji');
//clicked
var isClicked = false;
var Message = /** @class */ (function () {
    function Message(content, userPhone, dateMsg, groupID, lastMessageName, timeMsgSec) {
        this.content = content;
        this.userPhone = userPhone;
        this.dateMsg = dateMsg;
        this.groupID = groupID;
        this.lastMessageName = lastMessageName;
        this.timeMsgSec = timeMsgSec;
        this.msgID = "id" + Math.random().toString(16).slice(2);
    }
    return Message;
}());
var MessageList = /** @class */ (function () {
    function MessageList() {
        this.messageList = []; //maybe we can took from this array the last message
        this.messageListFilter = [];
    }
    MessageList.prototype.addMessage = function (message) {
        this.messageList.push(message);
        this.messageListFilter.push(message);
        this.renderChat();
    };
    MessageList.prototype.editMessage = function (messagePassId) {
        this.messageList.find(function (message) {
            if (messagePassId === message.msgID) {
                message.content = "<i class=\"fas fa-ban a\"></i>you deleted this message";
            }
        });
        this.renderChat();
    };
    MessageList.prototype.deleteMessage = function (messagePassId) {
        this.messageList = this.messageList.filter(function (message) { return messagePassId !== message.msgID; });
        this.messageListFilter = this.messageListFilter.filter(function (message) { return messagePassId !== message.msgID; });
        this.renderChat();
    };
    MessageList.prototype.filterByMessage = function (inputMessageFilter) {
        var regrExp = "^" + inputMessageFilter;
        var searchTermReg = new RegExp(regrExp, 'i');
        this.messageList = this.messageListFilter.filter(function (elem) { return searchTermReg.test(elem.content); });
        this.renderChat();
    };
    MessageList.prototype.renderChat = function () {
        var html = '';
        var random = (Math.random() < 0.5) ? contactList : contactUser;
        this.messageList.forEach(function (message) {
            html += "<div class=\"container__chat-box__messages--user\">\n                        <p class=\"container__chat-box__messages--user--content\">" + message.content + "<p>\n                        <span class=\"container__chat-box__messages--user--datemsg\">" + message.dateMsg + "</span>\n                        <i class=\"fas fa-check-double container__chat-box__messages--user--doubleclick\"></i>\n                        <i class=\"fa fa-trash container__chat-box__messages--user--trash\" onclick='handleEditDelete(\"" + message.msgID + "\")' title=\"Delete Item\"></i>\n                        </div>";
        });
        containerChat.innerHTML = html;
    };
    return MessageList;
}());
var messageList = new MessageList();
btnMessage.addEventListener('click', sendMessage);
function sendMessage() {
    var inputMessage = elementMessage.value;
    //current date
    var today = new Date();
    var timeHM = ((today.getHours() < 10 ? "0" : "") + today.getHours()) + ":" + ((today.getMinutes() < 10 ? "0" : "") + today.getMinutes());
    var timeHMS = (today.getTime());
    var message = new Message(inputMessage, contactUser, timeHM, '123', inputMessage, timeHMS); //last one is the lastmessagename
    messageList.addMessage(message);
    elementMessage.value = '';
}
//display inputSearch with search icon 
btnSearch.addEventListener('click', displayInput); //why the first one does not appear
function displayInput() {
    if (inputSearch.style.display === 'none') {
        inputSearch.style.display = 'inline-block';
        inputSearch.style.outline = "none";
        inputSearch.style.textIndent = "0.2rem";
    }
    else {
        inputSearch.style.display = 'none';
        inputSearch.value = "";
    }
}
function handleEditDelete(messageId) {
    if (isClicked === false) {
        messageList.editMessage(messageId);
        isClicked = true;
    }
    else {
        messageList.deleteMessage(messageId);
        isClicked = false;
    }
}
inputSearch.addEventListener('keyup', handleKeyUp);
function handleKeyUp() {
    try {
        messageList.filterByMessage(inputSearch.value);
    }
    catch (e) {
        console.log(e);
    }
}
function handleReturn() {
    var pickedUser = JSON.parse(localStorage.getItem("currentUser"));
    window.location.href = "../groups/groups.html?" + pickedUser.userPhone;
}
btnModal.addEventListener('click', openModal);
function openModal(ev) {
    ev.preventDefault();
    bgModal.classList.add('bg-active');
    emojiList.forEach(function (emoji, index) {
        emojiList[index].addEventListener('click', function (ev) {
            ev.preventDefault();
            console.log(emoji.value);
            if (emoji.checked) {
                elementMessage.value += emoji.value;
            }
            bgModal.classList.remove('bg-active');
            ev.target.reset;
        });
    });
    emojiList = [];
}
modalClose.addEventListener('click', closeModal);
function closeModal(ev) {
    ev.preventDefault();
    bgModal.classList.remove('bg-active');
}
//User
var ContactMessage = /** @class */ (function () {
    //userGroups: Array<string>; //list of groups
    function ContactMessage(userImg, userName, userPhone) {
        this.userImg = userImg;
        this.userName = userName;
        this.userPhone = userPhone;
        //  this.userGroups = userGroups;
    }
    ContactMessage.prototype.renderUserChat = function () {
        var html = '';
        html += "<i class=\"fas fa-arrow-left container__header__left--arrowleft\" onclick='handleReturn()'\"></i>\n                <img src=\"" + this.userImg + "\" alt=\"\" srcset=\"\">\n                <div class=\"container__header__left__text\">\n                <span class=\"container__header__left__text--first\">" + this.userName + "</span>\n                <span class=\"container__header__left__text--second\">" + this.userPhone + "</span>\n                </div>";
        containerContactUser.innerHTML = html;
    };
    return ContactMessage;
}());
var contactChat = JSON.parse(localStorage.getItem("contactList"));
var contactList = JSON.parse(localStorage.getItem("contactId"));
var contactUser = JSON.parse(localStorage.getItem("currentUser")).userPhone;
var chatUser = Object.values(Object.values(Object.values(contactChat))[0]);
chatUser.find(function (chat) {
    if (contactList === chat.userPhone) {
        var contactUser_1 = new ContactMessage(chat.userImg, chat.userName, chat.userPhone);
        contactUser_1.renderUserChat();
    }
});
