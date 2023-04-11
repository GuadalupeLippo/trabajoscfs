"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var nro = rls.questionFloat("ingrese un numero:");
var nroMax = 0;
var nroMin = 0;
while (nro != 0) {
    nro = rls.questionFloat("ingrese un numero:");
    if (nroMax < nro)
        nroMax = nro;
    if (nroMin > nro)
        nroMin = nro;
    if (nro !== 0) {
        var suma = nro;
        var cantTotal = nro + 1;
        var promedio = suma / cantTotal;
        console.log("".concat(nroMax, " es el mayor, ").concat(nroMin, " es el menor y el promedio de todos los numeros ingresados es ").concat(promedio));
    }
}
