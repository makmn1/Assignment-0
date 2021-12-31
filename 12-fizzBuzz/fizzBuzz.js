function fizzBuzz(start, end) {
  const arrayLength = end - start + 1
  const array = []
  let num = start

  for (let i = 0; i < arrayLength; i++) {
    if (num %3 === 0 && num %5 === 0)
      array[i] = "FizzBuzz"
    else if (num %3 === 0)
      array[i] = "Fizz"
    else if (num %5 === 0)
      array[i] = "Buzz"
    else
      array[i] = num
    num++
  }
  return array
}

// Do not edit this line;
module.exports = fizzBuzz;