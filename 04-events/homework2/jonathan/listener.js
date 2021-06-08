document.addEventListener('keyup', ev => {
    try {

        if (!ev) throw new Error("the event keydown does not work");

        switch (ev.key) {
            case "ArrowLeft":
                character.moveLeft();
                break;
            case "ArrowRight":
                character.moveRight();
                break;
            case "ArrowDown":
                character.moveDown();
                break;
            case "ArrowUp":
                character.moveUp();
                break;
            default:
        }
    } catch (e) {
        console.log(e)
    }

})

