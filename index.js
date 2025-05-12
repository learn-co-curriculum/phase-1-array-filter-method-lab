function findMatching(drivers, name) {
  const driver = drivers.filter((driver) => {
    return driver.toLowerCase() === name.toLowerCase();
  });
  return driver;
}
