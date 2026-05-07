// added for logging purposes
const drivers = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];


const findMatching = (collection, name) =>
  collection.filter((driver) => driver.toLowerCase() === name.toLowerCase());


const fuzzyMatch = (collection, name) =>
  collection.filter((driver) => driver.startsWith(name));


const matchName = (collection, name) =>
  collection.filter((driver) => driver.name === name);

// function findMatching(collection, name) {
//   return collection.filter(function (driver) {
//     return driver.toLowerCase() === name.toLowerCase();
//   });
// }

// function fuzzyMatch(collection, name) {
//     return collection.filter(function (driver) {
//         return driver.startsWith(name)
//     })
// }

// function matchName(collection, name) {
//     return collection.filter(function (driver) {
//         return driver.name === name
//     })
// }