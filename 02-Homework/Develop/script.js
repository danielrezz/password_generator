// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
    function generatePassword() {

// This is how long the password will be (chosen by user)
    var passwordLength = [];

// Character arrays that will be used based on user selection
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "-", "_"];

// This array will store the user's selected characters
    var userChars = [];

// When user clicks Generate Password button, they are notified of the steps they must take
    if (generateBtn) {
      window.alert("Please answer the following questions in order to generate your password.");
    }

// If user does not give an answer or provides invalid answer, they are notified and must start over
    var length=prompt("How long would you like your password to be? (Please select a number between 8-128)");

      if (length < 8 || length > 128 || length == null) {
        alert("You must enter a valid number. Please try again."); 
        return;
      } else { 
          alert("Your password will be " + length + " characters long.");
          passwordLength.push(Number(length));  // User answer is stored into passwordLength array
      }

// If user confirms, lower case array is pushed into userChars array
    var lower = confirm("Would you like lower case characters in your password?");

      if (lower === true) {
        userChars.push(lowerCase);
        console.log(userChars);
      }

// If user confirms, upper case array is pushed into userChars array
    var upper = confirm("Would you like upper case characters in your password?");

      if (upper === true) {
        userChars.push(upperCase);
        console.log(userChars);
      }

// If user confirms, numbers array is pushed into userChars array
    var numbers = confirm("Would you like number characters in your password?");

      if (numbers === true) {
        userChars.push(numChars);
        console.log(userChars);
      }

// If user confirms, special characters array is pushed into userChars array
    var special = confirm("Would you like special characters in your password?");

      if (special === true) {
        userChars.push(specialChars);
        console.log(userChars);
      }


      
    }




  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);