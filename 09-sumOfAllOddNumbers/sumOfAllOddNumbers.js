function sumOfAllOddNumbers(nums) {
  let oddNums = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] %2 !== 0)
      oddNums++
  }
  return oddNums
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;