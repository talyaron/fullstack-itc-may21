interface Message {
    message: any,
    timeStamp: Date

}

class Contact {
    name: string;
    imgUrl: string;
    phone: number;
    chats: Array<Message>;
    contactId: string;
    constructor(name, imgUrl, phone, chats = [{ message: "New Conversation", timeStamp: new Date }]) {
        this.name = name;
        this.imgUrl = imgUrl;
        this.phone = phone;
        this.chats = chats;
        this.contactId = Math.random().toString(16).slice(2);


    }
}

class Contacts {
    contacts: Array<Contact> = [];
    constructor() {

    }


    addContact(contacts: Contact) {
        try {
            this.contacts.unshift(contacts);
        } catch (e) {
            console.error(e)
        }
    };

    renderContacts(domElement: Element) {
        try {
            
            let html: string = this.contacts.map(contact => {
                const timeHoursAndMinutes = new Date (contact.chats[0].timeStamp)
            const hrs:number = timeHoursAndMinutes.getHours()
            let min:any = timeHoursAndMinutes.getMinutes()
            if (min < 10) {
                min = `0${min}`
            }
                return (
                    `<div class="holder__contact" id="${contact.contactId}" onclick="moveToPrivateChat('${contact.contactId}')">` +
                    `<img class="holder__contact__image" src="${contact.imgUrl}">` +
                    `<div class="holder__contact__name">${contact.name}</div>` +
                    `<div class="holder__contact__chat">${contact.chats[0].message}</div>` +
                    `<div class="holder__contact__timestamp">${hrs}:${min}</div>` +
                    `<div class="holder__contact__unread" id="delete" onclick="deleteContact('${contact.contactId}')">x</div>` +
                    `</div>`
                )
            }).join('')

            domElement.innerHTML = html;
        } catch (e) {
            console.error(e)
        }
    }
    findIndexes(contactID: string) {
        try {
            const index: number = this.contacts.findIndex(cnt => cnt.contactId === contactID)
            return index;
        } catch (e) {
            console.error(e)
        }
    }
}


const contacts: Contacts = new Contacts();

function moveToPrivateChat(id:string) {
    try {
        window.location.href = `./private-chat.html?contactId=${id}`
    } catch (e) {
        console.error(e)
    }
}
let image:any = ''
function getImgData() {
    try{
    const chooseFile = document.getElementById("file");
    chooseFile.addEventListener('change', ()=>{
    const files:any = chooseFile.files[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        image = this.result 
      });    
    }
  })}catch (e) {
    console.error(e)
}}

  getImgData()
function handleSubmit(ev): any {
    ev.preventDefault();
    try {
        let imgUrl = image
       
        const name: string = ev.target.children.name.value;
        const phoneNumber: number = ev.target.children.number.value;
        const holder: Element = document.querySelector('.holder');
        if (!holder) {
            throw new Error('No holder!')
        }
        contacts.addContact(new Contact(name, imgUrl, phoneNumber));
        contacts.renderContacts(holder);
        localStorage.setItem('contacts', JSON.stringify(contacts.contacts))
        document.getElementById("myForm").style.display = "none";
        ev.target.reset();
        
    } catch (e) {
        console.error(e)
    }
}

const deleteContact = (conatctID: string) => {
    try {
        window.event.cancelBubble = true
        contacts.contacts = JSON.parse(localStorage.getItem('contacts'));
        const index: number = contacts.findIndexes(conatctID)
        if (!contacts) {
            throw new Error('No product list detected!')
        }
        contacts.contacts.splice(index, 1); 
        addToDomWithArray(contacts.contacts);
        localStorage.setItem('contacts', JSON.stringify(contacts.contacts))
    } catch (e) {
        console.error(e)
    }
};


