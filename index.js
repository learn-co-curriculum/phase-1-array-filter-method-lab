function findMatching(names, name) {
  const matchingNames = names.filter(
    (driverName) => driverName.toLowerCase() === name.toLowerCase()
  );

  return matchingNames ? matchingNames : [];
}

function fuzzyMatch(names, letters) {
  const matchingNames = names.filter((driverName) =>
    driverName.startsWith(letters)
  );
  return matchingNames;
}

function matchName(drivers, driverName) {
  const matchingNames = drivers.filter((driver) => driver.name === driverName);
  return matchingNames;
}
