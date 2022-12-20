function Zeven_input() {
  document.getElementById("answer").innerHTML += 7;
}
function Acht_input() {
  document.getElementById("answer").innerHTML += 8;
}
function Negen_input() {
  document.getElementById("answer").innerHTML += 9;
}
function DubbelePunt_input() {
  document.getElementById("answer").innerHTML += "÷";
  someThing = "÷";
}
function X_input() {
  document.getElementById("answer").innerHTML += "x";
  someThing = "x";
}
function Zes_input() {
  document.getElementById("answer").innerHTML += 6;
}
function vijfe_input() {
  document.getElementById("answer").innerHTML += 5;
}
function Vier_input() {
  document.getElementById("answer").innerHTML += 4;
}
function Decrement_input() {
  document.getElementById("answer").innerHTML += "-";
  someThing = "-";
}
function Drie_input() {
  document.getElementById("answer").innerHTML += 3;
}
function Twee_input() {
  document.getElementById("answer").innerHTML += 2;
}
function één_input() {
  document.getElementById("answer").innerHTML += 1;
}
function Increment_input() {
  document.getElementById("answer").innerHTML += "+";
  someThing = "+";
}
function Null_input() {
  document.getElementById("answer").innerHTML += "0";
}
//? clear the answer or text
function None_input() {
  document.getElementById("answer").innerHTML = "";
}

function DoMath() {
  var bereking = document.getElementById("answer").innerHTML;
  /*
  var output = bereking.split("x");
  var output = bereking.split("+");
  var output = bereking.split("-");
  var output = bereking.split("÷");
  var num1 = output[0];
  var num2 = output[1];
  var someThing = output[2];
  let string = `"${num1}" + ${output} + "${num2}"`;
  */

  bereking = bereking.replace("x", "*");
  bereking = bereking.replace("÷", "/");
  document.getElementById("answer").innerHTML = eval(bereking);
}

//console.log(
//  `"num1 = ${output[0]} " + "someThing = ${output[2]}" + "num2 = ${output[1]}"`
//);

//   if (input == "x") {
//     document.getElementById("answer").innerHTML = num1 * num2;
//   }

//   if (input == "/") {
//     document.getElementById("answer").innerHTML = num1 / num2;
//   }

//   if (input == "+") {
//     document.getElementById("answer").innerHTML = num1 + num2;
//   }

//   if (input == "-") {
//     document.getElementById("answer").innerHTML = num1 - num2;
//   }
// }

/*
  } else if ((onclick = DubbelePunt_input == true)) {
    document.getElementById("answer").innerHTML = num1 / num2;
  } else if ((onclick = Increment_input == true)) {
    document.getElementById("answer").innerHTML = num1 + num2;
  } else if ((onclick = Decrement_input == true)) {
    document.getElementById("answer").innerHTML = num1 - num2;
  }
  */
