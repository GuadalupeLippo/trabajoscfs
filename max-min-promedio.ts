import *as rls from "readline-sync"
let nro: number =rls.questionFloat("ingrese un numero:")
let nroMax :number = 0
let nroMin : number = 0

while(nro!=0) {
    nro =rls.questionFloat("ingrese un numero:");
    if (nroMax<nro) nroMax=nro
    if (nroMin>nro) nroMin=nro
    if (nro !==0){
        let suma: number = nro;
        let cantTotal : number = nro+1
        let promedio : number= suma/cantTotal
    console.log(`${nroMax} es el mayor, ${nroMin} es el menor y el promedio de todos los numeros ingresados es ${promedio}`);}
    
}