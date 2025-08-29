function contarRango(inicio, fin) {
    if (typeof inicio !== 'number' || typeof fin !== 'number') {
        throw new Error('Ambos argumentos deben ser números.');
    }
    if (inicio > fin) {
        throw new Error('El valor de inicio debe ser menor o igual al valor de fin.');
    }
    const resultado = [];
    for (let i = inicio; i <= fin; i++) {
        resultado.push(i);
    }
    return resultado.length - 2;
}

console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0