// "aabbwwzz", "ab" -> 4
// "a" - 2, "b" - 2 -> 4

// "aabbwwzza", "abc" -> 5
// "a" - 3, "b" - 2 -> 5

// "aabbwwzzaa", "bacd" -> 6
// "a" - 4, "b" - 2 -> 6

/**
 * @param {string[]} string1
 * @param {string[]} string2
 * @return {number}
 */
const countSymbols = (string1, string2) => {
  let counter = 0;
  for (const letter1 of string1) {
    if (string2.includes(letter1)) {
      counter++;
    }
  }
  return counter;
};

console.log(countSymbols("aabbwwzz", "ab")); // 4
console.log(countSymbols("aabbwwzza", "abc")); // 5
console.log(countSymbols("aabbwwzzaa", "bacd")); // 6
