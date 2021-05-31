//Recreate everything every 5 seconds
setInterval(function () { randomBoxes();; }, 5000);

//randomBoxes();
function randomBoxes() {

    try {

        boxes = Math.floor(Math.random() * 10 + 1)
        
        //body
        let colorBody = randomColor();
        document.body.style.background = `${colorBody}`
        
        //h1
        let colorh1 = randomHColor();
        let h1 = document.querySelector('.myh1id')
        h1.innerHTML = `Numbers of boxes: ${boxes}`
        let fontsize = randomFontsize();
        h1.style.color = `${colorh1}`;
        h1.style.fontSize = `${fontsize}px`;

        //container
        let container = document.querySelector('.container');
        
        //clean container
        container.innerHTML = " ";

        //create divs and changes their style
        for (let i = 0; i < boxes; i++) {

            let color = randomColor();
            let borderColor = randomBorderColor();
            let size = randomSize();
            let top = randomPositionTop();
            let left = randomPositionLeft();
            let spin = randomSpin();

            container.innerHTML += `<div style="background-color:${color}; width:${size}px; height:${size}px;
                                        position:relative; top:${top}px; left:${left}px; 
                                        margin:0 auto; border:5px solid ${borderColor}; animation: spin ${spin}ms 
                                        infinite linear">
                                        <p>Box ${i+1}</p></div>`
        }                               
    } catch (e) {
        console.log(e);
    }
}