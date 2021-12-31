function countOfAllBooleans(arr) {
  // Insert code here;
  let booleanCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true || arr[i] === false )
      booleanCount++
  }
  return booleanCount;
}

// Do not edit this line;
module.exports = countOfAllBooleans;