let commonPrefix = (words) => {
  if (words.length == 0) return '';
  if (words.length == 1) return words[0];
  
  let createPrefixs = (word) => word.split('').map((letter, i) => word.slice(0, i + 1));
  var prefixs = words.map(word => createPrefixs(word));
  var ordered = prefixs.sort();
  var shortest = ordered[0];

  var longestPrefix = '';
  var allHave = true;
  for (var i = 0; i < shortest.length; i++) {
    var currentPrefix = shortest[i];

    for (var o = 1; o < ordered.length; o++) {
      if (ordered[o][i] !== currentPrefix) {
        allHave = false;
        break;
      }
    }

    if (allHave) {
      longestPrefix = currentPrefix;
    }
  }

  return longestPrefix;
};

let testAnswer = (answer) => {
  console.log(answer(["colorado", "color", "cold"])); // col
  console.log(answer(["a", "b", "c"])); // ""
  console.log(answer(["spot", "spotty", "spotted"])); // spot
  console.log(answer(["geeksforgeeks", "geeks", "geek", "geezer"])); // gee
  console.log(answer(["apple", "ape", "april"])); // ap
  console.log(answer(["danillo pinheiro", "danillo", "danillo pinheiro neto"])); // danillo
}

testAnswer(commonPrefix);