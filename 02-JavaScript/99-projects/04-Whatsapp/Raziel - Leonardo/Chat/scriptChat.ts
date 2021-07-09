const userInfo = JSON.parse(localStorage.getItem('userInfo'));
const root: HTMLElement = document.querySelector('#main');

const userNumber = localStorage.getItem('numberToSearch');
const userfiltered = userInfo.filter(element => (element.number == userNumber));

//Render the chat of the User
function renderChat(): void {
    try {
        let html: string = userfiltered.map(element => {
            return (
                `<div class="chat">
                <div class="chat-header" onclick="redirectBack()">
                    <div class="profile">
                        <div class="left">
                            <img src="../Img_whatsapp/arrow.png" class="arrow">
                            <img src="${element.picture}" class="pp">
                            <h2>${element.name}</h2>
                            <span>Phone Number: ${element.number}</span>
                        </div>
                        <div class="right">
                            <img src="../Img_whatsapp/video.png" class="icon">
                            <img src="../Img_whatsapp/phone.png" class="icon">
                        </div>
                    </div>
                </div>
                <div class="chat-box">
                <div class="chat-r">
                <div class="sp"></div>
                <div class="mess mess-r">
                    <p>
                       Sup bro?
                    </p>
                    
                </div>
            </div>
        </div></div>
                <div class="chat-footer">
                
                    <img src="../Img_whatsapp/emo.png" class="emo" id="emoji-button">
                    <input type="text" placeholder="Type a message" id="input"></input>
                    <div class="icons">
                        <img src="../Img_whatsapp/attach file.png">
                        <img src="../Img_whatsapp/camera.png" id="buttonCam">
                    </div>
                    
                    <img src="https://img.icons8.com/material-outlined/50/000000/send-comment.png"/ id="sendButton">
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
renderChat();

//With this function I handle the form:
const handleSubmitMessage = (ev: any): void => {
    ev.preventDefault();
    try {
        const text: Message = {
            text: ev.target.elements.chat.value,
            id: Math.random().toString(16).slice(2),
            time: new Date()
        };
        userInfo.forEach(element => {
            element.message.push(text)
        });
        ev.target.reset();
        if (!userInfo) throw new Error('The user doesn´t exist!')
    } catch (error) {
        console.error(error);
    }
}

//This function redirect back to the main page
function redirectBack(): void {
    try {
        window.location.href = '../Main/whatsapp.html'
        if (!window.location.href) throw new Error('The page where you want to redirect it doesn´t exist!');
    } catch (error) {
        console.error(error);
    }
}


//Declare this variables to do the function to send the message
const texting: any = document.querySelector('#input'); //YS: Good
const sendButton: HTMLElement = document.querySelector('#sendButton');

try {
    sendButton.addEventListener('click', () => {
        const message: Message =
        {
            text: texting.value,
            id: Math.random().toString(16).slice(2),
            time: new Date()
        }
        userfiltered.forEach(element => {
            element.message.push(message);
        });
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        renderInsideChat(message);
    });
} catch (error) {
    console.error(error);
}

//Function to render the information inside the chat
function renderInsideChat(message: Message): void { //YS: Good
    try {
        let chatArea = document.querySelector('.chat-box');
        let temp = `
                
        <div class="chat-r" ${message.id}>
            <div class="sp"></div>
            <div class="mess mess-r">
                <p>
                   ${message.text}
                </p>
            </div>
        </div>
    </div>`
        chatArea.insertAdjacentHTML("beforeend", temp);
        texting.value = " ";
    } catch (error) {
        console.error(error);
    };
};

//With this function we render the old messages for the conversation at the beginning
function renderOldConversation(): void { 
    try {
        userfiltered[0].message.forEach(element => {
            renderInsideChat(element)
        });
    } catch (error) {
        console.error(error);
    }
}

//Call the function
renderOldConversation();

//Function to add the emojis in the chat
const button = document.querySelector('#emoji-button'); 

const picker = new EmojiButton(); //YS: Nice
picker.on('emoji', emoji => {
    document.querySelector('#input').value += emoji;
});
button.addEventListener('click', () => {
    picker.togglePicker(button);
});