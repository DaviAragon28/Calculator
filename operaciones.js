let num1 = 0;
let num2 = 0;
let opc = '';
let resultado = 0;
function resultadoNum() {}
function calcular(num) {
  let data = input.textContent.split(/[+-/*]+/);

  if (data.length == 2) {
    num1 = data[0];
    num2 = data[1] + num;
    switch (opc) {
      case '-':
        resultado = resta(num1, num2);
        break;
      case '+':
        resultado = suma(num1, num2);
        break;
      case '*':
        resultado = multiplicacion(num1, num2);
        break;
      default:
        resultado = division(num1, num2);
        break;
    }
    output.innerText = resultado;
    num1 = resultado;
  } else if (data.length >= 3) {
    num2 = data[data.length - 1] + num;
    switch (opc) {
      case '-':
        resultado = resta(num1, num2);
        break;
      case '+':
        resultado = suma(num1, num2);
        break;
      case '*':
        resultado = multiplicacion(num1, num2);
        break;
      default:
        resultado = division(num1, num2);
        break;
    }
    output.innerText = resultado;
    num1 = resultado;
  }
}

function op(simbolo) {
  opc = simbolo;
}
function resta(nn1, nn2) {
  let operation = parseFloat(nn1) - parseFloat(nn2);
  return operation;
}

function suma(nn1, nn2) {
  let operation = parseFloat(nn1) + parseFloat(nn2);
  return operation;
}

function multiplicacion(nn1, nn2) {
  let operation = parseFloat(nn1) * parseFloat(nn2);
  return operation;
}

function division(nn1, nn2) {
  let operation = parseFloat(nn1) / parseFloat(nn2);
  return operation;
}
