function setScrollHeight() {
    try {
        var messagesDiv = document.querySelector(".messages");
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
    catch (error) {
        console.error(error);
    }
}
window.onload = function (event) {
    setScrollHeight();
};
function goBack() {
    window.location.href = "index.html";
}
// Get Params From Query 
var urlSearchParams = new URLSearchParams(window.location.search);
var params = Object.fromEntries(urlSearchParams.entries());
//Get Array From Storage
var allContacts = JSON.parse(localStorage.getItem('contacts'));
//Filter Array by Params
var thisContact = allContacts.filter(function (contact) { return contact.contactId === params.contactId; });
var index = allContacts.findIndex(function (cont) { return cont.contactId === params.contactId; });
// let OurUse = thisContact.pop()
// console.log(OurUse); Would it have been better to work on this as an object?
var contactName = document.querySelector(".nav__contact h2");
contactName.innerHTML = "" + thisContact[0].name;
var contactImg = document.querySelector(".nav__img__wrapper");
contactImg.innerHTML = "<img class=\"nav__img\"\nsrc=\"" + thisContact[0].imgUrl + "\"\nalt = \"\" >";
function updateLastSent() {
    try {
        var lastSent = document.querySelector(".nav__contact p");
        var index_1 = parseInt(thisContact[0].chats.length - 1);
        lastSent.innerHTML = "Last Sent: " + thisContact[0].chats[index_1].timeStamp + " ";
    }
    catch (error) {
        console.error(error);
    }
}
function renderMessages(arrToRender) {
    try {
        var messagesDiv_1 = document.querySelector(".messages");
        var html_1 = "";
        thisContact[0].chats.forEach(function (chat) {
            chat.timeStamp = new Date(chat.timeStamp);
            var hrs = chat.timeStamp.getHours();
            var min = chat.timeStamp.getMinutes();
            if (min < 10) {
                min = "0" + min;
            }
            html_1 += "<div class=\"single__message\" oncontextmenu = \"contextHandler();return false;\" >\n    <p>" + chat.message + " </p>\n        <div class=\"single__message__timestamp\"> " + hrs + ":" + min + " </div>\n            </div>";
            messagesDiv_1.innerHTML = html_1;
        });
    }
    catch (error) {
        console.error(error);
    }
}
function openCamera() {
    console.log("open the camera");
}
function contextHandler() {
    try {
        document.getElementById("contextMenu").style.display = "block";
        var doc = document.querySelector('html');
        doc.addEventListener("click", function () {
            document.getElementById("contextMenu").style.display = "none";
        });
    }
    catch (error) {
        console.error(error);
    }
}
var form = document.querySelector('.form');
form.addEventListener('submit', logSubmit);
function logSubmit(event) {
    try {
        var message = event.target.elements.message.value;
        var timeStamp = new Date();
        var obj = {};
        obj["message"] = message;
        obj["timeStamp"] = timeStamp;
        thisContact[0].chats.push(obj);
        event.preventDefault();
        event.target.reset();
        renderMessages(thisContact);
        updateLastSent();
        setScrollHeight();
        var microphone = document.querySelector(".fa-microphone");
        microphone.style.display = "block";
        var plane = document.querySelector(".fa-paper-plane");
        plane.style.display = "none";
        allContacts.splice(index, 1);
        allContacts.unshift(thisContact[0]);
        localStorage.setItem('contacts', JSON.stringify(allContacts));
    }
    catch (error) {
        console.error(error);
    }
}
function removeMic() {
    var input = document.getElementById("input");
    input.addEventListener("keyup", function () {
        var mic = document.querySelector(".fa-microphone");
        mic.style.display = "none";
        var plane = document.querySelector(".fa-paper-plane");
        plane.style.display = "block";
    });
    var microphone = document.querySelector(".fa-microphone");
    microphone.disabled = "true";
}
removeMic();
updateLastSent();
renderMessages(thisContact);
