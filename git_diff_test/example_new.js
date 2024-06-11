// example_new.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Removed multiply function

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

// Added new function
function modulo(a, b) {
    return a % b;
}

console.log(add(2, 3));
console.log(subtract(5, 2));
// Removed console.log for multiply
console.log(divide(10, 2));
console.log(modulo(10, 3));
