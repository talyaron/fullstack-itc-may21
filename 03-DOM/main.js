setInterval(function () {
   createBox();;
}, 5000);

function createBox() {
   try {
      let num = Math.floor((Math.random() * 10) + 1);
      let colorBody = randomColor();
      document.body.style.background = `${colorBody}`
      let box = document.querySelector('.boxes');
      box.innerHTML = " ";
      for (let i = 0; i < num; i++) {

         let color = randomColor();
         let borderColor = randomColor();
         let size = randomBoxSize();
         let top = randomPosition();
         let left = randomPosition();
         let radios = borderRadius();


         box.innerHTML += `<div style="background-color:${color}; width:${size}px; height:${size}px;
                                       position:relative; top:${top}px; left:${left}px;border-radius:${radios}%; 
                                       margin:0 auto; border:5px solid ${borderColor};  transform:translate(200px,300px) rotate(360deg);">`


      }

   } catch (e) {
      console.log(e);

   }
}