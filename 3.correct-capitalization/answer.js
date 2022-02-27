let isCorrectCapitalized = (word) => word.replace(/[a-z]/g, '') == '' ||
                                     word.replace(/[A-Z]/g, '') == '' ||
                                     word.replace(/[A-Z]{1}[a-z]+/g, '') == '';

let isCorrectCapitalizedV2 = (word) => word.toLowerCase() == word ||
                                       word.toUpperCase() == word ||
                                       (word[0].toUpperCase() == word[0]
                                        && word.slice(1, 1).toLowerCase() == word.slice(1, 1));

let testAnswer = (answer) => {
  console.log(answer('USA')); // true
  console.log(answer('Calvin')); // true
  console.log(answer('compUter')); // false
  console.log(answer('coding')); // true
}

console.log('===== V1 =====')
testAnswer(isCorrectCapitalized);
console.log('===== V2 =====')
testAnswer(isCorrectCapitalizedV2);