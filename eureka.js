"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var clave = rls.question("ingrese la clave: ");
var claveCorrecta = "eureka";
var contador = 1;
while ((contador <= 2 && clave != claveCorrecta)) {
    console.log("usted no puede ingresar");
    contador = contador + 1;
    clave = rls.question("ingrese su nuevamente su clave:");
    if (contador > 2 && clave != claveCorrecta) {
        console.log("SE ACABARON LOS INTENTOS");
    }
}
if (clave == claveCorrecta)
    console.log("usted puede ingresar");
