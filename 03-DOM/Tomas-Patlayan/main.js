// const boxes = () => {
//     let container = document.getElementById(container);

//     for (let i = 0; i < 10; i++) {
//         let box = document.createElement("div");
//         container.appendChild(box);
//         let colors = random_bg_color();
//         box.style.backgroundColor = colors;
//         let width = randomWidth();
//         box.style.wSize=width;
//         let height = randomHeigh();
//         box.style.hSize=height;

//     }
// }



// function random_bg_color(){
//     let x = Math.floor(Math.random() * 256);
//     let y = Math.floor(Math.random() * 256);
//     let z = Math.floor(Math.random() * 256);
//     let bgColor = "rgb(" + x + "," + y + "," + z + ")";
//     return bgColor;
// }

// function randomWidth(){
//     let a = Math.floor(Math.random() * 200);
//     let b = Math.floor(Math.random() * 200);
//     let c = Math.floor(Math.random() * 200);
//     let withSize = `width: ${a},${b},${c}`;
//     let heightSize = `width: ${a},${b},${c}`;
//     return withSize;
   
// }

// function randomHeight(){
//     let d = Math.floor(Math.random() * 200);
//     let f = Math.floor(Math.random() * 200);
//     let g = Math.floor(Math.random() * 200);
//     let heightSize = `height: ${d},${f},${g}`;
   
//     return heightSize;
// }

// boxes();


function setup(){

    const container = document.getElementById("container");

    for (let i = 0; i < 10; i++) {
        let box = document.createElement("div");
        container.appendChild(box);
        let colors = random_bg_color();
        box.style.backgroundColor = colors;
      

    }
}

function random_bg_color(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}



setup()