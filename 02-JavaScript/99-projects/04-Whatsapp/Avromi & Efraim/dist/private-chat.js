function goBack() {
    window.location.href = "index.html";
}
var urlSearchParams = new URLSearchParams(window.location.search);
var params = Object.fromEntries(urlSearchParams.entries());
var allContacts = JSON.parse(localStorage.getItem('contacts'));
// console.log(params.contactId);
// console.log(allContacts);
var thisContact = allContacts.filter(function (contact) { return contact.contactId === params.contactId; });
var contactName = document.querySelector(".nav__contact h2");
contactName.innerHTML = "" + thisContact[0].name;
function updateLastSent() {
    var lastSent = document.querySelector(".nav__contact p");
    lastSent.innerHTML = "Last Sent: " + thisContact[0].chats[0].timeStamp;
}
console.log(thisContact);
// const textInput = document.querySelector("#input")
// textInput.addEventListener("change", myClassChange);
// function myClassChange(event) {
//     console.log(event.key);
//     const sendButton:HTMLElement = document.querySelector('.sendButton')
//     sendButton.style.display === "none"
// }
var form = document.querySelector('.form');
form.addEventListener('submit', logSubmit);
function logSubmit(event) {
    var message = event.target.elements.message.value;
    var timeStamp = new Date();
    var obj = {};
    obj["message"] = message;
    obj["timeStamp"] = timeStamp;
    thisContact[0].chats.unshift(obj);
    console.log("Time stamp: timeStamp" + message);
    event.preventDefault();
    event.target.reset();
    updateLastSent();
    console.log(thisContact);
    console.log(allContacts);
    localStorage.setItem('contacts', JSON.stringify(allContacts));
}
