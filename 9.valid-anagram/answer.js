let validAnagram = (s, t) => {
  if (s.length != t.length) return false;

  var second = t.split('');

  s.split('').forEach((letter) => {
    var letterIndex = second.findIndex((s) => s == letter);
    if (letterIndex != -1) {
      second[letterIndex] = '';
    }
  });

  return second.join('') == '';
}

let testAnswer = (answer) => {
  console.log(answer('cat', 'tac')); // true
  console.log(answer('listen', 'silent')); // true
  console.log(answer('program', 'function')); // false
  console.log(answer('fried', 'fired')); // true
  console.log(answer('gainly', 'laying')); // true
  console.log(answer('sadder', 'dreads')); // true
  console.log(answer('final', 'fnial')); // true
  console.log(answer('reply', 'refly')); // false
}

testAnswer(validAnagram);