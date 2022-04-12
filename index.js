// Code your solution here
function findMatching(drivers, str) {
    return drivers.filter(driver => str.toLowerCase() === driver.toLowerCase());
}

function fuzzyMatch(drivers, letter) {
    return drivers.filter(driver => driver.startsWith(letter));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}


