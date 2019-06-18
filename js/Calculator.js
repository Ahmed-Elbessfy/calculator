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
let equal = document.querySelector("#equals");
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
  } else if (sym === "0") {
    // if clicked button is zero
    /* prevent starting any operated number with more than one zero
    - check if the last clicked button is zero
    - if No push zero to displayArr
    - If Yes:
      - check if the secondLast element is NOT
        - a NaN ( if it was starting number) and NOT and operator
        - an Operator ( new number in the operation)
        - or it can be a decimal point
      then push zero to the displayArr
    */
    let last = [...displayArr].pop();
    // if last clicked button is a Zero
    if (last == "0") {
      // get the second last element in displayArr
      let secondLast = displayArr[displayArr.length - 2]
      // if secondLast element is not an Operator and not a NaN or equals decimal point, push zero to displayArr
      if (!["√", "+", "/", "*", "-"].includes(secondLast) && !isNaN(secondLast) || secondLast == ".") {
        displayArr.push(sym)
      }
    } else {
      // if last element in displayArr is not zero, then push zero to displayArr
      displayArr.push(sym)
    }
  } else {
    // if clicked button is a NUMBER
    displayArr.push(sym);
  }

  // displayed clicked buttons in the display area
  display.innerHTML = displayArr.join("");
};

// Keyboard controlling keys
document.addEventListener('keydown', e => {
  // Numbers from 0 to 9
  if (e.keyCode == 96 || e.keyCode == 48) {
    controlDisplay('0')
  }
  if (e.keyCode == 97 || e.keyCode == 49) {
    controlDisplay(1)
  }
  if (e.keyCode == 98 || e.keyCode == 50) {
    controlDisplay(2)
  }
  if (e.keyCode == 99 || e.keyCode == 51) {
    controlDisplay(3)
  }
  if (e.keyCode == 100 || e.keyCode == 52) {
    controlDisplay(4)
  }
  if (e.keyCode == 101 || e.keyCode == 53) {
    controlDisplay(5)
  }
  if (e.keyCode == 102 || e.keyCode == 54) {
    controlDisplay(6)
  }
  if (e.keyCode == 103 || e.keyCode == 55) {
    controlDisplay(7)
  }
  if (e.keyCode == 104 || e.keyCode == 56) {
    controlDisplay(8)
  }
  if (e.keyCode == 105 || e.keyCode == 57) {
    controlDisplay(9)
  }
  // Decimal point
  if (e.keyCode == 110) {
    controlDisplay('.')
  }
  if (e.keyCode == 190 && e.shiftKey) {
    controlDisplay('.')
  }
  // Operators
  if (e.keyCode == 107) {
    controlDisplay('+')
  }
  if (e.keyCode == 187 && e.shiftKey) {
    controlDisplay('+')
  }
  if (e.keyCode == 109) {
    controlDisplay('-')
  }
  if (e.keyCode == 189 && e.shiftKey) {
    controlDisplay('-')
  }
  if (e.keyCode == 106) {
    controlDisplay('*')
  }
  if (e.keyCode == 56 && e.shiftKey) {
    controlDisplay('*')
  }
  if (e.keyCode == 111) {
    controlDisplay('/')
  }
  if (e.keyCode == 191 && e.shiftKey) {
    controlDisplay('/')
  }
  // Equal
  if (e.keyCode == 13) {
    controlDisplay('=')
  }
  if (e.keyCode == 187 && e.shiftKey) {
    controlDisplay('=')
  }
})

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
