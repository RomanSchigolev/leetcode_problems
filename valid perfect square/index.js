/**
 * @param {number} num
 * @return {boolean}
 */
function isPerfectSquare(num) {
  if (num === 1) return true;
  let left = 0;
  let right = Math.floor(num / 2);
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (middle ** 2 === num) return true;
    if (middle ** 2 > num) right = middle - 1;
    else left = middle + 1;
  }
  return false;
}
