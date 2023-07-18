// Assignment code here






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

var CodeLength = prompt(" Please,Select the desired length of the  password between the 8 and 128 characters! ,");


if (CodeLength < 8 || CodeLength > 128 || isNaN(CodeLength) ) {

  alert ("Your Password is invalid length. Please select your password as valid length( Between 8 and 128 characters)");
  var CodeLength = prompt(" Please,Select the desired length of the  password between the 8 and 128 characters! ,");

}




}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
