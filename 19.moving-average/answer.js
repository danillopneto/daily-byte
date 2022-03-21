class MovingAverage {
  constructor(size) {
    this.size = size;
    this.movings = [];
  }

  next(val) {
    this.movings.push(val);

    let iterations = this.size > this.movings.length ? this.movings.length : this.size;
    let result = 0;
    for (var i = 1; i <= iterations; i++) {
      result += this.movings[this.movings.length - i];
    }

    return result / iterations;
  }
}

var m = new MovingAverage(3);
console.log(m.next(3)); // returns 3 because (3 / 1) = 3
console.log(m.next(5)); // returns 4 because (3 + 5) / 2 = 4 
console.log(m.next(7)); // returns 5 because (3 + 5 + 7) / 3 = 5
console.log(m.next(6)); // returns 6 because (5 + 7 + 6) / 3 = 6
console.log(m.next(11)); // returns 6 because (7 + 6 + 11) / 3 = 8