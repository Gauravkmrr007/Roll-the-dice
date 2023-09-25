// for first image
var randomNumber1= Math.floor(Math.random()*6)+1;
var randomDiceImage= "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0].setAttribute("src" , randomImageSource);


// foe second image
var randomNumber2= Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image1 = document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "player 1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML= "player 2 wins";
}
else{
    document.querySelector("h1").innerHTML= "It's a draw"; 
}