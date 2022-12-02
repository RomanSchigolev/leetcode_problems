/**
 * @param {number} n
 * @return {boolean}
 */
function isUgly1(n) {
  const requiredPrimes = [2, 3, 5];
  const primesList = [];
  // It doesn't make sense to iterate over numbers that are greater than sqrt of n
  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      primesList.push(i);
      n = n / i;
    }
  }
  if (n !== 1) {
    primesList.push(n);
  }
  return primesList.every((prime) => requiredPrimes.includes(prime));
}

// Much better, i think
/**
 * @param {number} n
 * @return {boolean}
 */
function isUgly2(n) {
  if (n < 1) return false;
  if (n === 1) return true;
  const requiredPrimes = [2, 3, 5];
  for (let i = 0; i < requiredPrimes.length; i++) {
    while (n && n % requiredPrimes[i] === 0) {
      n = Math.floor(n / requiredPrimes[i]);
    }
  }
  return n === 1;
}

console.log(isUgly2(6)); // true
console.log(isUgly2(1)); // true
console.log(isUgly2(14)); // false
