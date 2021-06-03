try {
    const tiger = document.querySelector('.tiger');
    if (!tiger) {
        throw new Error('wheres the tiger gone!?!?!?')
    }

    tiger.style.top = "40vh";
    tiger.style.left = "40vw";

    document.addEventListener('keyup', function (slide) {

        let x = parseInt(tiger.style.left);
        let y = parseInt(tiger.style.top);

        if (slide.key == "ArrowUp") {
            tiger.style.top = `${y - 1}vh`;
            y = parseInt(tiger.style.top);
            tiger.style.transform = "rotate(90deg)";

        } else if (slide.key == "ArrowDown") {
            tiger.style.top = `${y + 1}vh`;
            y = parseInt(tiger.style.top);
            tiger.style.transform = "rotate(270deg)";

        } else if (slide.key == "ArrowLeft") {
            tiger.style.left = `${x - 1}vw`;
            x = parseInt(tiger.style.left);
            tiger.style.transform = "rotate(0deg)";

        } else if (slide.key == "ArrowRight") {
            tiger.style.left = `${x + 1}vw`;
            x = parseInt(tiger.style.left);
            tiger.style.transform = "rotate(180deg)";

        }
    });

    tiger.addEventListener('mouseover', function () {
        tiger.animate([{
            transform: 'rotateZ(360deg)'
        }], {
            duration: 5000,
            iterations: 1,
            easing: 'ease-in-out',
            endDelay: 3000
        })
    })
} catch (error) {
    console.error(error);
};