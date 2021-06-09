setInterval(function () {
   createBox();;
}, 5000);

function createBox() {
   try {                                                                                                           
      let num = Math.floor((Math.random() * 10) + 1);
      let colorBody = randomColor();
      document.body.style.background = `${colorBody}`
      let box = document.querySelector('.boxes'); 
      /* YS: if (!box) throw new Error('Box not found');                         YS: The error might come from here, 
                                                                                 if box is not found (might happen because
                                                                                 the JS loads faster than the HTML, due to a humman error (
                                                                                 for example container is written incorrectly) or other reasons */ 
 
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
                                                                                        //YS: This transform tells your boxes to start at a minimum of 300px from the top which is a bit low in the screen.  


      }

   } catch (e) {
      console.log(e);

   }
}