// Variables
// Display area
let display = document.querySelector("#display");
// Buttons variables
let clear = document.querySelector("#clear");
let square = document.querySelector("#square");
let divide = document.querySelector("#divide");
let multiply = document.querySelector("#multiply");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let subtract = document.querySelector("#subtract");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let add = document.querySelector("#add");
let three = document.querySelector("#three");
let two = document.querySelector("#two");
let one = document.querySelector("#one");
let decimal = document.querySelector("#decimal");
let zero = document.querySelector("#zero");
let equal = document.querySelector("#equal");
// Arrays
// Numbers array
let numbers = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    zero,
    decimal
  ],
  // Operator array
  operators = [add, subtract, divide, multiply, square],
  // Displayed data on display area
  displayArr = [],
  // temporary array to store numbers until clicking an operator
  tempNumArr = [];

// Set starting value in display area to 0
let displayedNum = 0;
// let splReg = /[+/*-]/;
// console.log("12354+ssdd-ffgfgbb.jj*4558.55612".split(splReg));
// console.log(eval(((2 + 3) * 10) / 2 + Math.sqrt(49)));

// Functions

// Clear function
const clearFun = () => {
  console.log("clearFun was called");
  display.innerHTML = 0;
  displayArr = [];
};

// Controlling display function
/* This function should output
a set of numbers and operators
to operate through and create the output result
*/
const controlDisplay = sym => {
  console.log("controlDisplay called" , sym);
};

// Add event listener on clicking on a number button
for (num of numbers) {
  num.onclick = (e) => controlDisplay(e.target.innerHTML);
}

// Add event listener on clicking on a number button
for (operator of operators) {
  operator.onclick = (e) => controlDisplay(e.target.innerHTML);
}

// Functionality
clear.addEventListener("click", clearFun);
document.addEventListener("keydown", e => {
  // console.log(e.keyCode);
  if (e.keyCode === 46) {
    clearFun();
  }
});

// Show displayNum on displaying area
display.innerHTML = displayedNum;