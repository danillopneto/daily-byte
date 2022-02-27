let addBinary = (originalBinary, binaryToSum) => {
  if (binaryToSum == '0' || binaryToSum == '' || binaryToSum == null) return originalBinary;

  if (binaryToSum.length > 1) throw 'It\'s only allowed 1 binary caracter to sum.';

  let newBinary = originalBinary.split('');
  for (var i = newBinary.length - 1; i >= 0; i--) {
    if (newBinary[i] == '1') {
      newBinary[i] = '0';
    } else {
      newBinary[i] = '1';
      break;
    }
  }
  
  var result = newBinary.join('');
  return parseInt(result) == 0 ? '1'.concat(result) : result;
};

let testAnswer = (answer) => {
  console.log(answer('100', '1')); // 101
  console.log(answer('11', '1')); // 100
  console.log(answer('1', '0')); // 1
  console.log(answer('111', '1')); // 1000
  console.log(answer('101', '1')); // 110
  console.log(answer('0', '0')); // 0
  console.log(answer('0', '1')); // 1
  console.log(answer('1', '1')); // 10
}

testAnswer(addBinary);