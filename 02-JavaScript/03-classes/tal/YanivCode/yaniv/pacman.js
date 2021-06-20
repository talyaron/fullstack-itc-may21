pacmanGame();

function pacmanGame() {
    try {
        // get the pacman 
        const pacman = document.querySelector(`#pacman`);


        if (pacman === null) {
            throw new Error('No Pacman!');
        }

        //position the pacman
        // pacman.style.left = `${(window.innerWidth/2) - 40}px`;
        // pacman.style.top = `${(window.innerHeight/2) - 40}px`;



        pacman.addEventListener('mouseenter', ev => {
            pacPac = ev.target;
            pacPac.src = 'https://art.pixilart.com/37f719b8a62f06d.gif';
        });

        pacman.addEventListener('mouseleave', ev => {
            pacPac = ev.target;
            pacPac.src = 'https://i.gifer.com/l3K.gif';
        });

        document.addEventListener('keydown', ev => {
            try {
                let pacLeft = pacman.style.left;
                let pacTop = pacman.style.top;
                let pacLeftNum = Number(pacLeft.replace('px', ''));
                let pacTopNum = Number(pacTop.replace('px', ''));

                const change = 10;
                switch (ev.key) {
                    case 'ArrowRight':
                        pacman.className = 'right'
                        pacLeftNum += change;
                        if (pacLeftNum < (window.innerWidth - 95)) {
                            pacLeft = `${(pacLeftNum)}px`;
                            pacman.style.left = pacLeft;
                        }
                        break;
                    case 'ArrowLeft':
                        pacman.className = 'left'
                        pacLeftNum -= change;
                        if (pacLeftNum > 15) {
                            pacLeft = `${(pacLeftNum)}px`;
                            pacman.style.left = pacLeft;
                        }
                        break;
                    case 'ArrowUp':
                        pacman.className = 'up'
                        pacTopNum -= change;
                        if (pacTopNum > 15) {
                            pacTop = `${(pacTopNum)}px`;
                            pacman.style.top = pacTop;
                        }
                        break;
                    case 'ArrowDown':
                        pacman.className = 'down'
                        pacTopNum += change;
                        if (pacTopNum < (window.innerHeight - 95)) {
                            pacTop = `${(pacTopNum)}px`;
                            pacman.style.top = pacTop;
                        }
                        break;
                }
            } catch (e) {
                return e;
            }
        });

    } catch (e) {
        return e;
    }
}