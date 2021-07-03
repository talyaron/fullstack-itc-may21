const messageValue: any = document.getElementById("text-input");

class Chat {
  message: string;

  constructor(message: string) {
    this.message = message;
  }
}

// class Bot{
//   messageBot:string;
//   constructor(messageBot:string) {
//     this.messageBot = messageBot;
//   }
// }

class ChatProfile {
  arrayChat: Array<Chat> = [];
  // arrayBot:Array<Bot> =[];

  add(add: Chat) {
    this.arrayChat.push(add);
    this.renderUser();
    this.respondBot();
  }

  renderUser() {
    const getUser: HTMLElement = document.querySelector(".userText");

    let html: string = "";
    console.log(this.arrayChat);
    this.arrayChat.forEach((element) => {
      html += `
      <div class="userText">
      <span>${element.message}</span>
      </div>
     
     `;
    });

    getUser.innerHTML = html;
  }
  respondBot() {
    const respon = String(messageValue.value);
    const getBot: HTMLElement = document.querySelector(".botText");
    let htmlBot = "";
    this.arrayChat.forEach(() => {
      if (respon === "Hola") {
        htmlBot += `
        <div class="botText">
        <span>Hola</span>
        </div>
        `;
      }
    });

    setTimeout(() => {
      getBot.innerHTML = htmlBot;
    }, 1000);
  }
}

const chatProfile = new ChatProfile();

const sendBtn = (event) => {
  event.preventDefault();
  const message = event.target.elements.message.value;

  const generate = new Chat(message);
  console.log(generate);

  chatProfile.add(generate);
  event.target.reset();
};
