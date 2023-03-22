"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var precioFinal = 0;
var precioProductoUno = 200;
var precioProductoDos = 350;
var cantidadProductoUno = rls.questionInt("Cantidad de producto 1 que compro el cliente: ");
var cantidadProductoDos = rls.questionInt("Cantidad de producto 2 que compro el cliente: ");
var subtotal = 0;
var valorDescuento = 0;
subtotal = (cantidadProductoUno * precioProductoUno) + (cantidadProductoDos * precioProductoDos);
valorDescuento = (subtotal * 0.1);
precioFinal = (subtotal - valorDescuento);
if (subtotal > 1000) {
    console.log("Cantidad de producto 1: ", cantidadProductoUno, "\n cantidad de producto 2: ", cantidadProductoDos, "\n el subtotal es: ", subtotal, "\n ahorras: $", valorDescuento, "\n Tu precio final es de: ", precioFinal);
}
else {
    console.log("gracias por confiar en nosotros su gasto es de: ", subtotal);
}
