function titleCaseEdit(title) {
  
  // A Boolean to indicate if the next letter is the start of a word
  let capitalize = true

  //Create an array of chars from title string. It's easier to manipulate arrays than strings.
  let arrTitle = [...title]

  //Check each character
  for (let i = 0; i < arrTitle.length; i++) {
    
    //A space would mean we are not in a word, so capitalize the next word.
    if (title.charAt(i) === ' ') {
      capitalize = true
      continue
    }

    //If capitalize is true, capitalize the current character
    //This only works if we do not have more than one space between words
    if (capitalize) {
      arrTitle.splice(i, 1, arrTitle[i].toUpperCase())
      capitalize = false // prevents capitzaling other letters of current word.
    }

  }

  title = arrTitle.join("")
  return title

}

// Do not edit this line;
module.exports = titleCaseEdit;