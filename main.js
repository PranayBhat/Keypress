function _Start() {
  document.getElementById("start_button").style.display = "none";
  document.getElementById("stop_button").style.display = "inline-block";
  document.getElementById("firstCanvas").style.display = "inline-block";
}

Canvas = document.getElementById("firstCanvas");
ctx = Canvas.getContext("2d");

img_width = 300;
img_height = 100;
var img_image;
img_x = 100;
img_y = 100;
function add() {
  img_imgTag = new Image();
  //defining a variable with a new image
  img_imgTag.onload = uploadimg;
  // setting a function, onloading this variable
  img_imgTag.src = img_image; // load image
}
function uploadimg() {
  ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
  keyPressed = e.keyCode;
  console.log(keyPressed);
  if (
    (keyPressed >= 97 && keyPressed <= 122) ||
    (keyPressed >= 65 && keyPressed <= 90)
  ) {
    aplhabetkey();
    document.getElementById("d4").innerHTML = "You pressed Alphabet Key";
    console.log("alphabet key");
  } else if (keyPressed >= 48 && keyPressed <= 57) {
    numberkey();
    document.getElementById("d4").innerHTML = "You pressed Number Key";
    console.log("Number key");
  } else if (keyPressed >= 37 && keyPressed <= 40) {
    Arrowkey();
    document.getElementById("d4").innerHTML = "You pressed  Aarrow Key";
    console.log("Aarrow Key");
  } else {
    otherkey();
    document.getElementById("d4").innerHTML = "You pressed symbol or other key";
  }
}
function _Stop() {
  document.getElementById("start_button").style.display = "inline-block";
  document.getElementById("stop_button").style.display = "none";
  document.getElementById("firstCanvas").style.display = "none";
}
function aplhabetkey() {
  img_image = "aplhabetkey.jpg";
  add();
}
function numberkey() {
  img_image = "numberkey.png";
  add();
}
function Arrowkey() {
  img_image = "Arrows.jfif";
  add();
}
function otherkey() {
  img_image = "otherkeys.png";
  add();
}