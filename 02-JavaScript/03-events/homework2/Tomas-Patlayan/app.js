class Player {
  constructor(imgUrl, pos, familyID) {
    this.imgUrl = imgUrl;
    this.board = document.querySelector(".container-board");
    this.pos = {};
    this.pos.x = pos.x;
    this.pos.y = pos.y;
    this.familyID = familyID;

    this.step = 5;

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

  top() {
    if (this.pos.y - this.step > 0) {
      this.pos.y -= this.step;
      this.fmg.style.top = `${this.pos.y}%`;
      this.fmg.style.transform = "rotate(90deg)";
    } else {
      this.fmg.style.transform = "rotate(90deg)";
    }
  }

  bottom() {
    if (this.pos.y + this.step <= 77) {
      this.pos.y += this.step;
      this.fmg.style.top = `${this.pos.y}%`;
      this.fmg.style.transform = "rotate(270deg)";
    } else {
      this.fmg.style.transform = "rotate(90deg)";
    }
  }

  right() {
    if (this.step + this.pos.x <= 85) {
      this.pos.x += this.step;
      this.fmg.style.left = `${this.pos.x}%`;
      this.fmg.style.transform = "scaleX(-1)";
    } else {
      this.fmg.style.transform = "scaleX(1)";
    }
  }

  left() {
    if (this.pos.x - this.step > 0) {
      this.pos.x -= this.step;
      this.fmg.style.left = `${this.pos.x}%`;
      this.fmg.style.transform = "scaleX(1)";
    } else {
      this.fmg.style.transform = "scaleX(-1)";
    }
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
  let familyX = characterX.value;

  switch (chooseCharater) {
    case "peter":
      character = new Player("./images/peter.png", {
        y: parseInt(familyY),
        x: parseInt(familyX),
      });
      break;
    case "lois":
      character = new Player("./images/lois.png", {
        y: parseInt(familyY),
        x: parseInt(familyX),
      });
      break;
    case "meg":
      character = new Player("./images/meg.png", {
        y: parseInt(familyY),
        x: parseInt(familyX),
      });
      break;
    case "chris":
      character = new Player("./images/chris.png", {
        y: parseInt(familyY),
        x: parseInt(familyX),
      });
      break;

    case "brian":
      character = new Player("./images/brian.png", {
        y: parseInt(familyY),
        x: parseInt(familyX),
      });
      break;
    case "stwie":
      character = new Player("./images/Stewie.png", {
        y: parseInt(familyY),
        x: parseInt(familyX),
      });
      break;

    default:
  }
}
