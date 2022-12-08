/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence1(s, t) {
  const stack = [...s]; // the spread operator works better for very short strings, otherwise split is better
  for (let i = 0; i < t.length; i++) {
    if (stack[0] === t[i]) {
      stack.shift();
    }
  }
  return stack.length === 0;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence2(s, t) {
  let counter = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[counter] === t[i]) {
      counter++;
    }
  }
  return counter === s.length;
}
