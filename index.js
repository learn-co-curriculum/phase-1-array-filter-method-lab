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
