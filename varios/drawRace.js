// Reto #8: La carrera de renos
//
// Tu tarea es mostrar el progreso de cada reno en una pista de nieve en formato isométrico.

function drawRace(indices, length) {
  // Code here
  if (length == 0) {
    return "";
  } else {
    console.log("/*");
    let renos = indices.length;

    for (let i = 0; i < indices.length; i++) {
      let cad = "";

      j = indices[i];

      if (j == 0) {
        cad = "~".repeat(length);
      } else {
        if (j > 0) {
          cad = "~".repeat(j).concat("r");
          let resto = "~".repeat(length - cad.length);
          cad = cad.concat(resto);
        } else {
          cad = "~".repeat(length - Math.abs(j)).concat("r");
          let resto2 = "~".repeat(length - cad.length);
          cad = cad.concat(resto2);
        }
      }

      cad = cad.concat(" /", i + 1);
      let space = " ".repeat(renos - i);
      cad = space + cad;

      console.log(cad);
    }
    console.log("*/");
  }
}

drawRace([0, 5, -3], 10);
// drawRace([2, -1, 0, 5], 8);
// drawRace([3, 7, -2], 12)
