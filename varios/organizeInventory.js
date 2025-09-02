// Recibirás un array de objetos, donde cada objeto representa un juguete y tiene las propiedades:
// name:     el nombre del juguete (string).
// quantity: la cantidad disponible de ese juguete (entero).
// category: la categoría a la que pertenece el juguete (string).

// devolver un objeto que organice los juguetes de la siguiente manera:
// Las claves del objeto serán las categorías de juguetes.
// Los valores serán objetos que tienen como claves los nombres de los juguetes y 
// como valores las cantidades totales de cada juguete en esa categoría.
// Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
// Si el array está vacío, la función debe devolver un objeto vacío {}.

const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }]

const inventory2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
]

function organizeInventory(inventory) {

    // CASO BORDE: Array vacío  
    if (inventory.length === 0)
        return {};

    // PASO 1: Identificar las categorías únicas
    let category = new Set();
    inventory.forEach(item => {
        category.add(item.category);
    });

    // PASO 2: Crear el objeto principal vacío
    let toys = {};

    // PASO 3: Crear cada categoría como objeto vacío
    category.forEach(cat => {
        // Cada categoría empieza vacía
        toys[cat] = {};
    });

    // PASO 4: Llenar cada categoría con sus productos
    inventory.forEach(item => {
        let cat = item.category;
        let productName = item.name;
        let quantity = item.quantity;

        // ¿Ya existe este producto en esta categoría?
        if (toys[cat][productName]) {
            // SÍ existe → sumamos más cantidad
            toys[cat][productName] = toys[cat][productName] + quantity;
        } else {
            // NO existe → creamos el producto con su cantidad
            toys[cat][productName] = quantity;
        }
    }
    );
    console.log(toys);

    // return toys;

    // for (let cat of category) {
    //     toys[cat] = {};

    //     for (let item of inventory) {
    //         // if (item.category === cat) {
    //         //     toys[cat][item.name] = toys[cat][item.name] ? toys[cat][item.name] + item.quantity : item.quantity;

    //         // }

    //         // VERSIÓN 1: Paso a paso con if/else
    //         if (item.category === cat) {
    //             // Si ya existe el item en esta categoría, sumamos la cantidad
    //             toys[cat][item.name] = toys[cat][item.name] + item.quantity;
    //         } else {
    //             // Si no existe, lo inicializamos con la cantidad actual
    //             toys[cat][item.name] = item.quantity;
    //         }

    //     }
    // }

};


// organizeInventory([]); // {}
organizeInventory(inventory)
// organizeInventory(inventory2)