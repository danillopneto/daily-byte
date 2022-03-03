let hasValidSum = (numbers, result) => {
  for (let i = 0; i < numbers.length; i++) {
    var next = i + 1;
    for (let n = next; n < numbers.length; n++) {
      var sum = numbers[i] + numbers[n];
      if (sum === result) {
        return true;
      }
    }
  }

  return false;
}

// Answer sent by Daily Byte
let hasValidSumV2 = (numbers, result) => {
  let map = [];

  for (let i = 0; i < numbers.length; i++) {
    var difference = result - numbers[i];
    if (map.includes(difference)) {
      return true;
    }

    map.push(numbers[i]);
  }

  return false;
}

let testAnswer = (answer) => {
  console.log(answer([1, 3, 8, 2], 10)); // true
  console.log(answer([3, 9, 13, 7], 8)); // false
  console.log(answer([4, 2, 6, 5, 2], 4)); // true
  console.log(answer([1, 3, 8, 2], 4)); // true
  console.log(answer([3, 9, 13, 7], 9)); // false
  console.log(answer([4, 2, 6, 5, 2], 5)); // false
}

console.log('===== V1 =====')
testAnswer(hasValidSum);
console.log('===== V2 =====')
testAnswer(hasValidSumV2);