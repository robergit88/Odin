// let text = "This (is) W3School";
// // let pattern = /[A-Z]/g; //buscar letras del alfabeto en IMPRENTA

// let text = "Hellooo World! Hello W3Schools!";
// let pattern = /lo*/g;

// let text = "Is this (all) there is?";
// let pattern = /is/g;

// let text = "This is W3School";
// let pattern = / is /g;
// // let pattern = /[^W]/g;

// let text = "That's hot!";
// let pattern = /h.t/g; //[ 'hat', 'hot' ]

// let text = "This (is) W3School";
// let pattern = /(.)/g;

let text = "HELLO, LOOK AT YOU";
let pattern = /\bLO/;

let result = text.match(pattern);
console.log(result)