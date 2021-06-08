class Player {
  constructor(imgUrl,pos) {
    this.imgUrl = imgUrl;

    this.board = document.querySelector(".container-board");


    this.pos = {};
    this.pos.x = pos.x;
    this.pos.y = pos.y;



    this.characterFamily();
  }
  characterFamily() {
    this.fmg = document.createElement("img");
    this.fmg.setAttribute("src", this.imgUrl);
    this.fmg.style.width = "400px";
    this.fmg.style.height = "400px";
    this.fmg.style.position = "absolute";
    this.fmg.style.left = `${this.pos.x}%`;
    this.fmg.style.top = `${this.pos.y}%`;
    this.fmg.style.transform = "scaleX(-1)";
    this.board.appendChild(this.fmg);
  }
}



function handlerSumbit(event) {
  event.preventDefault();

 let form = document.getElementsByTagName("form")[0];
  const circle = document.getElementsByName("character");
  const characterY = form.querySelector("[name= 'positiony']");
  const characterX = form.querySelector("[name= 'positionx']");

  for (let i = 0; i < circle.length; i++) {
    if (circle[i].checked) {
      chooseCharater = circle[i].value;
    }
  }
  let familyY = characterY.value;
  let familyX =characterX.value;

  switch (chooseCharater) {
    case "peter":
      character = new Player('./images/peter.png', { y: parseInt(familyY), x: parseInt(familyX) });
      break;
    case "lois":
      character = new Player( "./images/lois.png",{ y: parseInt(familyY), x: parseInt(familyX) });
      break;
    case "meg":
      character = new Player("./images/meg.png",{ y: parseInt(familyY), x: parseInt(familyX) });
      break;
    case "chris":
      character = new Player("./images/chris.png",{ y: parseInt(familyY), x: parseInt(familyX) });
      break;

    case "brian":
      character = new Player("./images/brian.png",{ y: parseInt(familyY), x: parseInt(familyX) });
      break;
    case "stwie":
      character = new Player("./images/Stewie.png",{ y: parseInt(familyY), x: parseInt(familyX) });
      break;

    default:
  }
}
