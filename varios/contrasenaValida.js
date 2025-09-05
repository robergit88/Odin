// Primero ejecuta en terminal: npm install prompt-sync
const prompt = require('prompt-sync')();

function contrasenaValida(valor) {
    if (valor === '2Fj(jjbFsuj' || valor === 'eoZiugBf&g9') {
        console.log("✅ Contraseña válida.");
        return true;
    } else {
        console.log("❌ Contraseña inválida.");
        return false;
    }
}

// Pedir contraseña
const contrasena = prompt('Ingrese su contraseña: ');
contrasenaValida(contrasena);
