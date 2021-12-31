function setUnionOfAnyAmountOfSets(...args) {
  let set = new Set()
  let iterator
  let element

  // Each argument in the args array is a set, which deals with iterators.
  for (let i = 0; i < args.length; i++) {
    iterator = args[i].values()
    for (let j = 0; j < args[i].size; j++) {
      element = iterator.next().value
      if (!set.has(element))
        set.add(element)
    }
  }
  return set
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;