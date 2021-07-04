class User {
    userImg: string;
    userName: string;
    userPhone: string;
    userId: string = "user" + Math.random().toString(16).slice(2);

    constructor (userImg: string, userName: string, userPhone: string) {

    }
}

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
    console.log(userImg,userName,userPhone);
    
    const pickedUser = new User(userImg, userName, userPhone);
    userContainer.setAttribute('id',pickedUser.userId);

    // localStorage.setItem('currentUser',)
}