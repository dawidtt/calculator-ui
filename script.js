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
const resultPath = document.querySelector("#result p");
let isOperatorChosen = false;
let operator = "";
let tempNumber = "";
let firstNumber = "";
let secondNumber = "";

function displayNumbers(number) {
  tempNumber = number;
  if (!isOperatorChosen) {
    if (firstNumber !== "0") firstNumber = firstNumber.concat(tempNumber);
    if (resultPath.textContent === "0") resultPath.textContent = "";
    resultPath.textContent += tempNumber;
  } else {
    secondNumber = secondNumber.concat(tempNumber);
    resultPath.textContent += tempNumber;
  }
  console.log(firstNumber);
  console.log(secondNumber);
}

function displayOperator(newOperator) {
  if (firstNumber != "" && !isOperatorChosen) {
    operator = newOperator;
    resultPath.textContent += operator;
    isOperatorChosen = true;
  }
}

function displayResult() {
  let result = "";
  if (secondNumber === "") {
    if (firstNumber === "") result = "0";
    else result = firstNumber;
  } else {
    result = operate(operator, parseInt(firstNumber), parseInt(secondNumber));
  }
  resultPath.textContent = result;
  isOperatorChosen = false;
  operator = "";
  firstNumber = result.toString();
  secondNumber = "";
  console.log(firstNumber);
  console.log(secondNumber);
}

const numbersNodeList = document.querySelectorAll(".number");
console.log(numbersNodeList);
const numbersArray = Array.from(numbersNodeList);
console.log(numbersArray);
for (const number of numbersArray) {
  number.addEventListener("click", () => displayNumbers(number.textContent));
}

const operatorsPathsNodeList = document.querySelectorAll(".operator");
console.log(operatorsPathsNodeList);
const operatorsPathsArray = Array.from(operatorsPathsNodeList);
console.log(operatorsPathsArray);
for (const operator of operatorsPathsArray) {
  operator.addEventListener("click", () =>
    displayOperator(operator.textContent)
  );
}

const equalPath = document.querySelector(".equal");
equalPath.addEventListener("click", displayResult);
