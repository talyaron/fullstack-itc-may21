//create an image of your favorite animal (or whatever).
//put it in the middle of the screen
//move the image with the keyboard key arrow.
//if you move it up, the image should look up, etc...

//extra: if the cursor moves over the image a surprise image appear
//image and extra
//arrow keyword

const tennis = document.getElementById("tennis");
const img2 = document.getElementById("ball");


tennis.addEventListener('mouseout', e => {
    tennisBack = e.target;
    tennisBack.src = "ball.jpg";
})
tennis.addEventListener("mouseover", function (event) {
    tennisChange = event.target;
    tennisChange.src = "https://media1.giphy.com/media/26u49A1sQ3IVBMHK0/giphy.gif?cid=ecf05e47f4aj8gj2t9j82o086x6icy7ea0eq711231jcufvy&rid=giphy.gif&ct=g";
})


let move = 10;
let Top = 0;
let Left = 0;


document.onkeydown = function (event) {
    try {
        if (img2 === null) {
            throw new Error('No ball!');
        }
        switch (event.keyCode) {
            case 37:
                tennis.classList.remove('tennisUp')
                tennis.classList.remove('tennisRight');
                tennis.classList.remove('tennisDown');
                tennis.classList.add('tennisLeft');
                Left -= move;
                tennis.style.marginLeft = `${Left}px`;
                break;
            case 38:
                tennis.classList.remove('tennisLeft');
                tennis.classList.remove('tennisRight');
                tennis.classList.remove('tennisDown');
                tennis.classList.add('tennisUp');
                Top -= move;
                tennis.style.marginTop = `${Top}px`;
                break;
            case 39:
                tennis.classList.remove('tennisLeft');
                tennis.classList.remove('tennisDown');
                tennis.classList.remove('tennisUp')
                tennis.classList.add('tennisRight');
                Left += move;
                tennis.style.marginLeft = `${Left}px`;
                break;
            case 40:
                tennis.classList.remove('tennisLeft');
                tennis.classList.remove('tennisUp')
                tennis.classList.remove('tennisRight');
                tennis.classList.add('tennisDown');
                Top += move;
                tennis.style.marginTop = `${Top}px`;
                break;
        }
    } catch (e) {
        return e;
    }
};