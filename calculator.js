const resultDisplay = document.querySelector(".result p");
const buttons = document.querySelector(".buttons");

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const pow = (x, y) => {
  let z = 1;
  for (let i = 0; i < y; i++) {
    z *= x;
  }
  return z;
};
const operate = (x, y, operator) => {
  switch (operator) {
    case "+":
      return add(x, y);
    case "-":
      return subtract(x, y);
    case "*":
      return multiply(x, y);
    case "/":
      return divide(x, y);
    case "^":
      return pow(x, y);
  }
};
const display = (str = "HELLO") => {
  resultDisplay.innerText = str;
};

let num1 = "";
let num2 = "";
let operator = null;

buttons.addEventListener("click", function (e) {
  if (!operator && e.target.className === "number") {
    num1 += e.target.innerText;
    display(num1);
  } else if (num2 != "" && e.target.className === "operator") {
    num1 = operate(parseFloat(num1), parseFloat(num2), operator);
    num2 = "";
    operator = e.target.innerText;
    display(operator);
  } else if (e.target.className === "operator") {
    operator = e.target.innerText;
    display(operator);
  } else if (e.target.className === "number") {
    num2 += e.target.innerText;
    display(num2);
  }
  if (e.target.className === "equal" && num2 != "") {
    num1 = operate(parseFloat(num1), parseFloat(num2), operator);
    display(Math.floor(num1 * 1000) / 1000);
    num2 = "";
  }
  if (e.target.className === "AC") {
    display();
    num1 = "";
    num2 = "";
    operator = 0;
  }
});
