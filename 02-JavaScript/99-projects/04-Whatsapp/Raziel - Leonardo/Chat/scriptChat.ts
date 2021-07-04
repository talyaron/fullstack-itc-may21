const userInfo = JSON.parse(localStorage.getItem('userInfo'));
const root: HTMLElement = document.querySelector('#root');

//Render the chat of the User
function renderChat(userInfo): void {
    try {
        let html: string = userInfo.map(element => {
            console.log(element.message);
            return (
                `<div class="user__chat">
                <div><img class="user__chat__image" src="${element.picture}" alt=""></div>
                <div >${element.name}</div>
                </div>
                <div>${element.message}</div>`
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