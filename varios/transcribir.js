// escribe tu función acá
function transcribir(texto) {
  console.log(`Antes: ${texto}`);
  const transcripciones = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };
  let resultado = "";
  // resultado = texto.split('').map(base => transcripciones[base] || base).join('');
  for (let i = 0; i < texto.length; i++) {
    const base = texto[i];
    switch (base) {
      case "G":
        resultado += "C";
        break;
      case "C":
        resultado += "G";
        break;
      case "T":
        resultado += "A";
        break;
      case "A":
        resultado += "U";
        break;
      default:
        resultado += base;
    }
  }
  return resultado;
}

// código de prueba
// console.log("ACGT") // "UGCA"
// console.log(transcribir("ACGT")) // "UGCA"
// console.log("ACGTGGTCTTAA");
console.log("Después: ", transcribir("ACGTGGTCTTAA"));
