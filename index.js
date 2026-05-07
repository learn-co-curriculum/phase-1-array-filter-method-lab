// function findMatching(collection, name) {
//   return collection.filter(function (driver) {
//     return driver.toLowerCase() === name.toLowerCase();
//   });
// }
const findMatching = (collection, name) =>
    collection.filter((driver) => driver.toLowerCase() === name.toLowerCase());


// function fuzzyMatch(collection, name) {
//     return collection.filter(function (driver) {
//         return driver.startsWith(name)
//     })
// }
const fuzzyMatch = (collection, name) => 
    collection.filter((driver) => driver.startsWith(name))



function matchName() {}
