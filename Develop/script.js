// constatn variables we will reference across the code 
var specialCharacter = "!@#$%^&*()";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz"; 
var number = "0123456789";
var symbol = "!@#$%^&*()-_+=[]{}?.><";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 
function generatePassword() {

  // ask user for password inputs
  var passwordLength = window.prompt(
   "How long would you like your password to be? Enter a number between 8 and 128"
  );
  var lowerC = confirm (
    "Would you like to use lowercase characters in your password?"
  );
  var upperC = confirm (
    "Would you like to use uppercase characters in your password?"
  )
  var numeric = confirm (
    "Would you like to use numbers in your password? "
  )
  var specialCharacters = confirm (
    "Would you like to use special characters in your password?" 
  )

  // minimum count for all inputs 
 var minimumCount = 0

 var minimumLowerC = "";
 var minimumUpperC = "";
 var minimumNumeric = "";
 var minimumSpecialCharacters = "";

 // Generate password function
 var functionArray = {
  getNumeric: function() {
    return number[Math.floor(Math.random( ))]
  },

  getLowerC: function() {
    return lowerCase[Math.floor(Math.random())]
  },

  getUpperC: function() {
    return upperCase[Math.floor(Math.random())]
  },

  getSpecialCharacters: function() {
    return specialCharacter[Math.floor(Math.random())]
  }
} 
//check to make sure user selected something to run function 
if (numeric === true) {
  minimumNumeric =functionArray.getNumeric ();
  minimumCount++;
}
if (lowerC === true) {
  minimumLowerC = functionArray.getLowerC();
  minimumCount++;
}
if  (upperC === true) {
  minimumUpperC = functionArray.getUpperC ();
  minimumCount++;
}
if (specialCharacters === true) {
  minimumSpecialCharacters = functionArray.getSpecialCharacters();
  minimumCount++;
}

var randomPasswordGenerated = "";

// loop getting random characters
for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
  var randomNumberPicked = Math.floor(Math.random() * 4);

  randomPasswordGenerated += randomNumberPicked;

}

// to make sure characters are added to the password
randomPasswordGenerated += minimumNumeric;
randomPasswordGenerated += minimumLowerC;
randomPasswordGenerated += minimumUpperC;
randomPasswordGenerated += minimumSpecialCharacters;


return randomPasswordGenerated;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
