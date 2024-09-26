var isPalindrome = function (x) {
  let reversedStr = x.toString().split("").reverse().join("");
  return reversedStr == x
};
