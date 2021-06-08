// TOMAR ELEMENTOS DEL FORM 

function handleSubmit(ev) {
    try{
        if(!ev) throw new Error("You must submit the form!")
        if(!name) throw new Error("You must submit a name!")
        if(!url) throw new Error("You must submit an url!")
        if(!posx) throw new Error("You must submit a position x!")
        if(!posy) throw new Error("You must submit a position y!")
        ev.preventDefault();
    console.dir(ev.target.children)
    let name = ev.target.children.name.value;
    let url = ev.target.children.url.value;
    let posx = ev.target.children.posx.value;
    let posy = ev.target.children.posy.value;
    newPlayer = new Personaje(`${name}`, url, { x: parseInt(posx), y: parseInt(posy) });
}catch(e){
    console.error(e);
}
    // CREAR PLAYER LUEGO DEL SUBMIT
}
let newPlayer = "";

// CLASE
class Personaje{
    constructor(nameId, imgURL, position){
        try {
            if (typeof postion !== "object") throw new Error('position must be an object')
        // PROPIETIES
        this.nameId = nameId;
        this.imgURL = imgURL;
        // POSITION
        this.position = {};
        this.position.x = position.x;
        this.position.y = position.y;

        // INITIALIZE
        this.boardGame = document.querySelector('#boardGame');
        this.createPiece();
        this.step = 2;
      }catch(e){
          console.error(e)
      }

    }
    createPiece(){
        this.piece = document.createElement('img');
        this.piece.setAttribute('src', this.imgURL);
        this.piece.classList.add("imgNew");
        this.piece.style.left = `${this.position.x}%`;
        this.piece.style.top = `${this.position.y}%`;
        this.boardGame.appendChild(this.piece);
    }
    moveRight(){
         if(this.step + this.position.x < 85){
             this.position.x += this.step;
             this.piece.style.left = `${this.position.x}%`;
         }
    }
    moveLeft(){
        if(this.position.x - this.step > 0){
            this.position.x -= this.step;
            this.piece.style.left = `${this.position.x}%`;
        }
   }
    moveDown(){
        if(this.position.y + this.step < 67){
            this.position.y += this.step;
            this.piece.style.top = `${this.position.y}%`;

        }
    }
    moveUp(){
        if(this.position.y - this.step > 0){
            this.position.y -= this.step;
            this.piece.style.top = `${this.position.y}%`;

        }
    }
}

// LISTENER KEYUP
document.addEventListener('keyup', ev =>{
    switch(ev.key){
        case "ArrowLeft":
            newPlayer.moveLeft();
            break;
        case "ArrowRight":
            newPlayer.moveRight();
            break;
        case "ArrowDown":
            newPlayer.moveDown();
            break;
        case "ArrowUp":
            newPlayer.moveUp();
            break;
    }
})

