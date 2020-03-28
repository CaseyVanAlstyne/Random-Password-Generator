// variables for user selection
var typeLowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var typeUpperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var typeNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var typeSpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', ':', '"', '<', '>', '?', '"'];

// nested array list for user-selection variables
var characterList = [typeLowerCaseLetters, typeUpperCaseLetters, typeNumbers, typeSpecialCharacters]
console.log(characterList);
var userChoices = [];
var getLength = prompt("Select Length of 8-128 characters: ");

//prompt for length
//confirm character types
//get user input
function getUserInput() {
   var isCharTypeNum = confirm("Include numbers in your password? ");
   var isCharTypeUpper = confirm("Include uppercase letters in your password? ");
   var isCharTypeLower = confirm("Include lowercase letters in your password? ");
   var isCharTypeSpecial = confirm("Include special characters in your password? ");

   if (isCharTypeUpper == true)
        userChoices = userChoices.concat(typeUpperCaseLetters);
    if (isCharTypeLower == true)
        userChoices = userChoices.concat(typeLowerCaseLetters);
    if (isCharTypeNum == true)
        userChoices = userChoices.concat(typeNumbers);
    if (isCharTypeSpecial == true)
        userChoices = userChoices.concat(typeSpecialCharacters);
        console.log(userChoices);
};
getUserInput();



// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  console.log(passwordText);
  var newPassword = "";
  
  if (userChoices.length < typeNumbers.length || getLength < 8) {
    alert("Can you not count? You are supposed to pick fewer than 8 characters and/or more than 128 characters! Try again!")
} else {
    for (i = 0; i < getLength; i++) {
       newPassword += userChoices[Math.floor(Math.random() * (userChoices.length - 1))];
    }
    passwordText.value = newPassword;
    console.log(newPassword);
};
}
// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);