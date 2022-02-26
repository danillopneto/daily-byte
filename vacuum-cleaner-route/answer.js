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

console.log(wentToOriginalPosition('LR'));
console.log(wentToOriginalPosition('URURD'));
console.log(wentToOriginalPosition('RUULLDRD'));
