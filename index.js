// Code your solution here
const findMatching = (collection, searchValue) => {
  return collection.filter(element => element.toLowerCase() === searchValue.toLowerCase())
}

const fuzzyMatch = (collection, searchValue) => {
  return collection.filter(element => element.toLowerCase().slice(0, searchValue.length) === searchValue.toLowerCase())
}
