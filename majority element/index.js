/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  let count = 0;
  let candidate;
  for (const num of nums) {
    if (count === 0) candidate = num;
    count += candidate === num ? 1 : -1;
  }
  return candidate;
}

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityElement([1, 2, 2, 5, 6, 6, 6, 7])); // 6
