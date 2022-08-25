function reverseString(word) {
  return word.split("").reverse().join("");
  return reversedWord;
}

function isPalindrome(word) {
  const reversedWord = reverseString(word);
  return word === reversedWord;
}
/* 
  Add your pseudocode here
  reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
*/

/*
  Add written explanation of your solution here
  The reverseString is a helper Function.IT
     takes in a string 
     splits it to an array
     reverses its order
     JOin thhe array so its no longer split

  the IsPalindrom function then takes the word
    Pases it to the reersestring fuction 
    places the return in a variable reversedWord
    uses the strict equality opeartor to compare the word and the reversedWord
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
