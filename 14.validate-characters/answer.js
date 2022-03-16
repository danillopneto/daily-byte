let validateCharacters = (word) => {
  if (word.length % 2 != 0) return false;

  const pairs = ['()', '{}', '[]'];
  let stillLooking = false;
  
  do {
    let pairFound = false;
    pairs.forEach(pair => {
      if (word.indexOf(pair) != -1) {
        word = word.replace(pair, '');
        pairFound = true;
      }
    })

    stillLooking = pairFound;
  } while (stillLooking);
  
  return word == '';
};

let testAnswer = (answer) => {
  console.log(answer("(){}[]")); // true
  console.log(answer("(({[]}))")); // true
  console.log(answer("{(})")); // false
  console.log(answer("(({{[[]]}}))")); // true
  console.log(answer("(({{[[{()}]]}}))")); // true
}

testAnswer(validateCharacters);