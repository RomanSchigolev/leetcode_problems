# Solutions of tasks from the LeetCode platform

## [Two Sum](https://leetcode.com/problems/two-sum/)

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example 1:**

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3:**

```Input: nums = [3,3], target = 6
Output: [0,1]
```

**Constraints:**

- 2 <= nums.length <= 104
- -109 <= nums[i] <= 109
- -109 <= target <= 109
- **Only one valid answer exists.**

**Follow-up:** Can you come up with an algorithm that is less than O(n2) time complexity?

---

## [Palindrome Number](https://leetcode.com/problems/palindrome-number/)

Given an integer x, return true if x is a palindrome, and false otherwise.

**Example 1:**

```
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

**Example 2:**

```
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

**Example 3:**

```
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

**Constraints:**

- -231 <= x <= 231 - 1

**Follow up:** Could you solve it without converting the integer to a string?

---

## [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

**Example 1:**

```
Input: s = "()"
Output: true
```

**Example 2:**

```
Input: s = "()[]{}"
Output: true
```

**Example 3:**

```
Input: s = "(]"
Output: false
```

**Constraints:**

- 1 <= s.length <= 104
- s consists of parentheses only '()[]{}'.

---

## [Length of Last Word](https://leetcode.com/problems/length-of-last-word/)

Given a string s consisting of words and spaces, return the length of the **last** word in the string.

A **word** is a maximal substring consisting of non-space characters only.

**Example 1:**

```
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
```

**Example 2:**

```
Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with length 4.
```

**Example 3:**

```
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
```

**Constraints:**

- 1 <= s.length <= 104
- s consists of only English letters and spaces ' '.
- There will be at least one word in s.

---

## [Sqrt(x)](https://leetcode.com/problems/sqrtx/)

Given a non-negative integer `x`, return the square root of `x` rounded down to the nearest integer. The returned integer should be **non-negative** as well.

You **must not use** any built-in exponent function or operator.

- For example, do not use pow(x, 0.5) in c++ or x \*\* 0.5 in python.

**Example 1:**

```
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
```

**Example 2:**

```
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
```

**Constraints:**

- 0 <= x <= 231 - 1

---

## [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

**Example 1:**

```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.

1. 1 step + 1 step
2. 2 steps
```

**Example 2:**

```
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.

1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

**Constraints:**

- 1 <= n <= 45

---

## [Single Number](https://leetcode.com/problems/single-number/)

Given a **non-empty** array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

**Example 1:**

```
Input: nums = [2,2,1]
Output: 1
```

**Example 2:**

```
Input: nums = [4,1,2,1,2]
Output: 4
```

**Example 3:**

```
Input: nums = [1]
Output: 1
```

**Constraints:**

- 1 <= nums.length <= 3 \_ 104
- -3 \_ 104 <= nums[i] <= 3 \* 104
- Each element in the array appears twice except for one element which appears only once.

---

## [Majority Element](https://leetcode.com/problems/majority-element/)

Given an array `nums` of size `n`, return the majority element.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

**Example 1:**

```
Input: nums = [3,2,3]
Output: 3
```

**Example 2:**

```
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

**Constraints:**

- n == nums.length
- 1 <= n <= 5 \* 104
- -109 <= nums[i] <= 109

**Follow-up:** Could you solve the problem in linear time and in O(1) space?

---

## [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)

Given an integer array nums, return true if any value appears **at least twice** in the array, and return false if every element is distinct.

**Example 1:**

```
Input: nums = [1,2,3,1]
Output: true
```

**Example 2:**

```
Input: nums = [1,2,3,4]
Output: false
```

**Example 3:**

```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

---

## [Ugly Number](https://leetcode.com/problems/ugly-number/)

An **ugly number** is a positive integer whose prime factors are limited to `2`, `3`, and `5`.

Given an integer n, return true if n is an **ugly number**.

**Example 1:**

```
Input: n = 6
Output: true
Explanation: 6 = 2 × 3
```

**Example 2:**

```
Input: n = 1
Output: true
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
```

**Example 3:**

```
Input: n = 14
Output: false
Explanation: 14 is not ugly since it includes the prime factor 7.
```

---

## [Missing Number](https://leetcode.com/problems/missing-number/)

Given an array nums containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.

**Example 1:**

```
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
```

**Example 2:**

```
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
```

**Example 3:**

```
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
```

---

## [Move Zeroes](https://leetcode.com/problems/move-zeroes/)

Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

**Example 1:**

```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

**Example 2:**

```
Input: nums = [0]
Output: [0]
```

---

## [Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/description/)

Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

**Example 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
```

**Example 2:**

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
```

**Constraints:**

- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`

---

## [Binary Search](https://leetcode.com/problems/binary-search/description/)

Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in ` `. If target exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**

```
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
```

**Example 2:**

```
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
```

---

## [Valid Perfect Square](https://leetcode.com/problems/valid-perfect-square/description/)

Given a positive integer num, write a function which returns True if num is a perfect square else False.

Follow up: Do not use any built-in library function such as `sqrt`.

**Example 1:**

```
Input: num = 16
Output: true
```

**Example 2:**

```
Input: num = 14
Output: false
```

**Constraints:**

- `1 <= num <= 2^31 - 1`

---

## [Is Subsequence](https://leetcode.com/problems/is-subsequence/description/)

Given two strings `s` and `t`, return `true` if `s` is a _subsequence_ of `t`, or `false` otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).

**Example 1:**

```
Input: s = "abc", t = "ahbgdc"
Output: true
```

**Example 2:**

```
Input: s = "axc", t = "ahbgdc"
Output: false
```

**Constraints:**

- `0 <= s.length <= 100`
- `0 <= t.length <= 104`
- `s` and `t` consist only of lowercase English letters.

Follow up: Suppose there are lots of incoming `s`, say `s1, s2, ..., sk` where `k >= 10^9`, and you want to check one by one to see if `t` has its subsequence. In this scenario, how would you change your code?
