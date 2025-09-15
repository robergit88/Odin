// Los regalos se pueden meter en 4 cajas distintas,
// donde cada caja soporta 1, 2, 5, 10 de peso y se representan así:
// 1: |_|
//     _____
// 2: |_____|
//     _____
// 5: |     |
//    |_____|
//      _________
// 10: |         |
//     |_________|
// La misión es que al recibir el peso de los regalos,
// uses las mínimas cajas posibles y que, además,
// las apiles de menos peso (arriba) a más peso (abajo).
// Siempre alineadas a la izquierda.
// Además, ten en cuenta que al apilarlas, se reusa el borde inferior de la caja.

// Representación en JavaScript:
const boxRepresentations = {
  1: [" _ ", "|_|"],
  2: [" ___ ", "|___|"],
  5: [" _____ ", "|     |", "|_____|"],
  10: [" _________ ", "|         |", "|_________|"],
};

/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
  //   console.log(boxRepresentations[weight][0]);
  //   console.log(boxRepresentations[weight][1]);
  //   console.log(boxRepresentations[weight][0]);
  //   console.log(boxRepresentations[weight][1]);
  //   console.log(boxRepresentations[weight][0]);
  //   console.log(boxRepresentations[weight][1]);
  //   console.log(boxRepresentations[weight][2]);
}

// distributeWeight(1);
// // Devuelve:
// //  _
// // |_|

// distributeWeight(2);
// // Devuelve:
// //  ___
// // |___|

// distributeWeight(3);
// // Devuelve:
// //  _
// // |_|_
// // |___|

// distributeWeight(4);
// // Devuelve:
// //  ___
// // |___|
// // |___|

// distributeWeight(5);
// // Devuelve:
// //  _____
// // |     |
// // |_____|

// distributeWeight(6);
// // Devuelve:
// //  _
// // |_|___
// // |     |
// // |_____|
