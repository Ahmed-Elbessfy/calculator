// Variables
// Display area
let operation = document.querySelector("#operation");
let display = document.querySelector("#display");
// Buttons variables
let clear = document.querySelector("#clear");
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
  operators = [add, subtract, divide, multiply],
  // Displayed data on display area
  displayArr = [],
  // temporary array to store result value for the next operation
  tempResult = [];

// Set starting value in display area to 0
let initialNum = 0;
// let splReg = /[+/*-]/;
// console.log("12354+ssdd-ffgfgbb.jj*4558.55612".split(splReg));
// console.log(eval(((2 + 3) * 10) / 2 + Math.sqrt(49)));

// Functions

// Clear function
const clearFun = () => {
  console.log("clearFun was called");
  display.innerHTML = 0;
  operation.innerHTML = 0;
  displayArr = [];
  tempResult = [];
};

// Controlling display function
/* This function should output
a set of numbers and operators
to operate through and create the output result
*/
const controlDisplay = sym => {
  if (["+", "*", "/"].includes(sym)) {
    // if clicked button is an OPERATOR but not a minus operator
    // if tempResult array is not empty, use result value stored in tempResult and perform the operation
    if (tempResult.length !== 0) {
      // clear displayArr to clear values from screen
      displayArr = []
      // use previous result value as a starter value fo the next operation
      displayArr.push(tempResult[0])
      // clear tempResult array for the next result operation value
      tempResult = []
    }

    // get last item in displayArr
    let last = [...displayArr].pop();
    // if last item is an operator but not a minus operator, replace it with the new clicked operator
    if (["+", "*", "/"].includes(last)) {
      // remove last item in displayArr
      displayArr.pop();
      // push the new operator at the end of the displayArr
      displayArr.push(sym);
      // If the last item is a minus operator,
      // then check the second last item,
      // if it is an operator too,
      // then remove both and push the new clicked button
    } else if (last === '-') {
      // get the second last item in displayArr array and store in secondeLast variable
      let secondLast = displayArr[displayArr.length - 2]
      // check if secondLast is an ordinary operator
      if (["+", "*", "/"].includes(secondLast)) {
        // remove the last two items from displayArr array
        displayArr.pop()
        displayArr.pop()
        // push the new clicked operator to displayArr
        displayArr.push(sym)
      }
    } else {
      // if last item is not an operator, push the clicked operator at the end of the displayArr
      displayArr.push(sym);
    }
  } else if (sym === '-') {
    // if clicked button is a Minus OPERATOR
    // if tempResult array is not empty, use result value stored in tempResult and perform the operation
    if (tempResult.length !== 0) {
      // clear displayArr to clear values from screen
      displayArr = []
      // use previous result value as a starter value fo the next operation
      displayArr.push(tempResult[0])
      // clear tempResult array for the next result operation value
      tempResult = []
    }
    // get last item in displayArr
    let last = [...displayArr].pop();
    // check that the last item in displayArr array is not a minus operator or square operator
    if (last !== '-' && last !== '√') {
      displayArr.push(sym)
    }

  } else if (sym === ".") {
    //if clicked button is a DECIMAL POINT
    // if tempResult array is not empty, clear result value stored in tempResult and start new operation
    if (tempResult.length !== 0) {
      // clear displayArr to clear values from screen
      displayArr = []
      // clear tempResult array for the next result operation value
      tempResult = []
    }

    /* split displayArr at every operator to
    check if there is a decimal point
    in the typed number
    */
    // regexp to select only operator signs
    let rgb = /[+/*-]/;
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
  } else if (sym === "0") {
    // if clicked button is zero
    // if tempResult array is not empty, clear result value stored in tempResult and start new operation
    if (tempResult.length !== 0) {
      // clear displayArr to clear values from screen
      displayArr = []
      // clear tempResult array for the next result operation value
      tempResult = []
    }

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
    // if tempResult array is not empty, clear result value stored in tempResult and start new operation
    if (tempResult.length !== 0) {
      // clear displayArr to clear values from screen
      displayArr = []
      // clear tempResult array for the next result operation value
      tempResult = []
    }

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
    controlDisplay('1')
  }
  if (e.keyCode == 98 || e.keyCode == 50) {
    controlDisplay('2')
  }
  if (e.keyCode == 99 || e.keyCode == 51) {
    controlDisplay('3')
  }
  if (e.keyCode == 100 || e.keyCode == 52) {
    controlDisplay('4')
  }
  if (e.keyCode == 101 || e.keyCode == 53) {
    controlDisplay('5')
  }
  if (e.keyCode == 102 || e.keyCode == 54) {
    controlDisplay('6')
  }
  if (e.keyCode == 103 || e.keyCode == 55) {
    controlDisplay('7')
  }
  if (e.keyCode == 104 || e.keyCode == 56) {
    controlDisplay('8')
  }
  if (e.keyCode == 105 || e.keyCode == 57) {
    controlDisplay('9')
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
    calculate()
  }
  if (e.keyCode == 187) {
    calculate()
  }
})

// Calculate function
const calculate = () => {
  // calculation result stored in result variable
  // calculation result is the value of joined displayArr array
  let result = eval(displayArr.join(""))

  // if result is a decimal number, then it must have only 5 decimal places
  // check if result is a decimal number by comparing Math.floor value for result with original result value
  if (result !== Math.floor(result)) {
    // if result is a decimal number, limit decimal places to 5
    result = +result.toFixed(5)
  }
  // store result value in tempResult array for the next operation
  tempResult.push(result)
  operation.innerHTML = displayArr.join('')
  display.innerHTML = `${result}`
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
// Show InitialNum on displaying area
display.innerHTML = initialNum;
