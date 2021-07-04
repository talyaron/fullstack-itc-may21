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
    // this.respondBot();
  }

  renderUser() {
    const getUser: HTMLElement = document.querySelector("#chat-box");
    const respon = String(messageValue.value);
    let html: string = "";
    console.log(this.arrayChat);
    this.arrayChat.forEach((element) => {
      html += `
      <p class="userText">
      <span>${element.message}</span>
      </p>
     
     `;
     if (respon.includes("Hola")) {
     return html += `
           <p class="botText">
            <span>Hola</span>
             </p>
             `;
         
        }  else if (respon.includes("pepe")) {
             html += `
               <p class="botText">
                <span>pepe</span>
                 </p>
                 `;
             
            }
      
    });
    setTimeout(() => {
                  
      getUser.innerHTML = html;
                 }, 1000);

  }
  // respondBot() {
  //   const respon = String(messageValue.value);
  //   // const arrLength = this.arrayChat.length
  //   const getBot: HTMLElement = document.querySelector(".botText");
  //   let htmlBot = "";
  //   this.arrayChat.forEach(() => {
  //     if (respon.includes("Hola")) {
  //       htmlBot += `
  //       <div class="botText">
  //       <span>Hola</span>
  //       </div>
  //       `;
        
  //     }
  //   });

  //   setTimeout(() => {
  //     getBot.innerHTML = htmlBot;
  //   }, 1000);
  // }
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
