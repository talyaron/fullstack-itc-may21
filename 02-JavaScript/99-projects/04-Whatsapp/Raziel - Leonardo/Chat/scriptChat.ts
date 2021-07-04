const userInfo = JSON.parse(localStorage.getItem('userInfo'));
const root: HTMLElement = document.querySelector('#main');
const chatRoot: HTMLElement = document.querySelector('#insideMain');

const userNumber = localStorage.getItem('numberToSearch');
const userfiltered = userInfo.filter(element => (element.number == userNumber));

//Render the chat of the User
function renderChat(userfiltered): void {
    try {
        let html: string = userfiltered.map(element => {
            return (
                `<div class="chat-window__header" onclick='redirectBack()'>
                <div class="chat-window__header--left">
                    <img   class="chat-window__contact--img" src="${element.picture}">
                    <div class="contact-name-and-phone">
                        <span class="chat-window__name">${element.name}</span>
                        <span class="chat-window__phone">${element.number}</span>
                    </div>
                </div>
                <div class="chat-window__header--left">
                    <img class="chat-window-search-icon" src="Img_whatsapp/search-icon.svg">
                    <img class="chat-window-menu-icon"  src="Img_whatsapp/menu-icon.svg">
                </div>
            </div>
            <div class="chat-window__header">
            <div class="chat-window__header--left">
        
        <div class="chat-window">
            <div class="type-message-bar">
                <div class="type-message-bar__left">
                    <img src="Img_whatsapp/icons.svg" alt="">
                    <img src="Img_whatsapp/attach-icon.svg">
    
                </div>
                <div class="type-message-bar__center">
                    <input id="texting" type="text" placeholder="Type something">
                </div>
                <div id="sendButton" class="type-message-bar__right">
                    <img src="Img_whatsapp/audio-icon.svg" alt="">
                </div>
            </div>
        </div>`
            )
        }).join('');
        if (!html) throw new Error('An error happens when you want to render the user chat!')
        root.innerHTML = html;
    } catch (error) {
        console.error(error);
    };
};

//Call this functions to render the user
renderChat(userfiltered);

//With this function I handle the form:
const handleSubmitMessage = (ev: any): void => {
    ev.preventDefault();
    try {
        const text: Message = { text: ev.target.elements.chat.value, id: Math.random().toString(16).slice(2), time: new Date() };

        userInfo.forEach(element => {
            element.message.push(text)
        });
        ev.target.reset();

        if (!userInfo) throw new Error('The user doesn´t exist!')
    } catch (error) {
        console.error(error);
    }
}

function redirectBack(): void {
    try {
        window.location.href = './whatsapp.html'
        if (!window.location.href) throw new Error('The page where you want to redirect it doesn´t exist!');

    } catch (error) {
        console.error(error);
    }
}

const texting: HTMLElement = document.querySelector('#texting');
const sendButton = document.querySelector('#sendButton');


sendButton.addEventListener('click', () => {
    const message = { text: texting.value, id: Math.random().toString(16).slice(2), time: new Date() }
    userfiltered.forEach(element => {
        element.message.push(message);
    });
    renderInsideChat(message);
});

function renderInsideChat(message) {
    try {
        const newTag = document.createElement("div");
        newTag.innerHTML = `<div class="chat-window__name" id="${message.id}">${message.text}</div>`
        chatRoot.appendChild(newTag);
    } catch (error) {
        console.error(error);
    };
};