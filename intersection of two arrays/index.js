/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
  return [...new Set(nums1)].filter((num) => nums2.includes(num));
}
