let a= parseFloat(prompt("Enter 1st number"));

let b=parseFloat(prompt("Enter 2nd number"));

let c= prompt("Enter the operatior");

switch(c) {
    case '+':  
    return num1 + num2;
    break;
    case '-':
      return num1 - num2;
      break;
    case '*':
      return num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        return 'Division by zero is not allowed';
        break;
      }
      return num1 / num2;
      break;
    default:
      return 'Invalid operation';
  }



