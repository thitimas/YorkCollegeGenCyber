
function buttonFunction() {
    
   
  var password = document.getElementById("password").value;

  var valid = false;
  if (checkpassword(password) == false) {
    $("#passwordFeedback").html("Make it stronger!!! Please try again.");
    $("#passwordFeedback").css("color", "#dc3545");

  } else {
    $("#passwordFeedback").html("Got it! This is strong enough! <br/>Please remember it and use it for later! <br> Now go to <a href='https://mywordle.strivemath.com/?word=zsgws' target='_blank'>https://mywordle.strivemath.com/?word=zsgws</a> for the next clue!!");
    $("#passwordFeedback").css("color", "#28a745");
    localStorage.setItem('GenCyberPass', password);

  }
}

var code = document.getElementById("password");

// var strengthbar = document.getElementById("meter");
// // var display = document.getElementsByClassName("textbox")[0];

// code.addEventListener("keyup", function() {
//   checkpassword(code.value);
// });


function checkpassword(password) {
  var strength = 0;
  if (password.match(/[a-z]+/)) {
    strength += 1;
  }
  if (password.match(/[A-Z]+/)) {
    strength += 1;
  }
  if (password.match(/[0-9]+/)) {
    strength += 1;
  }
  if (password.match(/[$@#&!]+/)) {
    strength += 1;
  }
  if (password.length >= 8){
    strength += 1;    
  }

  console.log(strength);
  if (strength > 4){
    return true;
  } else {
    return false;
  }
}


