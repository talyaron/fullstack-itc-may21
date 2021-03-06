
pikachuMove();    ///YS: It is better practice to call your function after you define it. This should be at the end. 


function pikachuMove() {
    try {
        const pikachu = document.querySelector('.pikachu');

        let isRight = 1; // whenever pikachu up or down, it's different the movement between left and right movement

        if (!pikachu) throw new Error("The image pikachu running can not uploaded");

        //Position Pikachu
        pikachu.style.position = "relative";
        pikachu.style.left = "500px";
        pikachu.style.top = "200px";

        //Get Position X and Y
        let positionX = parseInt(pikachu.style.left);     //YS: Good 
        let positionY = parseInt(pikachu.style.top);

        //Get speed of moving
        const speed = 10;

        //Movement with the keyboard
        document.addEventListener('keydown', ev => {

            if (!ev) throw new Error("the event keydown does not work");

            if (ev.key == "ArrowDown") {
                pikachu.style.top = `${positionY + speed}px`
                positionY = parseInt(pikachu.style.top);
                //pikachu.style.transform = "rotate(90deg)"     //YS: Please don't leave commented code in your work (you can leave comments but not commented code).

                if (isRight == 1) {
                    pikachu.style.transform = "rotate(90deg) scaleY(1)"
                    if (positionY >= 400) {
                        positionY = 400;
                        pikachu.style.transform = "rotate(270deg) scaleY(1)"
                    }
                } else {
                    pikachu.style.transform = "rotate(90deg) scaleY(-1)"
                    if (positionY >= 400) {
                        positionY = 400;
                        pikachu.style.transform = "rotate(270deg) scaleY(-1)"                                                         /*YS: This is a very large function and if you notice you are 
                                                                                                                                     */
                    }
                }

            } else if (ev.key == "ArrowUp") {
                pikachu.style.top = `${positionY - speed}px`
                positionY = parseInt(pikachu.style.top);
                //pikachu.style.transform = "rotate(270deg)" //scaleY(-1)

                if (isRight == 1) {
                    pikachu.style.transform = " rotate(270deg) scaleY(1)"
                    if (positionY <= 15) {
                        positionY = 15;
                        pikachu.style.transform = "rotate(90deg) scaleY(1)"
                    }
                } else {
                    pikachu.style.transform = " rotate(270deg) scaleY(-1)"
                    if (positionY <= 15) {
                        positionY = 15;
                        pikachu.style.transform = "rotate(90deg) scaleY(-1)"
                    }
                }

            } else if (ev.key == "ArrowLeft") {
                pikachu.style.left = `${positionX - speed}px`
                positionX = parseInt(pikachu.style.left);
                //pikachu.style.transform = "rotate(180deg)"
                pikachu.style.transform = "scaleX(-1)"
                isRight = 0;
                if (positionX <= 15) {
                    positionX = 15;
                    pikachu.style.transform = "scaleX(1)"
                    isRight = 1;
                }

            } else if (ev.key == "ArrowRight") {
                pikachu.style.left = `${positionX + speed}px`
                positionX = parseInt(pikachu.style.left);
                pikachu.style.transform = "scaleX(1)"
                isRight = 1;
                if (positionX >= 1150) {
                    positionX = 1150;
                    pikachu.style.transform = "scaleX(-1)"
                    isRight = 0;
                }

            }
        })
        //Mouseover
        pikachu.addEventListener('mouseover', () => {
            if (!pikachu) throw new Error("the event mouseover does not work");
            //const target = ev.target;
            pikachu.setAttribute('src', 'img/pihappy.gif')
            pikachu.style.transform = "rotate(0deg) scaleY(1)"

        });

        //MouseOut

        pikachu.addEventListener('mouseout', () => {
            if (!pikachu) throw new Error("the event mouseout does not work");
            //const target = ev.target;
            pikachu.setAttribute('src', 'img/piran.gif')

        });



    } catch (e) {
        console.log(e);
    }

}

//https://www.section.io/engineering-education/keyboard-events-in-javascript/