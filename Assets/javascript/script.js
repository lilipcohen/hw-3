// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  var userLenChars = prompt("How many password characters between 8 to 128 do you want?");
  var userLowerChars= confirm("Would you like to include lowercase characters?");
  var userUpperChars= confirm("Would you like to include uppercase characters?");
  var userNumericChars= confirm("Would you like to include numeric characters?");
  var userSpecialChars= confirm("Would you like to include special characters?");

  var computerLenChars = 1;
  var computerLowerChars = "abcdefghijklmnopqrstuvwxyz";
  var computerUpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var computerNumericChars = "123456789";
  var computerSpecialChars = "!@#$%^&*()_+";


  
  var password = generatePassword(
    
  );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
