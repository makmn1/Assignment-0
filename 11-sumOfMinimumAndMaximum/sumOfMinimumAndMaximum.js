function sumOfMinimumAndMaximum(nums) {
  let min = 999 // starting number should be a number larger than largest possible value
  let max = 0
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min)
      min = nums[i]
    if (nums[i] > max)
      max = nums[i]
  }
  
  return min + max
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;