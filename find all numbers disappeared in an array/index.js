/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
  const disappearedNumbers = [];
  const hashSet = new Set(nums);
  for (let i = 1; i <= nums.length; i++) {
    if (!hashSet.has(i)) {
      disappearedNumbers.push(i);
    }
  }
  return disappearedNumbers;
}
