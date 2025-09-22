const readline = require("readline");

// Setup input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Functions for operations
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
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}
function average(a, b) {
  return (a + b) / 2;
}

// Loop program
function start() {
  rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
      let a = parseFloat(num1);
      let b = parseFloat(num2);

      if (isNaN(a) || isNaN(b)) {
        console.log("❌ Invalid input. Please enter numbers only.");
        start(); // restart
        return;
      }

      console.log(`\nResults:`);
      console.log(`Addition: ${add(a, b)}`);
      console.log(`Subtraction: ${subtract(a, b)}`);
      console.log(`Multiplication: ${multiply(a, b)}`);

      try {
        console.log(`Division: ${divide(a, b)}`);
      } catch (err) {
        console.log(`Division: Error - ${err.message}`);
      }

      console.log(`Average: ${average(a, b)}\n`);

      rl.question("Do you want to try again? (y/n): ", (answer) => {
        if (answer.toLowerCase() === "y") {
          start();
        } else {
          console.log("👋 Goodbye!");
          rl.close();
        }
      });
    });
  });
}

// Run the program
start();
