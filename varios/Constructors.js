// Cuando necesitas duplicar un tipo específico de objeto, como nuestro jugador o los elementos del inventario,
// una mejor manera de crearlos es usar un constructor de objetos, 
// que es simplemente una función normal cuyo nombre, 
// por convención, se inicia en mayúscula:

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
//   this.sayName = function() {
//     console.log(this.name)
//   };
// }

// // y puedes usarlo llamando a la función con la palabra clave new.
// const player1 = new Player('steve', 'X');
// const player2 = new Player('Jenny', 'O');
// player1.sayName(); 
// player2.sayName();

function Book(title,author, pages) {
  this.title=title
  this.author = author;
  this.pages = pages;
  this.info = function() {
    // console.log(this.title)
    // console.log(this.author)
    // console.log(this.pages)
    // return this.title + ";" + this.author + ";" + this.pages
    // return [ this.title,
    //          this.author,
    //          this.pages]

        return { titulo: this.title,
                 autor: this.author,
                 paginas: this.pages }
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R, Tolkien", 890)
// theHobbit.info()
// console.log(theHobbit.info())
// console.log(Object.getPrototypeOf(theHobbit))
// const [titulo,autor,paginas] = theHobbit.info()
// console.log(titulo,autor,paginas)
const pedo = theHobbit.info()
console.log(pedo)