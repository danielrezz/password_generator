// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Strings of characters than can be chosen by user
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numChars = "0123456789";
    var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    function generatePassword() {

    var passwordLength = prompt("How long would you like your password to be? (Please select a number between 8-128)");

      if ((passwordLength > 8) && (passwordLength < 128)) {
        var passLength = parseInt(passwordLength)

        var lower = confirm("Would you like lower case characters in your password?");
        var upper = confirm("Would you like upper case characters in your password?");
        var numbers = confirm("Would you like number characters in your password?");
        var special = confirm("Would you like special characters in your password?");
        var userChars = "";
        var newPassword = "";

      if (lower) {
        userChars += lowerCase;
        console.log(userChars);
      }

      if (upper) {
        userChars += upperCase;
        console.log(userChars);
      }

      if (numbers) {
        userChars += numChars;
        console.log(userChars);
      }

      if (special) {
        userChars += specialChars;
        console.log(userChars);
      }

      for (var i = 0; i < passLength; i++) {

        newPassword += userChars[Math.floor(Math.random() * userChars.length)];
      }
} else { 
          alert("Password length is incorrect");
          
      }
    
      return newPassword;
    }




