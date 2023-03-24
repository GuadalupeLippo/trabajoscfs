import *as rls from "readline-sync"
let numb1 : number = rls.questionInt("Ingrese un numero: ");
let numb2 : number = rls.questionInt ("ingrese un segundo numero: ");
let numb3 : number = rls.questionInt("Ingrese un tercer numero: ");

if (numb1 > numb2 && numb1>numb3) {console.log("el primer numero es mayor");
} else if
 (numb2 > numb1 && numb2>numb3) {console.log("el segundo numero es mayor: ");
}  else if
 (numb1== numb2  && numb2 == numb3) {console.log("todos los numeros son iguales");
} else if (numb1==numb2 && numb1<numb3) {console.log("el tercer numero es mayor")}
else if (numb2==numb3 && numb2<numb1) {console.log("el primer numero es mayor");
} else if(numb3==numb1 && numb3<numb2) {console.log("el segundo numero es mayor");
}
else if (numb1==numb2 && numb1>numb3) {console.log("el primer y el segundo nro son mayores")}
else if (numb2==numb3 && numb2>numb1) {console.log("el segundo y tercer nro son mayores");}
else if(numb3==numb1 && numb3>numb2) {console.log("el primer y tercer numero son mayores");
}
else {console.log("el tercer numero es mayor: ");}