// 1) create a form to insert a apiece in a game (image, starting position (x,y), id);
// 2) get all the inforamation from your form;
// 3) create a new instance of the piece on the board (with a class constructore);
// this will add the piece to the board

// create listeners inside the class, for the piece movement. in the constructor, add the keys for moving the piece.

function handleSubmit(ev) {
    ev.preventDefault()
    console.log(ev.target)
    console.dir(ev)
}