function findMatching(drivers, name) {
  const result = drivers.filter((driver) => {
    return driver.toLowerCase() === name.toLowerCase();
  });

  if (result.length > 0) {
    return result;
  } else {
    return [];
  }
}

function fuzzyMatch(drivers, name) {
  return drivers.filter((driver) => {
    return driver.toLowerCase().indexOf(name.toLowerCase()) === 0
  })
}

function matchName(drivers, name) {
    return drivers.filter((driver) => {
        return driver.name === name
    })
}