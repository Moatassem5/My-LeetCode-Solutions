var runningSum = function (nums) {
  let sum = 0;
  let results = [nums[0]];
  for (let num = 1; num < nums.length; num++) {
    results[num] = results[num - 1] + nums[num];
  }
  return results;
};
