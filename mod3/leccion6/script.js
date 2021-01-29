const d = document;
const btnDivide = d.getElementById("/");
const btnMultiply = d.getElementById("*");
const btnAdd = d.getElementById("+");
const btnSubstract = d.getElementById("-");
const btnReset = d.getElementById("C");
const btnResult = d.getElementById("=");
const screen = d.getElementById("screen");
const numButtons = [];
const moreLess = d.getElementById("moreLess");
const dot = d.getElementById("dot");
const sqrt = d.getElementById("sqrt");
const power = d.getElementById("power");
let newScreen;
let screenNumber = "";
let firstNumber = "";
let secondNumber = "";
let operation = "";
let divisor = "1";
let result = "";
let numberOfDecimals;
let divisionDecimals;
screen.value = 0;

// Función limpiar pantalla
var clean = function () {
  screen.value = "0";
  screenNumber = "";
  secondNumber = "";
  firstNumber = "";
  result = "";
  divisor = "1";
  operation = "";
};
btnReset.addEventListener("click", () => clean());

// Se agrega la propiedad .round() al prototype Number
Number.prototype.round = function (places) {
  return +(Math.round(this + "e+" + places) + "e-" + places);
};

// Se definen los botones de los números
for (let i = 0; i <= 9; i++) {
  numButtons[i] = d.getElementById(`${i}`);
}

numButtons.push(dot);

// Se captura el primer número
numButtons.map((numero) => {
  numero.addEventListener("click", () => {
    if (result == "") {
      screenNumber = screenNumber + numero.textContent;
      screen.value = screenNumber;
    }
  });
});

// Funcion operaciones matematicas
const selectOperation = (button, symbol) => {
  button.addEventListener("click", () => {
    if (symbol == "√" && result == "") {
      operation = symbol;
      firstNumber = screenNumber;
      result = Math.sqrt(firstNumber);
      screen.value = result;
    }
    if (firstNumber == "" && symbol !== "" && symbol !== "√") {
      firstNumber = screenNumber;
      secondNumber = "";
      operation = symbol;
      let newNumber = "";
      screen.value = `${firstNumber} ${symbol} `;
      numButtons.map((number) => {
        number.addEventListener("click", () => {
          if (firstNumber !== "" && result == "") {
            newNumber = newNumber + number.textContent;
            secondNumber = newNumber;
            screen.value = `${firstNumber} ${symbol} ${secondNumber}`;
          }
        });
      });
    }
  });
};

// Función negativo positivo
moreLess.addEventListener("click", (symbol) => {
  if (firstNumber == "") {
    screenNumber = (screenNumber * -1).toString();
    screen.value = screenNumber;
  } else if (secondNumber !== "") {
    secondNumber = (secondNumber * -1).toString();
    newScreen = screen.value;
    newScreen = newScreen.split(" ");
    newScreen.splice(2, 1, secondNumber);
    newScreen = newScreen.join(" ");
    screen.value = newScreen;
  }
});

// Funciones para indicar que operador se utilizó
// suma
selectOperation(btnAdd, "+");
selectOperation(btnSubstract, "-");
selectOperation(btnMultiply, "*");
selectOperation(btnDivide, "/");
selectOperation(power, "^");
selectOperation(sqrt, "√");

// Función calcular cantidad de decimales del resultado
const calcNumOfDecimals = () => {
  // calcular cantidad de decimales
  let decimals1 = 0;
  let decimals2 = 0;
  // Si el primer numero tiene decimales, se asignan a la variable decimals1
  if (firstNumber.split(".")[1]) {
    decimals1 = firstNumber.split(".")[1].length;
  }
  // Si el segundo numero tiene decimales, se asignan a la variable decimals2
  if (secondNumber.split(".")[1]) {
    decimals2 = secondNumber.split(".")[1].length;
  }
  if (operation == "+" || operation == "-") {
    //En el caso de la suma y resta el numero de decimales del resultado es el mayor entre los 2
    numberOfDecimals = decimals1 > decimals2 ? decimals1 : decimals2;
  } else if (operation == "*") {
    //En el caso de la multiplicacion el numero de decimales del resultado es la suma de los 2
    numberOfDecimals = decimals1 + decimals2;
  }
  if (
    secondNumber != "0" &&
    operation == "/" &&
    (parseFloat(firstNumber) / parseFloat(secondNumber)).toString().length > 1
  ) {
    divisionDecimals = (parseFloat(firstNumber) / parseFloat(secondNumber))
      .toString()
      .split(".")[1].length;
    if (divisionDecimals >= 4) {
      divisionDecimals = 4;
    }
  }
};

// funcion resultado
printResult = () => {
  screen.value = `${parseFloat(firstNumber)} ${operation} ${parseFloat(
    secondNumber
  )} = ${result}`;
  firstNumber = result;
  console.log(`first number: ${firstNumber}, second number: ${secondNumber}`);
};

// Boton resultado
btnResult.addEventListener("click", function () {
  switch (operation) {
    case "+":
      calcNumOfDecimals();
      result = (parseFloat(firstNumber) + parseFloat(secondNumber)).toString();
      printResult();
      break;
    case "-":
      calcNumOfDecimals();
      result = (parseFloat(firstNumber) - parseFloat(secondNumber))
        .round(numberOfDecimals)
        .toString();
      printResult();
      break;
    case "*":
      calcNumOfDecimals();
      result = (parseFloat(firstNumber) * parseFloat(secondNumber))
        .round(numberOfDecimals)
        .toString();
      printResult();
      break;
    case "/":
      if (secondNumber != "0") {
        calcNumOfDecimals();
        result = (parseFloat(firstNumber) / parseFloat(secondNumber))
          .round(divisionDecimals)
          .toString();
        printResult();
      } else {
        screen.value = "Indeterminado";
      }
      break;
    case "^":
      calcNumOfDecimals();
      result = Math.pow(
        parseFloat(firstNumber),
        parseFloat(secondNumber)
      ).toString();
      printResult();
      break;
    case "√":
      firstNumber = result;
      result = Math.sqrt(parseFloat(firstNumber)).toString();
      screen.value = result;
      break;
    default:
      break;
  }
});
