"use strict";
exports.__esModule = true;
/*Realizar un algoritmo que dado un
número entero ingresado por el
usuario, visualice en pantalla si es
par o impar
• En el caso de ingresar un cero, se
debe volver a pedir el número por
teclado (hasta que se ingrese un
número mayor que cero)*/
var rls = require("readline-sync");
var inputName = 0;
while (inputName <= 0) {
    inputName = rls.questionInt("ingrese un numero mayor a cero: ");
}
if (inputName % 2 === 0) {
    console.log("el numero es par");
}
else {
    console.log("el numero es impar");
}
