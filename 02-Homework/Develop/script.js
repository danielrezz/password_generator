// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
    function generatePassword() {

    var passwordLength = [];

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