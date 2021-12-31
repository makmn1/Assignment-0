function pairSum(nums, target) {
  if (nums.length <= 1)
    throw Error()
  let pairExists
  
  loop1: 
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        pairExists = true
        break loop1
      }
    }
  }

  if (pairExists !== true) {
    pairExists = false
  }

  return pairExists

}

// Do not edit this line;
module.exports = pairSum;