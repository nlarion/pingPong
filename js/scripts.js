$(document).ready(function() {
  $(window).resize(updateText);
  updateText();
  $("form").submit(function(event) {
    var userInput = parseInt($("input#userInput").val());
    if(typeChecker(userInput)){
      var result = pingPongArray(userInput);
      $("#result").text(result);
      $("#result").show();
    } else {
      $('#alertModal').modal('show');
      $("input#userInput").val('');
    }
    event.preventDefault();
  });

});

//UI logic
function updateText() {
  $('.textfill').textfill({
    maxFontPixels: 300
  });
}

//Business logic
var divisibleBy = function(num,divisor){
  if (num % divisor === 0) {
    return true;
  } else {
    return false;
  }
};

var typeChecker = function(num){
  if (!isNaN(num)) {
    return true;
  } else {
    return false;
  }
};

var makeUserInputArray = function(num){
  var arr = [];
  for (var i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
};

var pingPongArray = function(userInput){
  var divisibleByNumbers = [15,5,3];
  var replaceValues = ["pingpong","pong","ping"];
  userInput = makeUserInputArray(userInput);
  for (var i = 0; i < userInput.length; i++) {
    for (var j = 0; j < divisibleByNumbers.length; j++) {
      if (divisibleBy(userInput[i],divisibleByNumbers[j])) {
        userInput[i] = replaceValues[j];
      }
    }
  }
  return userInput;
};
