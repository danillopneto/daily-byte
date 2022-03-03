let filterJewelsAndStones = (jewels, stones) =>
  stones.split('').filter((stone) => jewels.split('').indexOf(stone) !== -1).length;

let testAnswer = (answer) => {
  console.log(answer('abc', 'ac')); // 2
  console.log(answer('Af', 'AaaddfFf')); // 3
  console.log(answer('AYOPD', 'ayopd')); // 0
  console.log(answer('abc', 'a')); // 1
  console.log(answer('Af', 'AaAddFFF')); // 2
  console.log(answer('AyOPD', 'ayopd')); // 1
}

testAnswer(filterJewelsAndStones);