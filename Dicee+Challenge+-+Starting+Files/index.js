var randomnumber1 ;
randomnumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage1 = "dice"+randomnumber1+".png";
var randomImageSource1 = "images/"+randomDiceImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);


var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice"+randomnumber2+".png";
var randomImageSource2 = "images/"+randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randomnumber1 > randomnumber2){
  document.querySelector("h1").textContent = "Player 1 wins!...";
}
else if(randomnumber1 < randomnumber2){
  document.querySelector("h1").textContent = "Player 2 Wins!...";
}
else if(randomnumber1 === randomnumber2){
  document.querySelector("h1").textContent = "It's a tie!...";
}
