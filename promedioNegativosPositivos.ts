import *as rls from "readline-sync"
let valor, numPositivos: number = 0
let numNegativos : number = 0

while (valor!=0) {
    valor = rls.questionInt ("ingrese un numero:")
    if (valor>numPositivos) {
        numPositivos= numPositivos+1
    } if (valor<numNegativos) {
        numNegativos=numNegativos+1
    } if (valor==0) {
        let suma : number = numNegativos + numPositivos;
        let porcentaje : number = (numPositivos*100)/suma;
        console.log(`${numPositivos},son mayores a 0 y el ${porcentaje}% son numeros positivos.`);
        
    }
}
