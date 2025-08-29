// Clase Persona
function Person(name) {
    this.name = name;
}

// Al prototipo Persona se añade método saludar
Person.prototype.sayName = function() {
    console.log(`Hola, soy ${this.name}`)
};

// Clase Jugador
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

// Al prototipo Jugador se añade método informar marcador
Player.prototype.getMarker = function() {
  console.log(`My marker is '${this.marker}'`)
};

const type = Object.getPrototypeOf(Player.prototype)
console.log(`Player.prototype: ${type}`)

// Ahora hacemos que Player herede de Persona
Object.setPrototypeOf(Player.prototype, Person.prototype);

const type2 = Object.getPrototypeOf(Player.prototype); // returns Person.prototype
console.log(`Player.prototype: ${type2}`)

const player1 = new Player('steve', 'X');
const player2 = new Player('Robert', 'O');

player1.sayName();
player2.sayName();

player1.getMarker(); // My marker is 'X'
player2.getMarker(); // My marker is 'O'