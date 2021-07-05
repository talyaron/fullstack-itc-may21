// VARIABLES GLOBALES
let allContacts:Array<Contact> = [];
render();

// CLASSES
interface LocalContact{
    name: string;
    phone: number;
    profileImg: string;
}

class Contact{
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
        render()
    })
}
addLocalContacts(chats);

function render() {
    const containerData: HTMLElement = document.querySelector(".contacts")
    let html: string = "";
    let render = JSON.parse(localStorage.getItem("contactos"));
    render.forEach((element) => {
        html += `
        <div class="contacts_chat">
            <img class="contacts_img" src="${element.profileImg}" alt="">
            <a href="">
                <div class="contacts_info">
                    <h3 class="contacts_name">${element.name}</h3>
                    <p>${element.phone}</p>
                </div>
            </a>
            <i onclick='deleteChat("${element.id}")' class="fas fa-trash fa-lg contacts_icon"></i>
        </div>`
    });
    let renderGroup = JSON.parse(localStorage.getItem("groups"));
    renderGroup.forEach((element) => {
        html += `
        <div class="contacts_chat">
            <img class="contacts_img" src="${element.groupIMG}" alt="">
            <a href="">
                <div class="contacts_info">
                    <h3 class="contacts_name">${element.groupName}</h3>
                    <p>${element.contactsOfGroup + " "}</p>
                </div>
            </a>
            <i onclick='deleteGroup("${element.id}")' class="fas fa-trash fa-lg contacts_icon"></i>
        </div>`
    });

    containerData.innerHTML = html;
}

const deleteChat = (id) =>{
    let contactsDelete = JSON.parse(localStorage.getItem("contactos"));
    const deleteChats = contactsDelete.filter((chat) => chat.id !== id);
    allContacts = deleteChats;
    localStorage.setItem("contactos", JSON.stringify(allContacts));
    render()

}

const handleContact = (ev)=>{
    ev.preventDefault();

    const name: string = ev.target.elements.nameContact.value;
    const phone: number = ev.target.elements.phoneContact.value;
    const profileImg: string = ev.target.elements.imgContact.value;
    
    const newContacto = new Contact(name, phone, profileImg);
    allContacts.unshift(newContacto);
    localStorage.setItem("contactos", JSON.stringify(allContacts));
    render()

}

