"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var mes = rls.question("ingrese el mes actual: ");
var mesDescuento = "octubre";
var precioUnitario = rls.questionFloat("precio del producto:$");
var cantidadProducto = rls.questionInt("cantidad del producto: ");
var subtotal = (cantidadProducto * precioUnitario);
var valorDescuento = (subtotal * 0.15);
var precioFinal = (subtotal - valorDescuento);
if (mes == mesDescuento) {
    console.log("¡Usted obtiene descuento por ser nuestro mes de aniversario!", "\n su compra final es de:", precioFinal);
}
else {
    console.log("su compra es de:$ ", subtotal);
}
