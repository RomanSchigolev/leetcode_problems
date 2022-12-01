/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumberWithSet(nums) {
  const hashSet = new Set();
  for (const num of nums) {
    hashSet.has(num) ? hashSet.delete(num) : hashSet.add(num);
  }
  return hashSet.values().next().value;
}

console.log(singleNumberWithSet([4, 1, 2, 1, 2])); // 4

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumberWithBitewiseOperator(nums) {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
}

console.log(singleNumberWithBitewiseOperator([4, 1, 2, 1, 2])); // 4
