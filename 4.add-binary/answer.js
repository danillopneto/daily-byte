let addBinary = (originalBinary, binaryToSum) => {
  if (binaryToSum == '0') return originalBinary;

  let array = originalBinary.split('').reverse();
  for (var i = 0; i < array.length; i++) {
    if (array[i] == '1') {
      array[i] = '0';
    } else {
      array[i] = binaryToSum;
      break;
    }
  }

  var result = array.reverse().join('');
  return parseInt(result) == 0 ? binaryToSum.concat(result) : result;
};

let testAnswer = (answer) => {
  console.log(answer('100', '1')); // 101
  console.log(answer('11', '1')); // 100
  console.log(answer('1', '0')); // 1
  console.log(answer('111', '1')); // 1000
  console.log(answer('101', '1')); // 110
  console.log(answer('0', '0')); // 0
  console.log(answer('0', '1')); // 1
}

testAnswer(addBinary);