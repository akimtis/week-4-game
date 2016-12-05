//Set variable for the random number range
//set variables for the score, wins, and losses 
//Generate new random number
//Set score to 0
//Generate and Assign new values to each pepper
//Include a value in the score each time a peper is clicked with a string
//Display constantly updated value
//Determine if value of the score is equal to or greater than the random number
//If value is equal, denote win and reset all values
//If value is greater than the random number, denote loss and reset all values.


var score = 0;
var wins = 0;
var losses = 0;
var pepperNumber = [];

// function (refresh){
//   console.log("refresh");
//   clearInterval(pepperNumber);
//   clearInterval(randomNumber);
// };

for(var i=1; i <= 4; i++){
  pepperNumber.push(Math.floor(Math.random()*12))
}
console.log(pepperNumber);

//assigning a value to each pepper button
$("#bell").attr("data-value", pepperNumber[0]);
$("#habanero").attr("data-value",pepperNumber[1])
$("#scorpion").attr("data-value", pepperNumber[2])
$("#jalapeno").attr("data-value", pepperNumber[3])


//assign the random button a random number
for(var i=19; i<120; i++){
  var randomNumber= Math.floor(Math.random()*101)
  }
  console.log(randomNumber);
  $("#randomButton").html(randomNumber);

//on click of a pepper button add it to the string
$(".pepper").on("click", function(){
  score = score += parseInt($(this).attr("data-value"));
  console.log(score)
  $("#score").text(score);
  
//determine win and lose conditions and actions
if (score == randomNumber) {
  wins++;
  alert("You Win!");
  score = 0;
  }
  
  if (score > randomNumber) {
  losses++;
  alert("You Lose!");
  score = 0;
  }
});
//refresh()

// // var randomRange = [];
//   for (var i = 19; i <= 120; i++) {
//     randomRange.push(i);
// }

// var pepperRange = [];
//   for (var i = 1; i <= 12; i++) {
//     pepperRange.push(i);
//   }

// var randomNumber = randomRange[Math.floor(Math.random()*randomRange.length)];
// console.log(randomNumber)

// var pepperOne= randomRange[Math.floor(Math.random()*pepperRange.length)];
// //console.log(pepperNumber1)

// var pepperTwo= randomRange[Math.floor(Math.random()*pepperRange.length)];
// //console.log(pepperNumber2)

// var pepperThree= randomRange[Math.floor(Math.random()*pepperRange.length)];
// //console.log(pepperNumber3)

// var pepperFour= randomRange[Math.floor(Math.random()*pepperRange.length)];

// var displayRandom = document.querySelector("#random");
//   displayRandom.innerHTML = ("Random Number: " + randomNumber)

// var displayWinsLoses = document.querySelector("#wins_losses");
//   displayWinsLoses.innerHTML = ("Wins: " + "" + "Losses: " + "")

// var displayPepperThree = document.querySelector("#bell");
//   displayScore.innerHTML = (pepperOne)

// var displayPepperThree = document.querySelector("#habanero");
//   displayScore.innerHTML = (pepperTwo)

// var displayPepperThree = document.querySelector("#scorpion");
//   displayScore.innerHTML = (pepperThree)

// var displayPepperThree = document.querySelector("#jalapeno");
//   displayScore.innerHTML = (pepperFour)





//This is the code I'm working on to make the score adding new numbers the person has presed
// document.onkeyup = function(event) {
//   var k = event.key;
//   var score = [];
//   for (var i = k; i<=randomNumber; i+this){
//     score.push(i);
//   console.log(score)
//   displayScore.innerHTML = score;
//   }
// }

// var displayScore = document.querySelector("#score");
//   displayScore.innerHTML = ("Your Total Score Is: " + score)

//this will hopefully one day deterimine the conditions of a won or lost game
/*function checkRandom(c){
  var random = randomNumber

  if (random.indexOf(c) == score){
    return "You Win";
  } else {
    return "You Lose";
  }
}*/


