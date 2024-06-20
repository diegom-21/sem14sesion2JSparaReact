console.log("-----------------------------------EsModules--------------------------------")
// ES Modules permiten exportar e importar código de otros archivos JavaScript.

function saludar() {
    console.log("¡Hola!");
}

// Exporta una función 
module.exports = saludar;

// Importar una función
const saludar = require('./esModules.js');
