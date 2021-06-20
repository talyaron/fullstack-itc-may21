/* create an image of your favorite animal (or whatever).
put it in the middle of the screen
move it with the arrow on the screen.
if you move it up, the image should look up, etc..

extra:
if the cursor moves over the image a surprise image appear */
try {
    const lionImage = document.querySelector('.lion__image');
    lionImage.style.left = `35%`;
    lionImage.style.top = `35%`;
    if (!lionImage) {
        throw new Error('The element "lionImage" could not be found')
    }

    //Events to play with the monkey with arrow keys
    document.addEventListener('keydown', ev => {
        if (ev.key.includes('ArrowLeft')) {
            if (parseInt(lionImage.style.left) > 0) {
                let newPositionLeft = parseInt(lionImage.style.left) - 1;
                lionImage.style.left = `${newPositionLeft}%`;
                lionImage.style.transform = `rotateY(180deg)`;
            };

        } else if (ev.key.includes('ArrowRight')) {
            if (parseInt(lionImage.style.left) < 64) {
                let newPositionRight = parseInt(lionImage.style.left) + 1;
                lionImage.style.left = `${newPositionRight}%`;
                lionImage.style.transform = `rotateY(0deg)`;
            };

        } else if (ev.key.includes('ArrowUp')) {
            if (parseInt(lionImage.style.top) > 0) {
                let newPositionTop = parseInt(lionImage.style.top) - 1;
                lionImage.style.top = `${newPositionTop}%`;
                lionImage.style.transform = `rotateX(180deg)`;
            };

        } else if (ev.key.includes('ArrowDown')) {
            if (parseInt(lionImage.style.top) < 57) {
                let newPositionBottom = parseInt(lionImage.style.top) + 1;
                lionImage.style.top = `${newPositionBottom}%`;
                lionImage.style.transform = `rotateX(0deg)`;
            };
        };
    });

    //Event when the mouse is over the monkey:
    lionImage.addEventListener('mouseover', () => {
        const song = document.querySelector('audio');
        const movieTitle = document.querySelector('.title__image');
        song.play();
        lionImage.style.cursor = `progress`;
        lionImage.style.filter = `brightness(140%)`;
        movieTitle.style.display = `inline`;
        if (!song || !movieTitle) {
            throw new Error(`Cant find the element "Audio" or "Title Image"`)
        }
    });

    //Get rid of the event when the mouse leaves the monkey:
    lionImage.addEventListener('mouseout', () => {
        const song = document.querySelector('audio');
        const movieTitle = document.querySelector('.title__image');
        song.pause();
        lionImage.style.filter = `none`;
        movieTitle.style.display = `none`;
        if (!song || !movieTitle) {
            throw new Error(`Cant find the element "Audio" or "Title Image"`)
        }
    });
} catch (error) {
    console.error(error)
}