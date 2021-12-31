class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
    this.start = 0
    this.end = -10 // Need to set this to a value that should never be reached. I tried undefined and null but I couldn't make it work out.
    this.middle = null
  }

  binarySearch(nums, target) {
    
    if (this.end === -10)
      this.end = nums.length - 1
    
    this.middle = Math.floor((this.start + this.end)/2)

    if (nums[this.middle] > target && this.start <= this.end) {

      this.end = this.middle - 1
      this.flag = this.binarySearch(nums, target)

    } else if (nums[this.middle] < target && this.start <= this.end) {

      this.start = this.middle + 1
      this.flag = this.binarySearch(nums, target)

    } else if (nums[this.middle] === target) {

      this.flag = true

    }

    this.start = 0
    this.end = -10
    this.middle = null

    if (this.flag === true)
      return true
    else
      return false
    
  }
}


// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;