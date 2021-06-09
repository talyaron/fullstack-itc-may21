try {
    const tiger = document.querySelector('.tiger');
    if (!tiger) {
        throw new Error('wheres the tiger gone!?!?!?')    //YS: Nice
    }

    tiger.style.top = "40vh";
    tiger.style.left = "40vw";
                                                                    /*YS: Good job, notice that in all of your if/else statements you have a very similar code. Remember DRY(dont repeat yourself)
                                                                    in order to avoid this, you can create a function with different values as paramaeters, and call the function instead of writing the same
                                                                    keys with different values.   */
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
        tiger.setAttribute('src', 'https://scx2.b-cdn.net/gfx/news/2019/thesundarban.jpg')
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