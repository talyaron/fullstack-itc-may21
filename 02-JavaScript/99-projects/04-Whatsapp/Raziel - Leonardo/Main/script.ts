/* Create a Whatsapp application with two pages. 
1st page: the chatGroups
2nd page: chat

use classes, destructors, spread, typescript
use BEM model
make it look as similar as you can to the real Whatsapp

Work in a group.
start with the design of the classes, BEM */

const searchName = (<HTMLInputElement>document.querySelector("#search"));
const nextPage:HTMLElement=document.querySelector('#chat'); //change the name later
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
    filterUser:Array<User>=[];

    //Every time that I add a new contact, I will use this method, this add a new user to the array "userList"   
    addUser(user: User): void {
        try {
            if (!user) throw new Error('The user it doesn´t exist!');
            this.userList.push(user);
            this.renderContacts(this.userList);
            modal.style.display = "none";

        } catch (error) {
            console.error(error);
        }
    };

    //To Show the contacts in the page
    renderContacts(userFilter:Array<User>): void {
        const arrayToRender = userFilter ? userFilter : this.userList;
        try {
            const showContact: HTMLElement = document.querySelector('#chats');
            if (!showContact) throw new Error('The element where to show the contacts doesn´t exist!')
            //Doing a loop to show the contacts
            let html: any = arrayToRender.map(element => {
                return (
                `<div class="chat" id="chat" onclick='passInformation("${element.number}")'
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
                            <img class="double-check-mark" src="Img_whatsapp/double-check-seen.svg" alt="">
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


    searchContact(name:string){
        
        const regEx: string = `${name}`; //YS: You dont need template literals here. 

        const searchName: RegExp = new RegExp(regEx, 'i');

        this.filterUser = this.userList.filter(elem => searchName.test(elem.name))
         console.log(this.filterUser);
        this.renderContacts(this.filterUser);
    }

};

//Initialice a new array that will contains all the users:
const userList = new UserList();

//With this function I handle the form:
const handleSubmitNewUser = (ev: any): void => {
    ev.preventDefault();
    try {
        const name: string = ev.target.elements.name.value;
        const number: number = ev.target.elements.number.valueAsNumber;

        const image: string = document.querySelector('#previewImage').getAttribute("src");
        const message = [{ text: '', id: Math.random().toString(16).slice(2), time: new Date() }]

        const user = new User(name, number, image, message);
        userList.addUser(user);
        ev.target.reset();

        if (!user) throw new Error('The user doesn´t exist!')
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

//Method to pass information to another page when you click the User
function passInformation(userNumber) {
    const userInfo = userList.userList.filter(element => (element.number == userNumber));
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    redirect();
};

//Function to redirect to the user Chat
function redirect(): void {
    try {
        window.location.href ='./whatsappChat.html'
        if (!window.location.href) throw new Error('The page where you want to redirect it doesn´t exist!')
    } catch (error) {
        console.error(error);
    }
}
// nextPage.addEventListener('onclick',passInformation('')); //fix it later
searchName.addEventListener('keyup', handleKeyUp)

function handleKeyUp() {
    userList.searchContact(searchName .value)   
}