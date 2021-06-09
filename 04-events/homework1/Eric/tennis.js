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
let Top = 0;    //YS: Dont capitalize variable names. We use camelCase. 
let Left = 0;


document.onkeydown = function (event) {              //YS: Better practice to write: document.body.addEventListener('keydown', function(event) {...})
    try {
        if (img2 === null) {                         //YS: You can also write < if(!img2) >   and you are missing another error:  < if(!tennis) throw new Error()   >
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
                break;                                                                          /*YS: Nice work! Very clear and organized code. Good use of switch statements, const/let
                                                                                                Also good use of playing with different CSS classNames. The only problem I had with your code
                                                                                                is that it is too repetitve. Remember DRY(dont repeat yourself). YOu are doing very similar things
                                                                                                in all of the switch cases, so it would've been much better to create one or two functions and just
                                                                                                and just pass different parameters each time.      */
        }
    } catch (e) { 
        return e;
    }
};