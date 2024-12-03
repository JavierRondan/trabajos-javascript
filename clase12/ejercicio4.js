const prompt = require("prompt-sync")({ sigint: true });

let x = parseInt(prompt("Ingresa un número X: "));// El usuario debe ingresar un numero.

let contadorImpares = 0;// Inicializar un contador para los números impares

// Usar un ciclo for para recorrer desde 0 hasta X (inclusive)
for (let numero = 0; numero <= x; numero++) {
  // Verificar si el número es impar
  if (numero % 2 !== 0) {
    // Incrementar el contador si el número es impar
    contadorImpares++;
  }
}



console.log(`La cantidad de números impares desde 0 hasta ${x} (inclusive) es: ${contadorImpares}`);// Imprimir el resultado
