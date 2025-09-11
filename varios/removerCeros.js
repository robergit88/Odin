// Escribir una función llamada removerCeros que reciba un arreglo de números
// y retorne un nuevo arreglo excluyendo los ceros (0).

function removerCeros(array) {
  console.log(`Antes de remover ceros: [${array}]`);
  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      resultado.push(array[i]);
    }
  }
  return resultado;
}

// código de prueba
console.log(removerCeros([0, 1, 0, 2, 0, 3])); // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])); // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])); // []
