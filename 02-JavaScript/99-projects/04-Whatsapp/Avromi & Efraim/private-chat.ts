function goBack() {
    window.location.href = "index.html"
}

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const allContacts = JSON.parse(localStorage.getItem('contacts'));
// console.log(params.contactId);
// console.log(allContacts);

const thisContact = allContacts.filter(contact => contact.contactId === params.contactId);


const contactName = document.querySelector(".nav__contact h2")
contactName.innerHTML = `${thisContact[0].name}`

function updateLastSent() {
    const lastSent = document.querySelector(".nav__contact p")
    lastSent.innerHTML = `Last Sent: ${thisContact[0].chats[0].timeStamp}`
}

console.log(thisContact);

// const textInput = document.querySelector("#input")
// textInput.addEventListener("change", myClassChange);
// function myClassChange(event) {
//     console.log(event.key);
//     const sendButton:HTMLElement = document.querySelector('.sendButton')
//     sendButton.style.display === "none"
// }

const form = document.querySelector('.form')
form.addEventListener('submit', logSubmit);
function logSubmit(event) {
    const message = event.target.elements.message.value;
    const timeStamp = new Date()
    const obj = {};
    obj["message"] = message;
    obj["timeStamp"] = timeStamp;
    thisContact[0].chats.unshift(obj)
    console.log(`Time stamp: timeStamp` + message)
    event.preventDefault();
    event.target.reset();
    updateLastSent()
    console.log(thisContact);
    console.log(allContacts);
    localStorage.setItem('contacts', JSON.stringify(allContacts))
}






