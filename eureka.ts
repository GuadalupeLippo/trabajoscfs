import *as rls from "readline-sync"

let clave: string = rls.question("ingrese la clave: ");
const claveCorrecta : string = "eureka";
let contador : number = 1

while ((contador <=2 && clave!=claveCorrecta))
{ console.log("usted no puede ingresar");
contador= contador+1
clave= rls.question("ingrese nuevamente su clave:");
if (contador>2 && clave!=claveCorrecta) {
    console.log("SE ACABARON LOS INTENTOS");}
}
 if (clave==claveCorrecta)
  console.log("usted puede ingresar");




