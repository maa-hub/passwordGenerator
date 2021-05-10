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
   alert("You must select at least one criteria");
 }
 var userChoice= [];


if (confirmLower) {
    userChoice=userChoice.concat(lower);
}

if (confirmUpper) {
    userChoice=userChoice.concat(upper);
}

if (confirmNumber) {
    userChoice=userChoice.concat(numbers);
}

if (confirmSpecial) {
    userChoice=userChoice.concat(specialCharacters);
}

      var passwordBlank = [];

      for (var i = 0; i < sizePassword; i++) {
        var criteria = userChoice[Math.floor(Math.random() * userChoice.length)];
        passwordBlank.push(criteria);
        console.log(criteria);
      };
    
      var password = passwordBlank.join("");
      console.log("Your Pasword is: " + password);
      return password;
}

