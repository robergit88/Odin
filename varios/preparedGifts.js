// Reto #1: 🎁 ¡Primer regalo repetido!
//
// Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁,
// pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones.
// Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

// Tu tarea es escribir una función que reciba una lista de números enteros
// (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados,
// ordenada en orden ascendente.

function preparedGifts(gifts) {
  console.log(`Antes del cambio: [${gifts}]`);
  let bag = new Set(gifts);

  return (bag = Array.from(bag).sort((a, b) => a - b));
}

// const pedo = [3, 1, 2, 3, 4, 2, 5]
// const algo = preparedGifts(pedo)
// console.log(algo) // [1, 2, 3, 4, 5]
console.log(preparedGifts([3, 1, 2, 3, 4, 2, 5])); // [1, 2, 3, 4, 5]
