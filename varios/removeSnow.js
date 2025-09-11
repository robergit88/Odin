// eliminar todos los montículos de nieve adyacentes que sean iguales
// hasta que no queden más movimientos posibles.
function removeSnow(s) {
  console.log(s);
  let posRepe = -1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      posRepe = i;
      break;
    }
  }

  if (posRepe < 0) {
    return s;
  } else {
    let temp = new String();
    for (let i = 0; i < s.length; i++) {
      if (i != posRepe && i != posRepe + 1) {
        temp += s[i];
      }
    }

    removeSnow(temp);
  }
}

// removeSnow("zxxzoz"); // -> "oz"
// // 1. Eliminamos "xx", quedando "zzoz"
// // 2. Eliminamos "zz", quedando "oz"

removeSnow("abcdd"); // -> "abc"
// // 1. Eliminamos "dd", quedando "abc"

// removeSnow("zzz"); // -> "z"
// // 1. Eliminamos "zz", quedando "z"

// removeSnow("a"); // -> "a"
// // No hay montículos repetidos
