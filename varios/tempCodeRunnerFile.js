function caja(peso, cajasUsadas = []) {
  // Caso base: peso es 0, ya encontramos la combinación
  if (peso === 0) {
    return cajasUsadas;
  }

  // Caso base: peso negativo, no hay solución
  if (peso < 0) {
    return null;
  }

  // Probar cada caja disponible
  for (let i = cajaArray.length - 1; i >= 0; i--) {
    const cajaActual = cajaArray[i];

    // Solo si la caja cabe en el peso restante
    if (cajaActual <= peso) {
      const resultado = caja(peso - cajaActual, [...cajasUsadas, cajaActual]);

      // Si encontramos una solución, la devolvemos
      if (resultado !== null) {
        return resultado;
      }
    }
  }
  // No se encontró solución
  return null;
}