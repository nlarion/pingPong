$(document).ready(function() {
  $("form").submit(function(event) {
    var messageInput =$("input#userInput").val();
    var result = pigLatinSentence(messageInput);
    $("#result").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
//TODO: check divisible by 15 remove from array
//TODO: check divisible by 5 remove from array
//TODO: check divisible by 3 remove from array
//TODO: sort new array
//TODO: return new array

var divisibleBy = function(userNum,divisor){
  if (userNum % divisor === 0) {
    return true;
  } else {
    return false;
  }
};

var typeChecker = function(number){
  if (!isNaN(number)) {
    return true;
  } else {
    return false;
  }
};

var sortArray = function(arr){
  arr.sort(function(a,b){
    return a-b;
  });

  return arr;
}
