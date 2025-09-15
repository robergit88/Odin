// Reto #5: Emparejando botas
//

// debes devolver una lista con los aux disponibles después de emparejar las botas
const shoes = [
  { type: "I", size: 38 },
  { type: "R", size: 42 },
  { type: "R", size: 38 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];
// [38, 42]

// const shoes = [
//     { type: 'I', size: 38 },
//     { type: 'R', size: 38 },
//     { type: 'I', size: 38 },
//     { type: 'I', size: 38 },
//     { type: 'R', size: 38 }
// ]
// // [38, 38]

function organizeShoes(shoes) {
  let aux = [];

  for (let i = 0; i < shoes.length; i++) {
    let caja = {};

    caja.size = shoes[i].size;
    caja.type = shoes[i].type;
    caja.completo = false;

    let item = aux.findIndex(
      (item) => item.size == shoes[i].size && item.completo == false
    );

    if (item >= 0) {
      aux[item].type = aux[item].type + shoes[i].type;

      if (aux[item].type == "IR" || "RI") {
        aux[item].completo = true;
      } else {
        // se añade la caja de zapatos al array
        aux.push(caja);
      }
    } else {
      // se añade la caja de zapatos al array
      aux.push(caja);
    }
  }

  let pares = aux.filter((a) => a.completo == true).map((a) => a.size);

  console.log(pares);
}

organizeShoes(shoes);
