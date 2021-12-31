function countOfAllBooleansAndStrings(arr) {
  let boolStrCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true || arr[i] === false || typeof arr[i] === 'string')
      boolStrCount++
  }
  return boolStrCount
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;