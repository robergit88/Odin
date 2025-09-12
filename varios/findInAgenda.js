// la información de la agenda está mezclada y malformateada.
// Las líneas contienen un número de teléfono mágico, el nombre de un niño y su dirección,
// pero todo está rodeado de caracteres extraños.

// Santa necesita tu ayuda para encontrar información específica de la agenda.
// Escribe una función que, dado el contenido de la agenda y un número de teléfono, devuelva el nombre del niño y su dirección.

// Ten en cuenta que en la agenda:

// Los números de teléfono están formateados como +X-YYY-YYY-YYY
// (donde X es uno o dos dígitos, e Y es un dígito).
// El nombre de cada niño está siempre entre < y >
// La idea es que escribas una función que, pasándole el teléfono completo o una parte,
// devuelva el nombre y dirección del niño.
// Si no encuentra nada o hay más de un resultado, debes devolver null.

/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
 Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

function findInAgenda(agenda, phone) {
  let users = mapearAgenda(agenda);

  console.log(users);
  // return null;
}

function mapearAgenda(agenda) {
  let resto = agenda.split("\n");

  let usuarios = [];
  resto.forEach((element) => {
    element.trim();
    let telefono = extraerTelefono(element);
    let nombre = extraerNombre(element);
    let direccion = extraerDireccion(element);

    let persona = {};
    persona.telefono = telefono;
    persona.nombre = nombre;
    persona.direccion = direccion;
    usuarios.push(persona);
  });

  return usuarios;
}

function extraerTelefono(datos) {
  let inicio = datos.indexOf("+");
  let fin = datos.indexOf(" ");
  return datos.slice(inicio, fin);
}

function extraerNombre(datos) {
  let inicio = datos.indexOf("<");
  let fin = datos.indexOf(">");
  return datos.slice(inicio + 1, fin);
}

function extraerDireccion(datos) {
  let inicio = datos.match(/[a-zA-Z]/).index;

  let temp = datos.slice(inicio);

  let fin = temp.match(/[+,<]/).index;

  let dir = temp.slice(0, fin - 1);
  return dir;
}

findInAgenda(agenda, "34-600-123-456");
// { name: "Juan Perez", address: "Calle Gran Via 12" }

// findInAgenda(agenda, '600-987')
// // { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

// findInAgenda(agenda, '111')
// // null
// // Explicación: No hay resultados

// findInAgenda(agenda, '1')
// // null
// // Explicación: Demasiados resultados
