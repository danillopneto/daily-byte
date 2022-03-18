let compareKeystrokes = (s, t) => {
  let computeString = word => {
    let result = '';
    for (let i = 0; i < word.length; i++) {
      result = word[i] == '#' ? result.slice(0, result.length - 1) : result + word[i];
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