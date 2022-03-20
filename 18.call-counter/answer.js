class RecentCounter {
  constructor() {
    this.intervalToConsider = 3000;
    this.listOfRequests = [];
  }

  ping(t) {
    var _this = this;

    _this.listOfRequests.push(t);

    return _this.listOfRequests.filter(r => r > t - 1 - _this.intervalToConsider && t >= r).length;
  }
}

var recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));     // requests = [1], range is [-2999,1], return 1
console.log(recentCounter.ping(100));   // requests = [1, 100], range is [-2900,100], return 2
console.log(recentCounter.ping(3001));  // requests = [1, 100, 3001], range is [1,3001], return 3
console.log(recentCounter.ping(3002));  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3
console.log(recentCounter.ping(7000));  // requests = [1], range is [4000,7000], return 1