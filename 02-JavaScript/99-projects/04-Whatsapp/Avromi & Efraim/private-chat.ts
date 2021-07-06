function setScrollHeight() {
    const messagesDiv = document.querySelector(".messages")
    messagesDiv.scrollTop = messagesDiv.scrollHeight
}
window.onload = (event) => {
    setScrollHeight()
}

function goBack() {
    window.location.href = "index.html"
}

// Get Params From Query 
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
//Get Array From Storage
const allContacts = JSON.parse(localStorage.getItem('contacts'));


//Filter Array by Params
const thisContact = allContacts.filter(contact => contact.contactId === params.contactId);


const contactName = document.querySelector(".nav__contact h2")
contactName.innerHTML = `${thisContact[0].name}`
const contactImg = document.querySelector(".nav__img__wrapper")
contactImg.innerHTML = `<img class="nav__img"
src="${thisContact[0].imgUrl}"
alt = "" >`

function updateLastSent() {
    const lastSent = document.querySelector(".nav__contact p")
    let index: number = parseInt(thisContact[0].chats.length - 1);

    lastSent.innerHTML = `Last Sent: ${thisContact[0].chats[index].timeStamp} `
}

function renderMessages(arrToRender: Array<Contact>) {
    const messagesDiv = document.querySelector(".messages")
    let html = "";
    thisContact[0].chats.forEach((chat) => {
        html += `<div class="single__message" oncontextmenu = "contextHandler();return false;" >
    <p>${chat.message} </p>
        <div class="single__message__timestamp"> ${chat.timeStamp} </div>
            </div>`
        messagesDiv.innerHTML = html
    })

}



function openCamera() {
    console.log("open the camera");
}

function contextHandler(){
    document.getElementById("contextMenu").style.display = "block";
    // alert('my alert ')
}
const doc = document.querySelector('html')
doc.addEventListener(`click`, closeContext )

function closeContext(){
    document.getElementById("contextMenu").style.display = "none";
}


const form = document.querySelector('.form')
form.addEventListener('submit', logSubmit);
function logSubmit(event) {
    const message = event.target.elements.message.value;
    const timeStamp = new Date()
    const obj = {};
    obj["message"] = message;
    obj["timeStamp"] = timeStamp;
    thisContact[0].chats.push(obj)
    event.preventDefault();
    event.target.reset();
    renderMessages(thisContact)
    updateLastSent()
    setScrollHeight()
    const microphone = document.querySelector(".fa-microphone");
    microphone.style.display= "block";
    const plane: any = document.querySelector(".fa-paper-plane");
    plane.style.display = "none"
    localStorage.setItem('contacts', JSON.stringify(allContacts))
}


function removeMic(){
    const input = document.getElementById("input")
    input.addEventListener("keyup",()=>{
    const mic: any = document.querySelector(".fa-microphone");
    mic.style.display = "none"
    const plane: any = document.querySelector(".fa-paper-plane");
    plane.style.display = "block"
})}
removeMic()
updateLastSent()
renderMessages(thisContact)

const microphone: any = document.querySelector(".fa-microphone");
microphone.disabled = "true" 



