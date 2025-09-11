// La función recibe un array de strings.
// Retornar un nuevo array con los elementos que terminan en "s".
function endsWith(array) {
  const letter = array[array.length - 1];
  return letter === "s";
}

function terminanConS(array) {
  const newArray = [];

  return array.filter((element) => element.endsWith("s"));
}

console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])); // ["pruebas", "tokens"]
// console.log(terminanConS(["beta", "delta", "gama"])) // []
// console.log(terminanConS([])) // []
