// Create a Whatsapp application with two pages.
// 1st page: the chatGroups
// 2nd page: chat

// use classes, destructors, spread, typescript
// use BEM model
// make it look as similar as you can to the real Whatsapp

// Work in a group.
// start with the design of the classes, BEM

//Global Variables
const messageValue: any = document.getElementById("text-input");
// const renderPost = JSON.parse(localStorage.getItem("completeCv"));

//Listeners

// interface RespondsInterface {
//   message:string;
// }

interface InterfaceMessage{
  message:string
}

class Chat {
  message: string;
  id: string;

  constructor(message: string) {
    this.message = message;
    this.id = Math.random().toString(16).slice(2);
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
    const currentLocal = JSON.parse(localStorage.getItem("chat"));
    currentLocal.push(add);
    this.arrayChat.push(add);
    localStorage.setItem("chat", JSON.stringify(currentLocal));
    this.renderUser();

    // this.respondBot();
  }
  // addBot(addBot:Array<Chat|RespondsInterface>){
  // addBot.forEach((element) => {
  //   const res = new Chat(element.message)
  //   this.arrayChat.push(res);
  // });

  // this.renderUser()
  // }

  deleteText(id: string) {
    this.arrayChat = this.arrayChat.filter((element) => element.id !== id);
    this.renderUser();
  }

  renderUser(arr?: Array<Chat>) {
    const getLocal = JSON.parse(localStorage.getItem("chat"));
    // const arrayRender = arr ? arr : getLocal;
    const getUser: HTMLElement = document.querySelector("#chat-box");
    // const respon = String(messageValue.value);
    let html: string = "";
    console.log(this.arrayChat);
    getLocal.forEach((element) => {
      console.log(element.message);

      html += `
      <p class="userText" onclick='HanldeDelete("${element.id}")'>
      <span >${element.message}<i class="fas fa-chevron-down  arrow-down" ></i></span>
      </p>
     
     `;
      if (element.message.includes("Hi")) {
        html += `
           <p class="botText">
            <span>Hello<i class="fas fa-chevron-down  arrow-down"></i></span>
             </p>
             `;
      } else if (element.message.includes("How are you?")) {
        html += `
                 <p class="botText">
                  <span>Preatty good <i class="fas fa-chevron-down arrow-down "></i></span>
                   </p>
                   `;
      } else if (element.message.includes("Hello there")) {
        html += `
                 <p class="botText">
                  <span>General Kenobi! <i class="fas fa-chevron-down arrow-down "></i></span>
                   </p>
                   `;
      } else if (element.message.includes("How old are you?")) {
        html += `
                 <p class="botText">
                  <span>I'm 20 <i class="fas fa-chevron-down arrow-down "></i></span>
                   </p>
                   `;
      }
    });

    setTimeout(() => {
      getUser.innerHTML = html;
    }, 1000);
  }
}

const chatProfile = new ChatProfile();

window.onload=  () => {
  const saveLocal=JSON.parse(localStorage.getItem("chat"));
  console.log(saveLocal);
  
  // localStorage.setItem("chat", JSON.stringify(chatProfile.arrayChat));
  console.log(saveLocal.length);
  saveLocal.length > 0 ?  chatProfile.renderUser():null


}



const sendBtn = (event) => {
  event.preventDefault();
  const message = event.target.elements.message.value;

  const generate = new Chat(message);
  console.log(generate);

  chatProfile.add(generate);
  event.target.reset();
};

const HanldeDelete = (id: string) => {
  chatProfile.deleteText(id);
};
