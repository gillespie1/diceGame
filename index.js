//variables that store a generated ranom number between 1 and 6.
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png"; //dice1-dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}


//
// rollDice1();
// rollDice2();
// checkWinner();
//
// //if one dice > other then change heading to winner
// //if both dices are equal then display draw
//
//
// //function that changes heading depending on who has rolled higher.
// function checkWinner(){
//   if(randomNumber1 === randomNumber2){
//     document.querySelector("h1").innerText = "Draw!";
//   }
//   else if(randomNumber1 > randomNumber2){
//     document.querySelector("h1").innerText = "Player 1 wins!";
//   }
//   else if(randomNumber2 > randomNumber1){
//     document.querySelector("h1").innerText = "Player 2 wins!";
//   }
//
// }
// //Function for changing the dice image based on random number.
// function rollDice1() {
//   if (randomNumber1 === 1) {
//     document.getElementsByTagName("img")[0].setAttribute("src", "images/dice1.png");
//   } else if (randomNumber1 === 2) {
//     document.getElementsByTagName("img")[0].setAttribute("src", "images/dice2.png");
//   } else if (randomNumber1 === 3) {
//     document.getElementsByTagName("img")[0].setAttribute("src", "images/dice3.png");
//   } else if (randomNumber1 === 4) {
//     document.getElementsByTagName("img")[0].setAttribute("src", "images/dice4.png");
//   } else if (randomNumber1 === 5) {
//     document.getElementsByTagName("img")[0].setAttribute("src", "images/dice5.png");
//   } else if (randomNumber1 === 6) {
//     document.getElementsByTagName("img")[0].setAttribute("src", "images/dice6.png");
//   }
// }
//
// function rollDice2() {
//   if (randomNumber2 === 1) {
//     document.getElementsByTagName("img")[1].setAttribute("src", "images/dice1.png");
//   } else if (randomNumber2 === 2) {
//     document.getElementsByTagName("img")[1].setAttribute("src", "images/dice2.png");
//   } else if (randomNumber2 === 3) {
//     document.getElementsByTagName("img")[1].setAttribute("src", "images/dice3.png");
//   } else if (randomNumber2 === 4) {
//     document.getElementsByTagName("img")[1].setAttribute("src", "images/dice4.png");
//   } else if (randomNumber2 === 5) {
//     document.getElementsByTagName("img")[1].setAttribute("src", "images/dice5.png");
//   } else if (randomNumber2 === 6) {
//     document.getElementsByTagName("img")[1].setAttribute("src", "images/dice6.png");
//   }
// }
