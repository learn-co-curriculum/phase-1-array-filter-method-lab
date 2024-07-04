function findMatching(drivers, query) {
    let lowercaseQuery = query.toLowerCase();

    let matchingDrivers = drivers.filter(driver =>
        driver.toLowerCase() === lowercaseQuery
    );
    
    return matchingDrivers;
}

function fuzzyMatch(drivers, query) {
    let lowercaseQuery = query.toLowerCase();
    
    let matchingDrivers = drivers.filter(driver =>
        driver.toLowerCase().startsWith(lowercaseQuery)
    );
    
    return matchingDrivers;
}
function matchName(drivers, query) {
    let lowercaseQuery = query.toLowerCase();

    let matchingDrivers = drivers.filter(driver =>
        driver.name.toLowerCase() === lowercaseQuery
    );
    
    return matchingDrivers;
}