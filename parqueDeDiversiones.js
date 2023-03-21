"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var alturaDeLaPersona = rls.questionInt("Por favor indique su altura expresada en cm: ");
if (alturaDeLaPersona >= 130) {
    console.log("Usted tiene la altura adecuada para subir a la montaña rusa", alturaDeLaPersona);
}
else
    (console.log("Lo sentimos, usted no tiene la altura adecuada para subir a la montaña rusa"));
