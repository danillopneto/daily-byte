let greaterElements = (nums1, nums2) => 
  nums1.map((num1) => nums2.slice(nums2.indexOf(num1), nums2.length).find(num2 => num2 > num1) ?? -1);

let testAnswer = (answer) => {
  console.log(answer([4,1,2], [1,3,4,2])); // [-1, 3, -1]
  console.log(answer([2,4], [1,2,3,4])); // [3, -1]
}

testAnswer(greaterElements);