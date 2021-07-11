var savedContacts = JSON.parse(localStorage.getItem("contactsData"));
var getID = localStorage.getItem("contactID");
var userFilter = savedContacts.filter(function (el) { return el.contactId === getID; }); //YS: Why is this up here? 
var conversation = (document.querySelector(".envelope__typing--input-entry"));
var envelope__contact = document.querySelector(".renderFirst");
var chatContainer = document.querySelector(".envelope__chat");
var send = document.querySelector("#send");
var input = (document.querySelector(".envelope__typing--input-entry"));
envelope__contact.addEventListener('click', redirect2);
function renderChats() {
    var html = "";
    userFilter.forEach(function (element) {
        html += "<div class=\"renderSecond\">\n                 <img src=\"" + element.image + "\" alt=\"\" class=\"renderSecond__imageA\">              \n                 <h4 class=\"renderSecond__nameA\">" + element.contactName + "</h4>                    \n              </div> "; //YS: Why did you leave the alt empty in your image. It is important to always have an alt in case your image does not load (alt shoud be text)
    });
    try {
        envelope__contact.innerHTML = html;
        if (!html)
            throw new Error("An error occurs when you want to render..");
    }
    catch (error) {
        console.error(error);
    }
}
var currentUrl = window.location.href;
var idIndex = currentUrl.indexOf("id=");
var id = currentUrl.slice(idIndex + 3);
renderChats();
var currentUser = savedContacts.find(function (contact) { return contact.contactId === id; }); //YS: This is the same as your userFilter in line 3.  
send.addEventListener("click", sendMessage);
//press enter and send a msg
input.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        sendMessage();
    }
});
function sendMessage() {
    var messagesArray = [];
    var message = conversation.value;
    messagesArray.push(message);
    messagesArray.forEach(function (msg) {
        var messageElement = "<div class=\"message-bubble\"><div class=\"message-text\">" + msg + "</div></div> ";
        chatContainer.insertAdjacentHTML("beforeend", messageElement);
    });
    conversation.value = ""; //serves for refresh and delete what you typed before in the input bar
}
function redirect2() {
    try {
        window.location.href = "first.html";
        if (!window.location.href)
            throw new Error("The page where you want to redirect it doesn´t exist!");
    }
    catch (error) {
        console.error(error);
    }
}
//open paperClip to add files
var paperClip = document.querySelector('.paper'); //YS: Dont leave unfinished code. 
function open() {
    var file = document.getElementById("file").click();
}
paperClip.addEventListener('click', open);
