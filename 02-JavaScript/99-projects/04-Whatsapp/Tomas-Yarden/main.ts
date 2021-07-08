/*This is the main WhatsApp page.
Features:
Top modal to simulate the WhatsApp menu; 
search area (for now, unfunctional) navbar;
bottom modal for adding contacts with form;
when clicking the image, the 2nd navbar pops up (cloned from WhatsApp) with the option to delete;
when clicking the info section of a message, user is redirected to the chat page
*/

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

class ContactList {
    contacts: Array<Contact> = []

//Adding a new contact
render():void {
    try {
      let rootDiv:HTMLDivElement = document.querySelector(".saved-contacts-root");
      let htmlPattern:string = "";
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

  remove(id:string):void {
    try {
      const indexToRemove:number = this.contacts.findIndex(
        (element) => element.id === id
      );
      this.contacts.splice(indexToRemove, 1);
      this.render();
      returnToMainNav(id) //Update local storage:
      let contactSerialized:string = JSON.stringify(whatsAppContacts)
        localStorage.setItem("whatsAppContacts", contactSerialized)
        let contactDeserialized:string = JSON.parse(localStorage.getItem("whatsAppContacts"))
    } catch (error) {
        console.error(error);
    }
  }
  edit(id:string):void {
      try {
        const indexToEdit:number = this.contacts.findIndex(
            (element) => element.id === id
        )
        console.dir(this.contacts[indexToEdit]);
        
        // const editedName:string = this.contacts.
        
        this.render();
        returnToMainNav(id)
        let contactSerialized:string = JSON.stringify(whatsAppContacts)
        localStorage.setItem("whatsAppContacts", contactSerialized)
        let contactDeserialized:string = JSON.parse(localStorage.getItem("whatsAppContacts"))
        

      } catch (error) {
          console.error(error);
          
      }
  }
}

let whatsAppContacts = new ContactList()

//Adding a new contact:
const handleSubmit = (event:any):void => {
    try {
        if (whatsAppContacts === null) {
            throw new Error("Must have the contacts array!")
        }
        event.preventDefault()
        const img:string = event.target[0].value
        const name:string = event.target[1].value
        const message:string = event.target[2].value
        const time:Date = event.target[3].value

        const newContact = new Contact(
            img, name, message, time
        )
        whatsAppContacts.contacts.push(newContact)

        //Update local storage:
        let contactSerialized:string = JSON.stringify(whatsAppContacts)
        
        localStorage.setItem("whatsAppContacts", contactSerialized)
        let contactDeserialized:string = JSON.parse(localStorage.getItem("whatsAppContacts"))
        
        //Refresh contacts list
        whatsAppContacts.render()

        event.target.reset(); //Now just close the modal:
        const bottomModal:HTMLFormElement = document.querySelector('.add-contact')
        bottomModal.style.display="none"
    } catch (error) {
        console.error(error);        
    } 
}

//Delete contact onclick:
const handleDelete = (id:string):void => {
    try {
        if (whatsAppContacts === null) {
            throw new Error("Must have the contacts array!")}
        whatsAppContacts.remove(id);
    } catch (error) {
        console.error(error);
    }    
}

const handleEdit = (id:string):void => {
try {
    if (whatsAppContacts === null) {
        throw new Error("Must have the contacts array!")}
    whatsAppContacts.edit(id)
} catch (error) {
    console.error(error);
    
}
}

/* Modal and helper functions */

//Top modal:
const openMenuModal = (event:MouseEvent):void => {
    try {
        const topModal:HTMLDivElement = document.querySelector('.top-modal')
        topModal.style.display="block"
    } catch (error) {
        console.error(error)
    }
    
}
const closeMenuModal = (event:MouseEvent):void => {
    try {
        const body:any = document.getElementsByName('body')
        const topModal:HTMLDivElement = document.querySelector('.top-modal')
        topModal.style.display="none"
    } catch (error) {
        console.error(error)
    }
    
}
//Add contact modal form:
const openBottomModal = (event:MouseEvent):void => {
    try {
        const bottomModal:HTMLFormElement = document.querySelector('.add-contact')
        bottomModal.style.display="flex"
    } catch (error) {
        console.error(error)
    }
}

const openSearch = (event:MouseEvent):void => {
    try {
        const menu:HTMLElement = document.querySelector("nav")
        menu.hidden=true
        const searchMenu:HTMLDivElement = document.querySelector('#search-nav')
        searchMenu.attributes[1].value = "display: flex"

    } catch (error) {
        console.error(error);
        
    }
}

//Alternate between the main and edit navbars:
const showEditNav = (event:MouseEvent):void => {
    try {
     const menu:HTMLElement = document.querySelector("nav")
     menu.hidden=true
     const editMenu:HTMLElement = document.querySelector("#editNav")
     editMenu.attributes[1].value = "display: block"
     
    } catch (error) {
        console.error(error);     
    }
 
     
 }
 //Close bottom modal after adding contact:
 const returnToMainNav = (event:any):void => {
     try {
         const searchMenu:HTMLDivElement = document.querySelector('#search-nav')
         const editMenu:HTMLElement = document.querySelector("#editNav")
         searchMenu.attributes[1].value = "display: none"
         editMenu.attributes[1].value = "display: none"
         const menu:HTMLElement = document.querySelector("nav")
         menu.hidden=false
     } catch (error) {
         console.error(error);
     }
 }

//Redirection to the chat when clicking the info section of a contact:
const goToChat = (event:MouseEvent):void => {
    try {
        window.location.href = "/02-JavaScript/99-projects/04-Whatsapp/Tomas-Yarden/index.html"   
    } catch (error) {
        console.error(error);
    }
}