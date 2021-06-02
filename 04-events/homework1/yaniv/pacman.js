pacmanGame();

function pacmanGame() {
    try {
        const pacman = document.querySelector(`#pacman`);
        if (pacman === undefined) {
            throw new Error('No Pacman!');
        }
        pacman.style.left = `${(window.innerWidth/2) - 40}px`;
        pacman.style.top = `${(window.innerHeight/2) - 40}px`;

        pacman.addEventListener('mouseenter', ev => {
            pacPac = ev.target;
            pacPac.src = 'https://cran.r-project.org/web/packages/ggpacman/readme/man/figures/README-blinky-plot-animated-1.gif';
            pacPac.style.height = '160px';
        });

        pacman.addEventListener('mouseleave', ev => {
            pacPac = ev.target;
            pacPac.src = 'https://i.gifer.com/l3K.gif';
            pacPac.style.height = '80px';
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