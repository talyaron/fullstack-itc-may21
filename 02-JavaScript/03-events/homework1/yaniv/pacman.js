pacmanGame();   //YS: You should call your function after defining it. (this should go at the end of your code, not the beginning)

function pacmanGame() {
    try {
        const pacman = document.querySelector(`#pacman`);
        if (pacman === null) {                             //YS: if(!pacman)  instead of if(pacman === null)
            throw new Error('No Pacman!');
        }
        pacman.style.left = `${(window.innerWidth/2) - 40}px`;     //YS: Nice! 
        pacman.style.top = `${(window.innerHeight/2) - 40}px`;

        pacman.addEventListener('mouseenter', ev => {
            pacPac = ev.target;
            pacPac.src = 'https://art.pixilart.com/37f719b8a62f06d.gif';
        });

        pacman.addEventListener('mouseleave', ev => {
            pacPac = ev.target;
            pacPac.src = 'https://i.gifer.com/l3K.gif';
        });

        document.addEventListener('keydown', ev => {
            try {                  //YS: You didnt throw any errors in this try block, it is also inside the first try block. You should either keep them as 2 separate try blocks or just use the one at the beginning. 
                let pacLeft = pacman.style.left;
                let pacTop = pacman.style.top;
                let pacLeftNum = Number(pacLeft.replace('px', ''));
                let pacTopNum = Number(pacTop.replace('px', ''));

                const change = 10;
                switch (ev.key) {           //YS: Good use of switch! 
                    case 'ArrowRight':            
                        pacman.className = 'right'
                        pacLeftNum += change;
                        if (pacLeftNum < (window.innerWidth - 95)) {                              /*YS: DRY(dont repeat yourself). Notice that all of these code blocks are almost the same
                                                                                                    so you could turn in into one function and then call it with different paramaters */
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
                return e;                         /*YS: You shouldnt have two catches or one try inside the other. Either have two different try/catch separated or have just one.  */
            }
        });
                                              
    } catch (e) {
        return e;
    }
}

