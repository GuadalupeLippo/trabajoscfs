"use strict";
/*
Almacene en un arreglo de tamaño N los números ingresados por el usuario.
La dimensión N también es ingresada por el usuario.
Muestre los números del arreglo pero del último al primero.
*/
exports.__esModule = true;
var rls = require("readline-sync");
var dim = rls.questionInt("Dimencion del vector:");
var numsArr = new Array(dim);
for (var i = 0; i < numsArr.length; i++) {
    numsArr[i] = rls.questionInt("denme un numero para la dimencion:");
}
for (var i = numsArr.length - 1; i >= 0; i--) {
    console.log(numsArr[i]);
}
