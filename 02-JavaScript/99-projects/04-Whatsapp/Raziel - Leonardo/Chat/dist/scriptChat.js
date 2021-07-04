var userInfo = JSON.parse(localStorage.getItem('userInfo'));
var root = document.querySelector('#root');
//Render the chat of the User
function renderChat(userInfo) {
    try {
        var html = userInfo.map(function (element) {
            console.log(element.message);
            return ("<div class=\"user__chat\">\n                <div><img class=\"user__chat__image\" src=\"" + element.picture + "\" alt=\"\"></div>\n                <div >" + element.name + "</div>\n                </div>\n                <div>" + element.message + "</div>");
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
