let wentToOriginalPosition = (movements) => {
  let horizontal = 0; 
  let vertical = 0;

  for (var i = 0; i < movements.length; i++) {        
      switch (movements[i]) {
          case 'L':
              horizontal--;
              break;
          case 'R':
              horizontal++;
              break;
          case 'U':
              vertical++;
              break;
          case 'D':
              vertical--;
              break;
          default:
              break;
      }
  };

  return horizontal === 0 && vertical === 0;
}

let testAnswer = (answer) => {
    console.log(answer('LR')); // true
    console.log(answer('URURD')); // false
    console.log(answer('RUULLDRD')); // true
}

testAnswer(wentToOriginalPosition);