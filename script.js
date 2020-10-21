// Assignment Code

//Create arrays for password options 
var lower = 'abcdefghijklmnopqrstuvwxyz';
var special = '~!@#$^&%*()+=-_[]{}|:;<>?,.';

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var passwordLength = prompt("How long would you like your password to be? (Minimum 8 characters)");

  var confirmLower = confirm("Would you like your password to include lowercase letters?");

  var confirmUpper = confirm("Would you like your password to include uppercase letters?");

  var confirmSpecial = confirm("Would you like your password to include special characters?");

  var confirmNumbers = confirm("Would you like your password to include numbers?");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
