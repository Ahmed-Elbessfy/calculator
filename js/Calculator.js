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
