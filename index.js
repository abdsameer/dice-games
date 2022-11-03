var player1Name = prompt("Enter Player1 name:");
var player2Name = prompt("Enter Player2 name:");
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage1 = "dice"+randomNumber1+".png";
var randomImageSource1 = "images/"+randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomImageSource2 = "images/"+randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 " + player1Name +" Wins!";
}

else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "🚩 Player 2 "+ player2Name + " Wins!";
}

else{
  document.querySelector("h1").innerHTML = "Draw!";
}
