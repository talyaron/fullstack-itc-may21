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
            this.isRight = 1;

        } catch (e) {
            console.log(e);
        }
    }

    createCharacter() {
        try {

            this.pokemon = document.createElement('img');
            this.pokemon.setAttribute('src', this.imageURl);
            this.pokemon.style.width = "100px";
            this.pokemon.style.height = "100px";
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

    let form = document.getElementsByTagName("form")[0];
const input = document.querySelector('#id-name');
const radio = document.getElementsByName("pokemon");
const posX = form.querySelector("[name='startx']");
const posY = form.querySelector("[name='starty']");

    try {
    let characterId = input.value;
    console.log(characterId);
    if (characterId === "") throw new Error('The id is empty, please write an id')
    let characterPosX = posX.value;
    if (!characterPosX) throw new Error('Any error for PosX')
    let characterPosY = posY.value;
    if (!characterPosY) throw new Error('Any error for Posy')
    for (var i = 0, length = radio.length; i < length; i++) {
        if (radio[i].checked) {
            charChoosen = radio[i].value
        }
    }
    if (!charChoosen) throw new Error('Error Image')



    console.log(`The ID: ${characterId}, Character Image: ${charChoosen}, Position X: ${characterPosX}, Position Y: ${characterPosY}`)

    switch (charChoosen) {
        case 'pika':
            character = new Character(characterId, 'img/piran.gif', { x: parseInt(characterPosX), y: parseInt(characterPosY) });
            break;
        case 'char':
            character = new Character(characterId, 'img/charmander.gif', { x: parseInt(characterPosX), y: parseInt(characterPosY) });
            break;
        case 'bulba':
            character = new Character(characterId, 'img/bulba.gif', { x: parseInt(characterPosX), y: parseInt(characterPosY) });
            break;
        case 'squirtle':
            character = new Character(characterId, 'img/squirtle.gif', { x: parseInt(characterPosX), y: parseInt(characterPosY) });
            break;
        default:
    }
    
}catch(e){
    console.log(e)
}


}


// Yonathan. I was trying to remove child, the image of the current character on board after choosing another character but I failed. Can you explain me how to do that?

//And I dont know if the instances are ok inside the sumbit function, is better to create an empty instance first and then pass the inputs, ratio, etc?


