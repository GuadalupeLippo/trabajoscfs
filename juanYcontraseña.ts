import *as rls from "readline-sync"

let nombreDeUsuario : string = rls.question("ingrese su nombre de usuario: ")
let contrasena: string = rls.question("Ingrese contrasena: ")
const usuarioCorrecto: string = "Juan"
const contrasenaCorrecta : string = "claveJuan"

 if(nombreDeUsuario == usuarioCorrecto  && contrasena== contrasenaCorrecta) {console.log("Bienvenido Juan, usted puede ingresar")}
 else {console.log("Usted no es Juan, no puede ingresar");
 } 

