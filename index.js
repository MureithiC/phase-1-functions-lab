const hqLocation = 42;

function distanceFromHqInBlocks(pickLocation) {
    return Math.abs(pickLocation - hqLocation);
}

function distanceFromHqInFeet(pickLocation) {
    const blocks = distanceFromHqInBlocks(pickLocation);
    return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
        return 0;
    } 
    if (distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    if (distance <= 2500) {
        return 25;
    }
    return 'cannot travel that far';
}

// Test your functions
console.log(distanceFromHqInBlocks(50)); // Should return 8
console.log(distanceFromHqInFeet(50)); // Should return 2112
console.log(distanceTravelledInFeet(34, 38)); // Should return 1056
console.log(calculatesFarePrice(34, 38)); // Should return 2.56
