// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function generatePassword() {
  var numbers = "123456789";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special = "!@#$%^&*()_+";




  var userLenChars = 0
  while (userLenChars < 8 || userLenChars > 128) {
    userLenChars = prompt("How many password characters between 8 to 128 do you want?");

    if (userLenChars === null || !userLenChars.length) return;

    // Problem A - User enters a non-number
    if (isNaN(userLenChars)) {
      alert("Please enter a valid number.")
      userLenChars = 0
      continue;
    }

    userLenChars = parseInt(userLenChars)

    // Problem B - User enters a number not in the range

    // Check if the entered length is 8 <=
    if (userLenChars < 8 || userLenChars > 128) {
      alert("You must pick a number between 8 and 128!");
    }

  }


  var pool = ""
  while (true) {
    pool = ""

    var userLowerChars = confirm("Would you like to include lowercase characters?");
    var userUpperChars = confirm("Would you like to include uppercase characters?");
    var userNumericChars = confirm("Would you like to include numeric characters?");
    var userSpecialChars = confirm("Would you like to include special characters?");

    if (userLowerChars) pool += lowercase
    if (userUpperChars) pool += uppercase
    if (userNumericChars) pool += numbers
    if (userSpecialChars) pool += special

    // Check if the pool contains any characters
    if (pool.length === 0) {
      alert("You must pick at least one option!");
      continue
    }

    break;

  }

  var userPassword = ""
  // Generate password
  for (var i = 0; i < userLenChars; i++) {
    // Generate a random index
    var randomIndex = Math.floor(Math.random() * pool.length)

    var randomCharacter = pool[randomIndex]

    userPassword += randomCharacter
  }

  return userPassword

}

function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}