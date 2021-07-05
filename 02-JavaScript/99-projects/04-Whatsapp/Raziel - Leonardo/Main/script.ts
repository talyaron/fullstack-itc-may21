/* Create a Whatsapp application with two pages. 
1st page: the chatGroups
2nd page: chat

use classes, destructors, spread, typescript
use BEM model
make it look as similar as you can to the real Whatsapp

Work in a group.
start with the design of the classes, BEM */

let arrayName = JSON.parse(localStorage.getItem('userInfo'));
const searchName = (<HTMLInputElement>document.querySelector("#search"));

class Message {
    id: string;
    text: string;
    time: Date;

    constructor(text: string) {
        this.text = text;
        this.time = new Date();
        this.id = Math.random().toString(16).slice(2);
    }
};

class User {
    name: string;
    number: number; //This is going to be like the ID
    picture: string;
    message: Array<Message>;

    constructor(name: string, number: number, picture: string, message: Array<Message>) {
        this.name = name;
        this.number = number;
        this.picture = picture;
        this.message = message;
    };
};

class UserList {
    userList: Array<User> = [];
    filterUser: Array<User> = [];
};

let userList: Array<User> = [];
if (arrayName != null) {
    userList = arrayName;
}

//With this function I handle the form:
const handleSubmitNewUser = (ev: any): void => {
    ev.preventDefault();
    try {
        const name: string = ev.target.elements.name.value;
        const number: number = ev.target.elements.number.valueAsNumber;

        const image: string = document.querySelector('#previewImage').getAttribute("src");
        const message = [{ text: '', id: Math.random().toString(16).slice(2), time: new Date() }]

        const user = new User(name, number, image, message);
        addUser(user);
        ev.target.reset();

        if (!user) throw new Error('The user doesn´t exist!')
    } catch (error) {
        console.error(error);
    }
}

//Every time that I add a new contact, I will use this method, this add a new user to the array "userList"
function addUser(user: User): void {
    try {
        if (!user) throw new Error('The user it doesn´t exist!');
        userList.push(user);
        renderContacts(userList);
        modal.style.display = "none";

    } catch (error) {
        console.error(error);
    }
};

//To Show the contacts in the page
function renderContacts(arrayUser: Array<User>): void {
    try {
        const showContact: HTMLElement = document.querySelector('#chats');
        if (!showContact) throw new Error('The element where to show the contacts doesn´t exist!')
        //Doing a loop to show the contacts
        let html: any = arrayUser.map(element => {
            return (
                `<div class="chat" id="chat" onclick='redirect("${element.number}")'
            >
            <div class="chat__left">
                <img src="${element.picture}" alt="">
            </div>
            <div class="chat__right">
                <div class="chat__right--top">
                    <span class="chat__right--top__contact-name">${element.name}</span>
                    <span class="chat__right--top__phone-number">Phone Number: ${element.number}</span>

                </div>
                <div class="chat__right--bottom">
                    <div class="chat__right--bottom--left">
                        <img class="double-check-mark" src="../Img_whatsapp/double-check-seen.svg" alt="">
                        <span>Raziel is typing...</span>
                    </div>
                </div>

            </div>
        </div>`
            )
        }).join('');
        showContact.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

//Function to show the previous image in the form:
function readURL(input): void {
    if (input.files && input.files[0]) {
        let reader: FileReader = new FileReader();

        reader.onload = (e) => {
            try {
                document.querySelector('#previewImage').setAttribute("src", `${e.target.result}`);
            } catch (error) {
                console.error(error);
            }
            return e.target.result
        }
        reader.readAsDataURL(input.files[0]);
    };
};

//Function to redirect to the user Chat
function redirect(userNumber): void {
    localStorage.setItem('userInfo', JSON.stringify(userList));
    localStorage.setItem('numberToSearch', userNumber);
    try {
        window.location.href = '../Chat/whatsappChat.html'
        if (!window.location.href) throw new Error('The page where you want to redirect it doesn´t exist!')
    } catch (error) {
        console.error(error);
    }
}

//Function to do a filter
searchName.addEventListener('keyup', () => {
    const regEx: string = searchName.value;
    const searching: RegExp = new RegExp(regEx, 'i');

    this.filterUser = userList.filter(elem => searching.test(elem.name))
    renderContacts(this.filterUser);
})

function checkStorage() {
    if (arrayName) {
        renderContacts(arrayName);
    }
};

checkStorage();
