// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
var sizePassword = prompt("How many characters would you like your password? Choose between 8 and 128");
console.log("Password is " + sizePassword + " long");

if(!sizePassword || sizePassword < 8 || sizePassword > 128) {
    sizePassword = prompt("Please enter a number between 8 and 128");
    console.log("Password is " + sizePassword + " long");

var sizePassword = prompt("How many characters would you like your password? Choose between 8 and 128");

} else {
    var confirmUpper = confirm("Would you like to use uppercase letters?");
    console.log(confirmUpper);
    var confirmLower = confirm("Would you like to use lowercase letters?");
    console.log(confirmLower);
    var confirmNumber = confirm("would you like to use numbers?");
    console.log(confirmNumber);
    var confirmSpecial = confirm("would you like to use special characters?");
    console.log(confirmSpecial);
};

 if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    feedback = alert("You must select at least one criteria");
 }
// all four criteria selected
if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    var feedback = lower.concat(upper, numbers, specialCharacters);
    console.log(feedback);
}

// three criteria selected
    else if (confirmLower && confirmUpper && confirmNumber) {
        var feedback = lower.concat(upper, numbers);
        console.log(feedback);
      }
      else if (confirmLower && confirmUpper && confirmSpecial) {
        var feedback = lower.concat(upper, specialCharacters);
        console.log(feedback);
      }
      else if (confirmLower && confirmNumber && confirmSpecial) {
        var feedback = lower.concat(numbers, specialCharacters);
        console.log(feedback);
      }
      else if (confirmUpper && confirmNumber && confirmSpecial) {
        var feedback = upper.concat(numbers, specialCharacters);
        console.log(feedback);
      }

      // two criteria selected
      else if (confirmLower && confirmUpper) {
        var feedback = lower.concat(upper);
        console.log(feedback);
      }
      else if (confirmLower && confirmNumber) {
        var feedback = lower.concat(numbers);
        console.log(feedback);
      }
      else if (confirmLower && confirmSpecial) {
        var feedback = lower.concat(specialCharacters);
        console.log(feedback);
      }
      else if (confirmUpper && confirmNumber) {
        var feedback = upper.concat(numbers);
        console.log(feedback);
      }
      else if (confirmUpper && confirmSpecial) {
        var feedback = upper.concat(specialCharacters);
        console.log(feedback);
      }
      else if (confirmNumber && confirmSpecial) {
        var feedback = numbers.concat(specialCharacters);
        console.log(feedback);
      }

      // one criteria selected
      else if (confirmLower) {
        var feedback = lower;
        console.log(feedback);
      }
      else if (confirmUpper) {
        var feedback = upper;
        console.log(feedback);
      }
      else if (confirmNumber) {
        var feedback = numbers;
        console.log(feedback);
      }
      else if (confirmSpecial) {
        var feedback = specialCharacters;
        console.log(feedback);
      };

      var passwordBlank = [];

      for (var i = 0; i < sizePassword; i++) {
        var criteria = feedback[Math.floor(Math.random() * feedback.length)];
        passwordBlank.push(criteria);
        console.log(criteria);
      };
    
      var password = passwordBlank.join("");
      console.log("Your Pasword is: " + password);
      return password;
}

