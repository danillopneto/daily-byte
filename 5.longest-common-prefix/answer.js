let commonPrefix = (words) => {
  let createPrefixs = (word) => {
    var prefixs = [];
    for (var i = 0; i <= word.length; i++) {
      prefixs.push(word.slice(0, i));
    }

    return prefixs;
  };
  var prefixs = words.map(word => createPrefixs(word));
  var shortest = prefixs.sort()[0];
  var others = prefixs.slice(1, prefixs.length);

  var longestPrefix = '';
  for (var i = 0; i < shortest.length; i++) {
    var currentPrefix = shortest[i];
    var allHave = true;
    for (var o = 0; o < others.length; o++) {
      if (others[o][i] !== currentPrefix) {
        allHave = false;
      }
    }

    if (allHave) {
      longestPrefix = currentPrefix;
    }
  }

  return longestPrefix;
};

let testAnswer = (answer) => {
  console.log(answer(["colorado", "colora", "colord"])); // col
  console.log(answer(["a", "b", "c"])); // ""
  console.log(answer(["spot", "spotty", "spotted"])); // spot
  console.log(answer(["danillo pinheiro", "danillo", "danillo pinheiro neto"])); // danillo
}

testAnswer(commonPrefix);