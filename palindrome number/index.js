function isPalindrome1(x) {
  let reversedNumber = 0;
  for (let i = x; i > 0; i = Math.floor(i / 10)) {
    reversedNumber = reversedNumber * 10 + (i % 10);
  }
  return reversedNumber === x;
}

function isPalindrome2(x) {
  const copyNumber = x;
  let reversedNumber = 0;
  let count = 0;
  while (x > 0) {
    count++;
    if (count > 1) {
      reversedNumber = reversedNumber * 10 + (x % 10);
    } else {
      reversedNumber = x % 10;
    }
    x = Math.floor(x / 10);
  }
  return reversedNumber === copyNumber;
}

console.log(isPalindrome1(121)); // true
console.log(isPalindrome2(121)); // true
console.log(isPalindrome1(-121)); // false
console.log(isPalindrome2(-121)); // false
console.log(isPalindrome1(10)); // false
console.log(isPalindrome2(10)); // false
