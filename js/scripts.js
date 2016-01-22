//UI logic
$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip()
  $(window).resize(updateText);
  updateText();
  $(".again button").click(function(){
    removeResults();
  });

  $("#aboutModal").on('hidden.bs.modal', function () {
    //hide focus for about because it wont reset on it's own
    $("#aboutButton").prop('focus',false);
  });
  $("form").submit(function(event) {
    var userInput = parseInt($("input#userInput").val());
    if(typeChecker(userInput) && userInput>0){
      var result = pingPongToDivs(userInput);
      removeResults();
      $("#result").append(result);
      $("#result, .again").show();
      updateText();
      console.log(result.length);
      $('html, body').animate({
          scrollTop: $(".again").offset().top
      }, 2000);
    } else {
      removeResults();
      $('#alertModal').modal('show');
      $("input#userInput").val('');
      updateText();
    }
    event.preventDefault();
  });
});

var removeResults = function(){
  $("#result").text('');
  $(".again").hide();
}

function updateText() {
  $('.textfill').textfill({
    maxFontPixels: 300
  });
}

var pingPongToDivs = function (userInput){
  var arr = pingPongArray(userInput);
  for (var i = 0; i < arr.length; i++) {
    arr[i]="<div class='textfill'><span class='spanText'>"+arr[i]+"</span></div>";
  }
  arr.push("<div>")
  return arr.join("");
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
