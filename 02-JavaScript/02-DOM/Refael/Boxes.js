const Boxes = () => {

  const body = document.getElementsByTagName("body")[0]; 
  const canvas = document.createElement("canvas");
  const filling = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let random = Math.floor(Math.random() * (10 - 1)) + 1;
  for (let i = 0; i < random; i++) {
    filling.fillStyle = randomColor;

    filling.fillRect(
      Math.random() * window.innerWidth,
      Math.random() * window.innerHeight,
      Math.random() * 100 + 20,
      Math.random() * 100 + 20
    );
  }

  body.appendChild(canvas);
};

 setInterval(function () {
  document.location.reload();
}, 5000);

Boxes();
