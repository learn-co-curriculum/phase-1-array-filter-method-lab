const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']




const findMatching = (array, string) => {
  const stringCap = string.toUpperCase()
  return array.filter((item) => item.toUpperCase() === stringCap);

}

const fuzzyMatch = (array, string) => {
  const firstLetters = string.toUpperCase()
  return array.filter((item) => item.toUpperCase().startsWith(firstLetters))
}

const matchName = (array, string) => {
  const driverName = string.toUpperCase()
  return array.filter(item => item.name.toUpperCase() === driverName)
}
