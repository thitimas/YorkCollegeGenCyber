
function buttonFunction() {
    
   
var sql = document.getElementById("password").value;
var sqlUpper = sql.toUpperCase();
var firstIndex = sqlUpper.indexOf("' OR '");
var firstIndexEnd = firstIndex + 6;
var subIndex1 = sqlUpper.substring(firstIndex, firstIndexEnd);
var secIndex = sqlUpper.indexOf("'='");
var secIndexEnd = secIndex + 3;
var subIndex2 = sqlUpper.substring(secIndex, secIndexEnd);
var sqlLength = sqlUpper.length;
var ranVarOne = sqlUpper.substring(0, firstIndex);
var ranVarTwo = sqlUpper.substring(firstIndexEnd, secIndex);
var ranVarThree = sqlUpper.substring(secIndexEnd, sqlLength);
var username = document.getElementById("username").value;

var valid = false;
var admin = "admin";
if (sql !== "") {

if (username == admin) {

if (firstIndex >= 0) {
  var valid = true;
  
  if (secIndex >= 0) {
    var valid = true;
    
    if (ranVarTwo == ranVarThree) {
      
      valid = true;
      $("#loginFeedback").html("Congratulations! You have found the flag!");
      $("#loginFeedback").css("color", "#28a745");
      $("#successFlag").html("flag{abstraction}"); 
    }  
  } 
 }
}
}
else {

  $("#loginFeedback").html("Incorrect username or password. Please try again.");
  $("#loginFeedback").css("color", "#dc3545");
}
if (valid == false){
  $("#loginFeedback").html("Incorrect username or password. Please try again.");

  $("#loginFeedback").css("color", "#dc3545");  
} 
   
}


