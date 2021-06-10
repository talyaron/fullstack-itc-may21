class Character {
    constructor(pokeID, imageURl, position) {

        try {
            if (typeof position !== "object") throw new Error('Position is not an object')

            if (!("x" in position) || !("y" in position)) throw new Error('Starting point should have this format {x:0, y:0}')
            this.pokeID = pokeID;
            this.imageURl = imageURl

            this.position = {};
            this.position.x = position.x;
            this.position.y = position.y;

            //initilizing
            this.boardGamed = document.querySelector('#boardGame');

            if (!this.boardGamed) throw new Error('The boardGame was not created')

            this.createCharacter();
            this.step = 2;
            

        } catch (e) {
            console.log(e);
        }
    }

    createCharacter() {
        try {

            if(this.boardGamed.hasChildNodes()){
                this.boardGamed.removeChild(document.querySelector('.image'));
            }

            this.pokemon = document.createElement('img');
            this.pokemon.setAttribute('src', this.imageURl);
            this.pokemon.style.width = "100px";
            this.pokemon.style.height = "100px";
            this.pokemon.classList.add('image');
            this.pokemon.style.position = "absolute";
            this.pokemon.style.left = `${this.position.x}%`;
            this.pokemon.style.top = `${this.position.y}%`;
            this.pokemon.style.transform = "scaleX(-1)"
            this.boardGamed.appendChild(this.pokemon);
        } catch (e) {
            console.error(e)
        }

    }


    moveRight() {

        if (this.step + this.position.x <= 85) {
            this.position.x += this.step;
            this.pokemon.style.left = `${this.position.x}%`;
            this.pokemon.style.transform = "scaleX(-1)";
        } else {
            this.pokemon.style.transform = "scaleX(1)"
        }
    }

    moveLeft() {

        if (this.position.x - this.step > 0) {
            this.position.x -= this.step;
            this.pokemon.style.left = `${this.position.x}%`;
            this.pokemon.style.transform = "scaleX(1)";
        } else {
            this.pokemon.style.transform = "scaleX(-1)"
        }

    }

    moveDown() {

        if (this.position.y + this.step <= 77) {
            this.position.y += this.step;
            this.pokemon.style.top = `${this.position.y}%`;
            this.pokemon.style.transform = "rotate(270deg)"
        } else {
            this.pokemon.style.transform = "rotate(90deg)"
        }
    }

    moveUp() {

        if (this.position.y - this.step > 0) {
            this.position.y -= this.step;
            this.pokemon.style.top = `${this.position.y}%`;
            this.pokemon.style.transform = "rotate(90deg)"
        } else {
            this.pokemon.style.transform = "rotate(270deg)"
        }
    }



}

let character;

function handlerSumbit(event) {

    event.preventDefault();

    const characterId = event.target.querySelector('#id-name').value;
    const radio = event.target.querySelectorAll("[name='pokemon']");
    const characterPosX = event.target.querySelector("#startx").valueAsNumber;
    const characterPosY = event.target.querySelector("#starty").valueAsNumber;


    try {

      //  let characterId = input.value;
        if (characterId === "") throw new Error('The id is empty, please write an id')
       // let characterPosX = posX.valueAsNumber;
  
       // let characterPosY = posY.valueAsNumber;

        for (var i = 0, length = radio.length; i < length; i++) {
            if (radio[i].checked) {
                charChoosen = radio[i].value
            }
        }
  

        console.log(`The ID: ${characterId}, Character Image: ${charChoosen}, Position X: ${characterPosX}, Position Y: ${characterPosY}`)

        switch (charChoosen) {
            case 'pika':
                character = new Character(characterId, 'img/piran.gif', { x: characterPosX, y: characterPosY });
                break;
            case 'char':
                character = new Character(characterId, 'img/charmander.gif', {  x: characterPosX, y: characterPosY });
                break;
            case 'bulba':
                character = new Character(characterId, 'img/bulba.gif', {  x: characterPosX, y: characterPosY });
                break;
            case 'squirtle':
                character = new Character(characterId, 'img/squirtle.gif', { x: characterPosX, y: characterPosY  });
                break;
            default:
        }

    } catch (e) {
        console.log(e)
    }


}




