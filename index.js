function findMatching(drivers, name) {
    const cutCases = drivers.filter(function(driver) {
        return driver.toLowerCase() === name.toLowerCase();
    })
    return cutCases;
}

function fuzzyMatch (drivers, name) {
    const firstTwo = drivers.filter(function(driver) {
        return driver.slice(0, 2) === name.slice(0, 2);
    })
    return firstTwo;
}



function matchName(drivers, name) {
  const matchingDrivers = drivers.filter(function(driver) {
    return driver.name === name;
  });
  return matchingDrivers;
}


