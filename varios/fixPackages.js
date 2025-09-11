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

  // // VERSION REDUCIDA

  // const closeIndex = packages.indexOf(')');

  // // Caso base: no hay más paréntesis
  // if (closeIndex === -1) return packages;

  // // Encontrar paréntesis de apertura correspondiente
  // let openIndex = closeIndex - 1;
  // while (openIndex >= 0 && packages[openIndex] !== '(') {
  //     openIndex--;
  // }

  // // Extraer contenido, invertirlo y reemplazar
  // const content = packages.substring(openIndex + 1, closeIndex);
  // const reversed = content.split('').reverse().join('');
  // const result = packages.substring(0, openIndex) + reversed + packages.substring(closeIndex + 1);

  // // Llamada recursiva
  // return fixPackages(result);
}

// fixPackages('a(cb)de')
fixPackages("a(bc(def)g)h");
// fixPackages('abc(def(gh)i)jk')
// fixPackages('a(b(c))e')
