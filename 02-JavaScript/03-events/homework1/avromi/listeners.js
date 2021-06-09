let moveBy = 10;

window.addEventListener(`load`, () =>{
 car.style.position = `relative`;
 car.style.left = 0;
 car.style.top = 0;
 car.style.transform = `rotate(0deg)`
});


window.addEventListener(`keydown`, (e) =>{        //YS: Why not also change the car's direction ( look up <transform: tranlsate> in CSS) 
    switch(e.key){                   
        case `ArrowLeft`:
        car.style.left = parseInt(car.style.left) - moveBy + `px`;
        car.style.transform = `rotate(-90deg)`
        break;
        case `ArrowRight`:
        car.style.left = parseInt(car.style.left) + moveBy + `px`;  
        car.style.transform = `rotate(90deg)`                   
        break;
        case `ArrowUp`:
        car.style.top = parseInt(car.style.top) - moveBy + `px`;
        car.style.transform = `rotate(0deg)`
        break;
        case `ArrowDown`:
        car.style.top = parseInt(car.style.top) + moveBy + `px`;
        car.style.transform = `rotate(180deg)`
        break;
    }
});