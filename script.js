function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function operate(operator, innerFirstNumber, innerSecondNumber) {
  switch (operator) {
    case "+":
      return add(innerFirstNumber, innerSecondNumber);
    case "-":
      return subtract(innerFirstNumber, innerSecondNumber);
    case "*":
      return multiply(innerFirstNumber, innerSecondNumber);
    case "/":
      return divide(innerFirstNumber, innerSecondNumber);
    default:
      console.log("you have to give operator");
      firstNumber = "";
      return "0";
  }
}

function displayNumbers(number) {
  tempNumber = number;
  if (!isOperatorChosen) {
    if (firstNumber !== "0") firstNumber = firstNumber.concat(tempNumber);
    if (resultPath.textContent === "0") resultPath.textContent = "";
    resultPath.textContent += tempNumber;
    firstNumber = resultPath.textContent;
  } else {
    secondNumber = secondNumber.concat(tempNumber);
    resultPath.textContent += tempNumber;
  }
}

function displayOperator(newOperator) {
  if (firstNumber === "") firstNumber = "0";
  if (!isOperatorChosen) {
    tempOperator = newOperator;
    operator = newOperator;
    resultPath.textContent += operator;
    isOperatorChosen = true;
  } else if (isOperatorChosen && secondNumber === "") {
    operator = newOperator;
    const currentResult = resultPath.textContent;
    resultPath.textContent =
      currentResult.slice(0, currentResult.length - 1) + operator;
    isOperatorChosen = true;
  } else if (isOperatorChosen && firstNumber && secondNumber) {
    tempOperator = newOperator;
    displayResultAfterOperator();
  }
}

function displayResult() {
  let result = "";
  if (secondNumber === "") {
    if (firstNumber === "") result = "0";
    else result = firstNumber;
  } else if (operator === "/" && secondNumber === "0") {
    alert("You can't divide by 0!!!");
    result = 0;
  } else {
    result = operate(operator, Number(firstNumber), Number(secondNumber));
  }

  isFirstDecimal = false;
  isSecondDecimal = false;

  if (Number.isInteger(Number(result))) resultPath.textContent = result;
  else {
    resultPath.textContent = Math.round(result * 100) / 100;
    isFirstDecimal = true;
  }
  isOperatorChosen = false;
  operator = "";
  if (result === 0) firstNumber = "";
  else firstNumber = result.toString();
  secondNumber = "";
}

function clearResult() {
  resultPath.textContent = "0";
  isOperatorChosen = false;
  operator = "";
  tempNumber = "";
  firstNumber = "";
  secondNumber = "";
  isFirstDecimal = false;
  isSecondDecimal = false;
}

function reverseFirstNumber() {
  if (firstNumber !== "" && firstNumber != "0" && isOperatorChosen === false) {
    if (firstNumber.charAt(0) === "-") firstNumber = firstNumber.slice(1);
    else firstNumber = "-".concat(firstNumber);
    resultPath.textContent = firstNumber;
  }
}

function displayResultAfterOperator() {
  displayResult();
  displayOperator(tempOperator);
  tempOperator = "";
}

function displayDecimal() {
  if (firstNumber === "" && isOperatorChosen === false && !isFirstDecimal) {
    resultPath.textContent += ".";
    isFirstDecimal = true;
    firstNumber = "0.";
  } else if (
    firstNumber !== "" &&
    isOperatorChosen === false &&
    !isFirstDecimal
  ) {
    resultPath.textContent += ".";
    isFirstDecimal = true;
    firstNumber += ".";
  } else if (
    secondNumber !== "" &&
    isOperatorChosen === true &&
    !isSecondDecimal
  ) {
    resultPath.textContent += ".";
    isSecondDecimal = true;
    secondNumber += ".";
  }
}

const resultPath = document.querySelector("#result p");
let isOperatorChosen = false;
let operator = "";
let tempOperator = "";
let tempNumber = "";
let firstNumber = "";
let secondNumber = "";
let isFirstDecimal = false;
let isSecondDecimal = false;

const numbersNodeList = document.querySelectorAll(".number");

const numbersArray = Array.from(numbersNodeList);

for (const number of numbersArray) {
  number.addEventListener("click", () => displayNumbers(number.textContent));
}

const operatorsPathsNodeList = document.querySelectorAll(".operator");

const operatorsPathsArray = Array.from(operatorsPathsNodeList);

for (const operator of operatorsPathsArray) {
  operator.addEventListener("click", () =>
    displayOperator(operator.textContent)
  );
}

const equalPath = document.querySelector(".equal");
equalPath.addEventListener("click", displayResult);

const acBtnPath = document.querySelector(".ac");
acBtnPath.addEventListener("click", clearResult);

const reverseBtnPath = document.querySelector(".reverse");
reverseBtnPath.addEventListener("click", reverseFirstNumber);

const commaPath = document.querySelector(".comma");
commaPath.addEventListener("click", displayDecimal);
