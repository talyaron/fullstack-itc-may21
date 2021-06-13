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
  try {
    event.preventDefault();

    const chooseCharater = event.target.elements.character.value;
    const familyY = event.target.elements.positiony.value;
    const familyX = event.target.elements.positionx.value;
    if (familyX === "" || familyY === "")
      throw new Error("Add  Position X and Position Y");
    const familyID = event.target.elements.id.value;
    if (familyID === "") throw new Error("Put an ID");
    if (familyID < 1 || familyID > 6)
      throw new Error("Put an ID between 6 and 1");

    switch (chooseCharater) {
      case "peter":
        character = new Player(
          "./images/peter.png",
          {
            y: parseInt(familyY),
            x: parseInt(familyX),
          },
          familyID
        );
        break;
      case "lois":
        character = new Player(
          "./images/lois.png",
          {
            y: parseInt(familyY),
            x: parseInt(familyX),
          },
          familyID
        );
        break;
      case "meg":
        character = new Player(
          "./images/meg.png",
          {
            y: parseInt(familyY),
            x: parseInt(familyX),
          },
          familyID
        );
        break;
      case "chris":
        character = new Player(
          "./images/chris.png",
          {
            y: parseInt(familyY),
            x: parseInt(familyX),
          },
          familyID
        );
        break;

      case "brian":
        character = new Player(
          "./images/brian.png",
          {
            y: parseInt(familyY),
            x: parseInt(familyX),
          },
          familyID
        );
        break;
      case "stwie":
        character = new Player(
          "./images/Stewie.png",
          {
            y: parseInt(familyY),
            x: parseInt(familyX),
          },
          familyID
        );
        break;

      default:
    }
  } catch (error) {
    console.log(error);
  }
}
