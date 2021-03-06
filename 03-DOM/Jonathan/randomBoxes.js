//import function from helpers.js

//import {randomBorderColor,randomColor,randomFontsize,randomHColor,randomNumber,randomPositionLeft,randomPositionTop,randomSize,randomSpin} from 'helpers.js';

//alljobs 

/* import { randomNumber } from 'helpers.js';
import { randomHColor } from 'helpers.js';
import { randomFontsize } from 'helpers.js';
import { randomBorderColor } from 'helpers.js';
import { randomSize } from 'helpers.js';
import { randomPositionTop } from 'helpers.js';
import { randomPositionLeft } from 'helpers.js';
import { randomSpin } from 'helpers.js'; */
 
//First call and then setInterval 5 seconds
randomBoxes();

//Recreate everything every 5 seconds
setInterval(function () { location.reload();}, 5000)

//randomBoxes();
function randomBoxes() {
    
    
    try {

        let boxes = randomNumber();

        if (boxes === 11) throw new Error('This program only allows from 1 to 10')

        //body
        let colorBody = randomColor();
        document.body.style.background = `${colorBody}`
        
        
        //h1
        let colorh1 = randomHColor();
        let h1 = document.createElement('H1')
        h1.innerHTML = `Number of boxes: ${boxes}`
        document.body.appendChild(h1);
        let fontsize = randomFontsize();
        h1.style.color = `${colorh1}`;
        h1.style.fontSize = `${fontsize}px`;
        
        //container
        //let container = document.querySelector('.container');
        
        let container = document.createElement("div");
        container.className = "container";
        document.body.appendChild(container);
   
        if(!container) throw new Error('The container does not exist');
        
        //clean container
        //container.innerHTML = " ";

        //create divs and changes their style
        for (let i = 0; i < boxes; i++) {

            let color = randomColor();
            let borderColor = randomBorderColor();   /*YS: Very nice job in separating your helper functions. It is better practice to import functions   
                                                    than to link both JS files in the HTML. Please look up importing functions in ES6 */
            let size = randomSize();
            let top = randomPositionTop();
            let left = randomPositionLeft();
            let spin = randomSpin();

            container.innerHTML += `<div class="container__item" style="background-color:${color}; width:${size}px; height:${size}px;position:relative; top:${top}px; left:${left}px; border:5px solid ${borderColor}; animation: spin ${spin}ms infinite linear"><p>Box ${i+1}</p></div>`
            
        }
        
        if(!document.querySelector('.container__item')) throw new Error('The boxes does not exist');
        
        
    } catch (e) {
        console.log(e);
    }
    
}

//YS: Excellent error handling! Good job! 