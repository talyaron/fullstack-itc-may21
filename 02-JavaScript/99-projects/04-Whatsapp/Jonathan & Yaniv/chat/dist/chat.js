var btnSearch = document.querySelector('.container__header__right__search--gray-color');
var inputSearch = document.querySelector('#filtermsg');
var btnMessage = document.querySelector('.container__chat-footer--entermsg');
var elementMessage = document.querySelector('#writemsg');
var containerChat = document.querySelector('.container__chat-box');
//modal
var btnModal = document.querySelector('.container__chat-footer--smile');
var bgModal = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');
//Ratio
var emojiList = document.querySelectorAll('.emoji');
var Message = /** @class */ (function () {
    function Message(content, personID, dateMsg, groupID) {
        this.content = content;
        this.personID = personID;
        this.dateMsg = dateMsg;
        this.groupID = groupID;
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
        this.messageList.push(message);
        this.messageListFilter.push(message);
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
        // containerChat.innerHTML = html;
        this.messageList.forEach(function (message) {
            html += "<div class=\"container__chat-box__messages\">\n                           \n                             <p class=\"container__chat-box__messages--content\">" + message.content + "<p>\n                             <span class=\"container__chat-box__messages--datemsg\">" + message.dateMsg + "</span>\n                            <i class=\"fas fa-check-double container__chat-box__messages--doubleclick\"></i>\n                            <i class=\"fa fa-trash container__chat-box__messages--doubleclick\" onclick='handleDelete(\"" + message.msgID + "\")' title=\"Delete Item\"></i>\n\n                            </div>";
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
    console.log(today.getMinutes());
    var time = ((today.getHours() < 10 ? "0" : "") + today.getHours()) + ":" + ((today.getMinutes() < 10 ? "0" : "") + today.getMinutes());
    var message = new Message(inputMessage, '1234', time, '123');
    messageList.addMessage(message);
}
//const d: Date = new Date();
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
function handleDelete(messageId) {
    messageList.deleteMessage(messageId);
}
inputSearch.addEventListener('keyup', handleKeyUp); //en caso de qu vuelva hacia atras, me tiene que mostrar todos los mensajes
//lupita
function handleKeyUp() {
    try {
        messageList.filterByMessage(inputSearch.value);
    }
    catch (e) {
        console.log(e);
    }
}
btnModal.addEventListener('click', openModal);
function openModal(ev) {
    ev.preventDefault();
    bgModal.classList.add('bg-active');
    emojiList.forEach(function (emoji, index) {
        console.log(emojiList[index]);
        emojiList[index].addEventListener('click', function () {
            console.log(emoji.value);
            if (emoji.checked) {
                elementMessage.value += emoji.value;
                console.log('A');
            }
            bgModal.classList.remove('bg-active');
        });
    });
}
modalClose.addEventListener('click', closeModal);
function closeModal(ev) {
    ev.preventDefault();
    bgModal.classList.remove('bg-active');
}
