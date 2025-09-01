// Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
// Cada nombre debe estar en una línea, alineado a la izquierda.
// El marco está construido con * y tiene un borde de una línea de ancho.
// La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.

function createFrame(nombres) {

    // const maxLength = Math.max(...nombres.map(nombre => nombre.length));
    let maxLength = 0;
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i].length >= maxLength) {
            maxLength = nombres[i].length;
        }
    }
    return maxLength;

}
console.log(createFrame(['midu', 'madeval', 'educalvolpz']));

// createFrame(['midu', 'madeval', 'educalvolpz'])