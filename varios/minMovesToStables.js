// Reto #14: Acomodando los renos
//
// Hay que mover cada reno, desde su posición actual, hasta un establo.
// Pero hay que tener en cuenta que sólo puede haber un reno por establo.

// Tu tarea es calcular el mínimo número de movimientos necesarios
// para que todos los renos acaben en un establo.

// Nota: Ten en cuenta que el array de establos
// siempre tendrá el mismo tamaño que el array de renos y
// que siempre los establos serán únicos.

function minMovesToStables(reindeer, stables) {
  //Ordenamiento ASCENDENTE
  reindeer.sort((a, b) => a - b);
  stables.sort((a, b) => a - b);

  let total = 0;

  for (let i = 0; i < reindeer.length; i++) {
    total = total + Math.abs(reindeer[i] - stables[i]);
  }

  console.log(total);
}

minMovesToStables([2, 6, 9], [3, 8, 5]); // -> 3
// minMovesToStables([1, 1, 3], [1, 8, 4]); // -> 8
