"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var valor, numPositivos = 0;
var numNegativos = 0;
while (valor != 0) {
    valor = rls.questionInt("ingrese un numero:");
    if (valor > numPositivos) {
        numPositivos = numPositivos + 1;
    }
    if (valor < numNegativos) {
        numNegativos = numNegativos + 1;
    }
    if (valor == 0) {
        var suma = numNegativos + numPositivos;
        var porcentaje = (numPositivos * 100) / suma;
        console.log("".concat(numPositivos, ",son mayores a 0 y el ").concat(porcentaje, "% son numeros positivos."));
    }
}
