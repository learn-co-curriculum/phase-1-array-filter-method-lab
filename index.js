function findMatching(drivers, name) {
  const driver = drivers.filter((driver) => {
    return driver.toLowerCase() === name.toLowerCase();
  });
  return driver;
}

function fuzzyMatch(drivers, letters) {
  const driver = drivers.filter((driver) => {
    return (
      driver.slice(0, letters.length).toLowerCase() === letters.toLowerCase()
    );
  });
  return driver;
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    if (driver.name === name) {
      return driver;
    }
  });
}
