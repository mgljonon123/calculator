// let arr = [1, 2, 3, 6, 4, 9];
// let b = [10, 23, 45, 65];

// arr[9] = 7;
// arr.push(7);
// arr.pop();
// arr.shift();
// let b = arr.splice(2, 1, "bazraa", 3);
// let b = arr.slice(4);
// console.log(b);
// let c = arr.concat(b);

//  array method
// const a = arr.filter(printData);

// function printData(value, index, array) {
//   return value > 4;
// }
// console.log(a);
// // array search method

// const c = arr.find(findData);

// function findData(value, index) {
//   return value == 3;
// }

// const d = arr.indexOf(6);
// console.log(d);

// const e = arr.includes(2);
// console.log(e);

// const l = arr.find((value, index) => {
//   if (index === 3) {
//     return value;
//   }

//   return null;
// });
// console.log(l);

// calculator

// Select the display and the buttons
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");

let currentInput = ""; // Holds the current input (the number being typed)
let previousInput = ""; // Holds the previous number (before the operator)
let operator = ""; // Holds the current operator (+, -, *, /)

// Add event listeners to number buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Append the clicked number to the current input
    currentInput += button.innerText;
    display.value = currentInput; // Update the display
  });
});

// Add event listeners to operator buttons
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentInput === "") return; // Prevents using operator without number

    if (previousInput !== "") {
      calculate(); // If there's a previous input, calculate the result first
    }

    operator = button.innerText; // Store the clicked operator
    previousInput = currentInput; // Store the current input as previous
    currentInput = ""; // Reset current input for the next number
  });
});

equalButton.addEventListener("click", () => {
  if (currentInput === "" || previousInput === "") return;
  calculate();
  display.value = currentInput; // Show the result
  previousInput = "";
});

clearButton.addEventListener("click", () => {
  currentInput = "";
  previousInput = "";
  operator = "";
  display.value = "";
});

function calculate() {
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput); // too bolgo

  if (isNaN(prev) || isNaN(current)) return; // too bainu shalga

  switch (operator) {
    case "+":
      currentInput = (prev + current).toString();
      break;
    case "-":
      currentInput = (prev - current).toString();
      break;
    case "*":
      currentInput = (prev * current).toString();
      break;
    case "/":
      currentInput = (prev / current).toString();
      break;
  }

  operator = "";
}

// equalButton.addEventListener("click", () => {
//   if (currentInput === "" || lastInputs === "") return;
//   calculate();
//   display.value = currentInput;
//   previousInput = "";
// });

// clearButton.addEventListener("click", () => {
//   currentInput = "";
//   previousInput = "";
//   operator = "";
//   display.value = "";
// });
