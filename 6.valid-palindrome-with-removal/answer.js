let isPalindromeWithRemoval = (word) => {
  let isValidPalindrome = (palindrome) => {    
    return palindrome == palindrome.split('').reverse().join('');
  }

  if (isValidPalindrome(word)) return true;

  const possibleWords = word.split('').map((el, i) => word.slice(0, i) + word.slice(i + 1));  
  for (let w of possibleWords) {
    if (isValidPalindrome(w)) {
      return true;
    }
  };
  
  return false;
}

let testAnswer = (answer) => {
  console.log(answer('abcba')); // true
  console.log(answer('foobof')); // true
  console.log(answer('abccab')); // false
  console.log(answer('teneet')); // true
  console.log(answer('aiboffobia')); // true
  console.log(answer('soppapos')); // true
  console.log(answer('pelpepl')); // false
}

testAnswer(isPalindromeWithRemoval);