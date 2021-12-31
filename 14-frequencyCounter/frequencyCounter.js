function frequencyCounter(word) {
  let letters = [...word]
  let freq = {}
  let letter
  let currentNum

  // You need to use square bracket notation to add properties, especially if the property is a variable.
  for (let i = 0; i < letters.length; i++) {
    if(freq.hasOwnProperty(letters[i])) {
      freq[letters[i]]++
    } else {
      freq[letters[i]] = 1
    }
  }
  
  return freq

}

// Do not edit this line;
module.exports = frequencyCounter;