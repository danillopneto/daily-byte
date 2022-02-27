let isPalindrome = (word) => {
  const onlyLetters = word.replace(/[^a-z]/gi, '').toLowerCase();    
  return onlyLetters == onlyLetters.split('').reverse().join('');
}

let isPalindromeV2 = (word) => word.replace(/[^a-z]/gi, '').toLowerCase() == 
                               word.split('').reverse().join('').replace(/[^a-z]/gi, '').toLowerCase();

let testResult = (answer) => {
  console.log(answer('level')); // true
  console.log(answer('algorithm')); // false
  console.log(answer('A man, a plan, a canal: Panama.')); // true
}

console.log('===== V1 =====')
testResult(isPalindrome);
console.log('===== V2 =====')
testResult(isPalindromeV2);