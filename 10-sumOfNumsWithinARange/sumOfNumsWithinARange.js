function sumOfNumsWithinARange(nums, start, end) {
  let validNums = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= start && nums[i] <= end)
      validNums++
  }
  return validNums
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;