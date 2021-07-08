// VARIABLES GLOBALES
let allContacts: Array<Contact> = [];
let allContactsForSearch: Array<Contact> = [];

// QUERIES
const searchBar = document.getElementById("searchbar");
const formSearchBar = document.querySelector("#form_searchBar");

// CLASSES
interface LocalContact {
    name: string;
    phone: number;
    profileImg: string;
    id: string;
}

class Contact {
    name: string;
    phone: number;
    profileImg: string;
    id: string;
    constructor(name: string, phone: number, profileImg: string) {
        this.name = name;
        this.phone = phone;
        this.profileImg = profileImg;
        this.id = Math.random().toString(16).slice(2);
    }
}


// FUNCTIONS
const addLocalContacts = (localChat) => {
    localChat.forEach(contact => {
        let add = new Contact(contact.name, contact.phone, contact.profileImg);
        allContacts.push(add);
        allContactsForSearch.push(add);
        localStorage.setItem("contactos", JSON.stringify(allContacts));
        render(allContacts);

    });
}
addLocalContacts(contacts);


function render(arr) {
    try {
        const containerData: HTMLElement = document.querySelector(".contacts");
        let html: string = "";
        arr.forEach((element) => {
            html += `
        <div class="contacts_chat">
            <img class="contacts_img" src="${element.profileImg}" alt="">
            <a href="chat.html" onclick='idContactForChat("${element.id}")'>
                <div class="contacts_info">
                    <h3 class="contacts_name">${element.name}</h3>
                    <p>${element.phone}</p>
                </div>
            </a>
            <i onclick='deleteChat("${element.id}")' class="fas fa-trash fa-lg contacts_icon"></i>
        </div>`
        });
        let renderGroup = JSON.parse(localStorage.getItem("groups"));
        if (!renderGroup) return
        renderGroup.forEach((element) => {
            html += `
        <div class="contacts_chat">
            <img class="contacts_img" src="${element.groupIMG}" alt="">
            <a href="chat.html" onclick='idGroupForChat("${element.id}")'>
                <div class="contacts_info">
                    <h3 class="contacts_name">${element.groupName}</h3>
                    <p>${element.contactsOfGroup + " "}</p>
                </div>
            </a>
            <i onclick='deleteGroup("${element.id}")' class="fas fa-trash fa-lg contacts_icon"></i>
        </div>`
        });

        containerData.innerHTML = html;
    } catch (e) {
        console.error(e)
    }
}

const deleteChat = (id) => {
    try {
        let getContact = JSON.parse(localStorage.getItem("contactos"));
        const deleteChats = getContact.filter((chat) => chat.id !== id);
        allContacts = deleteChats;
        allContactsForSearch = deleteChats;
        localStorage.setItem("contactos", JSON.stringify(allContacts));
        render(allContacts);
    } catch (e) {
        console.error(e)
    }
}

const handleContact = (ev) => {
    try {
        ev.preventDefault();

        const name: string = ev.target.elements.nameContact.value;
        const phone: number = ev.target.elements.phoneContact.value;
        const profileImg: string = ev.target.elements.imgContact.value;

        const newContacto = new Contact(name, phone, profileImg);
        allContacts.push(newContacto);
        localStorage.setItem("contactos", JSON.stringify(allContacts));
        render(allContacts);
        allContactsForSearch.push(newContacto);
    } catch (e) {
        console.error(e)
    }
}

const searchContact = (searchBar) => {
    try {
        const regExp: string = `^${searchBar}`;
        const searchTermReg: RegExp = new RegExp(regExp, 'i');
        allContacts = allContactsForSearch.filter(elem => searchTermReg.test(elem.name));
        localStorage.setItem("contactos", JSON.stringify(allContacts));
        render(allContacts);
    } catch (e) {
        console.error(e)
    }
}


const filters = (ev) => {
    try {
        ev.preventDefault();

        const searchBar = ev.target.parentElement.elements.searchBar.value;
        searchContact(searchBar);
    } catch (e) {
        console.error(e)
    }
}

// EVENTLISTENERS

formSearchBar.addEventListener('keyup', filters);


