const prompt = require("prompt-sync")({ sigint: true });

let valorDePelicula = prompt("Que te parecio la pelicula?: ");//*Le pedimos al usuario que nos diga que le parecio la pelicula
switch (valorDePelicula) {
    case "Muy mala":
        console.log("Calificaste la pelicula como Muy mala. Lo sentimos mucho.");
         break;
    case "Mala":
        console.log("Calificaste la pelicula como Mala. Lo sentimos mucho.");
        break;
    case "Mediocre":
        console.log("Calificaste la pelicula como Mediocre. Lo sentimos mucho.");
        break;
    case "Buena":
        console.log("Calificaste la pelicula como Buena. Nos alegra que te haya gustado.");
        break;
    case "Muy buena":
        console.log("Calificaste la pelicula como Muy buena. Nos alegra que te haya gustado.");
        break;
        
    default:
        console.log("Ingresaste un valor invalido");
    
}
let mensajeDespedida=("Gracias por visitarnos.")//* Al final de cada calificacion sale un mensaje de agradecimiento al usuario
console.log(mensajeDespedida);
