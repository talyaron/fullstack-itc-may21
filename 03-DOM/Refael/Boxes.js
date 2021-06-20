const Boxes = () => {  //YS: Good job using const but a function should not be capitalized.

  const body = document.getElementsByTagName("body")[0];  /*YS: The error might come from here, 
                                                            if body is not found (might happen because
                                                            the JS loads faster than the HTML, due to a humman error (
                                                            for example body is written incorrectly) or  other reasons*/
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

  body.appendChild(canvas); //YS:You can throw an error after here since we know that body might not be found so body.appendChild() might cause an error. if (!body) throw new Error()
};

 setInterval(function () {
  document.location.reload();
}, 5000);

Boxes();
