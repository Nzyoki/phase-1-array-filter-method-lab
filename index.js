// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers,name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());

}

function fuzzyMatch(drivers,partialName){
    return drivers.filter(driver => driver.startsWith(partialName));



}

function matchName(drivers,name){
    return drivers.filter(driver => driver.name === name);

}