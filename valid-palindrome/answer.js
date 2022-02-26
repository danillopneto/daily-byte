let isPalindrome = (word) => {
  const onlyLetters = word.replace(/[^a-z]/gi, '').toLowerCase();    
  return onlyLetters == onlyLetters.split('').reverse().join('');
}

console.log(isPalindrome('level'));
console.log(isPalindrome('algorithm'));
console.log(isPalindrome('A man, a plan, a canal: Panama.'));