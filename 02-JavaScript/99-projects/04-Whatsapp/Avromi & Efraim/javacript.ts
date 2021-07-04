class Contact {
    name: string ;
    imgUrl: string;
    phone: number;
    chats: Array<object>;
    contactId: string;
    constructor(name, imgUrl, phone, chats=[{message:"New Message", timeStamp: new Date}]){
        this.name = name;
        this.imgUrl = imgUrl;
        this.phone = phone;
        this.chats = chats;
        this.contactId = Math.random().toString(16).slice(2);
        
        
    }}

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
    
        renderProducts(domElement: Element) {
            try {
                let html: string = this.contacts.map(contact => {
                    return (
                        `<div class="holder__contact" id="${contact.contactId}" onclick="hRef('${contact.contactId}')">` +
                    `<img class="holder__contact__image" src="${contact.imgUrl}">`+
                    `<div class="holder__contact__name">${contact.name}</div>`+
                    `<div class="holder__contact__chat">${contact.chats[0].message}</div>`+
                    `<div class="holder__contact__timestamp">${contact.chats[0].timeStamp}</div>`+
                    `<div class="holder__contact__unread" id="unread">6</div>`+
                    `<div class="holder__contact__unread" id="delete" onclick="deleteContact('${contact.contactId}')">x</div>`+
                `</div>`
                )
            }).join('')
                
                domElement.innerHTML = html;
            } catch (e) {
                console.error(e)
            }
        }
        findIndexes(contactID: string) {
            const index = this.contacts.findIndex(cnt => cnt.contactId === contactID)
            return index;
        }
}


const contacts: Contacts = new Contacts();

function hRef(id){
        window.location.href = `./private-chat.html?contactId=${id}`
    }


function handleSubmit(ev): any {
    ev.preventDefault();
    try {
        let imgUrl: string = ev.target.children.photo.value;
        let name: string = ev.target.children.name.value;
        let phoneNumber: number = ev.target.children.number.value;
        const holder = document.querySelector('.holder');
        if (!holder) {
            throw new Error('No holder!')
        }
        contacts.addContact(new Contact(`${name}`, `${imgUrl}`, phoneNumber));
        contacts.renderProducts(holder);
        localStorage.setItem('contacts', JSON.stringify(contacts.contacts))
        closeForm()
        ev.target.reset();
    } catch (e) {
        console.error(e)
    }
}


const deleteContact = (conatctID: string) => {
    try {
        window.event.cancelBubble = true
        const holder: Element = document.querySelector('.holder');
        if (!holder) {
            throw new Error('No shopping list detected!')
        }
        const index = contacts.findIndexes(conatctID)
        if (!contacts) {
            throw new Error('No product list detected!')
        }
        contacts.contacts.splice(index, 1); //YS: Why do you need two different arrays? You can use the same one and filter. 
        contacts.renderProducts(holder);
        console.log(contacts)
        localStorage.setItem('contacts', JSON.stringify(contacts.contacts))
    } catch (e) {
        console.error(e)
    }
};






const addToDom = (searchResults: Array<any>) => { 
    try {
        const holder: HTMLElement = document.querySelector('.holder');
        if (!holder) {
            throw new Error('No holder available!')
        }
        holder.innerHTML = ``;
        
        if (searchResults.length === 0) { holder.innerHTML = 'no results available'; return; }
        searchResults.forEach((contact) => {
            let index = parseInt(contact.chats.length - 1)
        holder.innerHTML += (
            `<div class="holder__contact" id="${contact.contactId}" onclick="hRef('${contact.contactId}')">`+
            `<img class="holder__contact__image" src="${contact.imgUrl}">`+
            `<div class="holder__contact__name"><a href="./private-chat.html?contactId=${contact.contactId}">${contact.name}</a></div>`+
            `<div class="holder__contact__chat">${contact.chats[index].message}</div>`+
            `<div class="holder__contact__timestamp">${contact.chats[index].timeStamp}</div>`+
            `<div class="holder__contact__unread id="unread">6</div>`+
            `<div class="holder__contact__unread id="delete" onclick="deleteContact('${contact.contactId}')">x</div>`+
        `</div>`
        )
        })
    } catch (e) {
        console.error(e)
    }
}
const findContactSearch = (chatSearch: Array<any>, searchTerm: string) => {
    try {
        const userRegEx: RegExp = new RegExp(searchTerm, 'gmi');
        const searchResultsName: Array<any> = chatSearch.filter(contactName => userRegEx.test(contactName.name));
        
        return searchResultsName;
    } catch (e) {
        console.error(e)
    }
}
const handleKeyUp = (ev: any) => { 
    try {
        ev.preventDefault();
        let searchTerm: string = ev.target.value;
        if (!searchTerm) {
            throw new Error('No value being read for search term!')
        }
        const results = findContactSearch(contacts.contacts, searchTerm);
        addToDom(results);
    } catch (er) {
        console.error(er)
    }
}

function checkEdits() {
        const render: any = JSON.parse(localStorage.getItem('contacts'))
        if (render != null) {
            addToDom(render)
            contacts.contacts = render
        
  console.log(contacts.contacts.map(c => console.log(c.chats)))
        }


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function edit() {
    let indices = document.querySelectorAll("#delete") 
    let unread:Array<HTMLElement> = document.querySelectorAll("#delete");
    for (let i =0; i<= indices.length; i++){
        if(unread[i].style.display = "none"){
            unread[i].style.display = "block"
        }
    }}
    
  