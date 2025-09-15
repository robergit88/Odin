// Reto #15:  Dibujando tablas
//
// Para mejorar la presentación, quiere crear una función drawTable
// que reciba un array de objetos y lo convierta en una tabla de texto.

// La tabla dibujada debe representar los datos del objeto de la siguiente manera:

// Tiene una cabecera con el nombre de la columna.
// El nombre de la columna pone la primera letra en mayúscula.
// Cada fila debe contener los valores de los objetos en el orden correspondiente.
// Cada valor debe estar alineado a la izquierda.
// Los campos dejan siempre un espacio a la izquierda.
// Los campos dejan a la derecha el espacio necesario para alinear la caja.

function drawTable(data) {
  const uline = "+---------";
  const vline = "|";
  let line = uline.repeat(data.length - 1).concat("+");

  let props = Object.getOwnPropertyNames(data[0]);
  let cols = props.map(capitalizar);
  console.log(line);
  imprimir(cols);
  console.log(line);

  let valores = [];

  data.forEach((element) => {
    valores.push(Object.values(element));
  });

  valores.forEach((element) => {
    imprimir(element);
  });
  console.log(line);
}

function imprimir(col) {
  const uline = "+---------";
  const vline = "|";
  let line = uline.repeat(col.length).concat("+");

  let name = "";

  for (const element of col) {
    name =
      name +
      vline +
      " " +
      element +
      " ".repeat(uline.length - 2 - element.length);
  }

  let long = name.length;

  name = name + " ".repeat(line.length - long - 1) + vline;

  console.log(name);
}

function capitalizar(col) {
  let first = col[0];
  let resto = col.substring(1);
  let name = first.toUpperCase() + resto;
  return name;
}

// drawTable([
//     { name: 'Alice', city: 'London' },
//     { name: 'Bob', city: 'Paris' },
//     { name: 'Charlie', city: 'New York' }
// ])

drawTable([
  { gift: "Doll", quantity: 10 },
  { gift: "Book", quantity: 5 },
  { gift: "Music CD", quantity: 1 },
]);
