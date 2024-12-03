const prompt = require("prompt-sync")({ sigint: true });

let notas = [];
let numeroDeEstudiantes = parseInt(prompt("Ingresa un número de Estudiante: "));

for (let i = 0; i < numeroDeEstudiantes; i++){
    let nota = parseFloat(prompt(`Ingresa la calificacion del estudiante: ${i+1}:`))
if (!isNaN(nota)) {
    notas.push(nota)
}else{
    console.log("la nota ingresada no es valida. Se ingresara 0 por default.");
    notas.push(0)
}
console.log("Las notas ingresadas hasta el momento son:" + notas )

}
