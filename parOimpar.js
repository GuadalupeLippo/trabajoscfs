"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var nro = rls.questionInt("Ingrese un numero:");
if (nro == 0) {
    console.log("el numero es cero");
}
else if (nro % 2 == 0) {
    console.log("El numero", nro, "es par");
}
else {
    console.log("el numero", nro, "es impar");
}
