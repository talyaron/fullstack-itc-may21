const messageValue: any = document.getElementById("text-input");

// interface RespondsInterface {
//   message:string;
// }

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
    console.log('new chat')
    this.arrayChat.push(add);
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
  renderUser() {
    const getUser: HTMLElement = document.querySelector("#chat-box");
    // const respon = String(messageValue.value);
    let html: string = "";
    console.log(this.arrayChat);
    this.arrayChat.forEach((element) => {

      console.log(element.message)


      html += `
      <p class="userText">
      <span>${element.message}</span>
      </p>
     
     `
      if (element.message.includes("Hola")) {
        html += `
           <p class="botText">
            <span>Hola</span>
             </p>
             `;
      }
      else if (element.message.includes("Como Estas?")) {
        html += `
                 <p class="botText">
                  <span>Bien</span>
                   </p>
                   `;

      }
      setTimeout(() => {

        getUser.innerHTML = html;
      }, 1000);

    })


    // renderBot(){
    //   const respon = String(messageValue.value);

    //   if(respon === 'Hola') {
    // this.arrayChat = this.arrayChat.filter((element) => element.message ===respon)
    // this.renderUser()
    //   }
    // }

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

