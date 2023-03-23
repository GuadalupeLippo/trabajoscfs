"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var nombreDeUsuario = rls.question("ingrese su nombre de usuario: ");
var contrasena = rls.question("Ingrese contrasena: ");
var usuarioCorrecto = "Juan";
var contrasenaCorrecta = "claveJuan";
if (nombreDeUsuario == usuarioCorrecto && contrasena == contrasenaCorrecta) {
    console.log("Bienvenido Juan, usted puede ingresar");
}
else {
    console.log("Usted no es Juan, no puede ingresar");
}
