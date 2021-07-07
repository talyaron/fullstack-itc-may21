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
        this.messageList = [];
        this.messageListFilter = [];
    }
    MessageList.prototype.addMessage = function (message) {
        try {
            this.messageList.push(message);
            this.messageListFilter.push(message);
            this.renderChat(message);
        }
        catch (er) {
            console.error(er);
        }
    };
    MessageList.prototype.editMessage = function (messagePassId) {
        try {
            var myMessageToEdit = this.messageList.find(function (message) { return messagePassId === message.msgID; });
            myMessageToEdit.content = "<i class=\"fas fa-ban a\"></i>you deleted this message";
            this.renderAllMessage(this.messageList);
        }
        catch (er) {
            console.error(er);
        }
    };
    MessageList.prototype.deleteMessage = function (messagePassId) {
        try {
            this.messageList = this.messageList.filter(function (message) { return messagePassId !== message.msgID; });
            this.messageListFilter = this.messageListFilter.filter(function (message) { return messagePassId !== message.msgID; });
            this.renderAllMessage(this.messageList);
        }
        catch (er) {
            console.error(er);
        }
    };
    MessageList.prototype.filterByMessage = function (inputMessageFilter) {
        try {
            var regrExp = "^" + inputMessageFilter;
            var searchTermReg_1 = new RegExp(regrExp, 'i');
            this.messageList = this.messageListFilter.filter(function (elem) { return searchTermReg_1.test(elem.content); });
            this.renderChat();
        }
        catch (er) {
            console.error(er);
        }
    };
    MessageList.prototype.renderAllMessage = function (arrayToRender) {
        try {
            var html_1 = '';
            // const arrayToRender = message ? message: this.messageList
            arrayToRender.forEach(function (message) {
                html_1 = "<div class=\"container__chat-box__messages--user\">\n                <p class=\"container__chat-box__messages--user--content\">" + message.content + "<p>\n                <span class=\"container__chat-box__messages--user--datemsg\">" + message.dateMsg + "</span>\n                <i class=\"fas fa-check-double container__chat-box__messages--user--doubleclick\"></i>\n                <i class=\"fa fa-trash container__chat-box__messages--user--trash\" onclick='handleEditDelete(\"" + message.msgID + "\")' title=\"Delete Item\"></i>\n                </div>";
            });
            containerChat.innerHTML = html_1;
        }
        catch (er) {
            console.error(er);
        }
    };
    MessageList.prototype.renderChat = function (message) {
        try {
            var html = '';
            // const arrayToRender = message ? message: this.messageList
            html = "<div class=\"container__chat-box__messages--user\">\n                        <p class=\"container__chat-box__messages--user--content\">" + message.content + "<p>\n                        <span class=\"container__chat-box__messages--user--datemsg\">" + message.dateMsg + "</span>\n                        <i class=\"fas fa-check-double container__chat-box__messages--user--doubleclick\"></i>\n                        <i class=\"fa fa-trash container__chat-box__messages--user--trash\" onclick='handleEditDelete(\"" + message.msgID + "\")' title=\"Delete Item\"></i>\n                    </div>";
            containerChat.insertAdjacentHTML('beforeend', html);
            return this.messageList;
        }
        catch (er) {
            console.error(er);
        }
    };
    return MessageList;
}());
var Group = /** @class */ (function () {
    function Group(groupImg, groupName, groupUsers, groupMyPhone) {
        this.groupMsgs = []; // in User class - add a method to push new messages, like this: this.userGroups.groupMsgs.push(newMsg: Message). After calling this method - currentUser and contactList in the localStorage should be updated. When entering the Chat page, a new localStorage item should be set: currentGroup. The Group Class on the chat.ts file should include a renderMsgs() method to show all past group messages from localStorage.
        this.groupImg = groupImg;
        this.groupName = groupName;
        this.groupUsers = groupUsers;
        this.groupMyPhone = groupMyPhone;
    }
    Group.prototype.renderGroupChat = function () {
        try {
            var html = '';
            var groupUser = this.groupUsers.filter(function (group) { return !group.match(contactUser); });
            var showGroupUser = void 0;
            if (groupUser.length === 2) {
                showGroupUser = "You," + groupUser;
            }
            else {
                showGroupUser = this.groupUsers.filter(function (group) { return !group.match(contactUser); });
            }
            html += "<i class=\"fas fa-arrow-left container__header__left--arrowleft\" onclick='handleReturn()'\"></i>\n                    <img src=\"" + this.groupImg + "\" alt=\"\" srcset=\"\">\n                    <div class=\"container__header__left__text\">\n                    <span class=\"container__header__left__text--first\">" + this.groupName + "</span>\n                    <span class=\"container__header__left__text--second\">" + showGroupUser + "</span>\n                    </div>";
            containerContactUser.innerHTML = html;
        }
        catch (er) {
            console.error(er);
        }
    };
    return Group;
}());
var User = /** @class */ (function () {
    function User(userImg, userName, userPhone, userGroups) {
        this.userImg = userImg;
        this.userName = userName;
        this.userPhone = userPhone;
        this.userGroups = userGroups;
    }
    User.prototype.addMessages = function (newMess, groupId) {
        try {
            var groupIndex = this.userGroups.findIndex(function (group) { return group.groupId === groupId; });
            this.userGroups[groupIndex].groupMsgs.push(newMess);
        }
        catch (er) {
            console.error(er);
        }
    };
    User.prototype.handleDelete = function (messageId, groupid) {
        var groupIndex = this.userGroups.findIndex(function (group) { return group.groupId === groupId; });
        this.userGroups[groupIndex].groupMsgs = this.userGroups[groupIndex].groupMsgs.filter(function (message) { return messageId !== message.msgID; });
        localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
        this.renderMsgs(groupid);
    };
    User.prototype.renderMsgs = function (groupid) {
        try {
            var html_2 = '';
            var groupIndex = this.userGroups.findIndex(function (group) { return group.groupId === groupid; });
            this.userGroups[groupIndex].groupMsgs.forEach(function (message) {
                html_2 += "<div class=\"container__chat-box__messages--user\">\n                            <p class=\"container__chat-box__messages--user--content\">" + message.content + "</p>\n                            <p>\n                                <span class=\"container__chat-box__messages--user--datemsg\">" + message.dateMsg + "</span>\n                                    <i class=\"fas fa-check-double container__chat-box__messages--user--doubleclick\" aria-hidden=\"true\"></i>\n                            <i class=\"fa fa-trash container__chat-box__messages--user--trash\"  onclick='handleDelete(\"" + message.msgID + "\")' title=\"Delete Item\" aria-hidden=\"true\"></i><span class=\"sr-only\">Delete Item</span>\n                            </p>\n                        </div>";
            });
            containerChat.innerHTML = html_2;
        }
        catch (er) {
            console.error(er);
        }
    };
    return User;
}());
function handleDelete(messageId) {
    loggedInUser.handleDelete(messageId, groupId);
}
var ContactList = /** @class */ (function () {
    function ContactList(allContacts) {
        this.allContacts = allContacts;
    }
    ContactList.prototype.findContactIndex = function (contactPhone) {
        try {
            var contactIndex = this.allContacts.findIndex(function (contactItem) { return contactItem.userPhone === contactPhone; });
            return contactIndex;
        }
        catch (er) {
            console.error(er);
        }
    };
    return ContactList;
}());
var loggedInUser = new User(JSON.parse(localStorage.getItem("currentUser")).userImg, JSON.parse(localStorage.getItem("currentUser")).userName, JSON.parse(localStorage.getItem("currentUser")).userPhone, JSON.parse(localStorage.getItem("currentUser")).userGroups);
var messageList = new MessageList();
var params = new URLSearchParams(window.location.search);
var groupId = params.get('groupid');
loggedInUser.renderMsgs(groupId);
btnMessage.addEventListener('click', sendMessage);
function sendMessage() {
    try {
        var inputMessage = elementMessage.value;
        var today = new Date();
        var timeHM = ((today.getHours() < 10 ? "0" : "") + today.getHours()) + ":" + ((today.getMinutes() < 10 ? "0" : "") + today.getMinutes());
        var timeHMS = (today.getTime());
        var message = new Message(inputMessage, contactUser, timeHM, '123', inputMessage, timeHMS);
        messageList.addMessage(message);
        loggedInUser.addMessages(message, groupId);
        console.log(loggedInUser);
        elementMessage.value = '';
        localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
        contactList[contactList.findContactIndex(loggedInUser.userPhone)] = loggedInUser;
        localStorage.setItem('contactList', JSON.stringify(contactList));
    }
    catch (er) {
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
        }
        else {
            inputSearch.style.display = 'none';
            inputSearch.value = "";
        }
    }
    catch (er) {
        console.error(er);
    }
}
function handleEditDelete(messageId) {
    try {
        if (isClicked === false) {
            messageList.editMessage(messageId);
            isClicked = true;
        }
        else {
            messageList.deleteMessage(messageId);
            isClicked = false;
        }
    }
    catch (er) {
        console.error(er);
    }
}
inputSearch.addEventListener('keyup', handleKeyUp);
function handleKeyUp() {
    try {
        messageList.filterByMessage(inputSearch.value);
    }
    catch (er) {
        console.error(er);
    }
}
function handleReturn() {
    try {
        var pickedUser = JSON.parse(localStorage.getItem("currentUser"));
        window.location.href = "../groups/groups.html?userid=" + pickedUser.userPhone;
    }
    catch (er) {
        console.error(er);
    }
}
btnModal.addEventListener('click', openModal);
function openModal(ev) {
    try {
        ev.preventDefault();
        bgModal.classList.add('bg-active');
        emojiList.forEach(function (emoji, index) {
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
    }
    catch (er) {
        console.error(er);
    }
}
modalClose.addEventListener('click', closeModal);
function closeModal(ev) {
    try {
        ev.preventDefault();
        bgModal.classList.remove('bg-active');
    }
    catch (er) {
        console.error(er);
    }
}
var ContactMessage = /** @class */ (function () {
    function ContactMessage(userImg, userName, userPhone, userGroups) {
        this.userImg = userImg;
        this.userName = userName;
        this.userPhone = userPhone;
        this.userGroups = userGroups;
    }
    ContactMessage.prototype.renderUserChat = function () {
        try {
            var html = '';
            html += "<i class=\"fas fa-arrow-left container__header__left--arrowleft\" onclick='handleReturn()'\"></i>\n                    <img src=\"" + this.userImg + "\" alt=\"\" srcset=\"\">\n                    <div class=\"container__header__left__text\">\n                    <span class=\"container__header__left__text--first\">" + this.userName + "</span>\n                    <span class=\"container__header__left__text--second\">" + this.userPhone + "</span>\n                    </div>";
            containerContactUser.innerHTML = html;
        }
        catch (er) {
            console.error(er);
        }
    };
    return ContactMessage;
}());
var contactChat = JSON.parse(localStorage.getItem("contactList"));
var contactList = JSON.parse(localStorage.getItem("contactId"));
var isChatOrGroup = JSON.parse(localStorage.getItem("IsChatOrGroup"));
console.log(localStorage.getItem("IsChatOrGroup"));
var contactUser = JSON.parse(localStorage.getItem("currentUser")).userPhone;
if (isChatOrGroup === 0) {
    var chatUser = Object.values(Object.values(contactChat)[1]);
    chatUser.find(function (chat) {
        if (contactList === chat.userPhone) {
            var contactUser_1 = new ContactMessage(chat.userImg, chat.userName, chat.userPhone, chat.userGroups);
            contactUser_1.renderUserChat();
        }
    });
}
else {
    var currentGroup = JSON.parse(localStorage.getItem("currentGroup"));
    var groupChat = new Group(currentGroup.groupImg, currentGroup.groupName, currentGroup.groupUsers, contactUser);
    groupChat.renderGroupChat();
}
