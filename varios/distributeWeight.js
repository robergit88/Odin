// Reto #19: 📦 Apila cajas mágicas
//
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
// distributeWeight(1);
// Devuelve:
//  _
// |_|

// distributeWeight(2);
// Devuelve:
//  ___
// |___|

// distributeWeight(3);
// Devuelve:
//  _
// |_|_
// |___|

// distributeWeight(4);
// Devuelve:
//  ___
// |___|
// |___|

// distributeWeight(5);
// Devuelve:
//  _____
// |     |
// |_____|

// distributeWeight(6);
// Devuelve:
//  _
// |_|___
// |     |
// |_____|
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
// Se obtienen las cajas en formato array
let cajaArray = Object.getOwnPropertyNames(boxRepresentations);
function distributeWeight(weight) {
  console.log(`Peso: ${weight}`);

  let lista = [];
  let cajas = combinar(weight, lista);
  cajas.sort((a, b) => a - b);
  pintar(cajas);
}

function combinar(peso, cajasUsadas = []) {
  // Caso base: peso es 0, ya encontramos la combinación
  if (peso === 0) {
    return cajasUsadas;
  }

  // Caso base: peso negativo, no hay solución
  if (peso < 0) {
    return null;
  }

  // Probar cada caja disponible
  for (let i = cajaArray.length - 1; i >= 0; i--) {
    const cajaActual = cajaArray[i];

    // Solo si la caja cabe en el peso restante
    if (cajaActual <= peso) {
      const resultado = combinar(peso - cajaActual, [
        ...cajasUsadas,
        cajaActual,
      ]);

      // Si encontramos una solución, la devolvemos
      if (resultado !== null) {
        return resultado;
      }
    }
  }
  // No se encontró solución
  return null;
}

function pintar(cajas) {
  //
  for (let i = 0; i < cajas.length; i++) {
    const element = cajas[i];
    let algo = boxRepresentations[element];

    for (let j = 0; j < algo.length; j++) {
      const el = algo[j];
      console.log(el);
    }
  }
}

// distributeWeight(1);
// distributeWeight(2);
// distributeWeight(3);
// distributeWeight(4);
// distributeWeight(5);
// distributeWeight(6);
// distributeWeight(7);
distributeWeight(8);
// distributeWeight(9);
// distributeWeight(10);
// distributeWeight(11);
