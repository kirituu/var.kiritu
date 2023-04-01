let distance = 10; 
let destination = "airport"; 
let tipAmount = 15; 

// Determining the greeting based on the distance
if (distance <= 5) {
  console.log("Welcome aboard! Enjoy your ride.");
} else if (distance <= 10) {
  console.log("Thanks for choosing us. Sit back and relax.");
} else {
  console.log("Thank you for choosing us for this long journey.");
}

// Determining the response based on the destination using ternary operator
let response = destination === "airport" ? "We'll get you there on time!" 
              : destination === "downtown" ? "Enjoy the city sights on the way!" 
              : "It's a scenic drive to the suburbs!";
console.log(response);

// Determining the response based on the tip amount using switch statement
switch (true) {
  case (tipAmount >= 20):
    console.log("Thank you for your generous tip!");
    break;
  case (tipAmount >= 10 && tipAmount < 20):
    console.log("Thanks for your tip. Have a great day!");
    break;
  default:
    console.log("Thanks for choosing us. We appreciate your business.");
}
