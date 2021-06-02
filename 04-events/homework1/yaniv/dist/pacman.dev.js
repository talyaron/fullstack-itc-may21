"use strict";

pacmanGame();

function pacmanGame() {
  try {
    var pacman = document.querySelector("#pacman");

    if (pacman === null) {
      throw new Error('No Pacman!');
    }

    pacman.style.left = "".concat(window.innerWidth / 2 - 40, "px");
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
        var pacLeft = pacman.style.left;
        var pacTop = pacman.style.top;
        var pacLeftNum = Number(pacLeft.replace('px', ''));
        var pacTopNum = Number(pacTop.replace('px', ''));
        var change = 10;

        switch (ev.key) {
          case 'ArrowRight':
            pacman.className = 'right';
            pacLeftNum += change;

            if (pacLeftNum < window.innerWidth - 95) {
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
      }
    });
  } catch (e) {
    return e;
  }
}