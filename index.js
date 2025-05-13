function findMatching(drivers, names) {
  return drivers.filter(driver => driver.toLowerCase() === names.toLowerCase());
}
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.startsWith(letters));
}
function matchName(drivers, matchWithPerson) {
  return drivers.filter(driver => driver.name === matchWithPerson);
}
