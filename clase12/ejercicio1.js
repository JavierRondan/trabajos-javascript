const prompt = require("prompt-sync")({ sigint: true });

let dia = "jueves";

switch (dia) {
    case "lunes" :
        console.log("Hoy es lunes, empieza la semana con energia.");
        break;
    case "martes" :
        console.log("Hoy es marte, sigue adelante.");
        break;
    case "miercoles" :
        console.log("Hoy es miercoles, mitad de semana.");
        break;
    case "jueves" :
        console.log("Hoy es jueves, casi es viernes.");
        break;
    case "viernes":
        console.log("Hoy es viernes, el fin de semana esta cerca.");
        break
    case "sabado" :
        console.log("Hoy es sabado, disfruta tu dia.");
        break;
    case "domingo" :
        console.log("Hoy es domingo, dia de descanso.");
        break;
    default :
        console.log("Dia no valido.");
        
        
        
        
        
    

}