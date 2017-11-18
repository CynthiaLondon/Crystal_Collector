
  var dogs = {
    dog1:
    {
      name:"One",
      value:0
    },
    dog2:
    {
      name: "Two",
      value:0
    },
    dog3:
    {
      name: "Three",
      value:0
    },
    dog4:
    {
      name: "Four",
      value:0
    },

  };

// Scores (Current and Target)
var currentScore = 0;
var targetScore  = 0;

// Wins and Losses
var winCount  = 0;
var lossCount = 0;


// FUNCTIONS
// ------------------------------------------------------------------------------------
// helper function for getting random numbers
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// Starts the game and restarts the game
var startGame = function() {
  //reset current score
  currentScore = 0;
  //set new target score
  targetScore = getRandom(15, 150);
 
  dogs.dog1.value = getRandom(1, 15);
  dogs.dog2.value = getRandom(1, 75);
  dogs.dog3.value = getRandom(1, 25);
  dogs.dog4.value = getRandom(1, 5);
 
  $("#yourScore").html(currentScore);
  $("#targetScore").html(targetScore);
};

var addValues = function(dogs) {

  currentScore = currentScore + dogs.value;
 
  $("#yourScore").html(currentScore);

  checkWin();
  

};

var checkWin = function() {
  //Check if current score 

  if (currentScore > targetScore) {
    
  
    alert("Game Over!");
    //add to loss counter
    lossCount++;
    //Change loss count
    $("#lossCount").html(lossCount);

    //Restart the game
    startGame();
  }
  else if (currentScore == targetScore) {
    alert("You won!");
 

    
    winCount++;
   
    $("#winCount").html(winCount);
    
    //Restart the game
    startGame();

  }
};



startGame();

$('#one').click(function() {
  addValues(dogs.dog1);
});
$('#two').click(function() {
  addValues(dogs.dog2);
});
$('#three').click(function() {
  addValues(dogs.dog3);
});
$('#four').click(function() {
  addValues(dogs.dog4);
});
