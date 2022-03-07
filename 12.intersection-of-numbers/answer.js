let getIntersection = (nums1, nums2) => {
  var intersection = [];
  for (var i = 0; i < nums1.length; i++) {
    var numberToCheck = nums1[i];
    if (nums2.indexOf(numberToCheck) != -1 &&
        intersection.indexOf(numberToCheck) == -1) {
          intersection.push(numberToCheck);
    }
  }

  return intersection;
};

let testAnswer = (answer) => {
  console.log(answer([2, 4, 4, 2], [2, 4])); // [2, 4]
  console.log(answer([1, 2, 3, 3], [3, 3])); // [3]
  console.log(answer([2, 4, 6, 8], [1, 3, 5, 7])); // []
}

testAnswer(getIntersection);