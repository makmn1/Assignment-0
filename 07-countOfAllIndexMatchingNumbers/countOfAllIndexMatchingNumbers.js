function countOfAllIndexMatchingNumbers(nums) {
  let countMatchingIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === i)
      countMatchingIndex++
  }
  return countMatchingIndex
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;