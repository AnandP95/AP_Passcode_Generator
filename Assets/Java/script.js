// Assignment code here






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

var CodeLength = prompt(" Please,Select the desired length of the  password between the 8 and 128 characters! ,");


if (CodeLength < 8 || CodeLength > 128 || isNaN(CodeLength) ) {

  alert("Your Password is invalid length. Please select your password as valid length( Between 8 and 128 characters)");
  var CodeLength = prompt(" Please,Select the desired length of the  password between the 8 and 128 characters! ,");

}

var AddLowerCase = confirm("Would you like Your Password as a (LowerCase) letter!");
var AddUpperCase = confirm("Would you like Your Password as a (UpperCase) letter!");
var AddNumeric = confirm("Would you like Your Password as a (Numeric) Number!");
var AddSymbol = confirm("Would you like Your Password as a (Special Symbol)!  Like,@,$,%, etc.");
 

var IncludeLowerCase ="abcdefghijklmnopqrstuvwxyz";
var IncludeUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var IncludeNumeric ="0123456789";
var IncludeSymbol ="!@#$%^&*(){}:<>[]?" 

var characters = "";

if (IncludeLowerCase == false && !IncludeUpperCase == false && !IncludeSymbol == false && !IncludeNumeric == false) {
  alert( " Please,You need to select at least one type of characters! ")
  return "";
}
 

if (AddUpperCase){
  characters += IncludeUpperCase ;
}

if (AddLowerCase){
  characters += IncludeLowerCase ;
}



if (AddNumeric){
  characters += IncludeNumeric ;
}

if (AddSymbol){
  characters += IncludeSymbol ;
}

var password ="";

for ( let i = 0; i < CodeLength; i++) {

  let RandomPassCode = Math.floor(Math.random() * characters.length);
  password += characters[RandomPassCode];
}

return password;
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
