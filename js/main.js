// Calculator

// Global vars
var num1 = "";
var num2 = "";
var operator;
var flag = 0;
var display = document.getElementById("display");
var equalTo = 0;

// function setNumber(value)
function setValue(number) {
  if (equalTo === 1) {
    clearButton();
  }
  if (flag === 0) {
    num1 += number;
    display.innerHTML += number;
  } else {
    num2 += number;
    display.innerHTML += number;
  }
  if (num1.length > 10 || num2.length > 10) {
    display.innerHTML = "Max Limit of digits reached";
  }
}

// function oppClick(numericCode)
function oppClick(numericCode) {
  operator = numericCode;
  var oppString = "";
  flag = 1;
  if (operator === 4) {
    display.innerHTML += "/";
    oppString = "/";
  } else if (operator === 3) {
    display.innerHTML += "*";
    oppString = "*";
  } else if (operator === 2) {
    display.innerHTML += "-";
    oppString = "-";
  } else {
    display.innerHTML += "+";
    oppString = "+";
  }

  if (flag === 1) {
    display.innerHTML = num1 + oppString;
  }
  if (flag === 1 && num1 === "") {
    clearButton();
  }
  if (equalTo === 1) {
    clearButton();
  }
}

// function equalClick
function equalClick() {
  equalTo = 1;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  var result = "";
  var roundedResult = "";

  switch (true) {
    case operator === 1:
      result = num1 + num2;
      break;
    case operator === 2:
      result = num1 - num2;
      break;
    case operator === 3:
      result = num1 * num2;
      break;
    case operator === 4:
      result = num1 / num2;
      break;
  }
  roundedResult = result.toFixed(4);
  display.innerHTML = roundedResult;

  if (roundedResult === "NaN") {
    display.innerHTML = "Not a Valid Calc";
  }
}

// function clearButton
function clearButton() {
  num1 = "";
  num2 = "";
  flag = 0;
  display.innerHTML = "";
  equalTo = 0;
}

// function backspace
function backspace() {
  var temp1 = "";
  var temp2 = "";
  if (equalTo === 1) {
    clearButton();
  }
  if (flag === 0) {
    temp1 = num1.substring(0, num1.length - 1);
    display.innerHTML = temp1;
    num1 = temp1;
  }
  if (flag === 1) {
    display.innerHTML = num1;
    flag = 0;
  }
  if (num2 !== "") {
    temp2 = num2.substring(0, num2.length - 1);
    display.innerHTML = num1 + operator + num2;
    num2 = temp2;
    flag = 1;

    if (operator === 1) {
      display.innerHTML = num1 + "+" + num2;
    } else if (operator === 2) {
      display.innerHTML = num1 + "-" + num2;
    } else if (operator === 3) {
      display.innerHTML = num1 + "*" + num2;
    } else if (operator === 4) {
      display.innerHTML = num1 + "/" + num2;
    }
  }
}

// function setDecimal
function setDecimal() {
  if (flag === 0) {
    if (num1 === "") {
      num1 = "0.";
      display.innerHTML = num1;
    } // end of 1st if

    if (num1.indexOf(".") === -1) {
      num1 += ".";
      display.innerHTML = num1;
    } // end of 2nd if
  } // end of if
  if (flag === 1) {
    if (num2 === "") {
      num2 = "0.";
      display.innerHTML += num2;
    } // end of 1st if

    if (num2.indexOf(".") === -1) {
      num2 += ".";
      display.innerHTML = num1 + operator + num2;
      setOppString();
    }
  }
}

//function setOppString
function setOppString() {
  if (operator === 1) {
    display.innerHTML = num1 + "+" + num2; // we are doing this to update the display. Use switch maybe
  } else if (operator === 2) {
    display.innerHTML = num1 + "-" + num2;
  } else if (operator === 3) {
    display.innerHTML = num1 + "*" + num2;
  } else if (operator === 4) {
    display.innerHTML = num1 + "/" + num2;
  }
}
