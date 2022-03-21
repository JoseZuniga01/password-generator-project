// constatn variables we will reference across the code 
const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()-_+=[]{}?.><"
} 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); {
var password = function() {
  // ask user for password legnth 
  var passwordLegnth = window.prompt(
   "How long would you like your password to be? Enter a number between 8 and 128"
  );
  var lowerC = window.prompt (
    "Would you like to use lowercase characters in your password? Type YES or NO"
  );
  var upperC = window.prompt (
    "Would you like to use uppercase characters in your password? Type YES or NO"
  )
  var numeric = window.prompt (
    "Would you like to use number in your password? Type YES or NO"
  )
  var specialCharacters = window.prompt (
    "Would you like to use special characters in your password? Type YES or NO"
  )
}
 
  };

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

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



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
password ();
