openModal();
closeModal();

function openModal() {
    const addToTeam1 = document.querySelector(`.team__addPlayers--team1`);
    const addToTeam2 = document.querySelector(`.team__addPlayers--team2`);
    const modal = document.querySelector(`.modalWrapper`);
    const modalTeam1 = document.querySelector(`.modalBox--team1`);
    const modalTeam2 = document.querySelector(`.modalBox--team2`);

    addToTeam1.addEventListener(`click`, ev => {
        modal.style.display = `flex`;
        modalTeam1.style.display = `unset`;
    });

    addToTeam2.addEventListener(`click`, ev => {
        modal.style.display = `flex`;
        modalTeam2.style.display = `unset`;
    });
}

function closeModal() {
    const close = document.querySelectorAll(`.close`);
    const modal = document.querySelector(`.modalWrapper`);
    const modalTeam1 = document.querySelector(`.modalBox--team1`);
    const modalTeam2 = document.querySelector(`.modalBox--team2`);

    close.forEach(el => {
        el.addEventListener(`click`, ev => {
            modal.style.display = `none`;
            modalTeam1.style.display = `none`;
            modalTeam2.style.display = `none`;
        });
    });

}

function handleSubmit(ev) {
    try {
        ev.preventDefault();
        const data = ev.target;
        const images = data.querySelectorAll('[name="playerImg"]');
        let imageURL;
        for (let i = 0; i < images.length; i++) {
            if (images[i].checked) {
                imageURL = document.querySelector(`label[for="${images[i].id}"`).children[0].src;
                break;
            }
        }
        if (imageURL === undefined) {
            throw new Error('No player was selected!')
        }
        const id = data.querySelector('[name="playerName"').value;
        let position = {};
        position.x = data.querySelector('[name="xPos"').value;
        position.y = data.querySelector('[name="yPos"').value;

        const modal = document.querySelector(`.modalWrapper`);
        const modalTeam1 = document.querySelector(`.modalBox--team1`);
        const modalTeam2 = document.querySelector(`.modalBox--team2`);
        
        modal.style.display = `none`;
        modalTeam1.style.display = `none`;
        modalTeam2.style.display = `none`;

        const player = new Player(imageURL, position, id);

        data.reset();

    } catch (er) {
        alert(er);
        console.error(er);
    }
}

class Player {
    constructor(imageURL, position, id) {
        try {
            this.imageURL = imageURL;
            this.position = {};
            if ((position.x === null) || (position.y === null)) throw new Error(`Couldn't place the player`);
            this.position.x = position.x;
            this.position.y = position.y;
            this.id = id;
            this.board = document.querySelector('.gameBoard');
            this.modal = document.querySelector(`.modalWrapper`);
            this.addPlayer();
            this.change = 1;
            // if (this.modal.style.display === `none`) {
                document.addEventListener('keyup', ev => {
                    if (this.player.classList.contains('gameBoard__item--team1')) {
                        switch (ev.key) {
                            case "a":
                                this.moveLeft();
                                break;
                            case "d":
                                this.moveRight();
                                break;
                            case "w":
                                this.moveUp();
                                break;
                            case "s":
                                this.moveDown();
                                break;
                        }
                    } else {
                        switch (ev.key) {
                            case "ArrowLeft":
                                this.moveLeft();
                                break;
                            case "ArrowRight":
                                this.moveRight();
                                break;
                            case "ArrowUp":
                                this.moveUp();
                                break;
                            case "ArrowDown":
                                this.moveDown();
                                break;
                        }
                    }
                });
            // }

        } catch (er) {
            console.error(er);
        }
    }

    addPlayer() {
        try {
            this.player = document.createElement('img');
            this.player.setAttribute('src', this.imageURL);
            this.player.setAttribute('title', this.id);
            this.player.classList.add("gameBoard__item");
            this.player.classList.add("gameBoard__item--player");
            this.player.style.left = `${this.position.x}%`;
            this.player.style.top = `${this.position.y}%`;
            if (this.position.x > 50) {
                this.player.style.transform = 'scaleX(-1)';
                this.player.classList.add("gameBoard__item--team2");
            } else {
                this.player.classList.add("gameBoard__item--team1");
            }
            this.board.appendChild(this.player);

            return this.player;

        } catch (e) {
            console.error(e)
        }
    }

    moveRight() {
        if ((this.position.x + this.change) <= 100) {
            this.position.x += this.change;
            this.player.style.left = `${this.position.x}%`;
        }
    }

    moveLeft() {
        if ((this.position.x - this.change) >= 1) {
            this.position.x -= this.change;
            this.player.style.left = `${this.position.x}%`;
        }
    }

    moveDown() {
        if ((this.position.y + this.change) <= 60) {
            this.position.y += this.change;
            this.player.style.top = `${this.position.y}%`;
        }
    }

    moveUp() {
        if ((this.position.y - this.change) >= 20) {
            this.position.y -= this.change;
            this.player.style.top = `${this.position.y}%`;
        }
    }
}