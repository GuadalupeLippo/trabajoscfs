"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var numb1 = rls.questionInt("Ingrese un numero: ");
var numb2 = rls.questionInt("ingrese un segundo numero: ");
var numb3 = rls.questionInt("Ingrese un tercer numero: ");
if (numb1 > numb2 && numb1 > numb3) {
    console.log("el primer numero es mayor");
}
else if (numb2 > numb1 && numb2 > numb3) {
    console.log("el segundo numero es mayor: ");
}
else if (numb1 == numb2 && numb2 == numb3) {
    console.log("todos los numeros son iguales");
}
else if (numb1 == numb2 && numb1 < numb3) {
    console.log("el tercer numero es mayor");
}
else if (numb2 == numb3 && numb2 < numb1) {
    console.log("el primer numero es mayor");
}
else if (numb3 == numb1 && numb3 < numb2) {
    console.log("el segundo numero es mayor");
}
else if (numb1 == numb2 && numb1 > numb3) {
    console.log("el primer y el segundo nro son mayores");
}
else if (numb2 == numb3 && numb2 > numb1) {
    console.log("el segundo y tercer nro son mayores");
}
else if (numb3 == numb1 && numb3 > numb2) {
    console.log("el primer y tercer numero son mayores");
}
else {
    console.log("el tercer numero es mayor: ");
}
