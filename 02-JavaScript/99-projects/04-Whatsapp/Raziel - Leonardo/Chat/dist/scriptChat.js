var userInfo = JSON.parse(localStorage.getItem('userInfo'));
var root = document.querySelector('#main');
var userNumber = localStorage.getItem('numberToSearch');
var userfiltered = userInfo.filter(function (element) { return (element.number == userNumber); });
//Render the chat of the User
function renderChat() {
    try {
        var html = userfiltered.map(function (element) {
            return ("<div class=\"chat\">\n                <div class=\"chat-header\" onclick=\"redirectBack()\">\n                    <div class=\"profile\">\n                        <div class=\"left\">\n                            <img src=\"../Img_whatsapp/arrow.png\" class=\"arrow\">\n                            <img src=\"" + element.picture + "\" class=\"pp\">\n                            <h2>" + element.name + "</h2>\n                            <span>Phone Number: " + element.number + "</span>\n                        </div>\n                        <div class=\"right\">\n                            <img src=\"../Img_whatsapp/video.png\" class=\"icon\">\n                            <img src=\"../Img_whatsapp/phone.png\" class=\"icon\">\n                            <!-- <img src=\"../Img_whatsapp/camera.png\" class=\"icon\"> -->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"chat-box\">\n                <div class=\"chat-r\">\n                <div class=\"sp\"></div>\n                <div class=\"mess mess-r\">\n                    <p>\n                       Sup bro?\n                    </p>\n                    \n                </div>\n            </div>\n        </div></div>\n                <div class=\"chat-footer\">\n                    <img src=\"../Img_whatsapp/emo.png\" class=\"emo\" id=\"emo\">\n                    <input type=\"text\" placeholder=\"Type a message\" id=\"texting\"></input>\n                    <div class=\"icons\">\n                        <img src=\"../Img_whatsapp/attach file.png\">\n                        <img src=\"../Img_whatsapp/camera.png\">\n                    </div>\n                    \n                    <img src=\"https://img.icons8.com/material-outlined/50/000000/send-comment.png\"/ id=\"sendButton\">\n                </div>\n            </div>");
        }).join('');
        if (!html)
            throw new Error('An error happens when you want to render the user chat!');
        root.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
    ;
}
;
//Call this functions to render the user
renderChat();
//With this function I handle the form:
var handleSubmitMessage = function (ev) {
    ev.preventDefault();
    try {
        var text_1 = {
            text: ev.target.elements.chat.value,
            id: Math.random().toString(16).slice(2),
            time: new Date()
        };
        userInfo.forEach(function (element) {
            element.message.push(text_1);
        });
        ev.target.reset();
        if (!userInfo)
            throw new Error('The user doesn´t exist!');
    }
    catch (error) {
        console.error(error);
    }
};
function redirectBack() {
    try {
        window.location.href = '../Main/whatsapp.html';
        if (!window.location.href)
            throw new Error('The page where you want to redirect it doesn´t exist!');
    }
    catch (error) {
        console.error(error);
    }
}
var texting = document.querySelector('#texting');
var sendButton = document.querySelector('#sendButton');
sendButton.addEventListener('click', function () {
    var message = {
        text: texting.value,
        id: Math.random().toString(16).slice(2),
        time: new Date()
    };
    userfiltered.forEach(function (element) {
        element.message.push(message);
    });
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    renderInsideChat(message);
});
function renderInsideChat(message) {
    try {
        var chatArea = document.querySelector('.chat-box');
        var temp = "\n                \n        <div class=\"chat-r\" " + message.id + ">\n            <div class=\"sp\"></div>\n            <div class=\"mess mess-r\">\n                <p>\n                   " + message.text + "\n                </p>\n            </div>\n        </div>\n    </div>";
        chatArea.insertAdjacentHTML("beforeend", temp);
        texting.value = " ";
    }
    catch (error) {
        console.error(error);
    }
    ;
}
;
function renderOldConversation() {
    userfiltered[0].message.forEach(function (element) {
        renderInsideChat(element);
    });
}
renderOldConversation();
