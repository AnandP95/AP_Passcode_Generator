
/* Assign the variable */
var generateBtn = document.querySelector("#generate");


/* Generate the password  based on user input */
function generatePassword() {


/* Prompts the user to select the desired length:Between 8 and 128 characters  */
var CodeLength = prompt(" Please,Select the desired length of the  password between the 8 and 128 characters! ,");


/*  Set the conditional statement if user entered the invalid length.  */
if (CodeLength < 8 || CodeLength > 128 || isNaN(CodeLength) ) {


  alert("Your Password is invalid length. Please select your password as valid length( Between 8 and 128 characters)");
  var CodeLength = prompt(" Please,Select the desired length of the  password between the 8 and 128 characters! ,");

}

/* Prompt user to confirm , include Lowercase, Uppercase, Numeric, Symbol */

var AddLowerCase = confirm("Would you like Your Password as a (LowerCase) letter!");
var AddUpperCase = confirm("Would you like Your Password as a (UpperCase) letter!");
var AddNumeric = confirm("Would you like Your Password as a (Numeric) Number!");
var AddSymbol = confirm("Would you like Your Password as a (Special Symbol)!  Like,@,$,%, etc.");
 

/* Set the characters to generate the password  */
var IncludeLowerCase ="abcdefghijklmnopqrstuvwxyz";
var IncludeUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var IncludeNumeric ="0123456789";
var IncludeSymbol ="!@#$%^&*(){}:<>[]?" 


/* Set the variable to store the generated password. */
var characters = "";


/*   Set the conditional statement if the user not selected any character type.   */
if (!AddLowerCase && !AddUpperCase && !AddSymbol && !AddNumeric) {
  alert("Please select at least one type of character.");
  var AddLowerCase = confirm("Would you like Your Password as a (LowerCase) letter!");
  var AddUpperCase = confirm("Would you like Your Password as a (UpperCase) letter!");
var AddNumeric = confirm("Would you like Your Password as a (Numeric) Number!");
var AddSymbol = confirm("Would you like Your Password as a (Special Symbol)!  Like,@,$,%, etc.");
}


/* Set the variable based on user selected  types*/
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

/* Set the variable to store the generated password.*/ 

var password ="";

/* Generate the random password using for loop.*/

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
