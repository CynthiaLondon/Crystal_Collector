
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

// Scores 
var yourScore = 0;
var neededScore  = 0;

// Wins and Losses
var winCount  = 0;
var lossCount = 0;


// functionjunction
// ------------------------------------------------------------------------------------
// getting random numbers
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var gameStart = function() {

  yourScore = 0;
 
  neededScore = getRandom(15, 150);
 
  dogs.dog1.value = getRandom(1, 15);
  dogs.dog2.value = getRandom(1, 75);
  dogs.dog3.value = getRandom(1, 25);
  dogs.dog4.value = getRandom(1, 5);
 
  $("#yourScore").html(yourScore);
  $("#neededScore").html(neededScore);
};

var addValues = function(dogs) {

  yourScore = yourScore + dogs.value;
 
  $("#yourScore").html(yourScore);

  checkScore();
  

};

var checkScore = function() {
  //Check your score

  if (yourScore > neededScore) {
    
  
    alert("Sorry, you lost! Game Over!");
  
    lossCount++;
    //Change loss count
    $("#losses").html(lossCount);

    gameStart();
  }
  else if (yourScore == neededScore) {
    alert("You won!");
 

    
    winCount++;
   
    $("#wins").html(winCount);
    
    //restart
    gameStart();

  }
};



gameStart();

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
