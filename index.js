// Code your solution here
function findMatching(drivers, name) {
  const lowercaseName = name.toLowerCase();
  return drivers.filter(driver => driver.toLowerCase().includes(lowercaseName));}
  
function matchName(array, name) {
  return array.filter(driver => driver.name === name);
}

function fuzzyMatch(array, name) {
  return array.filter(function(driver) {
  return driver.substring(0, 1) === name.substring(0, 1);
  });
}
