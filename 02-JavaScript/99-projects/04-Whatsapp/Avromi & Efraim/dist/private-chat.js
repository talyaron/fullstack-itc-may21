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
console.log(thisContact);
// const textInput = document.querySelector("#input")
// textInput.addEventListener("change", myClassChange);
// function myClassChange() {
//     console.log("Hello");
//     const sendButton:HTMLElement = document.querySelector('.sendButton')
//     sendButton.style.display === "none"
// }
var form = document.querySelector('.form');
form.addEventListener('submit', logSubmit);
function logSubmit(event) {
    var message = event.target.elements.message.value;
    console.log("Time stamp: " + event.timeStamp + message);
    event.preventDefault();
}
