console.log("-----------------------------------ParameterDefaults--------------------------------")
// Parameter Defaults permiten establecer valores por defecto para los parámetros de una función.

function saludar(nombre = "Invitado") {
    return `Hola, ${nombre}`;
}

console.log(saludar("Juan")); // Hola, Juan
console.log(saludar()); // Hola, Invitado
