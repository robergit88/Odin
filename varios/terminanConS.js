// La función recibe un array de strings.
// Retornar un nuevo array con los elementos que terminan en "s".
function endsWith(array) {
    const letter = array[array.length - 1];
    return letter === "s";
}

function terminanConS(array) {

    const newArray = [];
    // for (let i = 0; i < array.length; i++) {

    //     const lastLetter = array[i].charAt(array[i].length - 1);
    //     if (lastLetter === "s") {
    //         newArray.push(array[i]);
    //     }

    // }
    // return newArray;

    // newArray = array.filter((element) => element.endsWith("s"));
    // newArray = array.filter((element) => element[element.lengths - 1] === "s");
    return array.filter((element) => element.endsWith("s"));
}

// console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
// console.log(terminanConS([])) // []
