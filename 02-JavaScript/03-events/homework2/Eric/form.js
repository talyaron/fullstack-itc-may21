/*) create a form to insert a apiece in a game (image, starting position (x,y), id);
2) get all the inforamation from your form;
3) create a new instance of the piece on the board (with a class constructore);
this will add the piece to the board
Extra:
create listeners inside the class, for the piece movement. in the constructor, add the keys for moving the piece.*/


//1 and 2

let newImg ="";

function handleSubmit(ev) {
    try {
        if (!ev) throw new Error('Event doesn`t exist')
    ev.preventDefault();
    console.dir(ev.target.children)
    let name = ev.target.children.name.value;
    let url = ev.target.children.url.value;
    let xpos = ev.target.children.xpos.value;
    let ypos = ev.target.children.ypos.value;
    console.log(name, url, xpos, ypos);

    newImg = new GamePiece(`${name}`, url, { x: parseInt(xpos), y: parseInt(ypos) });
} catch (error) {
        console.error(error)
    }
}

//clase que cree un personaje cada vez que se rellena el form y la meta en el board cambiando la position que se pone



class GamePiece {

constructor (nameId, url, position) {
    try {
        if (typeof position !== "object") throw new Error('Position is not defined, not an object')
        if (!("x" in position) || !("y" in position)) throw new Error('First position should have this format {x:0, y:0}')

    this.nameId = nameId;
    this.url = url;

    this.position = {}
    this.position.x = position.x;
    this.position.y = position.y;

    this.boardGame = document.querySelector('.boardGame');
    this.createPiece();
    this.step = 3;
} catch (e) {
    console.error(e)
}
}


createPiece(){
    try {
    this.piece = document.createElement('img');
    this.piece.setAttribute('src', this.url);
    this.piece.classList.add('piece');
    this.piece.style.left=`${this.position.x}%`;
    this.piece.style.top=`${this.position.y}%`;
    this.boardGame.appendChild(this.piece);
}
 catch (e) {
    console.error(e)
}
}
moveRight(){
    try{
        if(this.step + this.position.x<95){
        this.position.x+=this.step;
        this.piece.style.left=`${this.position.x}%`;
    }}catch (error) {
        console.error(error);
    }
}

moveLeft(){
   try{

    if(this.step + this.position.x>0){
        this.position.x-=this.step;
        this.piece.style.left=`${this.position.x}%`;
    } }catch (error) {
        console.error(error);
    }
}

moveDown(){
   try{ 
    if(this.step + this.position.y<60){
        this.position.y += this.step;
        this.piece.style.top = `${this.position.y}%`;
    }
}catch (error) {
    console.error(error);
}
}
moveUp(){
   try{
    if(this.step + this.position.y>0){
        this.position.y-=this.step;
        this.piece.style.top=`${this.position.y}%`;
    }
}catch (error) {
        console.error(error);
    }
}
}


//listeners

document.addEventListener('keyup' , ev =>{
    try {
        if (!document) throw new Error('Review your code, the document doesn`t exist')
    switch(ev.key){
             case "ArrowLeft":
                newImg.moveLeft();
                break;
            case "ArrowRight":
                newImg.moveRight();
                break;
            case "ArrowUp":
                newImg.moveUp();
                break;
            case "ArrowDown":
                newImg.moveDown();
                break;
            }
        } catch (error) {
            console.error(error)
        }
            })