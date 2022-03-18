let removeAdjacentDuplicates = (s) => {  
  let stillLooking = false;
  do {
    let hasAdjacent = false;
    for (var i = 0; i < s.length; i++) {
      let adjacent = s[i] + s[i];
      hasAdjacent = s.indexOf(adjacent) != -1;
      if (hasAdjacent) {
        s = s.replace(adjacent, '');
        break;
      }
    }

    stillLooking = hasAdjacent;
  } while (stillLooking)

  return s;
};

let testAnswer = (answer) => {
  console.log(answer("abccba")); // ""
  console.log(answer("foobar")); // "fbar"
  console.log(answer("abccbefggfe")); // "a"
}

testAnswer(removeAdjacentDuplicates);