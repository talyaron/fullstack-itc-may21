function setScrollHeight() {
    var messagesDiv = document.querySelector(".messages");
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
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
var contactName = document.querySelector(".nav__contact h2");
contactName.innerHTML = "" + thisContact[0].name;
var contactImg = document.querySelector(".nav__img__wrapper");
contactImg.innerHTML = "<img class=\"nav__img\"\nsrc=\"" + thisContact[0].imgUrl + "\"\nalt = \"\" >";
function updateLastSent() {
    var lastSent = document.querySelector(".nav__contact p");
    var index = parseInt(thisContact[0].chats.length - 1);
    lastSent.innerHTML = "Last Sent: " + thisContact[0].chats[index].timeStamp + " ";
}
function renderMessages(arrToRender) {
    var messagesDiv = document.querySelector(".messages");
    var html = "";
    thisContact[0].chats.forEach(function (chat) {
        html += "<div class=\"single__message\" oncontextmenu = \"contextHandler();return false;\" >\n    <p>" + chat.message + " </p>\n        <div class=\"single__message__timestamp\"> " + chat.timeStamp + " </div>\n            </div>";
        messagesDiv.innerHTML = html;
    });
}
function openCamera() {
    console.log("open the camera");
}
function contextHandler() {
    document.getElementById("contextMenu").style.display = "block";
    // alert('my alert ')
}
var doc = document.querySelector('html');
doc.addEventListener("click", closeContext);
function closeContext() {
    document.getElementById("contextMenu").style.display = "none";
}
var form = document.querySelector('.form');
form.addEventListener('submit', logSubmit);
function logSubmit(event) {
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
    localStorage.setItem('contacts', JSON.stringify(allContacts));
}
function removeMic() {
    var input = document.getElementById("input");
    input.addEventListener("keyup", function () {
        var mic = document.querySelector(".fa-microphone");
        mic.style.display = "none";
        var plane = document.querySelector(".fa-paper-plane");
        plane.style.display = "block";
    });
}
removeMic();
updateLastSent();
renderMessages(thisContact);
var microphone = document.querySelector(".fa-microphone");
microphone.disabled = "true";
