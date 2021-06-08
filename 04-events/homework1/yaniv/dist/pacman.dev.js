"use strict";

pacmanGame(); //YS: You should call your function after defining it. (this should go at the end of your code, not the beginning)

function pacmanGame() {
  try {
    var pacman = document.querySelector("#pacman");

    if (pacman === null) {
      //YS: if(!pacman)  instead of if(pacman === null)
      throw new Error('No Pacman!');
    }

    pacman.style.left = "".concat(window.innerWidth / 2 - 40, "px"); //YS: Nice! 

    pacman.style.top = "".concat(window.innerHeight / 2 - 40, "px");
    pacman.addEventListener('mouseenter', function (ev) {
      pacPac = ev.target;
      pacPac.src = 'https://art.pixilart.com/37f719b8a62f06d.gif';
    });
    pacman.addEventListener('mouseleave', function (ev) {
      pacPac = ev.target;
      pacPac.src = 'https://i.gifer.com/l3K.gif';
    });
    document.addEventListener('keydown', function (ev) {
      try {
        //YS: You didnt throw any errors in this try block, it is also inside the first try block. You should either keep them as 2 separate try blocks or just use the one at the beginning. 
        var pacLeft = pacman.style.left;
        var pacTop = pacman.style.top;
        var pacLeftNum = Number(pacLeft.replace('px', ''));
        var pacTopNum = Number(pacTop.replace('px', ''));
        var change = 10;

        switch (ev.key) {
          //YS: Good use of switch! 
          case 'ArrowRight':
            pacman.className = 'right';
            pacLeftNum += change;

            if (pacLeftNum < window.innerWidth - 95) {
              /*YS: DRY(dont repeat yourself). Notice that all of these code blocks are almost the same
                so you could turn in into one function and then call it with different paramaters */
              pacLeft = "".concat(pacLeftNum, "px");
              pacman.style.left = pacLeft;
            }

            break;

          case 'ArrowLeft':
            pacman.className = 'left';
            pacLeftNum -= change;

            if (pacLeftNum > 15) {
              pacLeft = "".concat(pacLeftNum, "px");
              pacman.style.left = pacLeft;
            }

            break;

          case 'ArrowUp':
            pacman.className = 'up';
            pacTopNum -= change;

            if (pacTopNum > 15) {
              pacTop = "".concat(pacTopNum, "px");
              pacman.style.top = pacTop;
            }

            break;

          case 'ArrowDown':
            pacman.className = 'down';
            pacTopNum += change;

            if (pacTopNum < window.innerHeight - 95) {
              pacTop = "".concat(pacTopNum, "px");
              pacman.style.top = pacTop;
            }

            break;
        }
      } catch (e) {
        return e;
        /*YS: You shouldnt have two catches or one try inside the other. Either have two different try/catch separated or have just one.  */
      }
    });
  } catch (e) {
    return e;
  }
}