// Code your solution here
function findMatching(drivers, name) {
  let test = drivers.filter(function(driver) {
    //console.log(`Driver: ${driver} || name: ${name}`)
    //console.log(driver === name)
    if(driver.toLowerCase() === name.toLowerCase()) {
      //console.log("its a match")
      return driver
    }
  })
  //console.log(test)
  return test
}

function fuzzyMatch(drivers, initial) {
  let test = drivers.filter(function(driver) {
    //console.log(`driver: ${driver} || driver.slice: ${driver.slice(0, initial.length).toLowerCase()} || letter: ${initial}`)
    if(driver.slice(0, initial.length).toLowerCase() === initial.toLowerCase()) {
      return driver
    }
  })

  //console.log(test)
  return test;
}

function matchName(drivers, name) {
  let test = drivers.filter(function(driver) {
    if(driver.name.toLowerCase() === name.toLowerCase()) {
      return driver
    }
  })
  console.log(test)
  return test
}