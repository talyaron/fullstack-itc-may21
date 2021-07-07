let getContactSelected = [];
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
    ev.preventDefault();
    const text = ev.target.elements.text.value;
    const msg: Mensaje = new Mensaje(text);
    allOfMsgs.addNewMsg(msg);
    window.location.reload();
    
    
    
}
// render on DOM
function renderOnDOM() {
    const data :HTMLElement = document.querySelector(".data");
    allOfMsgs.msgs.forEach(msg => {
        data.insertAdjacentHTML('beforeend',`<div class="allmsgs chat_wrapper--user1"><p>${msg.text}</p></div>`);
        
    });
    let contactForChat = JSON.parse(localStorage.getItem("contactForChat"));
    console.log(contactForChat);
    // const titleContact = document.querySelector(".title_contact");
    const headerContact = document.querySelector(".header_profile");
    
    headerContact.insertAdjacentHTML('beforeend',`<div class="headrestyle"><img style="width: 6.5rem; height: 6rem; position: relative; left: 3rem;" class="header_img_profile"
    src="${contactForChat.profileImg}"
    alt=""><h1>${contactForChat.name}</h1></div>`);
    // imgContact.insertAdjacentHTML('beforeend',`<img class="header_img_profile"
    // src="${contactForChat.profileImg}"
    // alt="">`);
}

// function showPersonaOnDOM() {
//     const allPpl = JSON.parse(localStorage.getItem('contactos'));
//     // const lastPersonaIndex = allPpl.length - 1;
//     const lastPersona = allPpl[personClicked];
//     const data = document.querySelector(".data");
//     data.insertAdjacentHTML('beforeend',`<div class="allmsgs chat_wrapper--user1"><p>${msg.text}</p></div>`);
// }

renderOnDOM();
// showPersonaOnDOM();

function idContactForChat(id){
    let getContactChat = JSON.parse(localStorage.getItem("contactos"));
    const idContact = getContactChat.find((contact) => contact.id === id);
    // renderContactInChat(getContactSelected);
    console.log(idContact);
    console.log(idContact.name);
    localStorage.setItem("contactForChat", JSON.stringify(idContact));
}

// function renderContactInChat() {
//     // const containerChat: HTMLElement = document.querySelector(".header_profile");
//     let contactForChat = JSON.parse(localStorage.getItem("contactForChat"));
//     console.log(contactForChat);
//     // containerChat.appendChild(div)
//     // let htmlChat= "";
 
//     //     htmlChat += `
//     //     <img class="header_img_profile"
//     //     src="${contactForChat.profileImg}"
//     //     alt="">
//     //   <h1>${contactForChat.name}</h1>
//     //   <div class="header_icon">
//     //     <a class="btn_icons" href=""><i
//     //         class="fa fa-search fa fa-2x search_icon"></i></a>
//     //     <a class="btn_icons" href=""><i class="fas fa-ellipsis-v fa-2x"></i></a>
//     //   </div>`

//       const titleContact = document.querySelector(".title_contact");
//       const imgContact = document.querySelector(".header_profile");
      
//       titleContact.insertAdjacentHTML('beforeend',`<h1>${contactForChat.name}</h1>`);
//       imgContact.insertAdjacentHTML('beforeend',`<img class="header_img_profile"
//       src="${contactForChat.profileImg}"
//       alt="">`);
//       console.log(contactForChat.name)

//     //   containerChat.innerHTML = htmlChat;

// }


    