// Assignment Code
var generateBtn = document.querySelector("#generate");
var getLength = 0;
var isCharTypeNum = "false";
var isCharTypeUpper = "false";
var isCharTypeLower = "false";
var isCharTypeSpecial = "false";
var newPassword = [];

const typeLowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const typeUpperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const typeNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const typeSpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', ':', '"', '<', '>', '?', '"'];

//prompt for length
//confirm character types
//get user input
function getUserInput() {
    getLength = prompt("Select Length of 8-128 characters: ");
    isCharTypeNum = confirm("Include numbers in your password? ");
    isCharTypeUpper = confirm("Include uppercase letters in your password? ");
    isCharTypeLower = confirm("Include lowercase letters in your password? ");
    isCharTypeSpecial = confirm("Include special characters in your password? ");
};

var userChoices = [];

function generateUserChoices() {
    if (isCharTypeUpper == true)
        userChoices = userChoices.concat(typeUpperCaseLetters);
    if (isCharTypeLower == true)
        userChoices = userChoices.concat(typeUpperCaseLetters);
    if (isCharTypeNum == true)
        userChoices = userChoices.concat(typeNumbers);
    if (isCharTypeSpecial == true)
        userChoices = userChoices.concat(typeSpecialCharacters);
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  if (userChoices.length < typeNumbers.length || getLength < 8) {
    alert("Can you count? You need more characters than that! ")
} else {
    for (i = 0; i < getLength; i++) {
        newPassword += userChoices[Math.floor(Math.random() * (userChoices.length - 1))];
    }
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);}