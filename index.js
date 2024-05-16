function isPalindrome(word) {
  let minIndex = 0;
  let maxIndex = word.length - 1;
  const maxComparisons = Math.ceil(word.length / 2);
  for(let i = 1; i <= maxComparisons; i++){
    if(word[minIndex] === word[maxIndex]){
      minIndex++;
      maxIndex--;
    } else {return false;}
  };
  return true;
}

/* 
  Accept a string and consider it an array.
    The array has a length.
    First and last equal?
    Second and second to last equal?
    Third and third to last equal? etc etc
    Will get to a point where first/last etc are equal or first > last
    Need to keep testing the conditions and updating the comparison number
      until they are not or it is at the end.
    If they are not equal at any point then return false.
    If they are equal then continue, and if no more comparisons, return true.
*/

/*
  Add written explanation of your solution here:

  We set the first and last indices as the base comparitor (i.e. first character and last character).
  We declare a variable that determines the maximum #comparisons, assuming that we progressively move
  in one character from each end. The conditions of the loop determine the max comparisons, and if
  the comparisons are all equal, then the word must be a palindrome. If at any point there is a lack
  of equality, then the function returns false and ceases to run.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("taylor"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  /* console.log(isPalindrome('tat')); */
}

module.exports = isPalindrome;
