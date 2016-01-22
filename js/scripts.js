$(document).ready(function() {
  $("form").submit(function(event) {
    var messageInput =$("input#userInput").val();
    var result = pigLatinSentence(messageInput);
    $("#result").text(result);
    $("#result").show();
    event.preventDefault();
  });
});

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

var pingPong = function(userInput){
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
