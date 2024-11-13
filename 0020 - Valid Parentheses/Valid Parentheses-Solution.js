var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const stack = [];
  const hashMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let char of s) {
    if (hashMap[char]) {
      const topElement = stack.length > 0 ? stack.pop() : "#";
      if (topElement !== hashMap[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};
