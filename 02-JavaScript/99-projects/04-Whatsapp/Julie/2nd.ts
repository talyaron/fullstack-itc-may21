const savedContacts = JSON.parse(localStorage.getItem("contactsData"));
const getID = localStorage.getItem("contactID");

const userFilter = savedContacts.filter(el => el.contactId===getID)
const conversation = <HTMLInputElement>(document.querySelector(".envelope__typing--input-entry"));

const envelope__contact = document.querySelector('.renderFirst');

function renderChats(): void {

  let html: string = "";

  userFilter.forEach(element => {

      html += `<div class="renderSecond">
                 <img src="${element.image}" alt="" class="renderSecond__imageA">              
                 <h4 class="renderSecond__nameA">${element.contactName}</h4>                    
              </div> `
  });
  try {
    envelope__contact.innerHTML = html;
      if (!html) throw new Error('An error occurs when you want to render..')
  } catch (error) {
      console.error(error)
  }
}



const currentUrl = window.location.href;
const idIndex = currentUrl.indexOf("id=");
const id = currentUrl.slice(idIndex + 3);

renderChats()



// Understand this bit

const currentUser = savedContacts.find((contact) => contact.contactId === id);

const chatContainer: any = document.querySelector(".envelope__chat");

const send = <HTMLInputElement>document.querySelector("#send");
const input = <HTMLInputElement>document.querySelector(".envelope__typing--input-entry");

send.addEventListener("click", sendMessage);

//press enter and send a msg
input.addEventListener('keyup', (e)=>{
  if(e.keyCode===13){
    sendMessage()
  }
})


function sendMessage() {
  const messagesArray = [];
  const message = conversation.value;
  messagesArray.push(message);
  messagesArray.forEach((msg) => {
    const messageElement = `<div>${msg}</div> `;
    chatContainer.insertAdjacentHTML("beforeend", messageElement);
  });
  conversation.value = "" //serves for refresh and delete what you typed before in the input bar
}

function redirect2() {
  try {
    window.location.href = 'first.html'
    if (!window.location.href) throw new Error('The page where you want to redirect it doesn´t exist!');
  } catch (error) {
    console.error(error)
  }
}

function abrir() {
  let file = document.getElementById("file").click();
  
}




