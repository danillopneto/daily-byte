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

let testResult = (answer) => {
  console.log(answer([1, 3, 8, 2], 10)); // true
  console.log(answer([3, 9, 13, 7], 8)); // false
  console.log(answer([4, 2, 6, 5, 2], 4)); // true
  console.log(answer([1, 3, 8, 2], 4)); // true
  console.log(answer([3, 9, 13, 7], 9)); // false
  console.log(answer([4, 2, 6, 5, 2], 5)); // false
}

testResult(hasValidSum);