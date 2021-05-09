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
console.log("Password is " + passwordLength + " long");

while(!sizePassword || sizePassword < 8 || sizePassword > 128) {
    sizePassword = prompt("Please enter a number between 8 and 128");
    console.log("Password is " + passwordLength + " long");
}
    var confirmLower = confirm("Will your password contain a lower case letter?");
    var confirmUpper = confirm("Will your password contain an upper case letter?");
    var confirmSpecial = confirm("Will your pass contain a special character?");
    var confirmNumber = confirm("Will your password contain a number?");
console.log("Lowercase" + confirmLower);
console.log("Uppercase" + confirmUpper);
console.log("specialCharacter" + confirmSpecial);
console.log("NUmber" + confirmNumber);


while (!(confirmUpper|| confirmLower || confirmNumber || confirmNumber)) {
    alert("You must select at least one character type!");
    confirmUpper = confirm("Would you like to use uppercase letters?");
    confirmLower = confirm("Would you like to use lowercase letters?");
    confirmNumber = confirm("would you like to use numbers?");
    confirmNumber = confirm("would you like to use special characters?");
  }

if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    feedback = lower.concat(upper, numbers, specialCharacters);
    console.log(feedback);
}
}

