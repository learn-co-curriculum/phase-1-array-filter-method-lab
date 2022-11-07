const driversNames = ["Bobby", 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching( driversNames, driverName ) {
   return driversNames.filter( ( driver ) => {
      return driver.toLowerCase() === driverName.toLowerCase(); 
  })
}

console.log(findMatching(driversNames,"Bobby"))



function fuzzyMatch(arr, keyword) {
   return arr.filter(driver => {
    let keywordLength = keyword.length // 3
    let fuzzyWord = driver.substring(0, keywordLength) // Bob
    return keyword.toLowerCase() === fuzzyWord.toLowerCase()

  }) 
}

fuzzyMatch(drivers, 'Sa');

const drivers = [
   {
     name: 'Bobby',
     hometown: 'Pittsburgh' },
   {
     name: 'Sammy',
     hometown: 'New York' } ,
   {
     name: 'Sally',
     hometown: 'Cleveland' },
   {
     name: 'Annette',
     hometown: 'Los Angeles' },
   {
     name: 'Bobby',
     hometown: 'Tampa Bay' }
 ];

function matchName (arr1 , string){
   const match = arr1.filter(obj => {
      if(obj.name === string){
         return obj;
      }
   })
   return match;
}

console.log(matchName(drivers, "Bobby"))