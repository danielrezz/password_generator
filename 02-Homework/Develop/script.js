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
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numChars = "0123456789";
    var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    function generatePassword() {

// This is how long the password will be (chosen by user)
    

// Character arrays that will be used based on user selection
    // var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    // var numChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "-", "_"];

// This array will store the user's selected characters

// When user clicks Generate Password button, they are notified of the steps they must take
    // if (generateBtn) {
    //   window.alert("Please answer the following questions in order to generate your password.");
    // }

// If user does not give an answer or provides invalid answer, they are notified and must start over
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

// If user confirms, upper case array is pushed into userChars array
    

      if (upper) {
        userChars += upperCase;
        console.log(userChars);
      }

// If user confirms, numbers array is pushed into userChars array
    

      if (numbers) {
        userChars += numChars;
        console.log(userChars);
      }

// If user confirms, special characters array is pushed into userChars array
    

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

// If user confirms, lower case array is pushed into userChars array
    
      return newPassword;
    }




