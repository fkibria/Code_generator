// Assignment Code

//Create arrays for password options 
var lower = 'abcdefghijklmnopqrstuvwxyz';
var special = '~!@#$^&%*()+=-_[]{}|:;<>?,.';

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var chosenPrompts ='';

  var passwordLength = prompt("How long would you like your password to be? (Minimum 8 characters)");
  
  while((passwordLength < 8 || passwordLength > 128) && typeof passwordLength !== "number") { 
    alert("Password must be between 8 and 128 characters!");
    passwordLength = prompt("How long would you like your password to be? (Minimum 8 characters)");
  } 

  var confirmLower = confirm("Would you like your password to include lowercase letters?");

  if(confirmLower) {
    chosenPrompts += lower;
    console.log(chosenPrompts);
  }

  var confirmUpper = confirm("Would you like your password to include uppercase letters?");

  if(confirmUpper) {
    chosenPrompts += lower.toUpperCase();
    console.log(chosenPrompts);
  }

  var confirmSpecial = confirm("Would you like your password to include special characters?");

  if(confirmSpecial) {
    chosenPrompts += special;
    console.log(chosenPrompts);
  }

  var confirmNumbers = confirm("Would you like your password to include numbers?");

  if(confirmNumbers) {
    chosenPrompts += Math.floor(Math.random() * 1000000000);
    console.log(chosenPrompts);
  }

  var password = "";

   for (var i = 0; i < passwordLength; ++i) {
    password += chosenPrompts.charAt(Math.floor(Math.random() * chosenPrompts.length));
  }
console.log(password);
document.getElementById("password").innerHTML = password;
return password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
