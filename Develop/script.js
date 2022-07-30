var standardReqs = [];
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var lowerCase = "abcdefghiklmnopqrsttuvwxtz" .split("");
var numberCharacters = "0123456789" .split ("");
var specialCharacters = "*&^%$#@!?><{}" .split("");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password \
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword () {
    var passLength = prompt("How many characters would you like your password to be. Choose between 8 - 128 characters.");
    
    var lengthConfirm = parseInt(passLength);
    console.log(lengthConfirm);
 
// if else statement to choose a length of at least 8 to 128 characters
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        alert ("Choice is not valid. Please try again.");
        return;
    }

// ask user to use uppercase
var upperCaseConfirm = confirm("Do you want your password to include uppercase letters?");
    if (upperCaseConfirm === true) {
        for (var i = 0; i < upperCase.length; i++) {
          standardReqs.push(upperCase[i]);
        }
    }
// ask user to use lowercase
var lowerCaseConfirm = confirm("Do you want lowercase letters?");
    if(lowerCaseConfirm === true) {
        for (var i = 0; i < lowerCase.length; i++) {
          standardReqs.push(lowerCase[i]);
        }
    }

    // ask user to use special characters    
var specialConfirm = confirm("Do you want special characters?");
if (specialConfirm === true) {
    for (var i = 0; i < specialCharacters.length; i++) {
      standardReqs.push(specialCharacters[i]);
    }
}

// ask user to use numeric
var numberConfirm = confirm("Do you want include numbers?");
    if (numberConfirm === true) {
        for (var i = 0; i < numberCharacters.length; i++) {
          standardReqs.push(numberCharacters[i]);
        }
    }

// use stadard from above to create password
 var randomPassword = "";
 for (var i = 0; i < lengthConfirm; i++) {
  standardReqs[
         Math.floor(Math.random() * standardReqs.length)];
     randomPassword +=
     standardReqs[
            Math.floor(Math.random() * standardReqs.length)
        ];
    }
 return randomPassword;
}

generateBtn.addEventListener("click", writePassword);