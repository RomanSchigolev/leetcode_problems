/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    if (target > nums[middle]) left = middle + 1;
    else if (target < nums[middle]) right = middle - 1;
    else return middle;
  }
  return -1;
}
