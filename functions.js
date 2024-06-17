// Define findSum function
function findSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// Define subtractNumbers function
function subtractNumbers(a, b) {
    return a - b;
}

// Define  multiplyNumbers function that multiplies two numbers.
function multiplyNumbers(a, b) {
    return a * b;
}

// Define divideNumbers function that divides the first number by the second number, handling the case where the second number is zero
function divideNumbers(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

// Create an array with three integers
let numbers = [10, 5, 2];

// Use the array to call the findSum function and log its return value
let sum = findSum(numbers);
console.log("Sum of the array:", sum);

// Use the first and second number from the array to call subtractNumbers and log its return value
let difference = subtractNumbers(numbers[0], numbers[1]);
console.log("Difference of the first and second number:", difference);

// Use the third number and the first number from the array to call multiplyNumbers and log its return value
let product = multiplyNumbers(numbers[2], numbers[0]);
console.log("Product of the third and first number:", product);

// Call divideNumbers using the sum of all three numbers obtained from findSum and the third number from the array. Log its return value.
let divisionResult = divideNumbers(sum, numbers[2]);
console.log("Division of the sum by the third number:", divisionResult);


