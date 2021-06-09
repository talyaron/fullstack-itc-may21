class Family {
  constructor(imgUrl) {
    this.imgUrl = imgUrl;
    //    this.charid = charid;

    //    this.position = {};
    //    this.position.x = position.x;
    //    this.position.y = position.y;

    this.family = document.querySelector("family-character");
    this.createFamily();
    //    this.step = 4;
  }

  createFamily() {
    this.character = document.createElement("img");
    this.character.setAttribute("src", this.imgUrl);
    this.family.appendChild(this.character);
    this.character.style.width = "400px";
    this.character.style.height = "400px";
    //    this.character.style.position = "absolute";
    //    this.character.style.left = `${this.position.x}%`;
    //    this.character.style.top = `${this.position.y}%`;
    //    this.character.style.transform = "scaleX(-1)"
  }
}

const radio = document.querySelectorAll('[name="character"]');
let person;

const handlerSumbit = (event) => {
  event.preventDefault();

  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      selectCharacter = radio[i].value;
    }
  }

  switch (selectCharacter) {
    case "peter":
      person = new Family(
        "https://static.wikia.nocookie.net/familyguy/images/a/aa/FamilyGuy_Single_PeterDrink_R7.jpg/revision/latest?cb=20200526171842images/a1810a48d74ee9b50b938b36f72b0069.jpg"
      );
      break;
    case "lois":
      person = new Family(
        "https://static.wikia.nocookie.net/familyguy/images/a/aa/FamilyGuy_Single_PeterDrink_R7.jpg/revision/latest?cb=20200526171842images/a1810a48d74ee9b50b938b36f72b0069.jpg"
      );
      break;
    case "meg":
      person = new Family(
        "https://static.wikia.nocookie.net/familyguy/images/a/aa/FamilyGuy_Single_PeterDrink_R7.jpg/revision/latest?cb=20200526171842images/a1810a48d74ee9b50b938b36f72b0069.jpg"
      );
      break;
    case "chris":
      person = new Family(
        "https://static.wikia.nocookie.net/familyguy/images/a/aa/FamilyGuy_Single_PeterDrink_R7.jpg/revision/latest?cb=20200526171842images/a1810a48d74ee9b50b938b36f72b0069.jpg"
      );
      break;
    case "brian":
      person = new Family(
        "https://static.wikia.nocookie.net/familyguy/images/a/aa/FamilyGuy_Single_PeterDrink_R7.jpg/revision/latest?cb=20200526171842images/a1810a48d74ee9b50b938b36f72b0069.jpg"
      );
      break;
    case "stwie":
      person = new Family(
        "https://static.wikia.nocookie.net/familyguy/images/a/aa/FamilyGuy_Single_PeterDrink_R7.jpg/revision/latest?cb=20200526171842images/a1810a48d74ee9b50b938b36f72b0069.jpg"
      );
      break;
  }
};
