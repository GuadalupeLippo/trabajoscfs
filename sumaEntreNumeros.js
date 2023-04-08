"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var num1 = rls.questionInt("ingrese un numero: ");
var num2 = rls.questionInt("ingrese otro numero: ");
var resultado = 0;
for (var contador = num1; contador <= num2; contador++) {
    resultado = resultado + contador;
}
console.log("la suma entre los numeros es: ", resultado);
