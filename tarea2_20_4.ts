/*
Almacene en un arreglo de tamaño N los números ingresados por el usuario.
La dimensión N también es ingresada por el usuario.
Muestre los números del arreglo pero del último al primero.
*/

import *as rls from "readline-sync"
const dim: number=rls.questionInt("Dimencion del vector:");
let numsArr: number[]= new Array(dim);

for(let i:number=0; i<numsArr.length; i++){
    numsArr[i]= rls.questionInt("denme un numero para la dimencion:")
}
for(let i:number= numsArr.length-1; i>=0; i--) {
console.log(numsArr[i]);

}
