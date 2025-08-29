
function numeroDeCaracteres(cadena, caracter) {
    // escribe tu código acá
    let contador = 0;
    let caracterMinuscula = caracter.toLowerCase();
    let caracterMayuscula = caracter.toUpperCase();
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracterMinuscula || cadena[i] === caracterMayuscula) {
            contador++;
        }
    }
    return contador;
}

// escribe tu respuesta acá

// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4