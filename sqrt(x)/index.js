/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
  let left = 0;
  let right = x;
  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    if (middle ** 2 > x) right = middle - 1;
    else if (middle ** 2 < x) left = middle + 1;
    else return middle;
  }
  return right;
}

console.log(mySqrt(4)); // 2
console.log(mySqrt(16)); // 4
console.log(mySqrt(25)); // 5
