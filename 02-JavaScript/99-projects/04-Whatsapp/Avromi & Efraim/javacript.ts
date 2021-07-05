interface Message {
    message: string,
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
                return (
                    `<div class="holder__contact" id="${contact.contactId}" onclick="moveToPrivateChat('${contact.contactId}')">` +
                    `<img class="holder__contact__image" src="${contact.imgUrl}">` +
                    `<div class="holder__contact__name">${contact.name}</div>` +
                    `<div class="holder__contact__chat">${contact.chats[0].message}</div>` +
                    `<div class="holder__contact__timestamp">${contact.chats[0].timeStamp}</div>` +
                    `<div class="holder__contact__unread" id="unread">6</div>` +
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
            const index = this.contacts.findIndex(cnt => cnt.contactId === contactID)
            return index;
        } catch (e) {
            console.error(e)
        }
    }
}


const contacts: Contacts = new Contacts();

function moveToPrivateChat(id) {
    try {
        window.location.href = `./private-chat.html?contactId=${id}`
    } catch (e) {
        console.error(e)
    }
}


function handleSubmit(ev): any {
    ev.preventDefault();
    try {
        const imgUrl = URL.createObjectURL(ev.target.children.files);
        const name: string = ev.target.children.name.value;
        const phoneNumber: number = ev.target.children.number.value;
        const holder = document.querySelector('.holder');
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
        const index = contacts.findIndexes(conatctID)
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
            let index = parseInt(contact.chats.length - 1)
            holder.innerHTML += (
                `<div class="holder__contact" id="${contact.contactId}" onclick="moveToPrivateChat('${contact.contactId}')">` +
                `<img class="holder__contact__image" src="${contact.imgUrl}">` +
                `<div class="holder__contact__name">${contact.name}</a></div>` +
                `<div class="holder__contact__chat">${contact.chats[index].message}</div>` +
                `<div class="holder__contact__timestamp">${contact.chats[index].timeStamp}</div>` +
                `<div class="holder__contact__unread id="unread">6</div>` +
                `<div class="holder__contact__unread id="delete" onclick="deleteContact('${contact.contactId}')">x</div>` +
                `</div>`
            )
        })
    } catch (e) {
        console.error(e)
    }
}
const findContactSearch = (chatSearch: Array<any>, searchTerm: string) => {
    try {
        console.log('chatSearch')
        console.log(chatSearch)
        const userRegEx: RegExp = new RegExp(searchTerm, 'gmi');
        const searchedUsers: Array<any> = chatSearch.filter(contactName => userRegEx.test(contactName.name));

        return searchedUsers;
    } catch (e) {
        console.error(e)
    }
}

const findTextInMessages = (searchTerm: string): Array<Message> => {
    try {
        console.log(searchTerm)
        const termRegEx: RegExp = new RegExp(searchTerm, 'i');

        let searchedMessages = contacts.contacts.map(contact => {



            const x = contact.chats.filter(message => {

                let msg = message.message;
                const tst = termRegEx.test(msg);
                console.log(msg, tst)
                return tst
            })
                ;
            console.log(x)
            return x
        }).flat()
        console.log(searchedMessages)
        return searchedMessages
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
        const searchMessages = findTextInMessages(searchTerm)
        addToDomWithArray(results);
    } catch (er) {
        console.error(er)
    }
}

function renderContactsFromLocalStorage() {
    try {
        window.addEventListener('load', ()=>{
        const render: any = JSON.parse(localStorage.getItem('contacts'))
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
        const formOpen = document.querySelector(".header__new-convo");
        formOpen.addEventListener('click', ()=>{
        document.getElementById("myForm").style.display = "block";
    })} catch (e) {
        console.error(e)
    }
}
openForm()

function closeForm() {
    try {
        const formClose = document.querySelector(".button--cancel");
        formClose.addEventListener('click', ()=>{
        document.getElementById("myForm").style.display = "none";
    })} catch (e) {
        console.error(e)
    }
}
closeForm()

function editButtonRevealAndHide() {
    try {
        const editButton = document.querySelector(".header__edit");
        editButton.addEventListener("click", ()=>{
        let indices = document.querySelectorAll("#delete")
        let unread: Array<HTMLElement> = document.querySelectorAll("#delete");
        for (let i = 0; i <= indices.length; i++) {
            if (unread[i].style.display = "none") {
                unread[i].style.display = "block"
            }
        }})
    } catch (e) {
        console.error(e)
    }
}
editButtonRevealAndHide();


