function findMatching(names, name) {
  const matchingNames = names.filter(
    (driverName) => driverName.toLowerCase() === name.toLowerCase()
  );

  return matchingNames ? matchingNames : [];
}
