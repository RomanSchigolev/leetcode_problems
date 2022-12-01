/**
 * @param {number} n
 * @return {number}
 */
function climbStairs1(n) {
  if (n === 1) return 1;
  let n1 = 1;
  let n2 = 2;
  for (let i = 3; i < n + 1; i++) {
    [n1, n2] = [n2, n1 + n2];
  }
  return n2;
}

console.log(climbStairs1(3)); // 3
console.log(climbStairs1(2)); // 2
console.log(climbStairs1(4)); // 5

/**
 * @param {number} n
 * @return {number}
 */
function climbStairs2(n) {
  const list = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    list[i] = list[i - 1] + list[i - 2];
  }
  return list[n];
}

console.log(climbStairs2(3)); // 3
console.log(climbStairs2(2)); // 2
console.log(climbStairs2(4)); // 5

const list = [0, 1, 2];
/**
 * @param {number} n
 * @return {number}
 */
function climbStairsRecursive(n) {
  if (n <= 2) return n;
  if (!list[n]) {
    list[n] = climbStairsRecursive(n - 1) + climbStairsRecursive(n - 2);
  }
  return list[n];
}

console.log(climbStairsRecursive(3)); // 3
console.log(climbStairsRecursive(2)); // 2
console.log(climbStairsRecursive(4)); // 5
