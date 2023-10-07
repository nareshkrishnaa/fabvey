function calculator() {
 
    let num1 = parseFloat(document.querySelector("input[name='firstNumber']").value);
    let num2 = parseFloat(document.querySelector("input[name='secondNumber']").value);
    let operator = document.querySelector("input[name='operator']").value;
  
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          result = 'Division by zero is not allowed';
        } else {
          result = num1 / num2;
        }
        break;
      default:
        result = 'Invalid operation';
    }
  
   
    alert(`Result: ${result}`);
  }
  