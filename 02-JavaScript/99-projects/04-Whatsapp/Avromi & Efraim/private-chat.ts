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

console.log(thisContact);

// const textInput = document.querySelector("#input")
// textInput.addEventListener("change", myClassChange);
// function myClassChange() {
//     console.log("Hello");
//     const sendButton:HTMLElement = document.querySelector('.sendButton')
//     sendButton.style.display === "none"
// }

const form = document.querySelector('.form')
form.addEventListener('submit', logSubmit);
function logSubmit(event) {
    const message = event.target.elements.message.value;
    console.log(`Time stamp: ${event.timeStamp}`+ message)
    event.preventDefault();
  }


