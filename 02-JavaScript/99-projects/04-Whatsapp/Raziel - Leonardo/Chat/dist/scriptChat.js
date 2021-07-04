var userInfo = JSON.parse(localStorage.getItem('userInfo'));
var root = document.querySelector('#main');
//Render the chat of the User
function renderChat(userInfo) {
    try {
        var html = userInfo.map(function (element) {
            console.log(element.message);
            return ("<div class=\"chat-window__header\" onclick='redirectBack()'>\n                <div class=\"chat-window__header--left\">\n                    <img   class=\"chat-window__contact--img\" src=\"" + element.picture + "\">\n                    <div class=\"contact-name-and-phone\">\n                        <span class=\"chat-window__name\">" + element.name + "</span>\n                        <span class=\"chat-window__phone\">" + element.number + "</span>\n                    </div>\n                </div>\n                <div class=\"chat-window__header--left\">\n                    <img class=\"chat-window-search-icon\" src=\"Img_whatsapp/search-icon.svg\">\n                    <img class=\"chat-window-menu-icon\"  src=\"Img_whatsapp/menu-icon.svg\">\n                </div>\n            </div>");
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
renderChat(userInfo);
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
