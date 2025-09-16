// const divmod = (x, y) => [Math.floor(x / y), x % y];
// // divmod(8, 3); // [2, 2]
// // divmod(3, 8); // [0, 3]
// // divmod(5, 5); // [1, 0]

// // console.log(divmod(8, 3));
// // console.log(divmod(3, 8));
// // console.log(divmod(5, 5));
// console.log(divmod(15, 5));

// function caja(peso, lista) {
//   lista = cajaArray.map((n) => ({ caja: n, diff: peso - n }));
//   lista = lista.filter((elem) => elem.diff >= 0);
//   if (lista.some((el) => el.diff === 0)) {
//     return lista;
//   } else {
//     let pedo = Math.min(...lista.map((obj) => obj.diff));
//     caja(pedo, lista);
//   }
// }

// ✅ MÉTODO BUENO: Un solo string, un solo console.log
function drawBoxesSingleConsole(width = 13) {
  const lines = [
    "//  " + "_".repeat(width),
    "// |" + " ".repeat(width) + "|",
    "// |" + "_".repeat(width) + "|", // Línea compartida (techo/piso pegados)
    "// |" + " ".repeat(width) + "|",
    "// |" + "_".repeat(width) + "|",
  ];

  const completePattern = lines.join("\n");
  console.log(completePattern);
  return completePattern; // Bonus: también devuelve el string
}

drawBoxesSingleConsole(2);
