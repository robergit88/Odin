// Reto #20: Encuentra los regalos faltantes y duplicados
//
// Santa Claus 🎅 está revisando la lista de regalos que debe entregar esta Navidad.
// Sin embargo, algunos regalos faltan, otros están duplicados, y algunos tienen cantidades incorrectas.
// Necesita tu ayuda para resolver el problema.
//
// Recibirás dos arrays:
// received: regalos que TIENE.
// expected: regalos que DEBERÍA tener.
// Tu tarea es escribir una función que, dado received y expected, devuelva un objeto con dos propiedades:
// missing: Un objeto donde las claves son los nombres de los regalos faltantes y los valores son las cantidades que faltan.
// extra: Un objeto donde las claves son los nombres de los regalos extra o duplicados y
// los valores son las cantidades que sobran.
//
// Ten en cuenta que:
// Los regalos pueden repetirse en ambas listas.
// Las listas de regalos están desordenadas.
// Si no hay regalos que falten o sobren, las propiedades correspondientes (missing o extra) deben ser objetos vacíos.

function fixGiftList(received, expected) {
  let objReturn = {
    missing: {},
    extra: {},
  };

  // MISSING: mirar lista EXPECTED, clasificar y contar luego comparar contra RECEIVED
  // Identificar juguetes únicos de EXPECTED
  let setExpected = new Set();
  expected.forEach((item) => {
    setExpected.add(item);
  });

  let countExpected = [];
  let obj = {};
  setExpected.forEach((element) => {
    obj[element] = contar(element, expected);
    countExpected.push(obj);
    obj = {};
  });

  let countReceived = [];
  let setReceived = new Set();
  received.forEach((item) => {
    setReceived.add(item);
  });

  setReceived.forEach((element) => {
    obj[element] = contar(element, received);
    countReceived.push(obj);
    obj = {};
  });

  //SE calcula MISSING
  countExpected.forEach((el) => {
    let pos = countReceived.findIndex((item) => item == el);

    if (pos == -1) {
      objReturn.missing = el;
      // objReturn.missing.push(el);
      // objReturn.missing.add(el);
    }
  });

  console.log(objReturn);
}

function contar(element, arreglo) {
  let total = 0;
  for (let index = 0; index < arreglo.length; index++) {
    const valPos = arreglo[index];
    if (element == valPos) {
      total += 1;
    }
  }

  return total;
}
fixGiftList(
  ["puzzle", "car", "doll", "car"], //RECEIVED - TENGO
  ["car", "puzzle", "doll", "ball"] //EXPECTED - DEBERIA
);
// // Devuelve:
// // {
// //   missing: { ball: 1 },
// //   extra: { car: 1 }
// // }

// fixGiftList(
//   ['book', 'train', 'kite', 'train'],
//   ['train', 'book', 'kite', 'ball', 'kite']
// )
// // Devuelve:
// // {
// //   missing: { ball: 1, kite: 1 },
// //   extra: { train: 1 }
// // }

// fixGiftList(
//   ['bear', 'bear', 'car'],
//   ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
// )
// // Devuelve:
// // {
// //   missing: { puzzle: 1, car: 2 },
// //   extra: {}
// // }

// fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
// // Devuelve:
// // {
// //   missing: {},
// //   extra: {}
// // }
