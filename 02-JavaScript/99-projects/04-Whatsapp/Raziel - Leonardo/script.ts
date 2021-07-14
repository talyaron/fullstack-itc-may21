/* Create a Whatsapp application with two pages. 
1st page: the chatGroups
2nd page: chat

use classes, destructors, spread, typescript
use BEM model
make it look as similar as you can to the real Whatsapp

Work in a group.
start with the design of the classes, BEM */

class User {
    name: string;
    number: number; //This is going to be like the ID
    picture: string;
    message: Array<string>;

    constructor(name: string, number: number, picture: string, message: Array<string>) {
        this.name = name;
        this.number = number;
        this.picture = picture;
        this.message = message;
    };
};

class UserList {
    userList: Array<User> = [];

    //Every time that I add a new contact, I will use this method, this add a new user to the array "userList"   
    addUser(user: User): void {
        try {
            if (!user) throw new Error('The user it doesn´t exist!');
            this.userList.push(user);
        } catch (error) {
            console.error(error);
        }
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
        const message: Array<string> = [];
        const image: string = document.querySelector('#previewImage').getAttribute("src");

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