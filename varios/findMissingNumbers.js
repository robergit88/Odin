// Reto #23: 🔢 Encuentra los números perdidos

// Los elfos están trabajando en un sistema para verificar las listas de regalos de los niños 👧👦.
// Sin embargo, ¡algunas listas están incompletas y faltan números!

// Tu tarea es escribir una función que, dado un array de números,
// encuentre todos los números que faltan entre 1 y n (donde n es el tamaño del array o
//  el número más alto del array).

// Eso sí, ten en cuenta que:

// Los números pueden aparecer más de una vez y otros pueden faltar
// El array siempre contiene números enteros positivos
// Siempre se empieza a contar desde el 1
/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  if (typeof nums != "object") {
    throw new Error("el parámetros debe ser de tipo Array");
  }
  nums.some(noCumple);

  let missing = [];
  let tempNums = Array.from(new Set(nums)).sort();

  let fin = tempNums[tempNums.length - 1];
  for (let i = 0; i < fin; i++) {
    if (tempNums.includes(i)) {
    } else {
      missing.push(i);
    }
  }
  //quitamos el 0 que nunca estará contenido en el rango
  missing.shift();
  console.log(nums);
  console.log(tempNums);
  console.log(missing);
}

function noCumple(item) {
  let tipo = typeof item;

  if (tipo != "number") {
    let cadena = `${item} es tipo ${tipo} diferente a tipo número`;

    throw new Error(cadena);
  }
  if (item < 0) {
    throw new Error(`${item} debe ser mayor a cero`);
  }
}
findMissingNumbers([1, 2, 4, 6]);
// // [3, 5]

// findMissingNumbers([4, 8, 7, 2]);
// // [1, 3, 5, 6]

// findMissingNumbers([3, 2, 1, 1]);
// // []

// findMissingNumbers([5, 5, 5, 3, 3, 2, 1]);
// // [4]
// findMissingNumbers(1);

// findMissingNumbers([3, 2, 1, 1, "hola"]);
// findMissingNumbers([-3, 2, 1, 1]);
