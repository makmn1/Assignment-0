function sumOfAllEvenNumbers(nums) {
  let evenNums = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] %2 === 0)
      evenNums++
  }
  return evenNums
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;