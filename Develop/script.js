// constatn variables we will reference across the code 
const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()-_+=[]{}?.><"
} 

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
  var passwordLegnth = window.prompt(
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
const getKey = [
  function upperCase() {
    return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
  },
  function lowerCase() {
    return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
  },
  function number() {
    return keys.number[Math.floor(Math.random() * keys.number.length)];
  },
  function symbol() {
    return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
  }
];
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

