function findMatching(drivers, argument){
  return drivers.filter(driver => driver.toLowerCase() ===argument.toLowerCase())
}

function fuzzyMatch(drivers, argument){
  return drivers.filter(driver => driver.startsWith(argument))
}

function matchName(drivers, argument){
  return drivers.filter(driver => driver.name === argument);
}
