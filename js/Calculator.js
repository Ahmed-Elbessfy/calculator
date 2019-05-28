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
  // if clicked button is an OPERATOR
  if (["+", "-", "*", "/"].includes(sym)) {
    // get last item in displayArr
    let last = [...displayArr].pop();
    // if last item is NOT a square op., proceed otherwise don't consider the clicked operator
    if (last !== "√") {
      // if last item is an operator, replace it with the new clicked operator
      if (["+", "-", "*", "/"].includes(last)) {
        // remove last item in displayArr
        displayArr.pop();
        // push the new operator at the end of the displayArr
        displayArr.push(sym);
      } else {
        // if last item is not an operator, push the clicked operator at the end of the displayArr
        displayArr.push(sym);
      }
    }
  } else if (sym === ".") {
    //if clicked button is a DECIMAL POINT
    /* split displayArr at every operator to
    check if there is a decimal point
    in the typed number
    */
    // regexp to select only operator signs
    let rgb = /[√+/*-]/;
    // join displayArr then split it cuz split is a string method
    let check = displayArr.join("").split(rgb);
    /* if there is no decimal point in the
    last typed number then add a decimal point
    else don't
    */
    if (!check[check.length - 1].includes(".")) {
      /*
      if a decimal point clicked and the last item in displayArr
      is not a number, add a zero before the decimal point
      otherwise add the decimal point only
      */
      //
      if (
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(
          displayArr[displayArr.length - 1]
        )
      ) {
        // if last item in displayArr is a number
        displayArr.push(sym);
      } else {
        // if last item in displayArr is not a number, add a zero number before decimal point
        displayArr.push("0");
        displayArr.push(sym);
      }
    }
  } else if (sym === "√") {
    // if clicked button is a SQUARE OPERATOR
    /* Add square operator only if the previous
    clicked button is a normal operator
    */
    // get last item in displayArr
    let last = [...displayArr].pop();
    // if displayArr is not empty which means that a Square operator is not the first clicked button
    if (displayArr.length > 0) {
      // check if the last clicked button is an Operator
      if (["+", "-", "*", "/"].includes(last)) {
        // if last button is an operator, then accept the square operator
        displayArr.push(sym)
      }
      // if displayArr is empty which means that square operator is first clicked button, then accept square operator
    } else {
      displayArr.push(sym)
    }

    /* split displayArr at every operator to
    check if there is a Square operator
    in the typed number
    */
    // console.log(displayArr)
    // // regexp to select only operator signs but without square operator
    // let rgb = /[+/*-]/;
    // // join displayArr then split it cuz split is a string method
    // let check = displayArr.join("").split(rgb);
    // /* if there is no square operator in the
    // last typed number and the last clicked button is a normal number
    // then add a square operator else don't
    // */
    // if (
    //   !check[check.length - 1].includes("√") &&
    //   ["+", "-", "*", "/"].includes(displayArr[displayArr.length - 1])
    // ) {
    //   displayArr.push(sym);
    // }
  } else {
    // if clicked button is a NUMBER
    displayArr.push(sym);
  }

  // displayed clicked buttons in the display area
  display.innerHTML = displayArr.join("");
};

// Calculate function
const calculate = () => {
  console.log("equal clicked");
  let joined = displayArr.join("");
  if (displayArr.includes("√")) {
    let sqrtSym = displayArr.indexOf("√");
    let operAfterSqrt = displayArr.indexOf("-", sqrtSym);
    let displayArrBeforeSqrt = displayArr.slice(0, sqrtSym);
    let displayArrAfterSqrt = displayArr.slice(operAfterSqrt);
    let sqrtNum = [...displayArr].slice(sqrtSym + 1, operAfterSqrt).join("");
    let sqrtEval = Math.sqrt(sqrtNum);
    // displayArr[sqrtSym] = sqrtEval;
    // fix the sqrt operator bug in the controlDisplay function
    // try 5√49-5 to remember the bug
    displayArr = displayArrBeforeSqrt + sqrtEval + displayArrAfterSqrt;
    console.log(displayArr);
    console.log(sqrtSym);
    console.log(operAfterSqrt);
    console.log(displayArrBeforeSqrt);
    console.log(displayArrAfterSqrt);
    console.log(sqrtNum);
    console.log(sqrtEval);
  } else {
    // join displayArr function to operate on
    // get final result from the value joined displayArr
    let result = eval(joined);
    console.log(joined, result);
  }
};

// Add event listener on clicking on a number button
for (num of numbers) {
  num.onclick = e => controlDisplay(e.target.innerHTML);
}

// Add event listener on clicking on a number button
for (operator of operators) {
  operator.onclick = e => controlDisplay(e.target.innerHTML);
}

// Functionality
clear.addEventListener("click", clearFun);
document.addEventListener("keydown", e => {
  // console.log(e.keyCode);
  if (e.keyCode === 46) {
    clearFun();
  }
});

equal.addEventListener("click", calculate);
// Show displayNum on displaying area
display.innerHTML = displayedNum;
