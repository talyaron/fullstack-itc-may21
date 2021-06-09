class Game {
  constructor(marioClass, width, height, marioURl) {
    this.marioClass = marioClass;
    this.width = width;
    this.height = height;
    this.marioURl = marioURl;

    this.mario = document.querySelector(".mario");
    this.createPj();
  }

  createPj() {
    this.marioPj = document.createElement("img");
    this.marioPj.setAttribute("src", this.marioURl);
    this.marioPj.setAttribute("width", this.width);
    this.marioPj.setAttribute("height", this.height);
    this.mario.appendChild(this.marioPj);
  }

  sayHello() {
    this.marioContainerChat = document.createElement("DIV");
    this.marioChat = this.marioContainerChat.createElement("P");
  }
}

let mario = new Game(
  ".mario",
  "100px",
  "100px",
  "https://www.semana.com/resizer/j42cYUvr34aLn13_CqxlysNH4fM=/1200x675/filters:format(jpg):quality(70)//cloudfront-us-east-1.images.arcpublishing.com/semana/V3EVP6ZUEZFY7AIGESM76I43GE.jpg"
);
let marioSpeack = new Game();

class Chat {
    constructor() {
        this.
    }
}

 constructor(marioClass,width,height,marioURl){
     this.marioClass = marioClass;
     this.width = width;
     this.height =height;
     this.marioURl =marioURl;

     this.mario = document.querySelector('.mario');
     this.createPj() 
 }
    
createPj() {
    this.marioPj = document.createElement('img');
    this.marioPj.setAttribute('src',this.marioURl);
    this.marioPj.setAttribute('width', this.width);
    this.marioPj.setAttribute('height', this.height);
    this.mario.appendChild(this.marioPj);
}


// sayHello() {
//     this.marioChat = document.createElement
// }




let mario = new Game('.mario', '100px','100px', 'https://www.semana.com/resizer/j42cYUvr34aLn13_CqxlysNH4fM=/1200x675/filters:format(jpg):quality(70)//cloudfront-us-east-1.images.arcpublishing.com/semana/V3EVP6ZUEZFY7AIGESM76I43GE.jpg')

