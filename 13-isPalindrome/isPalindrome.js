function isPalindrome(word) {
  let passed
  let letters = [...word]
  let wordLength = letters.length

  for (let i = 0; i < wordLength/2; i++) {
    if (letters[i] !== letters[wordLength - (i+1)]) {
      passed = false
    }
  }
  
  if (passed !== false)
    passed = true

  return passed
}

// Do not edit this line;
module.exports = isPalindrome;