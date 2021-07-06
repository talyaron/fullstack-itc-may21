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
    thisContact[0].chats.reverse();
    lastSent.innerHTML = "Last Sent: " + thisContact[0].chats[0].timeStamp + " ";
}
function renderMessages(arrToRender) {
    var messagesDiv = document.querySelector(".messages");
    var html = "";
    thisContact[0].chats.forEach(function (chat) {
        html += "<div class=\"single__message\" oncontextmenu = \"javascript:alert('success!');return false;\" >\n    <p>" + chat.message + " </p>\n        <div class=\"single__message__timestamp\"> " + chat.timeStamp + " </div>\n            </div>";
        messagesDiv.innerHTML = html;
    });
}
function openCamera() {
    console.log("open the camera");
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
    console.log("Time stamp: timeStamp" + message);
    event.preventDefault();
    event.target.reset();
    renderMessages(thisContact);
    updateLastSent();
    setScrollHeight();
    console.log(thisContact);
    console.log(allContacts);
    localStorage.setItem('contacts', JSON.stringify(allContacts));
}
updateLastSent();
renderMessages(thisContact);
// const textInput = document.querySelector("#input")
// textInput.addEventListener("keyup", myClassChange);
// function myClassChange(event) {
//     console.log(event.key);
//     const sendButton:HTMLElement = document.querySelector('.sendButton')
//     sendButton.style.display === "none"
// }
