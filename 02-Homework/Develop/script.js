// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
    function generatePassword() {

    var passwordLength = [];
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "-", "_"];

    if (generateBtn) {
      window.alert("Please answer the following questions in order to generate your password.");
    }

      var length=prompt("How long would you like your password to be? (Please select a number between 8-128)");

        if (length < 8 || length > 128 || length == null) {
          alert("You must enter a valid number. Please try again."); 
        } else { 
            alert("Your password will be " + length + " characters long.");
            passwordLength.push(Number(length));
        }



    }




  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);