/*This is the main WhatsApp page, 
with modals and the option to add contact*/

//Top modal:
const openMenuModal = (event) => {
    try {
        const topModal:any = document.querySelector('.top-modal')
        topModal.style.display="block"
    } catch (error) {
        console.error(error)
    }
    
}
const closeMenuModal = (event) => {
    try {
        const body:any = document.getElementsByName('body')
        const topModal:any = document.querySelector('.top-modal')
        topModal.style.display="none"
    } catch (error) {
        console.error(error)
    }
    
}
//Add contact modal form:
const openBottomModal = (event) => {
    try {
        const bottomModal:any = document.querySelector('.add-contact')
        bottomModal.style.display="flex"
    } catch (error) {
        console.error(error)
    }
}

class Contact {
    image:string
    name:string
    message:string
    time: Date
    id: string;
    constructor(
        image:string,
        name:string,
        message:string,
        time: Date )
        {
        this.image = image
        this.name = name
        this.message = message
        this.id = Math.random().toString(16).slice(2);
        this.time = time
    }
}

class Contacts {
    contacts: Array<Contact> = [];

//Adding a new contact
render() {
    try {
      let rootDiv = document.querySelector(".saved-contacts-root");
      let htmlPattern = "";
      this.contacts.forEach((contact) => {
        htmlPattern += `<div class="contact-container">
        <img class="contact-container__contact-image" onclick="showEditNav(event)" src="${contact.image}">
        <div class="contact-container__info-container" onclick="goToChat(event)">
             <div class="contact-container__info-container__inner-container">
                 <div class="contact-name">${contact.name}</div>
                 <div class="time">${contact.time}</div>
             </div>
             <p class="last-message"><span class="tick"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg></span>${contact.message}</p>
         </div>
        </div>
    </div>`
      });
      rootDiv.innerHTML = htmlPattern;
    } catch (error) {
        console.error(error);
     }
  }

  remove(id: string): void {
    try {
      const indexToRemove = this.contacts.findIndex(
        (element) => element.id === id
      );
      this.contacts.splice(indexToRemove, 1);
      this.render();
      returnToMainNav(id) //Update local storage:
      let contactSerialized = JSON.stringify(whatsAppContacts)
        localStorage.setItem("whatsAppContacts", contactSerialized)
        let contactDeserialized = JSON.parse(localStorage.getItem("whatsAppContacts"))
    } catch (error) {
        console.error(error);
    }
  }
}

let whatsAppContacts = new Contacts();

//Adding a new contact:
const handleSubmit = (event) => {
    try {
        if (whatsAppContacts === null) {
            throw new Error("Must have the contacts array!")
        }
        event.preventDefault()
        const img = event.target[0].value
        const name = event.target[1].value
        const message = event.target[2].value
        const time = event.target[3].value

        const newContact = new Contact(
            img, name, message, time
        )
        whatsAppContacts.contacts.push(newContact)

        //Update local storage:
        let contactSerialized = JSON.stringify(whatsAppContacts)
        localStorage.setItem("whatsAppContacts", contactSerialized)
        let contactDeserialized = JSON.parse(localStorage.getItem("whatsAppContacts"))
        
        //Refresh contacts list
        whatsAppContacts.render()

        event.target.reset(); //Now just close the modal:
        const bottomModal:any = document.querySelector('.add-contact')
        bottomModal.style.display="none"
    } catch (error) {
        console.error(error);        
    } 
}
//Alternate between the main and edit navbars:
const showEditNav = (event) => {
   try {
    const menu = document.querySelector("nav")
    menu.hidden=true
    const editMenu = document.querySelector("#editNav")
    editMenu.attributes[1].value = "display: block"
    
   } catch (error) {
       console.error(error);     
   }

    
}
//Close bottom modal after adding contact:
const returnToMainNav = (event) => {
    try {
        const editMenu = document.querySelector("#editNav")
        editMenu.attributes[1].value = "display: none"
        const menu = document.querySelector("nav")
        menu.hidden=false
    } catch (error) {
        console.error(error);
    }
}
//Delete contact onclick:
const handleDelete = (id) => {
    try {
        if (whatsAppContacts === null) {
            throw new Error("Must have the contacts array!")}
        whatsAppContacts.remove(id);
    } catch (error) {
        console.error(error);
    }    
}

const goToChat = (event) => {
    window.location.href = "/02-JavaScript/99-projects/04-Whatsapp/Tomas-Yarden/index.html"
}