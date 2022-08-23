// Code your solution in this file!
const returnFirstTwoDrivers = (arrayDrivers) => {
    return arrayDrivers.slice(0,2);
}

const returnLastTwoDrivers = (arrayDrivers) => {
    return arrayDrivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiple) => {
    let callback = (num) => num*multiple;  
    return callback;
}

const fareDoubler = (num) => {
    let callback = createFareMultiplier(2); 
    return callback(num); 
}

const fareTripler = (num) => {
    let callback = createFareMultiplier(3);
    return callback(num);
}

const selectDifferentDrivers = (arrayOfDrivers, fn) => {
    if (fn === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arrayOfDrivers);
    } else if (fn === returnLastTwoDrivers){
        return returnLastTwoDrivers(arrayOfDrivers);
    } else {
        return "invalid";
    }
}
