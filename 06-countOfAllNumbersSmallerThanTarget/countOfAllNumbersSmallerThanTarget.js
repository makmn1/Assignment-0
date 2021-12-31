function countOfAllNumbersSmallerThanTarget(nums, target) {
  let smaller = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target)
      smaller++
  }
  return smaller
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;