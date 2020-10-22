var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var imageSource1 = "/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var imageSource2 = "/dice" + randomNumber2 + ".png";

document.querySelector("img.img1").setAttribute("src", imageSource1);

document.querySelector("img.img2").setAttribute("src", imageSource2);

if (randomNumber1 === randomNumber2) {
  document.querySelector("h6").innerHTML = "DRAW!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h6").innerHTML = "Player 2 Wins🚩";
} else {
  document.querySelector("h6").innerHTML = "🚩Player 1 Wins";
}
