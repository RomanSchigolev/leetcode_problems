const obj = {
  ")": "(",
  "]": "[",
  "}": "{",
};

/**
 *
 * @param {string} s
 * @returns {boolean}
 */
function isValid(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      const lastFromStack = stack.pop();
      const currentFromString = obj[s[i]];
      if (lastFromStack !== currentFromString) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid(")(")); // false
