// La función recibe un arreglo de strings.
// Debe devolver un nuevo arreglo que solo incluya los elementos que comienzan con la letra "a".
// Ej: Recibe ---> ["ana", "santi", "anita", "juan", "avion", "julian", "alberto"]
//     Devuelve ---> ["ana", "anita", "avion", "alberto"]
// Tu código:
//    const nuevoArray = array.filter(function(elemento){
//       return elemento.charAt(0) === 'a' || elemento.charAt(0) === 'A';
//    });

function empiezanConA(array) {
  //    const nuevoArray = array.filter(elemento => elemento.charAt(0).toLowerCase() === 'a');
  const nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    const pedo = array[i].toLowerCase();
    if (pedo.charAt(0) === "a") {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
}

console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"]));
