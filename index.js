function findMatching(arrayDriver, driver) {
  return arrayDriver.filter((possibleDriver) => isMatching(possibleDriver, driver))
}

function isMatching(possibleDriver, driver) {
  return possibleDriver.toLowerCase() === driver.toLowerCase();
}

function fuzzyMatch(arrayDriver, startingLetters) {
  return arrayDriver.filter((possibleDriver) => {
    return possibleDriver.startsWith(startingLetters);
  })
}

function matchName(arrayDriver, soughtName) {
  console.log("test")
  return arrayDriver.filter((possibleDriver) => {
    return possibleDriver.name === soughtName
    console.log(matchName(arrayDriver, soughtName))
  })
}

// goes into arrayDriver and pulls name value that matches soughtname

// to get name key use dot notation on object
// pull from array object that match sought name
// source = driver object 

const soughtName = "Annette"
const arrayDriver = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

matchName(arrayDriver, soughtName)

