function setScrollHeight() {
    try{
    const messagesDiv = document.querySelector(".messages")
    if (!messagesDiv) {
        throw new Error('No message div found!')
    }
    messagesDiv.scrollTop = messagesDiv.scrollHeight
} catch (e) {
    console.error(e)
}}
window.onload = (event) => {
    try{
    setScrollHeight()
}catch (e) {
    console.error(e)
}}

function goBack() {
    try{
    window.location.href = "index.html"
}catch (e) {
    console.error(e)
}}

// Get Params From Query 
const urlSearchParams = new URLSearchParams(window.location.search);
if (!urlSearchParams) {
    throw new Error('No search params!')
}
const params = Object.fromEntries(urlSearchParams.entries());
if (!params) {
    throw new Error('No params detected!')
}
//Get Array From Storage
const allContacts = JSON.parse(localStorage.getItem('contacts'));
if (!allContacts) {
    throw new Error('Couldnt find anything in local storage!')
}


//Filter Array by Params
const thisContact = allContacts.filter(contact => contact.contactId === params.contactId);
const index = allContacts.findIndex(cont => cont.contactId === params.contactId)
// let OurUse = thisContact.pop()
// console.log(OurUse); Would it have been better to work on this as an object?

const contactName = document.querySelector(".nav__contact h2")
contactName.innerHTML = `${thisContact[0].name}`
const contactImg = document.querySelector(".nav__img__wrapper")
contactImg.innerHTML = `<img class="nav__img"
src="${thisContact[0].imgUrl}"
alt = "" >`

function updateLastSent() {
    try{
    const lastSent = document.querySelector(".nav__contact p")
    let index: number = parseInt(thisContact[0].chats.length - 1);
    lastSent.innerHTML = `Last Sent: ${thisContact[0].chats[index].timeStamp} `
}catch (e) {
    console.error(e)
}}

function renderMessages(arrToRender: Array<Contact>) {
    try{
    const messagesDiv = document.querySelector(".messages")
    let html = "";
    thisContact[0].chats.forEach((chat) => {

        chat.timeStamp = new Date(chat.timeStamp)
        const hrs = chat.timeStamp.getHours()
        let min = chat.timeStamp.getMinutes()
        if (min < 10) {
            min = `0${min}`
        }
        html += `<div class="single__message" oncontextmenu = "contextHandler();return false;" >
    <p>${chat.message} </p>
        <div class="single__message__timestamp"> ${hrs}:${min} </div>
            </div>`
        messagesDiv.innerHTML = html
    })

}catch (e) {
    console.error(e)
}}



function openCamera() {
    try{
    console.log("open the camera");
}catch (e) {
    console.error(e)
}}

function contextHandler() {
    try{
    document.getElementById("contextMenu").style.display = "block";
    const doc = document.querySelector('html')
    doc.addEventListener(`click`, () => {
        document.getElementById("contextMenu").style.display = "none";
    });
}catch (e) {
    console.error(e)
}}



const form = document.querySelector('.form')
form.addEventListener('submit', logSubmit);
function logSubmit(event) {
    try{
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
    const microphone: any = document.querySelector(".fa-microphone");
    microphone.style.display = "block";
    const plane: any = document.querySelector(".fa-paper-plane");
    plane.style.display = "none"
    allContacts.splice(index,1)
    allContacts.unshift(thisContact[0])
    localStorage.setItem('contacts', JSON.stringify(allContacts))
}catch (e) {
    console.error(e)
}}


function removeMic() {
    try{
    const input = document.getElementById("input")
    input.addEventListener("keyup", () => {
        const mic: any = document.querySelector(".fa-microphone");
        mic.style.display = "none"
        const plane: any = document.querySelector(".fa-paper-plane");
        plane.style.display = "block"
    });
    const microphone: any = document.querySelector(".fa-microphone");
    microphone.disabled = "true"
}catch (e) {
    console.error(e)
}}
removeMic()
updateLastSent()
renderMessages(thisContact)





