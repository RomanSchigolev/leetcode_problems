// {a: { b: 5 }}, a.b => 5
// {a: { b: false }}, a.b => false
// {a: { b: 5 }}, a.b.c => undefined
// {a: { b: 5 }}, a => { b: 5 }

/**
 * @param {object} obj
 * @param {string} path
 * @return {object | undefined}
 */
const getParam = (obj, path) => {
  const splittedPathByDot = path.split(".");
  let helperIndex = 0;

  while (helperIndex < splittedPathByDot.length) {
    if (obj.hasOwnProperty(splittedPathByDot[helperIndex])) {
      obj = obj[splittedPathByDot[helperIndex++]];
    } else {
      return;
    }
  }
  return obj;
};

console.log(getParam({ a: { b: 5 } }, "a.b")); // 5
console.log(getParam({ a: { b: false } }, "a.b")); // false
console.log(getParam({ a: { b: 5 } }, "a.b.c")); // undefined
console.log(getParam({ a: { b: 5 } }, "a")); // { b: 5 }
console.log(getParam({}, "a")); // undefined
