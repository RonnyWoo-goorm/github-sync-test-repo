// example_old.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

console.log(add(2, 3));
console.log(subtract(5, 2));
console.log(multiply(3, 4));
console.log(divide(10, 2));
