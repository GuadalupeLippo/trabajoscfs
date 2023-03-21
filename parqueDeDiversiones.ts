import *as rls from "readline-sync"

let alturaDeLaPersona : number = rls.questionInt ("Por favor indique su altura expresada en cm: ");

if (alturaDeLaPersona >= 130) {console.log("Usted tiene la altura apta para subir a la montaña rusa", alturaDeLaPersona);
}
else (console.log("Lo sentimos, usted no tiene la altura adecuada para subir a la montaña rusa")
);