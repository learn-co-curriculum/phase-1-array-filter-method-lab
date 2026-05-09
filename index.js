// Code your solution here
const findMatching = (drivers, string) => {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
}
const fuzzyMatch = (drivers, string) => {
    return drivers.filter(driver => driver.toLowerCase().startsWith(string.toLowerCase()));
}
const matchName = (drivers, string) => {
    return drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase());
} 
// console.log(findMatching(["Bob", "Bobby", "Rob"], "bob"));

