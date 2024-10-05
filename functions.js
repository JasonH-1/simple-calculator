
const DISPLAY = document.getElementById("display");
let currentInput = "";
let firstInput = true;

function buttonInput(buttonValue) {
  if (buttonValue === "=") {
    calculate();
  } else {
    if (firstInput) {
      currentInput = buttonValue;
      firstInput = false;
    } else {
      currentInput += buttonValue;
    }
    display.textContent = currentInput;
  }
}

function calculate() {
  console.log("Calculating: ", currentInput);
  let result;
  if(!checkSyntax(currentInput)){
    result = "Syntax Error";
  }else{
    result = eval(currentInput);
  }
  display.textContent = result;
  firstInput = true; 
}

function checkSyntax(expression){
  operators = ["+", "-", "/", "*"]
   for(i = 0; i < expression.length - 1; i++){
      if(operators.includes(expression[i]) && operators.includes(expression[i + 1])){
        return false;
      }
   }
   return true;
}

document.querySelectorAll(".number, .operator, .equals").forEach(button => {
  button.addEventListener("click", function () {
    let buttonValue = this.textContent;
    buttonInput(buttonValue);
    console.log(currentInput)
  });
});
