var conversation = (document.querySelector(".envelope__typing--input-entry"));
var Message = /** @class */ (function () {
    function Message(content, phone) {
        this.content = content;
        this.phone = phone;
        this.msgID = "id" + Math.random().toString(16).slice(2);
    }
    return Message;
}());
var MessageList = /** @class */ (function () {
    function MessageList() {
        this.messageList = [];
    }
    MessageList.prototype.addMessage = function (message) {
        this.messageList.push(message);
        this.renderChat();
    };
    MessageList.prototype.renderChat = function () {
        var html = "";
        this.messageList.forEach(function (message) {
            html += "<div class=\"container__chat-box__messages\">\n                             <p class=\"container__chat-box__messages--content\">" + message.content + "<p>\n                             <span class=\"container__chat-box__messages--datemsg\">" + message.dateMsg + "</span>\n                             <i class=\"fas fa-check-double container__chat-box__messages--doubleclick\"></i>\n                             <i class=\"fa fa-trash container__chat-box__messages--trash\" onclick='handleEditDelete(\"" + message.msgID + "\")' title=\"Delete Item\"></i>\n                    </div>";
        });
        containerChat.innerHTML = html;
    };
    return MessageList;
}());
var messageList = new MessageList();
btnMessage.addEventListener("click", sendMessage);
function sendConversation() {
    var inputMessage = conversation.value;
    var message = new Message(inputMessage, "1234");
    messageList.addMessage(message);
    conversation.value = "";
}
