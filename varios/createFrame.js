// Reto #2: Enmarcando nombres
//
// Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
// Cada nombre debe estar en una línea, alineado a la izquierda.
// El marco está construido con * y tiene un borde de una línea de ancho.
// La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.

function createFrame(nombres) {
  let maxLength = 0;

  numberArray = nombres.map((nombre) => nombre.length);
  numberArray.sort((a, b) => b - a);
  maxLength = numberArray[0];

  console.log("*".repeat(maxLength + 4));

  for (let i = 0; i < nombres.length; i++) {
    console.log(
      "* " + nombres[i] + " ".repeat(maxLength - nombres[i].length) + " *"
    );
  }

  console.log("*".repeat(maxLength + 4));
}

// createFrame(["midu", "madeval", "educalvolpz"]);
// createFrame(["a", "bb", "ccc"]);
createFrame(["midu"]);
