const savedContacts = JSON.parse(localStorage.getItem("contactsData"));
const getID = localStorage.getItem("contactID");
const userFilter = savedContacts.filter((el) => el.contactId === getID); //YS: Why is this up here? 
const conversation = <HTMLInputElement>(document.querySelector(".envelope__typing--input-entry"));
const envelope__contact = document.querySelector(".renderFirst");
const chatContainer: any = document.querySelector(".envelope__chat");
const send = <HTMLInputElement>document.querySelector("#send");
const input = <HTMLInputElement>(document.querySelector(".envelope__typing--input-entry"));
envelope__contact.addEventListener('click', redirect2);

function renderChats(): void {
  let html: string = "";

  userFilter.forEach((element) => {
    html += `<div class="renderSecond">
                 <img src="${element.image}" alt="" class="renderSecond__imageA">              
                 <h4 class="renderSecond__nameA">${element.contactName}</h4>                    
              </div> `; //YS: Why did you leave the alt empty in your image. It is important to always have an alt in case your image does not load (alt shoud be text)
  });
  try {
    envelope__contact.innerHTML = html;
    if (!html) throw new Error("An error occurs when you want to render..");
  } catch (error) {
    console.error(error);
  }
}

const currentUrl = window.location.href;
const idIndex = currentUrl.indexOf("id=");
const id = currentUrl.slice(idIndex + 3);

renderChats();

const currentUser = savedContacts.find(contact => contact.contactId === id); //YS: This is the same as your userFilter in line 3.  

send.addEventListener("click", sendMessage);

//press enter and send a msg
input.addEventListener("keyup", (e) => { //YS: Nice! 
  if (e.keyCode === 13) {
    sendMessage();
  }
});

function sendMessage() {
  const messagesArray = [];
  const message = conversation.value;
  messagesArray.push(message);
  messagesArray.forEach((msg) => {
    const messageElement = `<div class="message-bubble"><div class="message-text">${msg}</div></div> `;
    chatContainer.insertAdjacentHTML("beforeend", messageElement);
  });
  conversation.value = ""; //serves for refresh and delete what you typed before in the input bar
}


function redirect2() { //YS: Bad naming - should be goBack or something else
  try {
    window.location.href = "first.html";
    if (!window.location.href)
      throw new Error("The page where you want to redirect it doesn´t exist!");
  } catch (error) {
    console.error(error);
  }
}

//open paperClip to add files
const paperClip = document.querySelector('.paper')    //YS: Dont leave unfinished code. 

function open() {
  let file = document.getElementById("file").click();
}

paperClip.addEventListener('click', open)

