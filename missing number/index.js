/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  let fullSum = nums.length;
  let numsSum = 0;
  for (let i = 0; i < nums.length; i++) {
    fullSum += i;
    numsSum += nums[i];
  }
  return fullSum - numsSum;
}
