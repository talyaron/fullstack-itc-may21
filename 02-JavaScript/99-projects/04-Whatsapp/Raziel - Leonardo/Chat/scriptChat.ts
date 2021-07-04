const userInfo = JSON.parse(localStorage.getItem('userInfo'));
const root: HTMLElement = document.querySelector('#main');

//Render the chat of the User
function renderChat(userInfo): void {
    try {
        let html: string = userInfo.map(element => {
            console.log(element.message);
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
renderChat(userInfo);

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
        window.location.href ='./whatsapp.html'
        if (!window.location.href) throw new Error('The page where you want to redirect it doesn´t exist!')
    } catch (error) {
        console.error(error);
    }
}