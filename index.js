// Code your solution here
const findMatching = (collection, searchValue) => {
  return collection.filter(element => element.toLowerCase() === searchValue.toLowerCase())
}
