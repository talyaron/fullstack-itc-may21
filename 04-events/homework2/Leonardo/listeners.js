//listeners
document.addEventListener('keyup', ev => {
    try {
        if (!document) throw new Error('The document doesn`t exist')
        switch (ev.key) {
            case "ArrowLeft":
                pacman.moveLeft();
                break;
            case "ArrowRight":
                pacman.moveRight();
                break;
            case "ArrowDown":
                pacman.moveDown();
                break;
            case "ArrowUp":
                pacman.moveUp();
                break;
            case "a":
                ghost.moveLeft();
                break;
            case "d":
                ghost.moveRight();
                break;
            case "w":
                ghost.moveUp();
                break;
            case "x":
                ghost.moveDown();
                break;
            case "4":
                newPlayer.moveLeft();
                break;
            case "6":
                newPlayer.moveRight();
                break;
            case "8":
                newPlayer.moveUp();
                break;
            case "2":
                newPlayer.moveDown();
                break;
        }
    } catch (error) {
        console.error(error)
    }
})