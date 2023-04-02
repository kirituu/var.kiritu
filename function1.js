
// Calculates the distance in blocks from the given pickup location to the headquarter location
function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 45;
  return Math.abs(pickupLocation - hqLocation);
}

// Calculates the distance in feet from the given pickup location to the headquarter location
function distanceFromHqInFeet(pickupLocation) {
  const blockInFeet = 200;
  return distanceFromHqInBlocks(pickupLocation) * blockInFeet;
}

// Calculates the distance in feet between the given start and end blocks
function distanceTravelledInFeet(startBlock, endBlock) {
  const blockInFeet = 264;
  return Math.abs(startBlock - endBlock) * blockInFeet;
}

// Calculates the fare for the distance in feet
function calculatesFareP(distanceInFeet) {
  let fare;
  if (distanceInFeet <= 400) {
    fare = 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    fare = (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    fare = 30;
  } else {
    fare = 'cannot travel that far';
  }
  return fare;
}


              //this is the result once you console.log 
// console.log(distanceFromHqInBlocks(50)); // 5
// console.log(distanceFromHqInFeet(50)); // 1000
// console.log(distanceTravelledInFeet(34, 56)); // 5808
// console.log(calculatesFareP(250)); // 0
// console.log(calculatesFareP(1320)); // 18.4
// console.log(calculatesFareP(2200)); // 30
// console.log(calculatesFareP(2600)); // "cannot travel that far"
