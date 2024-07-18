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

function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
    default:
      console.log("you have to give operator");
  }
}
let operator = false;
let tempNumber = "";
let firstNumber = "";
let secondNumber = "";

function displayNumbers(number) {
  const resultPath = document.querySelector("#result p");
  tempNumber = number;
  if (!operator) {
    firstNumber = firstNumber.concat(tempNumber);
    if (resultPath.textContent === "0") resultPath.textContent = "";
    resultPath.textContent += tempNumber;
  } else secondNumber = secondNumber.concat(tempNumber);
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
