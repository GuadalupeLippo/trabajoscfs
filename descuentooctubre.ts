import *as rls from "readline-sync"
let mes : string = rls.question("ingrese el mes actual: ");
let mesDescuento : string = "octubre";
let precioUnitario : number = rls.questionFloat("precio del producto:$");
let cantidadProducto : number = rls.questionInt ("cantidad del producto: ");
let subtotal : number = (cantidadProducto*precioUnitario);
let valorDescuento: number = (subtotal* 0.15);
let precioFinal : number= (subtotal-valorDescuento)

if (mes == mesDescuento) {console.log("Por ser nuestro mes de aniversario su compra tiene un descuento de:$",valorDescuento, "\n su precio final es de:" ,precioFinal);
} else {console.log("su compra es de:$ ", subtotal);
}
