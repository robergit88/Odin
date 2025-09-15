// Reto #7: El ataque del grinch
//
// Recibirás un string que contiene letras y paréntesis.
// Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
// Si hay paréntesis anidados, resuelve primero los más internos.
// Devuelve el string resultante con los paréntesis eliminados,
// pero con el contenido volteado correctamente.

function fixPackages(packages) {
  // Caso base: si no hay paréntesis, retornamos el string
  let fin = packages.indexOf(")");

  if (fin === -1) {
    console.log("Salida final: ", packages);
    return packages;
  }

  // Encontrar el paréntesis de apertura correspondiente
  let ini = fin - 1;
  while (ini >= 0 && packages[ini] !== "(") {
    ini -= 1;
  }

  // Extraer el contenido entre paréntesis
  let word = [];
  for (let index = ini + 1; index < fin; index++) {
    const element = packages[index];
    word.push(element);
  }

  // Crear el patrón original y el reemplazo invertido
  let pa = "(" + word.join("") + ")";
  let pe = word.reverse().join("");

  // Reemplazar en el string
  let resultado = packages.replace(pa, pe);
  console.log("Salida parcial: ", resultado);

  // Llamada recursiva con el resultado modificado
  return fixPackages(resultado);
}

// fixPackages('a(cb)de')
fixPackages("a(bc(def)g)h");
// fixPackages('abc(def(gh)i)jk')
// fixPackages('a(b(c))e')
