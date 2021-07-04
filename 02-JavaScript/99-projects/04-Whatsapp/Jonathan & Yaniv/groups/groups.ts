class LoggedInUser {
    userImg: string;
    userName: string;
    userPhone: string;
    userGroups: Array<string>;

    constructor (userImg: string, userName: string, userPhone: string, userGroups: Array<string>) {
        this.userImg = userImg;
        this.userName = userName;
        this.userPhone = userPhone;
        this.userGroups = userGroups;
    }
}

class ContactList {
    allContacts: Array<User>;

    findContact(contactPhone) {
        const contact = this.allContacts.find(contactItem => contactItem.userPhone === contactPhone);
        return contact;
    }
}

const allContacts: ContactList = JSON.parse(localStorage.getItem('contactList'));

const loggedInUser: LoggedInUser = JSON.parse(localStorage.getItem('currentUser'));





const usersContainer: HTMLElement = document.querySelector('.users');

usersContainer.addEventListener('click', ev => userPicker(ev));

const userPicker = (ev: any) : void => {

    if (ev.target.className === 'users') return;
    
    let userContainer: HTMLElement;
    if (ev.target.id.indexOf('user_') === -1) userContainer = ev.target;
    else userContainer = ev.target.parentElement;
    
    const userImg: string = userContainer.querySelector("#user_img").getAttribute('src');
    const userNameContainer: HTMLElement = userContainer.querySelector("#user_name");
    const userName: string = userNameContainer.innerText;
    const userPhoneContainer: HTMLElement = userContainer.querySelector("#user_phone");
    const userPhone: string = userPhoneContainer.innerText;    
    const userGroups: Array<string> = allContacts.findContact(userPhone).userGroups;
    
    const pickedUser: User = new User(userImg, userName, userPhone, userGroups);

    localStorage.setItem('currentUser',JSON.stringify(pickedUser));

    window.location.href = `../groups/groups.html?${pickedUser.userPhone}`;

}