const objOfCharachter = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
var romanToInt = function (s) {
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    const currentVal = objOfCharachter[s[i]];
    const nextVal = objOfCharachter[s[i + 1]];
    if (nextVal && currentVal < nextVal) {
      counter -= currentVal;
    } else {
      counter += currentVal;
    }
  }
  return counter;
};
