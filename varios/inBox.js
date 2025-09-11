// La caja tiene un regalo (*) y cuenta como dentro de la caja si:
// Está rodeada por # en los bordes de la caja.
// El * no está en los bordes de la caja.

function inBox(box) {
  if (box.join().indexOf("*") < 0) {
    return console.log(false);
  }

  for (let i = 0; i < box.length; i++) {
    let element = box[i];

    let pos = element.indexOf("*");

    if (pos > 0) {
      // if (element.charAt(0) == "#" &&
      if (element.startsWith("#") && element.endsWith("#")) {
        console.log(true);
      } else {
        console.log(false);
      }

      break;
    }
  }
}

// inBox([
//     "###",
//     "#*#",
//     "###"
// ])

// inBox([
//     "####",
//     "#* #",
//     "#  #",
//     "####"
// ]) // ➞ true

inBox(["#####", "#   #", "#  #*", "#####"]); // ➞ false

// inBox([
//     "#####",
//     "#   #",
//     "#   #",
//     "#   #",
//     "#####"
// ]) // ➞ false
