// //create an image of your favorite animal (or whatever).
// put it in the middle of the screen
// move it with the arrow on the screen.
// if you move it up, the image should look up, etc..
// extra:
// if the cursor moves over the image a surprise image appear

try {
    const car = document.querySelector(`#car`);
    throw new Error(`Item Doesn't Exist`)
} catch (error) {
    console.error(`caught`);
}
console.dir(car)


car.addEventListener("mouseover", eve => {
    car.style.border = `blue dashed 20px`
});
car.addEventListener("mouseout", eve => {
    car.style.border = `red dashed 2px`
});

const banner = document.querySelector(`.banner`);

banner.addEventListener("mouseover", eve => {
    banner.style.background = `yellow`
});
banner.addEventListener("mouseout", eve => {
    banner.style.background = `black`
});


let moveBy = 10;

window.addEventListener(`load`, () =>{
 car.style.position = `relative`;
 car.style.left = 0;
 car.style.top = 0;
 car.style.transform = `rotate(0deg)`
});

window.addEventListener(`keydown`, (e) =>{
    switch(e.key){
        case `ArrowLeft`:
        car.style.left = parseInt(car.style.left) - moveBy + `px`;
        break;
        case `ArrowRight`:
        car.style.left = parseInt(car.style.left) + moveBy + `px`;
        break;
        case `ArrowUp`:
        car.style.top = parseInt(car.style.top) - moveBy + `px`;
        break;
        case `ArrowDown`:
        car.style.top = parseInt(car.style.top) + moveBy + `px`;
        break;
    }
   });






const plusTwenty = function () {
    return +20
}
console.log(plusTwenty)