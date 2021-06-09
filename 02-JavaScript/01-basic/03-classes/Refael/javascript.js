class GamePiece_dog {
  constructor(peiceId, color, border) {
    this.peiceId = peiceId;
    this.color = color;
    this.border = border;
  }
}
class GamePiece_cat {
  constructor(peiceId, color, border) {
    this.peiceId = peiceId;
    this.color = color;
    this.border = border;
    this.body = document.querySelector("body");
    this.creatPiece();
  }
  creatPiece() {
    this.piece = document.createElement("div");
    this.body = document.appendChild(this.piece);
  }
}

let dog1 = new GamePiece_dog("#elssa", "red", "3px solid brown");
let dog2 = new GamePiece_dog("#bonni", "blue", "2px dashed green");
let cat = new GamePiece_cat("#mitzi", "black", "10px dashed blue");

console.log(dog1);
console.log(dog2);
console.log(cat);
