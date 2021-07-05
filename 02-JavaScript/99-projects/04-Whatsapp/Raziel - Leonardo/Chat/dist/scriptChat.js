var userInfo = JSON.parse(localStorage.getItem('userInfo'));
var root = document.querySelector('#main');
var chatRoot = document.querySelector('#insideMain');
var userNumber = localStorage.getItem('numberToSearch');
var userfiltered = userInfo.filter(function (element) { return (element.number == userNumber); });
//Render the chat of the User
function renderChat(userfiltered) {
    try {
        var html = userfiltered.map(function (element) {
            return ("<div class=\"chat-window__header\" onclick='redirectBack()'>\n                <div class=\"chat-window__header--left\">\n                    <img   class=\"chat-window__contact--img\" src=\"" + element.picture + "\">\n                    <div class=\"contact-name-and-phone\">\n                        <span class=\"chat-window__name\">" + element.name + "</span>\n                        <span class=\"chat-window__phone\">" + element.number + "</span>\n                    </div>\n                </div>\n                <div class=\"chat-window__header--left\">\n                    <img class=\"chat-window-search-icon\" src=\"Img_whatsapp/search-icon.svg\">\n                    <img class=\"chat-window-menu-icon\"  src=\"Img_whatsapp/menu-icon.svg\">\n                </div>\n            </div>\n            <div class=\"chat-window__header\">\n            <div class=\"chat-window__header--left\">\n        \n        <div class=\"chat-window\">\n            <div class=\"type-message-bar\">\n                <div class=\"type-message-bar__left\">\n                    <img src=\"Img_whatsapp/icons.svg\" alt=\"\">\n                    <img src=\"Img_whatsapp/attach-icon.svg\">\n    \n                </div>\n                <div class=\"type-message-bar__center\">\n                    <input id=\"texting\" type=\"text\" placeholder=\"Type something\">\n                </div>\n                <div id=\"sendButton\" class=\"type-message-bar__right\">\n                    <img src=\"Img_whatsapp/audio-icon.svg\" alt=\"\">\n                </div>\n            </div>\n        </div>");
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
renderChat(userfiltered);
//With this function I handle the form:
var handleSubmitMessage = function (ev) {
    ev.preventDefault();
    try {
        var text_1 = { text: ev.target.elements.chat.value, id: Math.random().toString(16).slice(2), time: new Date() };
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
        window.location.href = './whatsapp.html';
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
    var message = { text: texting.value, id: Math.random().toString(16).slice(2), time: new Date() };
    userfiltered.forEach(function (element) {
        element.message.push(message);
    });
    renderInsideChat(message);
});
function renderInsideChat(message) {
    try {
        var newTag = document.createElement("div");
        newTag.innerHTML = "<div class=\"chat-window__name\" id=\"" + message.id + "\">" + message.text + "</div>";
        chatRoot.appendChild(newTag);
    }
    catch (error) {
        console.error(error);
    }
    ;
}
;
