// // debes devolver una lista con los aux disponibles después de emparejar las botas
const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 42 },
    { type: 'R', size: 38 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
]
// [38, 42]

// const shoes = [
//     { type: 'I', size: 38 },
//     { type: 'R', size: 38 },
//     { type: 'I', size: 38 },
//     { type: 'I', size: 38 },
//     { type: 'R', size: 38 }
// ]
// // [38, 38]

// function organizeShoes(shoes) {

//     let aux = []

//     for (let i = 0; i < shoes.length; i++) {

//         let caja = {};        

//         caja.size = shoes[i].size;        
//         caja.type = shoes[i].type;
//         caja.completo = false;

//         let item = aux.findIndex(item => item.size == shoes[i].size && item.completo == false)

//         if (item >= 0) {

//             aux[item].type = aux[item].type + shoes[i].type;

//             if (aux[item].type == "IR" || "RI") {

//                 aux[item].completo = true;
//             }
//             else {
//                 // se añade la caja de zapatos al array
//                 aux.push(caja)
//             }

//         }
//         else {
//             // se añade la caja de zapatos al array
//             aux.push(caja)
//         }

//     }

//     let pares = aux.filter(a => a.completo == true).map(a => a.size);

//     console.log(pares);
// }


function organizeShoes(shoes) {
    // shoes.sort((a, b) => a.size - b.size);
    // let aux = [];
    // let i = 0;
    // while (i < shoes.length) {
    //     if (i < shoes.length - 1 && shoes[i].size === shoes[i + 1].size && shoes[i].type !== shoes[i + 1].type) {
    //         aux.push(shoes[i].size);
    //         i += 2; // saltar el siguiente porque ya está emparejado
    //     } else {
    //         i++;
    //     }

    // }
    // console.log(aux);

    // let aux = [];
    // let sizes = {}; // objeto para contar tipos por talla

    // for (let shoe of shoes) {
    //     if (!sizes[shoe.size]) {
    //         sizes[shoe.size] = { I: 0, R: 0 };
    //     }
    //     sizes[shoe.size][shoe.type]++;
    // }
    // for (let size in sizes) {
    //     let pairs = Math.min(sizes[size].I, sizes[size].R);
    //     for (let j = 0; j < pairs; j++) {
    //         aux.push(parseInt(size));
    //     }
    // }
    // console.log(aux);

}
organizeShoes(shoes);