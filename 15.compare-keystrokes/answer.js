let compareKeystrokes = (s, t) => {
  let computeString = word => {
    var result = '';
    for (var i = 0; i < word.length; i++) {
      result = word[i] != '#' ? result + word[i] : result.slice(0, result.length - 1);
    }

    return result;
  }

  return computeString(s) == computeString(t);
};

let testAnswer = (answer) => {
  console.log(answer("ABC#", "CD##AB")); // true
  console.log(answer("como#pur#ter", "computer")); // true
  console.log(answer("cof#dim#ng", "code")); // false
}

testAnswer(compareKeystrokes);