const addToDomWithArray = (searchResults: Array<any>) => {
    try {
        const holder: HTMLElement = document.querySelector('.holder');
        if (!holder) {
            throw new Error('No holder available!')
        }
        holder.innerHTML = ``;

        if (searchResults.length === 0) { holder.innerHTML = 'no results available'; return; }
        searchResults.forEach((contact) => {
            const index: number = parseInt(contact.chats.length - 1)
            const timeHoursAndMinutes = new Date (contact.chats[index].timeStamp)
            const hrs:number = timeHoursAndMinutes.getHours()
            let min:any = timeHoursAndMinutes.getMinutes()
            if (min < 10) {
                min = `0${min}`
            }

            holder.innerHTML += (
                `<div class="holder__contact" id="${contact.contactId}" onclick="moveToPrivateChat('${contact.contactId}')">` +
                `<img class="holder__contact__image" src="${contact.imgUrl}">` +
                `<div class="holder__contact__name">${contact.name}</a></div>` +
                `<div class="holder__contact__chat">${contact.chats[index].message}</div>` +
                `<div class="holder__contact__timestamp">${hrs}:${min}</div>` +
                `<div class="holder__contact__unread delete" onclick="deleteContact('${contact.contactId}')">x</div>` +
                `</div>`
            )
        })
    } catch (e) {
        console.error(e)
    }
}
const findContactSearch = (chatSearch: Array<Contact>, searchTerm: string):Array<Contact> => {
    try {
        const userRegEx: RegExp = new RegExp(searchTerm, 'gmi');
        const searchedUsers: Array<Contact> = chatSearch.filter(contactName => userRegEx.test(contactName.name));

        return searchedUsers;
    } catch (e) {
        console.error(e)
    }
}

const findTextInMessages = (searchTerm: string): Array<Contact> => {
    try {
       
        const termRegEx: RegExp = new RegExp(searchTerm, 'i');

        let searchedMessages = contacts.contacts.filter(contact =>  contact.chats.some(message => termRegEx.test(message.message)))
   
      return searchedMessages
        
    } catch (e) {
        console.error(e)
    }
}
const handleKeyUp = (ev: any) => {
    try {
        ev.preventDefault();
        let searchTerm: string = ev.target.value;
        const results: Array<Contact> = findContactSearch(contacts.contacts, searchTerm);
        const searchMessages: Array<Contact> = findTextInMessages(searchTerm)
        let finalSearchArrayResults: Array<Contact> = results.concat(searchMessages)
        var obj = {};
        for ( var i=0; i < finalSearchArrayResults.length; i++ )
            obj[finalSearchArrayResults[i]['name']] = finalSearchArrayResults[i];
            finalSearchArrayResults= new Array();
        for ( var key in obj )
        finalSearchArrayResults.push(obj[key]);
        addToDomWithArray(finalSearchArrayResults)
        if(searchTerm.length == 0){
           addToDomWithArray(contacts.contacts)
        }
    } catch (er) {
        console.error(er)
    }
}

function renderContactsFromLocalStorage() {
    try {
        window.addEventListener('load', ()=>{
        const render: Array<any> = JSON.parse(localStorage.getItem('contacts'))
        if (render != null) {
            addToDomWithArray(render)
            contacts.contacts = render
        }})
    } catch (e) {
        console.error(e)
    }
}
renderContactsFromLocalStorage()


function openForm() {
    try {
        const formOpen: HTMLElement = document.querySelector(".header__new-convo");
        formOpen.addEventListener('click', ()=>{
        document.getElementById("myForm").style.display = "block";
    })} catch (e) {
        console.error(e)
    }
}
openForm()

function closeForm() {
    try {
        const formClose: HTMLElement = document.querySelector(".button--cancel");
        formClose.addEventListener('click', ()=>{
        document.getElementById("myForm").style.display = "none";
    })} catch (e) {
        console.error(e)
    }
}
closeForm()
let x = false
function editButtonRevealAndHide() {
    try {
        const editButton: HTMLElement = document.querySelector(".header__edit");
        editButton.addEventListener("click", ()=>{
        let indices = document.querySelectorAll(".holder__contact__unread")
        let unread: Array<HTMLElement> = document.querySelectorAll(".holder__contact__unread");
        for (let i = 0; i <= indices.length; i++) {
            if (unread[i].style.display = "none") {
                unread[i].style.display = "block"
               
            }else {
                unread[i].style.display = "none"
               
            }
        }
    } ) 
    } catch (e) {
        console.error(e)
    }
}
editButtonRevealAndHide();



