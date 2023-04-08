import *as rls from "readline-sync"
let num1: number = rls.questionInt("ingrese un numero: ");
let num2: number = rls.questionInt("ingrese otro numero: ");
let resultado : number = 0;

for(let contador: number = num1; contador<=num2;contador++) {
    resultado= resultado+contador;
}
console.log("la suma entre los numeros es: ",resultado);



    
