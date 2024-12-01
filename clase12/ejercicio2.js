const prompt = require("prompt-sync")({ sigint: true });
let dia = prompt("Indicame el dia:");
switch (dia) {
    case "lunes":
        console.log("tenes clases.");
        break;
    case "miercoles":
        console.log("tenes clases.");
        break;
    case "viernes":
        console.log("tenes clases.");
        break;
    case "martes":
            console.log("no tenes clases.");
            break;
    case "jueves":
            console.log("no tenes clases.");
            break;
    case "sabado":
            console.log("no tenes clases.");
    case "domingo":
            console.log("no tenes clases");
            
    default:
        console.log("dia invalido");

        
                



}