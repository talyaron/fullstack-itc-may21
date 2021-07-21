let getContactSelected = [];
const headerContact = document.querySelector(".header_chat");
//method to add individual msg
class Mensaje {
    text: string;
    textId: string = "id" + Math.random().toString(16).slice(2);
    constructor(text: string) {
        this.text = text;
    }
}
//class to provide an array of all texts to local storage
class TodosLosMensajes {
    msgs: Array<Mensaje> = JSON.parse(localStorage.getItem('TodosLosMensajes')) ? JSON.parse(localStorage.getItem('TodosLosMensajes')) : [];
    //method to push new msg to the array
    addNewMsg(msg) {
        this.msgs.push(msg);
        localStorage.setItem("TodosLosMensajes", JSON.stringify(this.msgs));

    }
}
const allOfMsgs = new TodosLosMensajes();
//function for collecting text input 
//options: maybe try arrow function later + make it work by icon click
function handleSubmit(ev) {
    try {
        ev.preventDefault();
        const text = ev.target.elements.text.value;
        const msg: Mensaje = new Mensaje(text);
        allOfMsgs.addNewMsg(msg);
        window.location.reload();
    } catch (e) {
        console.error(e)
    }
}
// render on DOM
function renderOnDOM() {
    try {
        const data: HTMLElement = document.querySelector(".data");
        allOfMsgs.msgs.forEach(msg => {
            data.insertAdjacentHTML('beforeend', `<div class="allmsgs chat_wrapper--user1"><p>${msg.text}</p></div>`);

        });
        let contactForChat = JSON.parse(localStorage.getItem("contactForChat"));
        let groupForChat = JSON.parse(localStorage.getItem("groupForChat"));
       

        if (contactForChat && !groupForChat) {
            headerContact.insertAdjacentHTML('afterbegin', `<div class="info_chat"><img class="header_img_profile"
      src="${contactForChat.profileImg}"
      alt=""><h1 class="title_chat">${contactForChat.name}</h1><a href="index.html"><i class="far fa-arrow-alt-circle-left fa-4x arrow_icon"></i></a></div>`);
        } if (groupForChat && !contactForChat) {
            headerContact.insertAdjacentHTML('afterbegin', `<div class="info_chat"><img class="header_img_profile"
      src="${groupForChat.groupIMG}"
      alt=""><h1 class="title_chat">${groupForChat.groupName}</h1><a href="index.html"><i class="far fa-arrow-alt-circle-left fa-4x arrow_icon"></i></a></div>`);
        }
    } catch (e) {
        console.error(e)
    }
}

renderOnDOM();

function idContactForChat(id) {
    try {
        let getContactChat = JSON.parse(localStorage.getItem("contactos"));
        const idContact = getContactChat.find((contact) => contact.id === id);
        localStorage.setItem("contactForChat", JSON.stringify(idContact));
    } catch (e) {
        console.error(e)
    }
}

function idGroupForChat(id) {
    try {
        let getGroupChat = JSON.parse(localStorage.getItem("grups"));
        const idGroup = getGroupChat.find((group) => group.id === id);
        localStorage.setItem("groupForChat", JSON.stringify(idGroup));
        
    } catch (e) {
        console.error(e)
    }
}


