function fixPackages(texto) {
    console.log(texto);

    return texto.replace(/\(([^)]+)\)/g, (match, contenido) => {
        // Revertir el contenido que está entre paréntesis
        return contenido.split('').reverse().join('');
    });
}


// console.log(fixPackages('a(cb)de'));
console.log(fixPackages('a(bc(def)g)h'));
// fixPackages('abc(def(gh)i)jk')
// fixPackages('a(b(c))e')