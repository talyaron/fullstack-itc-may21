function randomNum() {
  let num = Math.floor(Math.random() * (10 - 1)) + 1;
  return num;
}
function randomColor() {
  let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
  return color;
}
function randomSize() {
  let size = Math.floor(Math.random() * (200 - 40)) + 40 + "px";
  return size;
}
function randomPositionTop() {
  let position = Math.floor(Math.random() * (100 - 10)) + 10 + "px";
  return position;
}
function randomPositionLeft() {
  let position = Math.floor(Math.random() * (500 - 100)) + 100 + "px";
  return position;
}
