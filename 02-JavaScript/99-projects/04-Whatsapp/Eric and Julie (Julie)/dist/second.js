var savedContacts = JSON.parse(localStorage.getItem("contactsData"));
// So saved contacts is the list of contacts form the file
// console.log(savedContacts);
var conversation = (document.querySelector(".envelope__typing--input-entry"));
// console.log(window.location.href);
// This shows us the url, to check whether the id is showing
var currentUrl = window.location.href;
// You name the current url
var idIndex = currentUrl.indexOf("id=");
// give me the index of "id=" it's sliced off the "id="
// You're getting the parameter that sent in the query
var id = currentUrl.slice(idIndex + 3);
// console.log(id);
// Understand this bit
var currentUser = savedContacts.find(function (contact) { return contact.contactId === id; });
// console.log(currentUser);
// current user is find the relevant user from among the list of contacts
// The contact whose contact id matches the one we just took from the Query
// When you console log current user it shows just one person.
// conact here is a name that I am giving it.
// Example: "For each element in the array" do this (callback function)
// Here, the arrow function in one line, calls, and returns (currentUser?).
// console.log(currentUser.contactName);
document.querySelector("#userName").innerHTML = currentUser.contactName;
var chatContainer = document.querySelector(".envelope__chat");
var send = document.querySelector("#send");
send.addEventListener("click", sendMessage);
function sendMessage() {
    var messagesArray = [];
    var message = conversation.value;
    messagesArray.push(message);
    messagesArray.forEach(function (msg) {
        var messageElement = "<div>" + msg + "</div> ";
        chatContainer.insertAdjacentHTML("beforeend", messageElement);
    });
    conversation.value = ""; //serves for refresh and delete what you typed before in the input bar
}
console.log(conversation);
var messageList = new MessageList();
function sendConversation() {
    var inputMessage = conversation.value;
    var message = new Message(inputMessage, "1234");
    messageList.addMessage(message);
    conversation.value = "";
}
function redirect2() {
    try {
        window.location.href = "index.html";
        if (!window.location.href)
            throw new Error("The page where you want to redirect it doesn´t exist!");
    }
    catch (error) {
        console.error(error);
    }
}
// This is a JS redirect, you could have done it with a link.
