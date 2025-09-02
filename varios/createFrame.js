// Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
// Cada nombre debe estar en una línea, alineado a la izquierda.
// El marco está construido con * y tiene un borde de una línea de ancho.
// La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.

function createFrame(nombres) {

    let maxLength = 0;

    numberArray = nombres.map(nombre => nombre.length);
    numberArray.sort((a, b) => b - a);
    maxLength = numberArray[0];

    // const maxLength = Math.max(...nombres.map(nombre => nombre.length));

    // const maxLength = nombres.map(nombre => nombre.length).reduce((a, b) => a > b ? a : b, 0);

    // for (let i = 0; i < nombres.length; i++) {
    //     if (nombres[i].length >= maxLength) {
    //         maxLength = nombres[i].length;
    //     }
    // }

    // nombres.forEach(nombre => {
    //     if (nombre.length >= maxLength) {
    //         maxLength = nombre.length;
    //     }
    // });

    // for (const nombre of nombres) {
    //     if (nombre.length >= maxLength) {
    //         maxLength = nombre.length;
    //     }
    // }
    // return maxLength;

    //----------------------------------------------
    // for (let i = 0; i < nombres.length; i++) {
    //     if (i === 0) {
    //         console.log('*'.repeat(maxLength + 2));
    //     }

    //     console.log('*' + nombres[i] + ' '.repeat(maxLength - nombres[i].length) + '*');

    //     if (i === nombres.length - 1) {
    //         console.log('*'.repeat(maxLength + 2));
    //     }

    // }
    //----------------------------------------------

    console.log('*'.repeat(maxLength + 4));

    for (let i = 0; i < nombres.length; i++) {
        console.log('* ' + nombres[i] + ' '.repeat(maxLength - nombres[i].length ) + ' *');
    }

    console.log('*'.repeat(maxLength + 4));

}

createFrame(['midu', 'madeval', 'educalvolpz']);
// createFrame(['a', 'bb', 'ccc'])
// createFrame(['midu'])