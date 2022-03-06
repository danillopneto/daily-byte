let spotTheDifference = (s, t) => t.split('').find(f => s.indexOf(f) == -1) ?? '';

let testAnswer = (answer) => {
  console.log(answer('foobar', 'barfoot')); // t
  console.log(answer('ide', 'idea')); // a
  console.log(answer('coding', 'ingcod')); // ''
}

testAnswer(spotTheDifference);