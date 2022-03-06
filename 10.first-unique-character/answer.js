let firstUniqueCharacter = (word) => {
  var uniqueLetters = {};
  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    if (uniqueLetters.hasOwnProperty(letter)) {
      delete(uniqueLetters[letter]);
    } else {
      uniqueLetters[letter] = i;
    }
  }
  
  return uniqueLetters[Object.keys(uniqueLetters)[0]] ?? -1;
}

let testAnswer = (answer) => {
  console.log(answer('abcabd')); // 2
  console.log(answer('thedailybyte')); // 1
  console.log(answer('developer')); // 0
  console.log(answer('aaaa')); // -1
}

testAnswer(firstUniqueCharacter);