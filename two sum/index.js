function twoSum(nums, target) {
  const hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in hashTable) {
      return [hashTable[target - nums[i]], i];
    }
    hashTable[nums[i]] = i;
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
