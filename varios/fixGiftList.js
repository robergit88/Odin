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
  let countExpected = [];
  countExpected = contabilizar(expected);

  let countReceived = [];
  countReceived = contabilizar(received);

  //Se calcula MISSING
  let falta = [];
  countExpected.forEach((el) => {
    //Se obtiene la primera propiedad del objeto
    const propertyName = Object.keys(el)[0];

    let pos = countReceived.findIndex((item) =>
      Object.keys(item).includes(propertyName)
    );

    if (pos == -1) {
      falta.push(el);
    } else {
      let diff = el[propertyName] - countReceived[pos][propertyName];

      if (diff > 0) {
        let obj = {};
        obj[propertyName] = diff;
        falta.push(obj);
      }
    }
  });

  let objReturn = {
    missing: {},
    extra: {},
  };

  falta.forEach((objeto) => {
    Object.assign(objReturn.missing, objeto);
  });

  //Se calcula EXTRA
  let extra = [];
  countReceived.forEach((elem) => {
    const propertyName = Object.keys(elem)[0];

    let pos = countExpected.findIndex((item) =>
      Object.keys(item).includes(propertyName)
    );

    if (pos != -1) {
      let diff = elem[propertyName] - countExpected[pos][propertyName];
      if (diff > 0) {
        let obj = {};
        obj[propertyName] = diff;
        extra.push(obj);
        obj = {};
      }
    }
  });

  extra.forEach((objeto) => {
    Object.assign(objReturn.extra, objeto);
  });

  console.log(JSON.stringify(objReturn, null, 2));
}

/*
 * -------------------------------------------------------------------------
 */
// fixGiftList(
//   ["puzzle", "car", "doll", "car"], //RECEIVED - TENGO
//   ["car", "puzzle", "doll", "ball"] //EXPECTED - DEBERIA
// );
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

fixGiftList(
  ["book", "train", "kite", "train"],
  ["train", "book", "kite", "ball", "kite"]
);
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

// fixGiftList(
//   ["bear", "bear", "car"],
//   ["bear", "car", "puzzle", "bear", "car", "car"]
// );
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

// fixGiftList(["bear", "bear", "car"], ["car", "bear", "bear"]);
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }

/*
 * -------------------------------------------------------------------------
 * function contabilizar
 * -------------------------------------------------------------------------
 */
function contabilizar(listaRegalos) {
  let unSet = new Set();
  listaRegalos.forEach((item) => {
    unSet.add(item);
  });

  let contados = [];
  let obj = {};
  unSet.forEach((el) => {
    obj[el] = contar(el, listaRegalos);
    contados.push(obj);
    obj = {};
  });

  return contados;
}

/*
 * -------------------------------------------------------------------------
 * function contar
 * -------------------------------------------------------------------------
 */
function contar(element, arreglo) {
  let total = 0;
  for (let index = 0; index < arreglo.length; index++) {
    if (element == arreglo[index]) {
      total += 1;
    }
  }

  return total;
}
