// =========================================
// Guitar Builder JavaScript
// =========================================

// =========================================
// 1. Variables, Constants, and Data Types
// =========================================

// Basic guitar builder information
const builderName = "Custom Guitar Builder";
const basePrice = 799;
const guitarReady = true;

// User-selected guitar options
let selectedBody = "Stratocaster";
let selectedPickup = "Humbucker";
let selectedColor = "Black";

// Convert a string price into a number
const extraCostText = "150";
const extraCost = Number(extraCostText);

// Check data types
console.log("Builder name type:", typeof builderName);
console.log("Base price:", basePrice);
console.log("Guitar ready:", guitarReady);
console.log("Extra cost:", extraCost);
console.log("Extra cost type:", typeof extraCost);


// =========================================
// 2. Guitar Parts Array
// =========================================

const guitarParts = [
    "Body",
    "Neck",
    "Pickups",
    "Bridge",
    "Tuning Machines"
];

console.log("Guitar parts:");

for (let part of guitarParts) {
    console.log("- " + part);
}

// Access an array element
console.log("First guitar part:", guitarParts[0]);


// =========================================
// 3. Guitar Object
// =========================================

const guitar = {
    body: selectedBody,
    pickup: selectedPickup,
    color: selectedColor,
    price: basePrice
};

// Access object properties
console.log("Guitar body:", guitar.body);
console.log("Guitar pickup:", guitar.pickup);
console.log("Guitar color:", guitar.color);
console.log("Guitar price:", guitar.price);


// =========================================
// 4. Conditional Statement
// =========================================

// Determine whether the guitar is affordable
const totalPrice = guitar.price + extraCost;

if (totalPrice <= 1000 && guitarReady === true) {
    console.log("Your guitar is ready and costs $1,000 or less.");
} else if (totalPrice > 1000) {
    console.log("Your guitar costs more than $1,000.");
} else {
    console.log("Your guitar still needs to be completed.");
}


// =========================================
// 5. Function
// =========================================

// Calculate the total guitar price
function calculateGuitarPrice(basePrice, additionalCost) {
    return basePrice + additionalCost;
}

// Call the function with two different sets of arguments
const guitarPriceOne = calculateGuitarPrice(799, 150);
const guitarPriceTwo = calculateGuitarPrice(999, 200);

console.log("First guitar price:", guitarPriceOne);
console.log("Second guitar price:", guitarPriceTwo);


// =========================================
// 6. Guitar Description Function
// =========================================

function describeGuitar(body, pickup, color) {
    return color + " " + body + " with " + pickup + " pickups";
}

const guitarDescription = describeGuitar(
    guitar.body,
    guitar.pickup,
    guitar.color
);

console.log("Your custom guitar:", guitarDescription);


// =========================================
// 7. Final Message
// =========================================

console.log("Guitar Builder JavaScript loaded successfully!");
