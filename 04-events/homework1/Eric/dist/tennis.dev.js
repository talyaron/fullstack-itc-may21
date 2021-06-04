"use strict";

//create an image of your favorite animal (or whatever).
//put it in the middle of the screen
//move the image with the keyboard key arrow.
//if you move it up, the image should look up, etc...
//extra: if the cursor moves over the image a surprise image appear
//image and extra
window.onload = function () {
  var img2 = document.getElementById("fedd");
  img2.addEventListener('mouseout', imageStart);
  img2.addEventListener('mouseover', changeImage);
  img2.width = "300";
  img2.height = "200";
  img2.style.align = "center";
  img2.style.display = "flex";
  img2.style.marginTop = "200px";
  img2.style.marginLeft = "450px";

  function changeImage() {
    this.setAttribute('src', 'fed.jpg');
  }

  function imageStart() {
    this.setAttribute('src', "ball.jpg");
  }
}; //arrow keyword