import *as rls from "readline-sync"
let sueldo : number = 0;
sueldo = rls.questionFloat ("ingrese su sueldo actual:$ ");
let sueldoCon20Aum : number = sueldo *0.2;
let sueldoCon10Aum : number = sueldo *0.1;
let sueldoCon5Aum : number = sueldo *0.05;
let sueldoFinalcon20aum : number = (sueldo + sueldoCon20Aum);
let sueldoFinalcon10aum : number = (sueldo + sueldoCon10Aum);
let sueldoFinalcon5aum : number = (sueldo + sueldoCon5Aum);


if (sueldo <= 15000) {
    console.log("usted tiene un aumento de:$",sueldoCon20Aum, "\n Su sueldo neto es de: $",sueldoFinalcon20aum );
} 
else 
    if (sueldo>15000 && sueldo<=20000) {
    console.log("usted tiene un aumento de:$",sueldoCon10Aum, "\n Su sueldo neto es de:$", sueldoFinalcon10aum );}
else 
    if (sueldo>20000 && sueldo<=25000) {
    console.log("usted tiene un aumento de:$",sueldoCon5Aum, "\n Su sueldo neto es de:$", sueldoFinalcon5aum);
} else {
    console.log("su sueldo neto es de:$", sueldo);
}