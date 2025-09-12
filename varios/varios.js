const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
 Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

let resto = agenda.split("\n");
console.log(resto);

resto.forEach((element) => {
  element.trim();
  let telefono = extraerTelefono(element);
  let direccion = extraerDireccion(element);
  let nombre = extraerNombre(element);
});
