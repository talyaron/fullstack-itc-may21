function randomColor(){
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
}
function randomBoxSize(){
   let size= Math.floor((Math.random() * 240) +40);
   return size;
}


 function randomPosition(){
     let position=Math.floor(Math.random() * 10 + Math.random()*100);
     return position;
 }

 function borderRadius(){
    let radius=Math.floor((Math.random() * 100) +1);
    return radius;
}